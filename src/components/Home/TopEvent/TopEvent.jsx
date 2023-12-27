import img1 from "../../../assets/img/icon/top-icon-1.png";
import icon1 from "../../../assets/img/icon/arrow-btn.png";
import img2 from "../../../assets/img/icon/top-icon-2.png";
import icon2 from "../../../assets/img/icon/arrow-btn.png";
import img3 from "../../../assets/img/icon/top-icon-3.png";
import icon3 from "../../../assets/img/icon/arrow-btn.png";
import img4 from "../../../assets/img/icon/top-icon-4.png";
import icon4 from "../../../assets/img/icon/arrow-btn.png";
const TopEvent = () => {
    return (
        <div>
            <section id="top-event-area" className="section-padding">
        <div className="container">
            <div className="row text-center">
                <div className="col-lg-6 offset-lg-3">
                    <div className="section-heading">
                        <h4>Top events</h4>
                        <h2>Why you join us?</h2>
                    </div>
                </div>
            </div>
            <div className="top-event-wrapper">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="top-event-card top-event-one">
                            <div className="top-event-icon">
                                <img src={img1} alt="icon"/>
                            </div>
                            <div className="top-event-text">
                                <h3>Access to events</h3>
                                <p>Labore eu sint reprehenderit amet nostrud velit enim aliquip. Nulla pariatur qui
                                    officia velit ea officia ex aliquip tempor.</p>
                                <div className="arrow-btn">
                                    <a href="event-details.html"><img src={icon1}
                                            alt="icon"/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="top-event-card top-event-two">
                            <div className="top-event-icon">
                                <img src={img2} alt="icon"/>
                            </div>
                            <div className="top-event-text">
                                <h3>Make a difference</h3>
                                <p>Labore eu sint reprehenderit amet nostrud velit enim aliquip. Nulla pariatur qui
                                    officia velit ea officia ex aliquip tempor.</p>
                                <div className="arrow-btn">
                                    <a href="event-details.html"><img src={icon2}
                                            alt="icon"/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="top-event-card top-event-three">
                            <div className="top-event-icon">
                                <img src={img3} alt="icon"/>
                            </div>
                            <div className="top-event-text">
                                <h3>Information exchange</h3>
                                <p>Labore eu sint reprehenderit amet nostrud velit enim aliquip. Nulla pariatur qui
                                    officia velit ea officia ex aliquip tempor.</p>
                                <div className="arrow-btn">
                                    <a href="event-details.html"><img src={icon3}
                                            alt="icon"/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="top-event-card top-event-four">
                            <div className="top-event-icon">
                                <img src={img4} alt="icon"/>
                            </div>
                            <div className="top-event-text">
                                <h3>Skilled speaker</h3>
                                <p>Labore eu sint reprehenderit amet nostrud velit enim aliquip. Nulla pariatur qui
                                    officia velit ea officia ex aliquip tempor.</p>
                                <div className="arrow-btn">
                                    <a href="event-details.html"><img src={icon4}
                                            alt="icon"/></a>
                                </div>
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

export default TopEvent;