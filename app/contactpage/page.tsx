import Footernew from "../footernew";
import ContactForm from "./contactform";
import DentalBooking from "./dentalbook";
import Dentalinabout from "./Location";

export default function Page() {
  return (
    /* THE FIX: 
       1. pt-[88px] or pt-24: Creates space for the fixed Navbar.
       2. flex flex-col: Ensures a clean vertical stack.
       3. bg-white: Matches your professional palette.
    */
    <div className="flex flex-col min-h-screen bg-white pt-[88px]"> 
      
      {/* Informational & Booking Section */}
      <section className="relative z-10">
        <DentalBooking />
      </section>

      {/* Location & Detailed About Section */}
      <section className="relative z-10">
        <Dentalinabout />
      </section>

      {/* Contact Form Section */}
      <section className="relative z-10">
        <ContactForm />
      </section>

    
      
    </div>
  );
}