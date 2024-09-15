import { useState } from 'react'
// import Logging from './component/logging/Logging'
// import CreateAccount from './component/CreateAccount/CreateAccount'
import { Box } from '@mui/material';
import PermitVerificationAndApplication from './component/PermitVerificationAndApplication/PermitVerificationAndApplication'
import NavBar from './component/Navbar/Navbar'
import MainPage from './component/Mainpage/MainPage'
import Footer from './component/Foter/Footer'
import VehicleRegistration from './component/vehicleRegistration/VehicaleRegistarion';

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <VehicleRegistration />
     
  )
}

export default App