"use client"
import Home from "./herotop";
import PrivilegeServices from "./privilage";
import DentalInfoSectionpage from "./Dentalinfosection";

import Footernew from "./footernew";
import { useState } from "react";
import AppointmentModal from "./appointmentpage";
import ExpertiseSection from "./expertisesection";


export default function App() {
   const [isModalOpen, setIsModalOpen] = useState(false); // Default to true so it shows on load
  return ( <div>
           <Home/>
          {/* <AppointmentModal  open={isModalOpen} 
          onClose={() => setIsModalOpen(true)}/> */}
          <ExpertiseSection/>
            <DentalInfoSectionpage/>
           <PrivilegeServices/> 
           <Footernew/> 
        </div>
  );
}
