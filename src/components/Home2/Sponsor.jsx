import img1 from '../../assets/img/partner/partner-1.png';
import img2 from '../../assets/img/partner/partner-2.png';
import img3 from '../../assets/img/partner/partner-3.png';
import img4 from '../../assets/img/partner/partner-4.png';
import img5 from '../../assets/img/partner/partner-5.png';
import img6 from '../../assets/img/partner/partner-6.png';




"use client"
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
const Sponsor = () => {
    const options = {
        loop: true,
        items: 5,
        nav: true,
      };
    return (
        <div>
             <section id="partner-area" className="section-padding">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                <OwlCarousel className="owl-theme" {...options}>
                       <div className="partner-logo">
                            <a href="#!"><img src={img1} alt="img"/></a>
                        </div>
                        <div className="partner-logo">
                            <a href="#!"><img src={img2} alt="img"/></a>
                        </div>
                        <div className="partner-logo">
                            <a href="#!"><img src={img3} alt="img"/></a>
                        </div>
                        <div className="partner-logo">
                            <a href="#!"><img src={img4} alt="img"/></a>
                        </div>
                        <div className="partner-logo">
                            <a href="#!"><img src={img5} alt="img"/></a>
                        </div>
                        <div className="partner-logo">
                            <a href="#!"><img src={img6} alt="img"/></a>
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

export default Sponsor;