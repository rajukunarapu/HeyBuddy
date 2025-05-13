import { Link, Stack, Typography } from '@mui/material'
import React from 'react'
import { navigationLInks } from '../utils/NavbarHelper'

const NavBar = () => {
  return (
    <>
        <Stack direction={"row"} alignItems={"center"} justifyContent={'center'} spacing={7} m={2} p={"10px 0px"} sx={{background:'white'}} >
            {
              navigationLInks.map((item)=>(
                <Link underline='none' key={item.id} sx={{ cursor : "pointer" }} >
                  <Stack direction={"column"} spacing={2} justifyContent={"center"} alignItems={"center"} >
                    <img src={item.image} alt={item.name} width={"64px"} height={"64px"} />
                    <Typography variant='subtitle2' color='black' fontWeight={"bold"} >{item.name}</Typography>
                  </Stack>
                </Link>
              ))
                
            }
        </Stack>
    </>
  )
}

export default NavBar
