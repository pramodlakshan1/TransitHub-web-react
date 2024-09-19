import { useState } from 'react'
// import Logging from './component/logging/Logging'
// import CreateAccount from './component/CreateAccount/CreateAccount'
import { Box } from '@mui/material';
import PermitVerificationAndApplication from './component/PermitVerificationAndApplication/PermitVerificationAndApplication'
import NavBar from './component/Navbar/Navbar'
import MainPage from './component/Mainpage/MainPage'
import Footer from './component/Foter/Footer'
import VehicleRegistration from './component/vehicleRegistration/VehicaleRegistarion';
// import MaterialList from './component/materialList/MatirealList';
import MaterialSellPage from './component/materialRegisterforSell/MaterialRegistorForSell';

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <MaterialSellPage />
     
  )
}

export default App