import React from 'react';
import img1 from "../../../assets/img/event/aganda-1.png";
import img2 from '../../../assets/img/event/aganda-2.png';
import img3 from '../../../assets/img/event/aganda-3.png';
const Event_agenda = () => {
 
        const events = [
            {
                img: img1,
                event: "Business conference",
                description: "Anim exercitation qui velit esse amet ex exercitation ullamco fugiat culpa ea duis\n" +
                    "Est velit sint veniam culpa"
            },
            {
                img: img2,
                event: "Skill development",
                description: "Anim exercitation qui velit esse amet ex exercitation ullamco fugiat culpa ea duis\n" +
                    "Est velit sint veniam culpa"
            },
            {
                img: img3,
                event: "Finance consultancy",
                description: "Anim exercitation qui velit esse amet ex exercitation ullamco fugiat culpa ea duis\n" +
                    "Est velit sint veniam culpa"
            }
        ];
        
  
    return (
        <section id="event-agenda">
        <div className="container">
            <div className="row text-center">
                <div className="col-lg-6 offset-lg-3">
                    <div className="section-heading">
                        <h4>Event agenda</h4>
                        <h2>Improve your skill with workshops</h2>
                    </div>
                </div>
            </div>
            <div className="event-agenda-wrapper">
                <div className="row">

                    {
                        events.map((item,index)=>{
                            return (
                                <div className="col-lg-4 col-md-6 col-sm-12 col-12" key={index}>
                        <div className="event-agenda-card">
                            <div className="event-agenda-img">
                                <a href="event-details.html"><img src={item.img} alt="img"/></a>
                            </div>
                            <div className="event-agenda-text">
                                <h3><a href="event-details.html">{item.event}</a></h3>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    </div>
                    
                            )
                        })
                    }
                    {/* <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="event-agenda-card">
                            <div className="event-agenda-img">
                                <a href="event-details.html"><img src="assets/img/event/aganda-1.png" alt="img"/></a>
                            </div>
                            <div className="event-agenda-text">
                                <h3><a href="event-details.html">Business conference</a></h3>
                                <p>Anim exercitation qui velit esse amet ex exercitation ullamco fugiat culpa ea duis
                                    anim. Est velit sint veniam culpa .</p>
                            </div>
                        </div>
                    </div>
                   */}
                </div>
            </div>
        </div>
    </section>
    );
};

export default Event_agenda;