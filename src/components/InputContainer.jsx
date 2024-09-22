import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";

function InputContainer({ sites, setSites }) {
  const [value, setValue] = useState("");

  return (
    <div className="inputContainer">
      <TextField
        id="outlined-basic"
        sx={{ backgroundColor: "#36393E", border: "0" }}
        placeholder="Add another site"
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


const handleClick = async (arr, setArr, value, setValue) => {
    if (!isValueOkay(value)) return;
    const valExists = arr.find(a => a[0].toLowerCase() === value.trim().toLowerCase())
    if(!valExists){
        setArr([...arr, [value, false]]);
        setValue(" ")
    }
  };
  
  const isValueOkay = (value) => {
    if(value.trim().split(' ').length > 1) return
    const pattern = /<[^>]+>|[&<>"']/g;
    return value.trim() !== "" && !pattern.test(value);
  };



export default InputContainer;
