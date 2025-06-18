import { Box } from '@mui/material'
import { useEffect, useState } from 'react'
import ArrowButton from './Common/ArrowButton'
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material'
import { LeftArrowButtonSx, RightArrowButtonSx } from '../Styles/ArrowButtonSx'
import SumsangBanner from '../../../assets/images/sumsang_branding_herocoursel.webp'
import SofaBanner from '../../../assets/images/sofas_branding_herocoursel.webp'
import BedBanner from '../../../assets/images/bed_branding_herocoursel.webp'
import AIBanner from '../../../assets/images/Ai_branding_herocoursel.webp'

const HeroCoursel = () => {

  const ArrowButtons = [
    { id : 1, name : "leftArrowButton", sx : LeftArrowButtonSx, icon : <ArrowBackIos/> },
    { id : 2, name : "rightArrowButton", sx : RightArrowButtonSx, icon : <ArrowForwardIos/> }
  ]

  const images = [SumsangBanner, SofaBanner, BedBanner, AIBanner]
  const [index, setIndex] = useState(0)
  const [isSliding, setIsSliding] = useState(false)

  useEffect(()=>{
    const timeInterval = setInterval(()=>{
      setIsSliding(true)
      setTimeout(()=>{
        setIndex((prev)=> (prev + 1) % images.length)
        setIsSliding(false)
      },1000)
    },5000)

    return ()=>clearInterval(timeInterval)
  },[images.length])

  if(index === -1){
    setIndex(3)
  }
  if(index === 4){
    setIndex(0)
  }

  let currentIndex = images[index]
  let nextIndex = images[(index +1) % images.length]

  return (
    <>
        <Box m={2} sx={{ height:'250px', backgroundColor:'white', position:"relative", overflow: "hidden" }}  >

          <Box sx={{
            width: "100%",
            height : "100%",
            position : "absolute",
            top:0,
            let:0,
            animation : isSliding ? "slideLeft 1s forwards" : "none",
            zIndex : 1
          }} > 

            <img src={currentIndex}  loading='lazy' decoding='async' style={{width:'100%', height:'100%',objectFit:'cover'}} />
          </Box>

          {
            isSliding && <Box sx={{
            width: "100%",
            height : "100%",
            position : "absolute",
            top:0,
            let:0,
            animation : "slideRight 1s forwards",
            zIndex : 2
          }} > 

            <img src={nextIndex} loading='lazy' decoding='async' style={{width:'100%', height:'100%',objectFit:'cover'}} />
          </Box>
          }


            {
              ArrowButtons.map((item)=>(
                <ArrowButton key={item.id} onClick={()=>{
                  if(item.name === "leftArrowButton"){
                    setIndex(index-1)
                  }else{
                    setIndex(index+1)
                  }
                }} sx={item.sx} >
                  {item.icon}
                </ArrowButton>
              ))
            }
            
            
        </Box>
    </>
  )
}

export default HeroCoursel;