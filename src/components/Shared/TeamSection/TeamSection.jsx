import img1 from '../../../assets/img/team/team-1.png';
import icon1 from  "../../../assets/img/icon/share-icon.png" ;
import img2 from "../../../assets/img/team/team-2.png";
import icon2 from "../../../assets/img/icon/share-icon.png" ;
import img3 from "../../../assets/img/team/team-3.png";
import icon3 from "../../../assets/img/icon/share-icon.png";
import img4 from "../../../assets/img/team/team-4.png";
import icon4 from "../../../assets/img/icon/share-icon.png"
const TeamSection = () => {
    return (
        <div>
            <section id="our-team-area" className="section-padding-bottom">
        <div className="container">
            <div className="row text-center">
                <div className="col-lg-6 offset-lg-3">
                    <div className="section-heading">
                        <h4>Conference speakers</h4>
                        <h2>Speakers and organizers</h2>
                    </div>
                </div>
            </div>
            <div className="team-area-wrapper">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                        <div className="team-card">
                            <div className="team-img">
                                <a href="team-details.html"><img src={img1} alt="img"/></a>
                            </div>
                            <div className="team-info">
                                <h3><a href="team-details.html">Selina valencia</a></h3>
                                <p>CEO & Organizer</p>
                            </div>
                            <div className="social-icon-area">

                                <ul className="visible-icon">
                                    <li>
                                        <a href="#!"><img src={icon1} alt="icon"/></a>
                                    </li>
                                </ul>
                                <ul className="invisible-icon">
                                    <li>
                                        <a href="#!"><i className="fab fa-facebook"></i></a>
                                    </li>
                                    <li>
                                        <a href="#!"><i className="fab fa-twitter-square"></i></a>
                                    </li>
                                    <li>
                                        <a href="#!"><i className="fab fa-instagram"></i></a>
                                    </li>
                                    <li>
                                        <a href="#!"><i className="fab fa-linkedin"></i></a>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                        <div className="team-card team-padding-card">
                            <div className="team-img">
                                <a href="team-details.html"><img src={img2} alt="img"/></a>
                            </div>
                            <div className="team-info">
                                <h3><a href="team-details.html">Saladin houti</a></h3>
                                <p>Chief manager</p>
                            </div>
                            <div className="social-icon-area">
                                <ul className="visible-icon">

                                    <li>
                                        <a href="#!"><img src={icon2} alt="icon"/></a>
                                    </li>
                                </ul>
                                <ul className="invisible-icon">
                                    <li>
                                        <a href="#!"><i className="fab fa-facebook"></i></a>
                                    </li>
                                    <li>
                                        <a href="#!"><i className="fab fa-twitter-square"></i></a>
                                    </li>
                                    <li>
                                        <a href="#!"><i className="fab fa-instagram"></i></a>
                                    </li>
                                    <li>
                                        <a href="#!"><i className="fab fa-linkedin"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                        <div className="team-card">
                            <div className="team-img">
                                <a href="team-details.html"><img src={img3} alt="img"/></a>
                            </div>
                            <div className="team-info">
                                <h3><a href="team-details.html">Franc de rogin</a></h3>
                                <p>Brand promotor</p>
                            </div>
                            <div className="social-icon-area">
                                <ul className="visible-icon">
                                    <li>
                                        <a href="#!"><img src={icon3} alt="icon"/></a>
                                    </li>
                                </ul>
                                <ul className="invisible-icon">
                                    <li>
                                        <a href="#!"><i className="fab fa-facebook"></i></a>
                                    </li>
                                    <li>
                                        <a href="#!"><i className="fab fa-twitter-square"></i></a>
                                    </li>
                                    <li>
                                        <a href="#!"><i className="fab fa-instagram"></i></a>
                                    </li>
                                    <li>
                                        <a href="#!"><i className="fab fa-linkedin"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                        <div className="team-card team-padding-card">
                            <div className="team-img">
                                <a href="team-details.html"><img src={img4} alt="img"/></a>
                            </div>
                            <div className="team-info">
                                <h3><a href="team-details.html">Florence ditio</a></h3>
                                <p>Sr. Organizer</p>
                            </div>
                            <div className="social-icon-area">
                                <ul className="visible-icon">
                                    <li>
                                        <a href="#!"><img src={icon4} alt="icon"/></a>
                                    </li>
                                </ul>
                                <ul className="invisible-icon">
                                    <li>
                                        <a href="#!"><i className="fab fa-facebook"></i></a>
                                    </li>
                                    <li>
                                        <a href="#!"><i className="fab fa-twitter-square"></i></a>
                                    </li>
                                    <li>
                                        <a href="#!"><i className="fab fa-instagram"></i></a>
                                    </li>
                                    <li>
                                        <a href="#!"><i className="fab fa-linkedin"></i></a>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
    <div className='row mb-5'>
    <div className="col-lg-12">
                <div className="common-btn">
                    <button className="btn theme-btn">View All</button>
                </div>
            </div>
    </div>
        </div>
    );
};

export default TeamSection;