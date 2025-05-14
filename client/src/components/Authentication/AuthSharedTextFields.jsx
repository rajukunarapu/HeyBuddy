import React, { useState } from 'react'
import { Button, TextField, InputAdornment, IconButton, Alert } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import useAuthForm from '../../hooks/useAuthForm';


const AuthSharedTextFields = ({mode}) => {

    // visibilty toogle for icon
    const [visibilityToggle, setVisibilityToggle] = useState(false);
    // useAuthForm custom hook for handling form data
    const { formData, handleOnChange, handleOnClick, alertMessage, isAlertShow} = useAuthForm(mode);

  return (
    <>
        <TextField
        autoFocus
        name={"email"}
        value={formData.email}
        onChange={handleOnChange}
        variant="standard"
        label={"Enter Email Address"}
        type={"email"}
        fullWidth
        sx={{
          mb: 3,
          "& .MuiOutlinedInput-root": {
            "& fieldset": { borderColor: "#ccc", borderWidth: "2px" },
            "&:hover fieldset": { borderColor: "  #ff6036" },
            "& .Mui-focused fieldset": { borderColor: "blueviolet" },
            "&:active fieldset": { borderColor: "pink" },
            padding: 1,
            borderRadius: 10,
            width: "100%",
            height: "45px",
          },
        }}
      />

      {
        isAlertShow && !(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) && <Alert severity={alertMessage? "success": "error"} sx={{ width:'100%', borderRadius:10 }} >{alertMessage? alertMessage : "Eroor ocuured"}</Alert>
      }

      <TextField
        name={"password"}
        value={formData.password}
        onChange={handleOnChange}
        variant="standard"
        label={"Enter Password"}
        type={visibilityToggle ? "text" : "password"}
        fullWidth
        sx={{
          mb: 3,
          "& .MuiOutlinedInput-root": {
            "& fieldset": { borderColor: "#ccc", borderWidth: "2px" },
            "&:hover fieldset": { borderColor: "  #ff6036" },
            "& .Mui-focused fieldset": { borderColor: "blueviolet" },
            "&:active fieldset": { borderColor: "pink" },
            padding: 1,
            borderRadius: 10,
            width: "100%",
            height: "45px",
          },
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment>
              <IconButton onClick={() => setVisibilityToggle((prev) => !prev)}>
                {visibilityToggle ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      {
      
        isAlertShow && !(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/.test(formData.password)) && <Alert severity={alertMessage? "success": "error"} sx={{ width:'100%', borderRadius:10 }} >{alertMessage? alertMessage : "Eroor ocuured"}</Alert>
      }

        <Button
            onClick={handleOnClick}
            variant="contained"
            fullWidth
            sx={{
              mt: 2,
              backgroundColor: "#fb641b",
              textTransform: "capitalize",
              fontWeight: "bold",
              height: "45px",
            }}
          >
            Continue
          </Button>

    </>
  )
}

export default AuthSharedTextFields;
