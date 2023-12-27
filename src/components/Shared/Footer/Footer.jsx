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
                                        <li><a href="about.html">About us</a></li>
                                        <li><a href="news.html">Community blog</a></li>
                                        <li><a href="event.html">Rewards</a></li>
                                        <li><a href="contact.html">Work with us</a></li>
                                        <li><a href="team.html">Meet the team</a></li>
                                        <li><a href="news.html">Blog</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4">
                            <div className="footer-navitem-ara">
                                <h3><span className="section-after">Support</span></h3>
                                <div className="nav-item-footer">
                                    <ul>
                                        <li><a href="login.html">Account</a></li>
                                        <li><a href="faq.html">Faq</a></li>
                                        <li><a href="service.html">Legal</a></li>
                                        <li><a href="contact.html">Contact</a></li>
                                        <li><a href="event.html">Affiliate program</a></li>
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
                                        <li><a href="event.html">Community program</a></li>
                                        <li><a href="event.html">Investor relations</a></li>
                                        <li><a href="event.html">Rewards program</a></li>
                                        <li><a href="#!">Points</a></li>
                                        <li><a href="team.html">Partners</a></li>
                                        <li><a href="news-list.html">List of conference</a></li>
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