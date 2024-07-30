import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import Sidebar from './Components/Sidebar'
import { Container } from '@mui/material'
import { WidthFull } from '@mui/icons-material'

function App() {
  const [count, setCount] = useState(0)

  return (
    // <Box sx={{}}>
    <Container sx={{width:"400vw", margin:"0"}}>

      <Sidebar sx={{ flex: '1' }} />
    </Container>

    // </Box>

  )
}

export default App
