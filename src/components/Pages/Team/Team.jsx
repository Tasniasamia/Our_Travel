import InstaCarousal from "../../Shared/InstaCarousal/InstaCarousal";
import TeamSection from "../../Shared/TeamSection/TeamSection";
import Banner from "./Banner";

const Team = () => {
    return (
        <div>
            <Banner/>
            <div className="my-5">
            <TeamSection/>
            </div>
            <InstaCarousal/>
        </div>
    );
};

export default Team;