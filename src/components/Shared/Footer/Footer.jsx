import '../../../assets/style.css'
import img1 from "../../../assets/img/footer-logo.png";
import img2 from "../../../assets/img/icon/facebook-foot.png";
import img3 from "../../../assets/img/icon/twiter-foot.png";
import img4 from "../../../assets/img/icon/instagram-foot.png";
import img5 from "../../../assets/img/icon/linkedin-foot.png";
import "../../../assets/css/bootstrap.min.css";
import "../../../assets/css/animate.min.css";
import "../../../assets/css/fontawesome.all.min.css"
import "../../../assets/css/owl.carousel.min.css"
import "../../../assets/css/owl.theme.default.min.css"
import "../../../assets/css/magnific-popup.min.css";
import "../../../assets/css/meanmenu.css";
import "../../../assets/css/style.css"
import '../../../assets/css/responsive.css'
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div>
    <footer id="footer-area">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-12 col-sm-12">
                    <div className="footer-about-area">
                        <div className="footer-logo">
                            <img src={img1} alt="logo"/>
                        </div>
                        <p>I appreciate your amazing services and professional staff for all your hard work and creative
                            thinking.</p>
                        <div className="subscribe-area">
                            <h5>Subscribe to our newsletter</h5>
                            <form action="#!">
                                <div className="input-group">
                                    <input type="text" className="form-control bg-white" placeholder="Enter your email"/>
                                    <button className="btn theme-btn btn-subscribe">Subscribe</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-4">
                            <div className="footer-navitem-ara">
                                <h3><span className="section-after">Conference</span></h3>
                                <div className="nav-item-footer">
                                    <ul>
                                        <li><Link to="/About">About us</Link></li>
                                        <li><Link to="/news">Community blog</Link></li>
                                        <li><Link to="/Event">Rewards</Link></li>
                                        <li><Link to="/contact">Work with us</Link></li>
                                        <li><Link to="/Team">Meet the team</Link></li>
                                        <li><Link to="/news">Blog</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4">
                            <div className="footer-navitem-ara">
                                <h3><span className="section-after">Support</span></h3>
                                <div className="nav-item-footer">
                                    <ul>
                                        <li><Link to="/login">Account</Link></li>
                                        <li><Link to="/Faq">Faq</Link></li>
                                        <li><Link to="/services">Legal</Link></li>
                                        <li><Link to="/contact">Contact</Link></li>
                                        <li><Link to="/Event">Affiliate program</Link></li>
                                        <li><a href="#!">Privacy Policy</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4">
                            <div className="footer-navitem-ara">
                                <h3><span className="section-after">Other Servicest</span></h3>
                                <div className="nav-item-footer">
                                    <ul>
                                        <li><Link to="/Event">Community program</Link></li>
                                        <li><Link to="/Event">Investor relations</Link></li>
                                        <li><Link to="/Event">Rewards program</Link></li>
                                        <li><a href="#!">Points</a></li>
                                        <li><Link to="/Team">Partners</Link></li>
                                        <li><Link to="/news_details">List of conference</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-12 col-sm-12">
                    <div className="footer-navitem-ara">
                        <h3><span className="section-after">Need any help?</span></h3>
                        <div className="footer-contact">
                            <div className="footer-contact-item">
                                <p>Call 24/7 for any help</p>
                                <h3><a href="tel:+00-123-456-789">+00 123 456 789</a></h3>
                            </div>
                            <div className="footer-contact-item">
                                <p>Mail to our support team</p>
                                <h3><a href="mailto:support@domain.com">support@domain.com</a></h3>
                            </div>
                            <div className="footer-contact-item">
                                <p>Follow us on</p>
                                <div className="footer-social-icon">
                                    <ul>
                                        <li><a href="#!"><img src={img2} alt="icon"/></a>
                                        </li>
                                        <li><a href="#!"><img src={img3} alt="icon"/></a></li>
                                        <li><a href="#!"><img src={img4} alt="icon"/></a>
                                        </li>
                                        <li><a href="#!"><img src={img5} alt="icon"/></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <div className="copyright-area">
        <div className="container">
            <div className="row">
                <div className="co-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="copyright-left">
                        <p>Copyright © 2023 All Rights Reserved</p>
                    </div>
                </div>
                <div className="co-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="copyright-right">
                        <ul>
                            <li>
                                <a href="privacy-policy.html">Privacy policy</a>
                            </li>
                            <li><a href="#!">|</a></li>
                            <li>
                                <a href="terms-conditions.html">Terms & Conditions</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="go-top">
        <i className="fas fa-chevron-up"></i>
        <i className="fas fa-chevron-up"></i>
    </div>  
        </div>
    );
};

export default Footer;