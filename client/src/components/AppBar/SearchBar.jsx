import React from "react";
import { TextField, InputAdornment } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchBar = () => {
  return (
    <>
      <TextField
        placeholder="Search for products, Brands and More"
        fullWidth
        sx={{
          ml: 5,
           minWidth: "200px",
           width: "50%",
          "& .MuiInputBase-input": {
            height: "40px !important",
            p: 0,
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
          },

          "& .MuiOutlinedInput-root": {
            height: "40px",
            borderRadius: 3,
            fontSize: "17px",
            backgroundColor:
              "light-dark(rgb(232, 240, 254), rgba(70, 90, 126, 0.4))",
            "& fieldset": { border: "none" },
            "&:hover fieldset": { border: "none" },
            "& .Mui-focused fieldset": { border: "none" },
            "&:active fieldset": { border: "none" },
          },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment>
              <Search sx={{ mr: 1 }} />
            </InputAdornment>
          ),
        }}
      />
    </>
  );
};

export default SearchBar;
