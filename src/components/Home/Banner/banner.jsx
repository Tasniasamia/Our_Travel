import img1 from "../../../assets/img/icon/video-btn.png";
import img2 from "../../../assets/img/banner/banner-img.png"
import img3 from "../../../assets/img/icon/video-btn-2.png";
const Banner = () => {
    return (
        <section id="homepage-banner">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                    <div className="home-banner-text">
                        <h4>Explore . Finance . Solution</h4>
                        <h1>International Business Conference 2023</h1>
                        <div className="home-banner-btn">
                            <a href="#!" className="btn btn_md theme-btn">Book now</a>
                            <div className="video-btn">
                                <a href="https://vimeo.com/45830194" className="vedio_btn popup-vimeo"><img
                                        src={img1} alt="icon"/>See insights</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                    <div className="home-banner-img">
                        <img src={img2} alt="img"/>
                    </div>
                </div>
            </div>
        </div>
    </section>

    );
};

export default Banner;