import img1 from '../../assets/img/event/event-big-img.png';
import img2 from "../../assets/img/event/event-gallery-1.png";
import img3 from "../../assets/img/event/event-gallery-2.png";
import img4 from "../../assets/img/icon/event-details-quote.png"
const Details = () => {
    return (
        <div>
              {/* <!-- event details area --> */}
    <section id="event-details" className="section-padding">
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    <div className="event-details-wrapper">
                        <div className="event-details-img">
                            <img src={img1} alt="img"/>
                        </div>
                        <h2>Proident nulla officia occaecat veniam laboris in ut</h2>
                        <p className="paragraph-padding">Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci phaedrum.
                            There are many variations
                            of passages of Lorem Ipsum available but the majority aliquip enim eiusmod. There are many
                            variations of passages of frog available but the.</p>
                        <p className="paragraph-padding">Irure sunt ex ea mollit ullamco excepteur ut sint cillum tempor.
                            Exercitation non Lorem eu
                            eiusmod sunt in exercitation. Quis tempor proident quis proident. Sint ea dolore labore
                            eiusmod nisi excepteur irure. Voluptate sint sint qui et laborum. Consequat aliquip
                            voluptate esse voluptate aliqua elit fugiat mollit. Ea eu non deserunt laboris irure labore
                            enim qui et ad. Excepteur quis labore Lorem sit elit in eiusmod et aute dolor.</p>

                        <div className="event-details-gallery">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="event-gallery-img">
                                        <img src={img2} alt="img"/>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="event-gallery-img">
                                        <img src={img3} alt="img"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p>Aliqua pariatur nisi sit dolore do quis quis ipsum incididunt. Cillum incididunt sunt minim
                            ipsum reprehenderit. Eu consequat magna deserunt duis. Sint dolor anim id ut ex amet sunt
                            pariatur.</p>
                        <div className="event-single-card">
                            <p>Sunt incididunt eiusmod occaecat proident. Laboris ipsum cillum
                                labore magna eiusmod fugiat elit aliquip consectetur proident velit
                                nulla adipisicing.</p>
                            <h5>Sandra Zyphar</h5>
                            <p className="event-para">Managing Director</p>
                            <div className="event-details-quote-img">
                                <img src={img4} alt="icon"/>
                            </div>
                        </div>
                        <p>
                            Labore quis sunt veniam dolor eiusmod culpa occaecat cupidatat in mollit est. Fugiat eu
                            veniam consequat et fugiat. Aute nostrud non occaecat dolore mollit enim deserunt duis culpa
                            commodo laboris fugiat. Anim sint sint eiusmod adipisicing ex irure minim. Magna est non
                            Lorem ad consequat et qui incididunt enim.
                        </p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="event-details-right">
                        <div className="event-details-sidebar">
                            <h3><span className="section-after">Event details</span></h3>
                            <h6>Date</h6>
                            <p>26 March 2023</p>
                            <h6>Event title</h6>
                            <p>Children education</p>
                            <h6>Duration</h6>
                            <p>2 days</p>
                            <h6>Time</h6>
                            <p>10:00 am to 6:00 pm</p>
                            <h6>Location</h6>
                            <p>New York, USA.</p>
                            <h6>Website</h6>
                            <p>www.chamberoil.com</p>
                            <div className="event-details-social-icon">
                                <a href="#!"><i className="fab fa-facebook"></i></a>
                                <a href="#!"><i className="fab fa-twitter-square"></i></a>
                                <a href="#!"><i className="fab fa-instagram"></i></a>
                                <a href="#!"><i className="fab fa-linkedin"></i></a>
                            </div>
                        </div>
                        <div className="event-query">
                            <h3>Contact us for any query</h3>
                            <h3 className="pt-3">Call us:</h3>
                            <h2>+00 568 975 38</h2>
                            <div className="query-btn">
                                <a className="btn theme-btn" href="#!">Get A Quote</a>
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

export default Details;