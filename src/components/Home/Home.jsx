import InstaCarousal from "../Shared/InstaCarousal/InstaCarousal";
import Banner from "./Banner/banner";
import ClockSection from "./ClockSection/ClockSection";
import Event_agenda from "./Event_agenda/Event_agenda";
import Organize from "./Organize/Organize";
import Owl_Carosual from "../Shared/Owl_Carousal/Owl_Carosual";
import Pricing from "./Pricing/Pricing";
import Schedule from "./Schedule/Schedule";
import Sponsor from "./Sponsor/Sponsor";
import TeamSection from "./TeamSection/TeamSection";
import TopEvent from "./TopEvent/TopEvent";

const Home = () => {
    return (
        <div>
            <Banner />
            <Organize/>
            <Event_agenda/>
            <Schedule/>
            <ClockSection/>
            <TeamSection/>
            <Pricing/>
            <TopEvent/>
            <Sponsor/>
            <Owl_Carosual/>
            <InstaCarousal/>
        </div>
    );
};

export default Home;
