"use client"
import Home from "./herotop";
import PrivilegeServices from "./privilage";
import DentalInfoSectionpage from "./Dentalinfosection";
import ExpertiseSection from "./expertisesection";
import Footernew from "./footernew";
import { useState } from "react";

import AppointmentPage from "./appointmentpage";
import AppointmentModal from "./appointmentpage";


export default function App() {
   const [isModalOpen, setIsModalOpen] = useState(false); // Default to true so it shows on load
  return ( <div>
           <Home/>
        <AppointmentModal  open={isModalOpen} 
        onClose={() => setIsModalOpen(true)}/>
            <ExpertiseSection/>
           
           <DentalInfoSectionpage/>
           <PrivilegeServices/>

      
        
           <Footernew/>
        </div>
  );
}
