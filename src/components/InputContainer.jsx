import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
import { handleClick} from "../utils/InputContainerUtils";

function InputContainer({ sites, setSites }) {
  const [value, setValue] = useState("");

  return (
    <div className="inputContainer">
      <TextField
        id="outlined-basic"
        sx={{ backgroundColor: "#36393E", border: "0" }}
        placeholder="Add a site..."
        color="ochre"
        variant="outlined"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <IconButton
        aria-label="add"
        onClick={() => handleClick(sites, setSites, value, setValue)}
      >
        <AddIcon color="ochre" fontSize="large" />
      </IconButton>
    </div>
  );
}

export default InputContainer;
