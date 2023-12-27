import img1 from "../../../assets/img/event/event-element-1.png";
import img3 from "../../../assets/img/event/event-quote.png";
import img2 from "../../../assets/img/event/event-organize-img.png"
const Organize = () => {
    return (
        <div>
                {/* <!-- event organize section  --> */}
    <section id="event-organize-section">
        <div className="container">
            <div className="event-organize-wrapper">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="event-organize-left-side-wrapper">
                            <div className="event-element-one">
                                <img src={img1} alt="img"/>
                            </div>

                            <div className="event-organize-text">
                                <div className="event-organize-heading">
                                    <h4>Organize the best event</h4>
                                    <h2>We organize the best seminars and events</h2>
                                </div>
                                <p>Sint pariatur nulla culpa amet mollit tempor sint ea reprehenderit. Et dolor fugiat
                                    Lorem pariatur fugiat proident laboris quis mollit consequat laboris irure
                                    excepteur. Fugiat duis duis mollit incididunt enim irure. Voluptate enim Lorem
                                    adipisicing occaecat laborum. Mollit culpa velit eu sunt proident exercitation.

                                </p>
                                <div className="event-organize-quote-section">
                                    <div className="event-quote-img">
                                        <img src={img3} alt="quotion"/>
                                    </div>
                                    <div className="event-organize-highlight-text">
                                        <h3>Est ut voluptate commodo non labore occaecat exercitationin nostrud. Eu
                                            officia qui velit proident commodo.</h3>
                                    </div>

                                </div>
                                <p>Qui pariatur ullamco dolor sunt dolore consequat veniam pariatur aliquip commodo quis
                                    in cillum proident. Consequat mollit labore aliquip qui dolor commodo est nisi sit
                                    tempor exercitation non do. Duis officia excepteur cillum reprehenderit.</p>
                                <div className="event-organize-btn">
                                    <a href="#!" className="btn btn_md theme-btn">Discover Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="event-organize-right-side-wrapper">
                            <div className="event-organize-img">
                                <img src={img2} alt="img"/>
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

export default Organize;