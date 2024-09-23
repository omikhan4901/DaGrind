import { useEffect, useMemo, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Site from "./components/site";
import InputContainer from "./components/InputContainer";
import "./App.css";
import MySwitch from "./components/mySwitch";

import { handleEnable } from "./utils/AppUtils";

function App() {
  const [sites, setSites] = useState([]);
  const [isDisabled, setIsDisabled] = useState(false);
  useEffect(async () => {
    const enable = await chrome.storage.sync.get(["dagrind_enable"]);
    if (enable.dagrind_enable) {
      setIsDisabled(enable.dagrind_enable);
    } else {
      await chrome.storage.sync.set({ dagrind_enable: false });
      setIsDisabled(false);
    }
    const list = await chrome.storage.sync.get(["dagrind_list"]);
    if (list.dagrind_list && list.dagrind_list.length > 0) {
      setSites(list.dagrind_list);
    } else {
      await chrome.storage.sync.set({ dagrind_list: []});
      setSites([]);
    }
  }, []);

  return (
    <div id="container">
      <ThemeProvider theme={theme}>
        <h1 className="title">DaGrind</h1>
        <span className="enableSpan">(Enable)</span>
          <MySwitch
          disableRipple
          checked={isDisabled}
          onChange={() => handleEnable(isDisabled, setIsDisabled)}
        />
        <div className="siteContainer">
          { sites.length > 0? sites.map((site) => {
            return (
              <Site
                key={site[0]}
                name={site[0]}
                sites={sites}
                isDisabled={!isDisabled}
                isOn = {site[1]}
                setSites={setSites}
              />
            )
          })
          : <span className="enableSpan">Add some sites to get started</span>
        }
        </div>
        <InputContainer sites={sites} setSites={setSites} />
        <span className="enableSpan" style={{marginTop: "16px"}}>Always with domain extensions<br></br>(.com/.org/.io)</span>
      </ThemeProvider>
    </div>
  );
}

const theme = createTheme({
  palette: {
    ochre: {
      main: "#4D5B8D",
      contrastText: "#242105",
    },
  },
});

export default App;
