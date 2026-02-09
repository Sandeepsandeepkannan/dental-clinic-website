import Footer from "../Bottombar";
import HairServicesSection from "./hairservice";
import OurServicesHero from "./ourservice";
import SkinServicesSection from "./skinservice";


export default function Page(){
  return <div>
   <OurServicesHero/>   
   <div className="h-32 ">

   </div>
  <HairServicesSection/>
  
     <SkinServicesSection/>
     <Footer/>
  </div>
}