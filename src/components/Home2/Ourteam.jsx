import React from 'react';
import img1 from "../../assets/img/team/team-one.png";
import img2 from "../../assets/img/icon/team-2-shear.png";
import img3 from "../../assets/img/team/team-two.png";
import img4 from "../../assets/img/icon/team-2-shear.png";
import img5 from "../../assets/img/team/team-three.png" ;
import img6 from "../../assets/img/icon/team-2-shear.png";
import img7 from "../../assets/img/team/team-four.png";
import img8 from "../../assets/img/icon/team-2-shear.png"
const Ourteam = () => {
    const teamList=[
        {
            img:img1,
            name:"Selina valencia",
            profession:"CEO & Founder",
            img2:img2,
            facebook:"www.facebook.com",
            instagram:"www.instagram.com",
            twiter:"www.twiter.com",
            linkedin:"www.linkedin.com"

        },
        {
            img:img3,
            name:"Saladin houti",
            profession:"Chief manager",
            img2:img4,
            facebook:"www.facebook.com",
            instagram:"www.instagram.com",
            twiter:"www.twiter.com",
            linkedin:"www.linkedin.com"
        },
        {
            img:img5,
            name:"Franc de rogin",
            profession:"Brand promotor",
            img2:img6,
            facebook:"www.facebook.com",
            instagram:"www.instagram.com",
            twiter:"www.twiter.com",
            linkedin:"www.linkedin.com"
        },
        {
            img:img7,
            name:"Florence ditio",
            profession:"Sr. Organizer",
            img2:img8,
            facebook:"www.facebook.com",
            instagram:"www.instagram.com",
            twiter:"www.twiter.com",
            linkedin:"www.linkedin.com"
        },

    ]
    return (
        <div>
            <section id="team-area-two">
        <div className="container">
            <div className="team-area-wrapper">
                <div className="team-top-area">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="team-head">
                                <h4>Meet our team</h4>
                                <h2>Meet the organizer team members</h2>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="team-para">
                                <p>Cupidatat sunt excepteur ipsum non. Ex consectetur amet eu commodo incididunt elit
                                    incididunt aliqua aliqua irure elit minim voluptate. Sit est nisi labore eiusmod et
                                    ad.
                                    Anim quis anim adipisicing quis cillum id ullamco officia do culpa voluptate
                                    exercitation nisi.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">

{
    teamList.map((item,index)=>{
        return (
            <div className="col-lg-3 col-md-6 col-sm-6 col-12"key={index}>
            <div className="team-card-two">
                <div className="team-img">
                    <a href="team-details.html"><img src={item.img} alt="img"/></a>
                </div>
                <div className="team-info-two">
                    <h3><a href="team-details.html">{item.name}</a></h3>
                    <p>{item.profession}</p>
                </div>
                <div className="team-two-social-icon-area">
                    <ul className="team-two-visible-icon">

                        <li>
                            <a href="#!"><img src={item.img2} alt="icon"/></a>
                        </li>

                    </ul>
                    <ul className="team-two-invisible-icon">
                        <li>
                            <a href="#!"><i className="fab fa-facebook"></i></a>
                        </li>
                        <li>
                            <a href="#!"><i className="fab fa-twitter-square"></i></a>
                        </li>
                        <li>
                            <a href="#!"><i className="fab fa-instagram"></i></a>
                        </li>
                        <li>
                            <a href="#!"><i className="fab fa-linkedin"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        )
    })
}


                  
                </div>
            </div>
        </div>
    </section>
        </div>
    );
};

export default Ourteam;