"use client"
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import img1 from '../../../assets/img/instagram/instagram-1.png';
import img2 from '../../../assets/img/instagram/instagram-2.png';
import img3 from '../../../assets/img/instagram/instagram-3.png';
import img4 from '../../../assets/img/instagram/instagram-4.png';
import img5 from '../../../assets/img/instagram/instagram-5.png';

const InstaCarousal = () => {
    const options = {
        loop: true,
        items: 5,
        nav: true,
      };
    return (
        <div>
               <section id="instgram-area">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12">
                <OwlCarousel className="owl-theme" {...options}>
                        <div className="instagram-item">
                            <a href="#!">
                                <i className="fab fa-instagram"></i>
                            <img src={img1} alt="img"/>
                            </a>
                        </div>
                        <div className="instagram-item">
                            <a href="#!">
                                <i className="fab fa-instagram"></i>
                                <img src={img2} alt="img"/>
                            </a>
                        </div>
                        <div className="instagram-item">
                            <a href="#!">
                                <i className="fab fa-instagram"></i>
                                <img src={img3} alt="img"/>
                            </a>
                        </div>
                        <div className="instagram-item">
                            <a href="#!">
                                <i className="fab fa-instagram"></i>
                                <img src={img4} alt="img"/>
                            </a>
                        </div>
                        <div className="instagram-item">
                            <a href="#!">
                                <i className="fab fa-instagram"></i>
                                <img src={img5} alt="img"/>
                            </a>
                        </div>
                    </OwlCarousel>
                </div>
            </div>
        </div>
        <h2 className="d-none">heading</h2>
    </section>
        </div>
    );
};

export default InstaCarousal;