import WhyChooseUs from "../aboutpage/aboutservices/whychooseus";
import Footer from "../Bottombar";
import Footernew from "../footernew";
import ContactForm from "./contactform";
import ContactPage from "./contactform";
import DentalBooking from "./dentalbook";
import Dentalinabout from "./Location";
import LocationSection from "./Location";


export default function Page(){

    return <div> 
        <DentalBooking/>
        <Dentalinabout/>
      <ContactForm/>
      <Footernew/>
        
        
         
      
    </div>
}