import Footer from "../Bottombar";
import Footernew from "../footernew";
import OurServices from "./aboutmetop";
import HairServicesSection from "./hairservice";
import OurServicesHero from "./ourservice";
import SkinServicesSection from "./skinservice";


export default function Page(){
  return <div>
   <OurServicesHero/>   
 
  <HairServicesSection/>
  
     <SkinServicesSection/>
     <OurServices/>
     <Footernew/>
  </div>
}