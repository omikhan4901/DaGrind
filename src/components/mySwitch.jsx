import Switch from '@mui/material/Switch';
import { alpha, styled } from '@mui/material/styles';

const MySwitch = styled(Switch)(({ theme }) => ({
    '& .MuiSwitch-switchBase.Mui-checked': {
      color: "#4D5B8D",
      '&:hover': {
        backgroundColor: alpha("#4D5B8D", theme.palette.action.hoverOpacity),
      },
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
      backgroundColor: "#4D5B8D",
    },
    '& .MuiSwitch-track': {
    backgroundColor: '#E9E9EA',
    }
  }));
  

export default MySwitch;