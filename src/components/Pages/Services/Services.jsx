import Banner from "./Banner";
import Event_agenda from "../../Shared/Services";
import Owl_Carosual from "../../Shared/Owl_Carousal/Owl_Carosual";
import InstaCarousal from "../../Shared/InstaCarousal/InstaCarousal";
import Best_Services from "./Best_Services";
import Sponsor from "../../Shared/Sponsor/Sponsor";
const Services = () => {
    return (
        <div>
     <Banner/>
     <Event_agenda/>
     <Best_Services/>
     <Sponsor/>
     <Owl_Carosual/>
     <InstaCarousal/>
            
            
        </div>
    );
};

export default Services;