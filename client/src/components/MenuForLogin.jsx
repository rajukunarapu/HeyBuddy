import { Menu } from '@mui/material'
import React from 'react'

const MenuForLogin = ({open, anchorEl, handleMenuClose}) => {
  return (
    <>
        <Menu open={open} anchorEl={anchorEl} onClose={handleMenuClose} >

        </Menu>
    </>
  )
}

export default MenuForLogin
