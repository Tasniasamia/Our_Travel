import InstaCarousal from "../Shared/InstaCarousal/InstaCarousal";
import Banner from "./Banner";
import Event_agenda from "../Shared/Services";

const Event = () => {
    return (
        <div>
            <Banner/>
            <Event_agenda/>
            <InstaCarousal/>            
        </div>
    );
};

export default Event;