import { Button } from '@mui/material'

const ArrowButton = ({sx, children}) => {
  return (
    <>
        <Button variant='contained' color='white' sx={sx} >
            {children}
        </Button>
    </>
  )
}

export default ArrowButton
