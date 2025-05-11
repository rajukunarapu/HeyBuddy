import React from 'react'
import { Link, Stack, Typography } from '@mui/material'
import SellerBox from '../../assets/SellerBox.svg'

const SellerButton = () => {
  return (
    <>
        <Link underline='none' color='gray' sx={{cursor:'pointer',ml:4}} >
            <Stack direction={'row'} spacing={1} >
                <img src={SellerBox} alt='seller-box' />
                <Typography variant='body1' color='black' >Become a seller</Typography>
            </Stack>
        </Link>
    </>
  )
}

export default SellerButton
