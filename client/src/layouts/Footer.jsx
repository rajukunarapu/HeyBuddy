import React from 'react'
import {Box, Divider, Link, Stack, Typography} from '@mui/material'
import {Facebook, Instagram, Twitter, YouTube} from '@mui/icons-material'
import { AboutLinks, ConsumerPolicyLinks, FlipkartAddress, GroupCompanyLinks, HelpLinks, OfficeRegistrationDetails } from '../utils/FooterHelper'
import BecomeSeller from '../assets/Become-seller-footer.svg'
import Advertise from '../assets/Advertise-footer.svg'
import GiftCards from '../assets/gift-cards-footer.svg'
import HelpCenter from '../assets/help-centre-footer.svg'
import PaymentBanner from "../assets/payment-footer.svg"

const Footer = () => {

    const LinkSections = [
        { id : 1, linkName : AboutLinks, linkSectionName : "ABOUT" },
        { id : 2, linkName : GroupCompanyLinks, linkSectionName : "GROUP COMPANIES" },
        { id : 3, linkName : HelpLinks, linkSectionName : "HELP" },
        { id : 4, linkName : ConsumerPolicyLinks, linkSectionName : "CONSUMER POLICY" },
    ]

    const LinkSection2 = [
        { id: 1, linkName : FlipkartAddress, linkSectionName : "Mail Us:" },
        { id: 2, linkName : OfficeRegistrationDetails, linkSectionName : "Registered Office Address:" }
    ]

    const SocialIcons = [
        { id: 1, icon: <Facebook /> },
        { id: 2, icon: <Twitter /> },
        { id: 3, icon: <YouTube /> },
        { id: 4, icon: <Instagram /> },
    ];

    const FooterLinks = [
        { id : 1, linkName:"Become a seller", logo : BecomeSeller  },
        { id : 2, linkName:"Advertise", logo : Advertise  },
        { id : 3, linkName:"Gift Cards", logo : GiftCards  },
        { id : 4, linkName:"Help Center", logo : HelpCenter  },
    ]

  return (
    <>
        <Box sx={{ backgroundColor:'#1d1e20' }} >
            <Box padding={"40px 60px 0px"} sx={{display:'flex', flexDirection:'row' ,alignItems:"flex-start",mb:4}} > 
            {
                LinkSections.map((item)=>(
                    <Stack key={item.id} direction={'column'} mr={7} alignContent={"center"} id={`${item.linkSectionName}-section`} >
                        <Typography variant='subtitle2' sx={{color:'rgb(135, 135, 135)',mb:2}}>{item.linkSectionName}</Typography>
                            {
                                item.linkName.map((item)=>(
                                    <Link key={item.id} underline='hover' sx={{color:'white',cursor:'pointer',fontSize:'13px',fontWeight:'bold',"&:hover":{color:'red'}}} variant='subtitle2' >{item.name}</Link>
                                ))
                            }
                    </Stack>
                ))
            }

            <Divider  orientation="vertical" flexItem sx={{ backgroundColor:'rgb(135, 135, 135)' }} />

                {
                    LinkSection2.map((item)=>(
                        <Stack key={item.id} direction={'column'} ml={5} alignContent={"center"} id={`${item.linkSectionName}-section`} >
                            <Typography variant='subtitle2' sx={{color:'rgb(135, 135, 135)',mb:2}}>{item.linkSectionName}</Typography>
                                {
                                    item.linkName.map((item)=>(
                                        <Typography key={item.id} variant='subtitle2' color='white' sx={{fontSize:'13px'}} >{item.name}</Typography>
                                    ))
                                }

                                {
                                    item.linkSectionName === "Mail Us:" && 
                                    <>
                                        <Typography variant='subtitle2' sx={{color:'rgb(135, 135, 135)',mb:1,mt:2}}>Social:</Typography>
                                        <Stack direction={"row"} spacing={2} alignItems={"center"} >
                                            {
                                                SocialIcons.map((item)=>(
                                                    <Link key={item.id} underline='none' color='white' sx={{cursor:'pointer'}} >{item.icon}</Link>
                                                ))
                                            }
                                        </Stack>
                                    </>
                                }
                        </Stack>
                    ))
                }
            </Box>

            <Divider orientation="horizontal" variant="fullWidth" sx={{backgroundColor:'rgb(135, 135, 135)'}} />

            <Stack mt={2} direction={'row'} alignItems={"center"} spacing={9.5} p={"25px 100px"} >
                {
                    FooterLinks.map((item)=>(
                        <Link key={item.id} underline='none' sx={{cursor:'pointer'}}>
                            <Stack direction={'row'} alignItems={'center'} spacing={1} >
                                <img src={item.logo} />
                                <Typography variant='subtitle2' color='white' >{item.linkName}</Typography>
                            </Stack>
                        </Link>
                    ))
                }

                <Typography variant='subtitle2' color='white' >&copy; 2007-2025 Flipkart.com</Typography>

                <img src={PaymentBanner} />
                
            </Stack>
        </Box>
        
    </>
  )
}

export default Footer
