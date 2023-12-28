"use client"
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import img1 from '../../../assets/img/icon/testimonial-quotation.png';
import img2 from '../../../assets/img/common/testimonial-img.png';


import img3 from "../../../assets/img/icon/testimonial-quotation.png";
import img4 from "../../../assets/img/common/testimonial-img.png";
import img5 from "../../../assets/img/icon/testimonial-quotation.png";
import img6 from "../../../assets/img/common/testimonial-img.png";
const Owl_Carosual = () => {
    const options = {
        loop: true,
        items: 1,
        margin: 10,
        nav: true,
      };
    
    
    return (
        <div>
           {/* <!-- testimonial area --> */}
    {/* <section id="testimonial-area" className="slider-slide-btn">
        <div className="container">
            <div className="row text-center">
                <div className="col-lg-8 offset-lg-2">
                <OwlCarousel
            className="owl-theme"
            loop
            items={1} // Set the number of items to display
            margin={10}
            nav
        >                        
        <div className="testimonial-card">
                            <div className="testimonial-icon">
                                <ul>
                                    <li><img src={img1} alt="icon"/></li>
                                </ul>
                            </div>
                            <div className="testimonial-text">
                                <p>I appreciate your amazing services and professional staff for all your hard work and
                                    creative thinking. There are many variations of passages of rem Ipsum available, but
                                    the majority have alteration in some form.</p>
                                <div className="testimonial-img">
                                    <img src={img2} alt="img"/>
                                </div>
                            </div>
                            <div className="author-info">
                                <h3>Martha Martin</h3>
                                <p>Entrepreneur</p>
                            </div>
                        </div>
                        <div className="testimonial-card">
                            <div className="testimonial-icon">
                                <ul>
                                    <li><img src={img3} alt="icon"/></li>
                                </ul>
                            </div>
                            <div className="testimonial-text">
                                <p>I appreciate your amazing services and professional staff for all your hard work and
                                    creative thinking. There are many variations of passages of rem Ipsum available, but
                                    the majority have alteration in some form.</p>
                                <div className="testimonial-img">
                                    <img src={img4} alt="img"/>
                                </div>
                            </div>
                            <div className="author-info">
                                <h3>Martha Martin</h3>
                                <p>Entrepreneur</p>
                            </div>
                        </div>
                        <div className="testimonial-card">
                            <div className="testimonial-icon">
                                <ul>
                                    <li><img src={img5} alt="icon"/></li>
                                </ul>
                            </div>
                            <div className="testimonial-text">
                                <p>I appreciate your amazing services and professional staff for all your hard work and
                                    creative thinking. There are many variations of passages of rem Ipsum available, but
                                    the majority have alteration in some form.</p>
                                <div className="testimonial-img">
                                    <img src={img6} alt="img"/>
                                </div>
                            </div>
                            <div className="author-info">
                                <h3>Martha Martin</h3>
                                <p>Entrepreneur</p>
                            </div>
                        </div>

                    </OwlCarousel >
                </div>
            </div>
        </div>
    </section>   */}
 

 
    <div>
      <section id="testimonial-area" className="slider-slide-btn">
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-8 offset-lg-2">
              <OwlCarousel className="owl-theme" {...options}>
                {/* Your carousel items go here */}
                <div className="testimonial-card">
                  <div className="testimonial-icon">
                    <ul>
                      <li>
                        <img src={img1} alt="icon" />
                      </li>
                    </ul>
                  </div>
                  <div className="testimonial-text">
                    <p>
                      I appreciate your amazing services and professional staff for all your hard work and creative
                      thinking. There are many variations of passages of rem Ipsum available, but the majority have
                      alteration in some form.
                    </p>
                    <div className="testimonial-img">
                      <img src={img2} alt="img" />
                    </div>
                  </div>
                  <div className="author-info">
                    <h3>Martha Martin</h3>
                    <p>Entrepreneur</p>
                  </div>
                </div>
                <div className="testimonial-card">
                            <div className="testimonial-icon">
                                <ul>
                                    <li><img src={img3} alt="icon"/></li>
                                </ul>
                            </div>
                            <div className="testimonial-text">
                                <p>I appreciate your amazing services and professional staff for all your hard work and
                                    creative thinking. There are many variations of passages of rem Ipsum available, but
                                    the majority have alteration in some form.</p>
                                <div className="testimonial-img">
                                    <img src={img4} alt="img"/>
                                </div>
                            </div>
                            <div className="author-info">
                                <h3>Martha Martin</h3>
                                <p>Entrepreneur</p>
                            </div>
                        </div>
                        <div className="testimonial-card">
                            <div className="testimonial-icon">
                                <ul>
                                    <li><img src={img5} alt="icon"/></li>
                                </ul>
                            </div>
                            <div className="testimonial-text">
                                <p>I appreciate your amazing services and professional staff for all your hard work and
                                    creative thinking. There are many variations of passages of rem Ipsum available, but
                                    the majority have alteration in some form.</p>
                                <div className="testimonial-img">
                                    <img src={img6} alt="img"/>
                                </div>
                            </div>
                            <div className="author-info">
                                <h3>Martha Martin</h3>
                                <p>Entrepreneur</p>
                            </div>
                        </div>
                {/* Additional carousel items */}
              </OwlCarousel>
            </div>
          </div>
        </div>
      </section>
    </div>
 



        </div>
    );
};

export default Owl_Carosual;