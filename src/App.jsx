import { useState } from 'react'
import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import { Navigate, Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    
   <div>
     <Routes>
        {/* Redirecting wildcard routes to /main */}
        <Route path="*" element={<Navigate to="/main" />} />
        {/* Main page route */}
        <Route path="/main" element={<MainPage />} />
        <Route path="/permit" element={<PermitVerificationAndApplication />} />{/* routes for the permit verification page */}
        <Route path="/registration" element={<VehicleRegistration />} />
        <Route path="/beaseller" element={<MaterialSellPage />} />{/* routes for the permit verification page */}
        <Route path="/findsupplier" element={<PermitVerificationAndApplication />} />{/* routes for the permit verification page */}


      </Routes>
   </div>
     
  )
}

export default App