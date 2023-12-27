import React from 'react';
import img1 from '../../../assets/img/icon/clock-icon.png';
const Schedule = () => {
    const schedules1 = [
        {
            img: img1,
            time: "09:00am - 10:00am",
            work: "Registration",
            description: `Laborum elit reprehenderit ipsum reprehenderit incididunt eu anim veniam deserunt est enim veniam ea enim. Labore cupidatat
    dolore ipsum voluptate. Amet labore velit elit anim duis laboris nulla.Sit sit do fugiat anim ullamco in irure amet dolor ex qui.`
        },
        {
            img: img1,
            time: "11:00am - 12:00pm",
            work: "Introduction",
            description: `Laborum elit reprehenderit ipsum reprehenderit incididunt eu anim veniam deserunt est enim veniam ea enim. Labore cupidatat
    dolore ipsum voluptate. `
        },
        {
            img: img1,
            time: "12:00pm - 1:00pm",
            work: "Break",
            description: `Laborum elit reprehenderit ipsum reprehenderit incididunt eu anim veniam deserunt est enim veniam ea enim. Labore cupidatat
    dolore ipsum voluptate. `
        },
        {
            img: img1,
            time: "02:00pm - 03:00pm",
            work: "Speaker speech",
            description: `Laborum elit reprehenderit ipsum reprehenderit incididunt eu anim veniam deserunt est enim veniam ea enim. Labore cupidatat
    dolore ipsum voluptate. `
        },
        {
            img: img1,
            time: "03:00pm - 03:30pm",
            work: "Tea break",
            description: `Laborum elit reprehenderit ipsum reprehenderit incididunt eu anim veniam deserunt est enim veniam ea enim. Labore cupidatat
    dolore ipsum voluptate. `
        },
        {
            img: img1,
            time: "08:00pm - 10:00pm",
            work: "Final speech",
            description: `Laborum elit reprehenderit ipsum reprehenderit incididunt eu anim veniam deserunt est enim veniam ea enim. Labore cupidatat
    dolore ipsum voluptate. `
        },
    ];
    
    return (
        <section id="event-schedule-area" className="section-padding">
        <div className="container">
            <div className="row text-center">
                <div className="col-lg-6 offset-lg-3">
                    <div className="section-heading">
                        <h4>Schedule of event</h4>
                        <h2>List of planned events they are expected</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-10 offset-lg-1">
                    <div className="event-schedule-wrapper">
                        <div className="d-flex align-items-start">
                            <div className="schedule-list nav flex-column nav-pills" id="v-pills-tab" role="tablist"
                                aria-orientation="vertical">
                                <button className="schedule-link nav-link active" id="v-pills-first-tab"
                                    data-bs-toggle="pill" data-bs-target="#v-pills-first" type="button" role="tab"
                                    aria-controls="v-pills-first" aria-selected="true">Day 01 <br/> <span>Monday, May 08,
                                        2023</span></button>
                                <button className="nav-link schedule-link" id="v-pills-second-tab" data-bs-toggle="pill"
                                    data-bs-target="#v-pills-second" type="button" role="tab"
                                    aria-controls="v-pills-second" aria-selected="false">Day 02 <br/> <span>Tuesday, May
                                        09, 2023</span></button>
                                <button className="nav-link schedule-link" id="v-pills-third-tab" data-bs-toggle="pill"
                                    data-bs-target="#v-pills-third" type="button" role="tab"
                                    aria-controls="v-pills-third" aria-selected="false">Day 03 <br/> <span>Wednesday, May
                                        10, 2023</span></button>
                            </div>
                            <div className="tab-content schedule-content-wrapper" id="v-pills-tabContent">
                                <div className="tab-pane fade show active schedule-text" id="v-pills-first" role="tabpanel"
                                    aria-labelledby="v-pills-first-tab">
                                    <div className="schedule-right-side-wrapper">
                                    
{/* schedule1 */}
{
    schedules1.map((item,index)=>{
        return (
            <div key={index}>
  <div className="schedule-card">
    <div className="row">
     <div className="col-lg-4 col-md-4">
        <div className="schedule-time">
        <div className="schedule-time-img">
            <img src={item.img} alt="icon"/>
        </div>
        <p>{item.time}</p>
        </div>
        </div>
        <div className="col-lg-8 col-md-8">
            <div className="schedule-details">
                    <h6>{item.work}</h6>
                    <p>{item.description}</p>
    </div>
    </div>
    </div>
    </div>
                                     
                </div>
        )
    })
}



                                    </div>
                                </div>
                                <div className="tab-pane fade schedule-content" id="v-pills-second" role="tabpanel"
                                    aria-labelledby="v-pills-second-tab">
                                    <div className="schedule-right-side-wrapper">
                                       {/* schedule1 */}
{
    schedules1.map((item,index)=>{
        return (
            <div key={index}>
  <div className="schedule-card">
    <div className="row">
     <div className="col-lg-4 col-md-4">
        <div className="schedule-time">
        <div className="schedule-time-img">
            <img src={item.img} alt="icon"/>
        </div>
        <p>{item.time}</p>
        </div>
        </div>
        <div className="col-lg-8 col-md-8">
            <div className="schedule-details">
                    <h6>{item.work}</h6>
                    <p>{item.description}</p>
    </div>
    </div>
    </div>
    </div>
                                     
                </div>
        )
    })
}
                                    </div>
                                </div>
                                <div className="tab-pane fade schedule-content" id="v-pills-third" role="tabpanel"
                                    aria-labelledby="v-pills-third-tab">
                                    <div className="schedule-right-side-wrapper">
                                       {/* schedule1 */}
{
    schedules1.map((item,index)=>{
        return (
            <div key={index}>
  <div className="schedule-card">
    <div className="row">
     <div className="col-lg-4 col-md-4">
        <div className="schedule-time">
        <div className="schedule-time-img">
            <img src={item.img} alt="icon"/>
        </div>
        <p>{item.time}</p>
        </div>
        </div>
        <div className="col-lg-8 col-md-8">
            <div className="schedule-details">
                    <h6>{item.work}</h6>
                    <p>{item.description}</p>
    </div>
    </div>
    </div>
    </div>
                                     
                </div>
        )
    })
}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Schedule;