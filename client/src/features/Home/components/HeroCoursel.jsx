import { Box } from '@mui/material'
import React from 'react'
import ArrowButton from './Common/ArrowButton'
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material'
import { LeftArrowButtonSx, RightArrowButtonSx } from '../Styles/ArrowButtonSx'
import SumsangBanner from '../../../assets/images/sumsang_branding_herocoursel.webp'
import SofaBanner from '../../../assets/images/sofas-branding-herocousel.webp'
import BedBanner from '../../../assets/images/bed_branding_herocoursel.webp'
import AIBanner from '../../../assets/images/Ai_branding_herocoursel.webp'

const HeroCoursel = () => {

  const ArrowButtons = [
    { id : 1, name : "leftArrowButton", sx : LeftArrowButtonSx, icon : <ArrowBackIos/> },
    { id : 2, name : "rightArrowButton", sx : RightArrowButtonSx, icon : <ArrowForwardIos/> }
  ]

  return (
    <>
        <Box m={2} sx={{ height:'250px', backgroundColor:'white', position:"relative" }}  >

            <img src={SumsangBanner} width={"100%"} height={"90%"} />

            {
              ArrowButtons.map((item)=>(
                <ArrowButton key={item.id} sx={item.sx} >
                  {item.icon}
                </ArrowButton>
              ))
            }
            
            
        </Box>
    </>
  )
}

export default HeroCoursel;