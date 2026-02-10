import Home from "./herotop";
import PrivilegeServices from "./privilage";
import DentalInfoSectionpage from "./Dentalinfosection";
import Footer from "./Bottombar";
import ExpertiseSection from "./expertisesection";
import Footernew from "./footernew";
export default function App() {
  return ( <div>
           <Home/>
            <ExpertiseSection/>
           
           <DentalInfoSectionpage/>
           <PrivilegeServices/>
           <Footernew/>
        </div>
  );
}
