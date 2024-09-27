import { useEffect, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Site from "./components/site";
import InputContainer from "./components/InputContainer";
import "./App.css";
import MySwitch from "./components/mySwitch";
import banner from './assets/Banner.gif'


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
    console.log(list.dagrind_list.length)
    if (list.dagrind_list && list.dagrind_list.length > 0) {
      setSites(list.dagrind_list);
    } else {
      const arr = [
        ["Facebook", false],
        ["X(Twitter)", false],
        ["Instagram", false],
        ["Reddit", false],
      ];
      await chrome.storage.sync.set({ dagrind_list: arr });
      setSites(arr);
    }
  }, []);

  return (
    <div id="container">
      <ThemeProvider theme={theme}>
        <img className="banner" src={banner} alt="Loading banner... " />
        <span className="enableSpan">(Enable)</span>
        <MySwitch
          disableRipple
          checked={isDisabled}
          onChange={() => handleEnable(isDisabled, setIsDisabled)}
        />
        <div className="siteContainer">
          {sites.map((site) => {
            return (
              <Site
                key={site[0]}
                name={site[0]}
                sites={sites}
                isDisabled={!isDisabled}
                isOn = {site[1]}
                setSites={setSites}
              />
            );
          })}
        </div>
        <InputContainer sites={sites} setSites={setSites} />
      </ThemeProvider>
    </div>
  );
}

const handleEnable = async (isDisabled, setIsDisabled) => {
  await chrome.storage.sync.set({ dagrind_enable: !isDisabled }).then(() => {
    console.log("Set to: " + !isDisabled);
    setIsDisabled(!isDisabled);
  });
};
const theme = createTheme({
  palette: {
    ochre: {
      main: "#4D5B8D",
      contrastText: "#242105",
    },
  },
});

export default App;
