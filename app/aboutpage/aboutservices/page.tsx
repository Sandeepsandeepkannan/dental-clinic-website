"use client";       
export const dynamic = "force-dynamic";
 
import Dentalinabout from "./mission";
import WhyChooseUs from "./whychooseus";
import Footernew from "@/app/footernew";
import AboutSection from "./aboutus";
import MeetDoctors from "./meetdoctor";

export default function Page(){
  return <div>
      <WhyChooseUs/>
      <MeetDoctors/>
     
   <Dentalinabout/>
    <AboutSection/>
  <Footernew/>
      
     
      
  </div>
}