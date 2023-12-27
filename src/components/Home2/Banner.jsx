import img2 from "../../assets/img/banner/home-two-img.png";
import img3 from "../../assets/img/icon/video-btn-2.png";
import img1 from "../../assets/img/banner/avater.png"
const Banner = () => {
    return (
        <div>
              <section id="home-two-banner">
        <div className="container">
            <div className="home-two-banner-text-area">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="banner-text">
                            <h1>The best <span>amazing</span> event
                                happening in your city</h1>
                            <div className="event-member">
                                <div className="member-img">
                                    <img src={img1} alt="img"/>
                                </div>
                                <a href="#!">Join Event</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 text-end">
                        <div className="banner-clock-area">
                            <div className="round-clock">
                                <h2 id="day">123</h2>
                                <p>day</p>
                            </div>
                            <div className="round-clock">
                                <h2 id="hrs">OO</h2>
                                <p>Hours</p>
                            </div>
                            <div className="round-clock">
                                <h2 id="min">OO</h2>
                                <p>Minutes</p>
                            </div>
                            <div className="round-clock">
                                <h2 id="sec">OO</h2>
                                <p>Seconds</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="home-two-video-area">
                            <div className="home-two-banner-img">
                                <img src={img2} alt="img"/>
                            </div>
                            <div className="video-btn-two">
                                <a href="https://vimeo.com/45830194" className="popup-vimeo"><img
                                        src={img3} alt="icon"/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </div>
    );
};

export default Banner;