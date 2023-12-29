import img1 from "../../../assets/img/team/team-details-img.png";
   
const Details = () => {
    const schedule=[
        {
            day:"Monday",
            time:"09:00-17:00"
        },
        {
            day:"Tuesday",
            time:"09:00-17:00"
        },
        {
            day:"Wednesday",
            time:"09:00-17:00"
        },
        {
            day:"Thursday",
            time:"09:00-17:00"
        },
        {
            day:"Friday",
            time:"09:00-17:00"
        },
        {
            day:"Saturday",
            time:"09:00-17:00"
        },
        {
            day:"Sunday",
            time:"Off"
        },
    ]
    return (
        <div>
              {/* <!-- team details area --> */}
    <section id="team-details" className="section-padding">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 offset-lg-3">
                    <div className="section-heading text-center">
                        <h4>Team details</h4>
                        <h2>Our expert member </h2>
                    </div>
                </div>
            </div>
            <div className="team-details-wrapper">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="team-details-img">
                            <img src={img1}alt="img"/>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="team-details-right">
                            <div className="team-details-head">
                                <div className="team-name">
                                    <h3>Santoshi Franklin</h3>
                                    <p>Event organizer</p>
                                </div>
                                <div className="team-contact">
                                    <p>Get in touch:</p>
                                    <div className="shear-icon">
                                        <a href="#!"><i className="fab fa-facebook"></i></a>
                                        <a href="#!"><i className="fab fa-twitter-square"></i></a>
                                        <a href="#!"><i className="fab fa-instagram"></i></a>
                                        <a href="#!"><i className="fab fa-linkedin"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="team-details-text">
                                <p>Amet nisl purus in mollis nunc sed. Dolor sit amet consectetur adipiscing elit
                                    pellentesque. Lorem donec massa sapien faucibus et. Interdum consectetur libero id
                                    faucibus nisl tincidunt eget. Volutpat maecenas volutpat blandit aliquam.
                                    Suspendisse interdum consectetur libero id faucibus. Risus viverra adipiscing at in
                                    tellus integer feugiat mauris ultrices eros. Velit ut tortor pretium viverra
                                    suspendisse potenti. Nisi quis eleifend quam adipiscing vitae proin.</p>
                                <p>Purus viverra accumsan in nisl nisi. Laoreet id donec ultrices tincidunt arcu non
                                    sodales neque. Id leo in vitae turpis. Sed libero enim sed faucibus turpis in eu mi.
                                    Et malesuada fames ac turpis egestas.</p>
                                <p>Purus viverra accumsan in nisl nisi donec ultrices tincidunt arcu non sodales neque.
                                </p>
                                <div className="team-details-btn">
                                    <a href="#!" className="btn theme-btn">Make An Appointment</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <div className="appoinment-achedule-area">
                        <h6 className="Appointment-schedule-head">Appointment schedule</h6>
                        <div className="appoinment-achedule-card-wrapper">
                            {
                                schedule.map((item,index)=>{
                                    return (
                                        <div className="appoinment-achedule-card"key={index}>
                                        <h6>{item.day}</h6>
                                        <p>{item.time}</p>
                                    </div>  
                                    )
                                })
                            }
                            {/* <div className="appoinment-achedule-card">
                                <h6>Monday</h6>
                                <p>09:00-17:00</p>
                            </div>
                            <div className="appoinment-achedule-card">
                                <h6>Tuesday</h6>
                                <p>09:00-17:00</p>
                            </div>
                            <div className="appoinment-achedule-card">
                                <h6>Wednesday</h6>
                                <p>09:00-17:00</p>
                            </div>
                            <div className="appoinment-achedule-card">
                                <h6>Thursday</h6>
                                <p>09:00-17:00</p>
                            </div>
                            <div className="appoinment-achedule-card">
                                <h6>Friday</h6>
                                <p>09:00-17:00</p>
                            </div>
                            <div className="appoinment-achedule-card">
                                <h6>Saturday</h6>
                                <p>09:00-17:00</p>
                            </div>
                            <div className="appoinment-achedule-card">
                                <h6>Sunday</h6>
                                <p>Off</p>
                            </div> */}
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