import img1 from "../../assets/img/icon/event-date.png";
import img2 from "../../assets/img/icon/event-location.png";
import img3 from "../../assets/img/event/information-right.png"
const Event_info = () => {
    const events = [
        {
            img: img1,
            title: "Event date",
            description: "Dolore aute voluptate laboris sint reprehenderit duis labore exercitation cepteur amet liqua velit exercitation et cupidatat elit."
        },
        {
            img: img2,
            title: "Event venue",
            description: "Nostrud fugiat minim voluptate ullamco. Consectetur liqua velit exercitation et cupidatat elit quis cillum veniam sit ommodo."
        }
    ];
    
    return (
        <div>
           <section id="evet-information-area" className="section-padding">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="event-infrmation-details">
                        <div className="event-information-top-text">
                            <h4>Why join events</h4>
                            <h2>You should join the event</h2>
                            <p>Cupidatat sunt excepteur ipsum non. Ex consectetur amet eu commodo incididunt elit
                                incididunt
                                aliqua aliqua irure elit minim voluptate. Sit est nisi labore eiusmod et ad. Anim quis
                                anim
                                adipisicing quis cillum id ullamco officia do culpa voluptate exercitation nisi. Sit
                                laborum
                                quis veniam nulla dolore consequat ea cupidatat cupidatat sunt exercitation.</p>
                        </div>
                        <div className="event-information-middle">

                            {
                                events.map((item,index)=>{
                                    return (
                                        <div className="event-information-box"key={index}>
                                        <div className="event-date-img">
                                            <img src={item.img} alt="icon"/>
                                        </div>
                                        <div className="event-information-text">
                                            <h3>{item.title}</h3>
                                            <p>{item.description} <a
                                                    href="event-details.html">Learn
                                                    more...</a></p>
                                        </div>
        
        
                                    </div>
                                    )
                                })
                            }
                           
                        </div>
                        <div className="event-information-btn">
                            <a className="btn theme-btn" href="#!">Buy Ticket Now</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="event-infrmation-img">
                        <img src={img3} alt="img"/>
                    </div>
                </div>
            </div>
        </div>
    </section>  
        </div>
    );
};

export default Event_info;