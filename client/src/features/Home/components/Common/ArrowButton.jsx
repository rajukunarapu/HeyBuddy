import { Button } from '@mui/material'

const ArrowButton = ({sx, children,onClick}) => {
  return (
    <>
        <Button variant='contained' color='white' sx={sx} onClick={onClick} >
            {children}
        </Button>
    </>
  )
}

export default ArrowButton
