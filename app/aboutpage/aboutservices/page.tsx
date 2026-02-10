import Footer from "@/app/Bottombar";
import OurServices from "../../servicepage/aboutmetop";
import Dentalinabout from "./mission";

import DentalInfoSectionpage from "@/app/Dentalinfosection";
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