import img1 from "../../assets/img/common/quate.png";
import img2 from "../../assets/img/common/test-3.png";
const Testimonial = () => {
    return (
        <div>
                <section id="testimolial-area" className="section-padding">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="testimonial-content-wrapper">
                        <div className="testimonial-text-wrapper">
                            <h4>Testimonials</h4>
                            <h2>We prioritize our service and solution to our valuable clients</h2>
                            <p>Our warehousing services are known nationwide to be one of the most reliable, safe and
                                affordable, because we take pride in delivering the best of warehousing services, at the
                                most reasonable prices.
                            </p>
                            <div className="testimonial-bottom">
                                <div className="testimonial-btn">
                                    <a className="btn theme-btn" href="#!">View All Feedback</a>
                                </div>
                                <div className="testimonial-ratings">
                                    <div className="ratings">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                    <p>4.9 out of 1,470 rating</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5 offset-lg-1">
                    <div className="testimonial_three_boxed">
                        <img src={img1} alt="icon" className="test_quate_area"/>
                        <img src={img2} alt="img"/>
                        <p>Commodo aliqua minim id do aute aliquip ex aliquip aliqua nostrud ipsum. Esse et conseq
                            dolor
                            anim esse dolore. Voluptate consectetur consectetur veniam ad aliqua.</p>
                        <div className="test_three_bottom">
                            <div className="test_three_bottom_left">
                                <h3>Selina Madis</h3>
                                <h6>Operation Officer</h6>
                            </div>
                            <div className="test_three_bottom_right">
                                <div className="test_three_icon">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                                <h6>Great delivery</h6>
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

export default Testimonial;