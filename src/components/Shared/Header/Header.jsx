import './Header.css';
import '../../../assets/style.css'
import img1 from "../../../assets/img/navbar-logo.png";
import img2 from "../../../assets/img/navbar-logo.png";
import img3 from "../../../assets/img/icon/navbar-search.png";
import img4 from "../../../assets/img/icon/menubar.png";
import img5 from "../../../assets/img/icon/navbar-search.png"
import "../../../assets/css/bootstrap.min.css";
import "../../../assets/css/animate.min.css";
import "../../../assets/css/fontawesome.all.min.css"
import "../../../assets/css/owl.carousel.min.css"
import "../../../assets/css/owl.theme.default.min.css"
import "../../../assets/css/magnific-popup.min.css";
import "../../../assets/css/meanmenu.css";
import "../../../assets/css/style.css"
import '../../../assets/css/responsive.css'
import logo from "../../../assets/img/footer-logo.png";
import icon1 from "../../../assets/img/icon/facebook-foot.png";
import icon2 from "../../../assets/img/icon/twiter-foot.png"
import icon3 from "../../../assets/img/icon/instagram-foot.png"
import icon4 from "../../../assets/img/icon/linkedin-foot.png";
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div>
              <header className="main-header-arae">
        <div className="navbar-area">
            <div className="main-responsive-nav">
                <div className="container">
                    <div className="main-responsive-menu">
                        <div className="logo">
                            <a href="index.html">
                                <img src={img1} alt="logo"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main-navbar">
                <div className="container">
                    <nav className="navbar navbar-expand-md navbar-light">
                        <a className="navbar-brand" href="index.html">
                            <img src={img2} alt="logo"/>
                        </a>
                        <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                            <ul className="navbar-nav">
                                <li className="nav-item d-flex">
                                    {/* <a href="#" className="nav-link active"> */}
                                    <Link to="/" className="nav-link active">Home <i className="fas fa-angle-down"></i></Link>
                                       
                                    {/* </a> */}
                                    <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <Link to="/" className="nav-link">Home</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/Home2"className="nav-link active">Home 2</Link>
                                            {/* <a href="index-2.html" className="nav-link active">Home 2</a> */}
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link to="/About" className="nav-link">
                                        About
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/Event" className="nav-link">
                                        Events
                                        <i className="fas fa-angle-down"></i>
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <Link to="/Event" className="nav-link">Events</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/Event_details" className="nav-link">Events Details</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        Portfolio
                                        <i className="fas fa-angle-down"></i>
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <Link to="/portfolio" className="nav-link">Portfolio</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/portfolio2" className="nav-link">Portfolio v2</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/portfolio_details" className="nav-link">Portfolio-details</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        Pages
                                        <i className="fas fa-angle-down"></i>
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <Link to="/gallery" className="nav-link">Gallery</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/Services" className="nav-link">Service</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/services_details" className="nav-link">Service details</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/Team" className="nav-link">Team</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/team_details" className="nav-link">Team details</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/Faq" className="nav-link">Faq</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/login" className="nav-link">Login & Registration</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/error" className="nav-link">Error</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        News
                                        <i className="fas fa-angle-down"></i>
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <Link to="/news" className="nav-link">News</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/news_list" className="nav-link">News list</Link>
                                        </li>
                                        <li className="nav-item">
                                            <a href="news-details.html" className="nav-link">News details</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a href="contact.html" className="nav-link">Contact</a>
                                </li>
                            </ul>
                            <div className="others-options d-flex align-items-center">
                                <div className="option-item">
                                    <a href="#" className="search-box">
                                        <img src={img3} alt="icon"/></a>
                                </div>
                                <div className="option-item">
                                    <a href="#!" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
                                    aria-controls="offcanvasRight"><img src={img4} alt="icon"/></a>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            <div className="others-option-for-responsive">
                <div className="container">
                    <div className="dot-menu">
                        <div className="others-options d-flex align-items-center">
                            <div className="option-item">
                                <a href="#" className="search-box"><img src={img5} alt="icon"/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    {/* <!-- Offcanvas Sidebar Area --> */}
     <div className="offcanvas offcanvas-end offcanvas_custom" tabindex="-1" id="offcanvasRight">
        <div className="offcanvas-header">
            <img src={logo} alt="img"/>
            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
            <div className="offcanvas_right_wrapper">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut tur
                    incidunt ut labore et</p>
                <h4>Contact Us</h4>
                <div className="top_bar_left_item">
                    <div className="top_Bar_left_icon">
                        <i className="fas fa-envelope"></i>
                    </div>
                    <div className="top_Bar_left_text">
                        <h5><a href="mailto:donation@domain.com">donation@domain.com</a></h5>
                        <h6>Get free estimate</h6>
                    </div>
                </div>
                <div className="top_bar_left_item">
                    <div className="top_Bar_left_icon">
                        <i className="fas fa-phone"></i>
                    </div>
                    <div className="top_Bar_left_text">
                        <h5><a href="tel:+011-234-567-89">+011 234 567 89</a></h5>
                        <h6>Sat to Fri: 8:00am to 10pm</h6>
                    </div>
                </div>
                <div className="top_bar_left_item">
                    <div className="top_Bar_left_icon">
                        <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <div className="top_Bar_left_text">
                        <h5>32, New street road, New castle.</h5>
                        <h6>Get direction</h6>
                    </div>
                </div>
                <div className="offcanvas_follow_area">
                    <h5>Follow Us</h5>
                    <ul>
                        <li><a href="#!"><img src={icon1} alt="icon"/></a></li>
                        <li><a href="#!"><img src={icon2} alt="icon"/></a></li>
                        <li><a href="#!"><img src={icon3} alt="icon"/></a></li>
                        <li><a href="#!"><img src={icon4} alt="icon"/></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>


    {/* <!-- search --> */}
    <div className="search-overlay">
        <div className="d-table">
            <div className="d-table-cell">
                <div className="search-overlay-layer"></div>
                <div className="search-overlay-layer"></div>
                <div className="search-overlay-layer"></div>
                <div className="search-overlay-close">
                    <span className="search-overlay-close-line"></span>
                    <span className="search-overlay-close-line"></span>
                </div>
                <div className="search-overlay-form">
                    <form>
                        <input type="text" className="input-search" placeholder="Search here..."/>
                        <button type="button"><i className="fas fa-search"></i></button>
                    </form>
                </div>
            </div>
        </div>
    </div>

        </div>
    );
};

export default Header;