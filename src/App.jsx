import { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Site from "./components/site";
import InputContainer from "./components/InputContainer";
import "./App.css";
import MySwitch from "./components/mySwitch";

function App() {
  const [sites, setSites] = useState([
    ["Facebook", false],
    ["X(Twitter)", false],
    ["Reddit", false],
    ["Youtube", false],
  ]);
  const [isDisabled, setIsDisabled] = useState(false)

  return (
    <div id="container">
      <ThemeProvider theme={theme}>
        <h1 className="title">DaGrind</h1>
        <MySwitch
          disableRipple
          checked={isDisabled}
          onChange={() => setIsDisabled(!isDisabled)}
        />
        <div className="siteContainer">
          {sites.map((site) => {
            return <Site key={site[0]} name={site[0]} sites={sites} isDisabled={!isDisabled} setSites={setSites}   />;
          })}
        </div>
        <InputContainer sites={sites} setSites={setSites} />
        <button onClick={handleCC}>Click me!</button>
      </ThemeProvider>
    </div>
  );
}

const handleCC = () => { 
  chrome.storage.sync.get(["dagrind_list"]).then((result) => {
    console.log(result.dagrind_list);
  });
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
