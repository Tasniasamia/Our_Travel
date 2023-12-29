import call from "../../assets/img/icon/contact-call.png";
import email from "../../assets/img/icon/contact-email.png";
import location from "../../assets/img/icon/contact-location.png";
const Content = () => {
    return (
        <div>
            
    {/* <!-- Contact us section  --> */}
    <section id="contact-page" className="section-padding">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-heading text-center">
                        <h4> Contact us </h4>
                        <h2>Get in touch</h2>
                    </div>
                </div>
            </div>
            {/* <!-- contact top  --> */}
            <div className="contact-top">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="contact-card-wraper">
                            <div className="contact-img">
                                <a href="#!"><img src={call} alt="icon"/></a>
                            </div>
                            <h3>Contact number</h3>
                            <p><a href="tel:+01-123-456-789">+01 123 456 789</a></p>
                            <p> <a href="tel:+01-123-456-789">+02 345 678 901</a></p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="contact-card-wraper">
                            <div className="contact-img">
                                <a href="#!"><img src={email} alt="icon"/></a>
                            </div>
                            <h3>Send us mail</h3>
                            <p><a href="mailto:support@domain.com">support@domain.com</a></p>
                            <p><a href="mailto:support@domain.com">contact@domain.com</a></p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="contact-card-wraper">
                            <div className="contact-img">
                                <a href="#!"><img src={location} alt="icon"/></a>
                            </div>
                            <h3>Our location</h3>
                            <p>4517 Washington Ave. Manchester, Kentucky 39495, USA.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contact-details-wraper">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="our-map">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.6962663570607!2d89.56355961427838!3d22.813715829827952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff901efac79b59%3A0x5be01a1bc0dc7eba!2sAnd+IT!5e0!3m2!1sen!2sbd!4v1557901943656!5m2!1sen!2sbd"></iframe>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="contact-info-wraper">
                            <h3>Don’t Hesitate To Contact Us For Any Query!</h3>
                            <p>Aliqua pariatur nisi sit dolore do quis quis ipsum incididunt.</p>

                            <div className="contact-input-area">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                        <form action="#!">
                                            <div className="contact-input">
                                                <div className="contact-area">
                                                    <label className="form-label">Full
                                                        name</label>
                                                    <input type="text" className="form-control"
                                                        id="exampleFormControlInput3" placeholder="Full name"/>
                                                </div>
                                                <div className="contact-area">
                                                    <label  className="form-label">Phone
                                                        number</label>
                                                    <input type="text" className="form-control"
                                                        id="exampleFormControlInput4" placeholder="Phone number"/>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                        <form action="#!">
                                            <div className="contact-input">
                                                <div className="contact-area">
                                                    <label 
                                                        className="form-label">Email</label>
                                                    <input type="email" className="form-control"
                                                        id="exampleFormControlInput5" placeholder="Enter Email"/>
                                                </div>
                                                <div className="contact-area">
                                                    <label 
                                                        className="form-label">Subject</label>
                                                    <select className="form-select form-control"
                                                        aria-label="Default select example">
                                                        <option selected>Choose subject</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="contact-message">
                                        <label  className="form-label">Your message</label>
                                        <textarea className="form-control" name="x" id="5" rows="5"
                                            placeholder="write a message here ..."></textarea>

                                    </div>
                                    <div className="contact-btn">
                                        <button className="btn theme-btn">Send Message</button>
                                    </div>
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

export default Content;