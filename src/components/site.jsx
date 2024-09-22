import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import MySwitch from "./mySwitch";

function Site({ name, sites, setSites, isDisabled }) {
  const [checked, setChecked] = useState(false);

  return (
    <div className="site">
      <span className="siteTitle">{name}</span>
      <div>
        <MySwitch
          disableRipple
          checked={checked}
          disabled={isDisabled}
          onChange={() => siteChanged(name, sites, checked, setChecked, setSites)}
        />
        <IconButton
          aria-label="delete"
          onClick={() => deleteSite(name, sites, setSites)}
        >
          <RemoveCircleOutlineIcon sx={{ color: "#FF474D" }} fontSize="small" />
        </IconButton>
      </div>
    </div>
  );
}

const siteChanged = (name, arr,  checked, setChecked, setArr)=> {
  const arrIdx = arr.findIndex(e => e[0].toLowerCase() === name.toLowerCase())
  arr[arrIdx] = [arr[arrIdx][0], !checked]
  setArr(arr)
  setChecked(!checked)
}

const deleteSite = (name, arr, setArr) => {
  const newArr = arr.filter((e) => e[0].toLowerCase() !== name.toLowerCase());
  setArr(newArr);
};

export default Site;
