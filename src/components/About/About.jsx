import Counter from "../Home2/Counter";
import Event_info from "../Home2/Event_info";
import Ourteam from "../Home2/Ourteam";
import Photo_Gallery from "../Home2/Photo_Gallery";
import InstaCarousal from "../Shared/InstaCarousal/InstaCarousal";
import Owl_Carosual from "../Shared/Owl_Carousal/Owl_Carosual";
import About2 from "./About2";
import Banner from "./Banner";
const About = () => {
    return (
        <div>
          <Banner/> 
          <About2/>
          <Counter/>
          <Event_info/>
          <Photo_Gallery/>
          <Ourteam/>
          <Owl_Carosual/>
          <InstaCarousal/>
        </div>
    );
};

export default About;