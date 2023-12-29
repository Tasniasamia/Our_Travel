import InstaCarousal from "../../Shared/InstaCarousal/InstaCarousal";
import Banner from "./Banner";
import Photo_Gallery from "./Gallery_Photo/Gallery_Photo";

const Gallery = () => {
    return (
        <div>
            <Banner/>
            <Photo_Gallery/>
            <InstaCarousal/>
            
        </div>
    );
};

export default Gallery;