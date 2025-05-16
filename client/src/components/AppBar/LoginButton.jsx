import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Typography, Button } from "@mui/material";
import { ExpandMore, ExpandLess, AccountCircle } from "@mui/icons-material";
import MenuForLogin from "../Common/MenuForLogin";

const LoginButton = () => {
  // For hover styling
  const [hover, setHover] = useState(false);
  // For anchorEl
  const [anchorEl, setanchorEl] = useState(null);
  // For open menu
  const open = Boolean(anchorEl);
  //for timeID of setTimeout
  let timeRef = useRef(null);

  //For closing-Menu component
  const handleMenuClose = () => {
    setanchorEl(null);
    setHover(false);
    clearTimeout(timeRef.current);
  };

  const navigate = useNavigate()

  const handleOnClick = ()=>{
    setanchorEl(null);
    navigate('/login')

  }

  //for handleMouseEnter
  const handleMouseEnter = (e) => {
    setHover(true);
    setanchorEl(e.currentTarget);
    clearTimeout(timeRef.current);
  };

  const handleMouseLeave = () => {
    timeRef.current = setTimeout(() => {
      setanchorEl(null);
      setHover(false)
    }, 200);
  };


  return (
    <>
      <Button
        variant="contained"
        startIcon={<AccountCircle />}
        endIcon={hover ? <ExpandLess /> : <ExpandMore />}
        onClick={handleOnClick}
        onMouseEnter={handleMouseEnter}
        // onMouseLeave={handleMouseLeave}
        sx={{
          ml: 4,
          p: 1,
          borderRadius: 2,
          cursor: hover? "pointer" : "pointer",
          boxShadow: "none",
          backgroundColor: hover ? "blue": "white",
          color: hover ? "white": "black",
          textTransform: "capitalize",
        }}
      >
        <Typography variant="body1">Login</Typography>
      </Button>

      <MenuForLogin
        open={open}
        anchorEl={anchorEl}
        handleMenuClose={handleMenuClose}
        handleMouseEnter={() => clearTimeout(timeRef.current)}
        handleMouseLeave={handleMouseLeave}
      />
    </>
  );
};

export default LoginButton;
