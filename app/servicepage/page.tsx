
import Footernew from "../footernew";
import DentalTreatments from "./dentaltreatment";
import HairServicesSection from "./hairservice";
import OurServicesHero from "./ourservice";
import SkinServicesSection from "./skinservice";


export default function Page(){
  return <div>
   <OurServicesHero/>   
   <DentalTreatments/>
 
  <HairServicesSection/>
  
     <Footernew/>
  </div>
}