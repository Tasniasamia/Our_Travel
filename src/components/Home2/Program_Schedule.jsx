import img1 from "../../assets/img/icon/program-clock.png";
import img2 from "../../assets/img/icon/program-location.png";
const Program_Schedule = () => {
    const schedules = [
        {
            text: "Ex adipisicing ut officia irure ea veniam at duis qui fugiat",
            time: "09:00am to 06:00pm",
            location: "Vincent park, NY, USA", // Add a comma here
            description: "Aute consequat culpa dolor sit id. Tempor amet ex dolore laboris do nostrud minim qui adipisicing ut ullamco est incididunt et. Deserunt adipisicing enim aute reprehenderit sit ea dolor cillum."
        },
        {
            text: "Ex adipisicing ut officia irure ea veniam at duis qui fugiat",
            time: "09:00am to 06:00pm",
            location: "Vincent park, NY, USA", // Add a comma here
            description: "Aute consequat culpa dolor sit id. Tempor amet ex dolore laboris do nostrud minim qui adipisicing ut ullamco est incididunt et. Deserunt adipisicing enim aute reprehenderit sit ea dolor cillum."
        },
        {
            text: "Ex adipisicing ut officia irure ea veniam at duis qui fugiat",
            time: "09:00am to 06:00pm",
            location: "Vincent park, NY, USA", // Add a comma here
            description: "Aute consequat culpa dolor sit id. Tempor amet ex dolore laboris do nostrud minim qui adipisicing ut ullamco est incididunt et. Deserunt adipisicing enim aute reprehenderit sit ea dolor cillum."
        },
        {
            text: "Ex adipisicing ut officia irure ea veniam at duis qui fugiat",
            time: "09:00am to 06:00pm",
            location: "Vincent park, NY, USA", // Add a comma here
            description: "Aute consequat culpa dolor sit id. Tempor amet ex dolore laboris do nostrud minim qui adipisicing ut ullamco est incididunt et. Deserunt adipisicing enim aute reprehenderit sit ea dolor cillum."
        },
        {
            text: "Ex adipisicing ut officia irure ea veniam at duis qui fugiat",
            time: "09:00am to 06:00pm",
            location: "Vincent park, NY, USA", // Add a comma here
            description: "Aute consequat culpa dolor sit id. Tempor amet ex dolore laboris do nostrud minim qui adipisicing ut ullamco est incididunt et. Deserunt adipisicing enim aute reprehenderit sit ea dolor cillum."
        }
    ];
    
    return (
        <div>
            <section id="program-schedule" className="section-padding">
        <div className="container">
            <div className="row text-center">
                <div className="col-lg-6 offset-lg-3">
                    <div className="section-heading text-white">
                        <h4>Events schedule 2023</h4>
                        <h2>Program events schedule</h2>
                    </div>
                </div>
            </div>
            <div className="program-schedule-wraper">
                <ul className="nav nav-pills program-pills" id="pills-tab" role="tablist">
                    <li className="nav-item program-item" role="presentation">
                        <button className="nav-link program-link" id="pills-one-tab" data-bs-toggle="pill"
                            data-bs-target="#pills-one" type="button" role="tab" aria-controls="pills-one"
                            aria-selected="true">Day 01 (10 May 2023)</button>
                    </li>
                    <li className="nav-item program-item" role="presentation">
                        <button className="nav-link program-link" id="pills-two-tab" data-bs-toggle="pill"
                            data-bs-target="#pills-two" type="button" role="tab" aria-controls="pills-two"
                            aria-selected="false">Day 02 (11 May 2023)</button>
                    </li>
                    <li className="nav-item program-item" role="presentation">
                        <button className="nav-link program-link active" id="pills-three-tab" data-bs-toggle="pill"
                            data-bs-target="#pills-three" type="button" role="tab" aria-controls="pills-three"
                            aria-selected="false">Day 03 (12 May 2023)</button>
                    </li>
                    <li className="nav-item program-item" role="presentation">
                        <button className="nav-link program-link" id="pills-four-tab" data-bs-toggle="pill"
                            data-bs-target="#pills-four" type="button" role="tab" aria-controls="pills-four"
                            aria-selected="false">Day 04 (13 May 2023)</button>
                    </li>
                    <li className="nav-item  program-item" role="presentation">
                        <button className="nav-link program-link" id="pills-five-tab" data-bs-toggle="pill"
                            data-bs-target="#pills-five" type="button" role="tab" aria-controls="pills-five"
                            aria-selected="false">Day 05 (14 May 2023)</button>
                    </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade" id="pills-one" role="tabpanel" aria-labelledby="pills-one-tab">
                       
                        {schedules.map((item,index)=>{
                            return (
                                <div className="program-schedule-box-wrapper"key={index}>
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <div className="program-box-left">
                                            <div className="row align-items-center">
                                                <div className="col-lg-7">
                                                    <div className="program-schedule-head">
                                                        <h3>{item.text}</h3>
                                                    </div>
                                                </div>
                                                <div className="col-lg-5">
                                                    <div className="proram-schedule-time-area">
                                                        <div className="program-time">
                                                            <div className="program-clock">
                                                                <img src={img1} alt="icon"/>
                                                            </div>
                                                            <p>{item.time}</p>
                                                        </div>
                                                        <div className="program-vanue">
                                                            <div className="program-location">
                                                                <img src={img2} alt="icon"/>
                                                            </div>
                                                            <p>{item.location}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="program-box-right">
                                            <div className="row align-items-center">
                                                <div className="col-lg-7">
                                                    <p>{item.description} </p>
                                                </div>
                                                <div className="col-lg-5">
                                                    <div className="program-btn">
                                                        <a className="btn theme-btn" href="#!">Buy Ticket Now</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            )
                              
                        })}
                    </div>

                    <div className="tab-pane fade" id="pills-two" role="tabpanel" aria-labelledby="pills-two-tab">
                    {schedules.map((item,index)=>{
                            return (
                                <div className="program-schedule-box-wrapper"key={index}>
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <div className="program-box-left">
                                            <div className="row align-items-center">
                                                <div className="col-lg-7">
                                                    <div className="program-schedule-head">
                                                        <h3>{item.text}</h3>
                                                    </div>
                                                </div>
                                                <div className="col-lg-5">
                                                    <div className="proram-schedule-time-area">
                                                        <div className="program-time">
                                                            <div className="program-clock">
                                                                <img src={img1} alt="icon"/>
                                                            </div>
                                                            <p>{item.time}</p>
                                                        </div>
                                                        <div className="program-vanue">
                                                            <div className="program-location">
                                                                <img src={img2} alt="icon"/>
                                                            </div>
                                                            <p>{item.location}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="program-box-right">
                                            <div className="row align-items-center">
                                                <div className="col-lg-7">
                                                    <p>{item.description} </p>
                                                </div>
                                                <div className="col-lg-5">
                                                    <div className="program-btn">
                                                        <a className="btn theme-btn" href="#!">Buy Ticket Now</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            )
                              
                        })}
                    </div>
                    <div className="tab-pane fade  show active" id="pills-three" role="tabpanel"
                        aria-labelledby="pills-three-tab">
                         {schedules.map((item,index)=>{
                            return (
                                <div className="program-schedule-box-wrapper"key={index}>
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <div className="program-box-left">
                                            <div className="row align-items-center">
                                                <div className="col-lg-7">
                                                    <div className="program-schedule-head">
                                                        <h3>{item.text}</h3>
                                                    </div>
                                                </div>
                                                <div className="col-lg-5">
                                                    <div className="proram-schedule-time-area">
                                                        <div className="program-time">
                                                            <div className="program-clock">
                                                                <img src={img1} alt="icon"/>
                                                            </div>
                                                            <p>{item.time}</p>
                                                        </div>
                                                        <div className="program-vanue">
                                                            <div className="program-location">
                                                                <img src={img2} alt="icon"/>
                                                            </div>
                                                            <p>{item.location}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="program-box-right">
                                            <div className="row align-items-center">
                                                <div className="col-lg-7">
                                                    <p>{item.description} </p>
                                                </div>
                                                <div className="col-lg-5">
                                                    <div className="program-btn">
                                                        <a className="btn theme-btn" href="#!">Buy Ticket Now</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            )
                              
                        })}
                    </div>
                    <div className="tab-pane fade" id="pills-four" role="tabpanel" aria-labelledby="pills-four-tab">
                    {schedules.map((item,index)=>{
                            return (
                                <div className="program-schedule-box-wrapper"key={index}>
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <div className="program-box-left">
                                            <div className="row align-items-center">
                                                <div className="col-lg-7">
                                                    <div className="program-schedule-head">
                                                        <h3>{item.text}</h3>
                                                    </div>
                                                </div>
                                                <div className="col-lg-5">
                                                    <div className="proram-schedule-time-area">
                                                        <div className="program-time">
                                                            <div className="program-clock">
                                                                <img src={img1} alt="icon"/>
                                                            </div>
                                                            <p>{item.time}</p>
                                                        </div>
                                                        <div className="program-vanue">
                                                            <div className="program-location">
                                                                <img src={img2} alt="icon"/>
                                                            </div>
                                                            <p>{item.location}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="program-box-right">
                                            <div className="row align-items-center">
                                                <div className="col-lg-7">
                                                    <p>{item.description} </p>
                                                </div>
                                                <div className="col-lg-5">
                                                    <div className="program-btn">
                                                        <a className="btn theme-btn" href="#!">Buy Ticket Now</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            )
                              
                        })}
                    </div>
                    <div className="tab-pane fade" id="pills-five" role="tabpanel" aria-labelledby="pills-five-tab">
                    {schedules.map((item,index)=>{
                            return (
                                <div className="program-schedule-box-wrapper"key={index}>
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <div className="program-box-left">
                                            <div className="row align-items-center">
                                                <div className="col-lg-7">
                                                    <div className="program-schedule-head">
                                                        <h3>{item.text}</h3>
                                                    </div>
                                                </div>
                                                <div className="col-lg-5">
                                                    <div className="proram-schedule-time-area">
                                                        <div className="program-time">
                                                            <div className="program-clock">
                                                                <img src={img1} alt="icon"/>
                                                            </div>
                                                            <p>{item.time}</p>
                                                        </div>
                                                        <div className="program-vanue">
                                                            <div className="program-location">
                                                                <img src={img2} alt="icon"/>
                                                            </div>
                                                            <p>{item.location}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="program-box-right">
                                            <div className="row align-items-center">
                                                <div className="col-lg-7">
                                                    <p>{item.description} </p>
                                                </div>
                                                <div className="col-lg-5">
                                                    <div className="program-btn">
                                                        <a className="btn theme-btn" href="#!">Buy Ticket Now</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            )
                              
                        })}
                    </div>
                </div>
            </div>
        </div>
    </section>  
        </div>
    );
};

export default Program_Schedule;