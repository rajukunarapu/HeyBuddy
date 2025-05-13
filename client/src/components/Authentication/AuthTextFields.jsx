import React, { useState } from 'react'
import { Button, TextField, InputAdornment, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import useAuthForm from "../../hooks/authUse";


const AuthTextFields = () => {

    // visibilty toogle for icon
    const [visibilityToggle, setVisibilityToggle] = useState(false);
    // useAuthForm custom hook for handling form data
    const { formData, handleOnChange, handleOnClick } = useAuthForm();

  return (
    <>
        <TextField
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

export default AuthTextFields
