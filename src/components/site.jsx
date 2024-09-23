import React, { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import MySwitch from "./mySwitch";
import {siteChanged, deleteSite} from "../utils/siteUtils.js"

function Site({ name, sites, setSites, isDisabled, isOn }) {
  const [checked, setChecked] = useState(false);

  useEffect(() => { 
    setChecked(isOn)
  },[])


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

export default Site;
