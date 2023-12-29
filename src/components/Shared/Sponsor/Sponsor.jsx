import React from 'react';
import img1 from "../../../assets/img/sponsor/sponsor-1.png";
import img2 from "../../../assets/img/sponsor/sponsor-2.png"
import img3 from "../../../assets/img/sponsor/sponsor-3.png"
import img4 from "../../../assets/img/sponsor/sponsor-4.png"
import img5 from "../../../assets/img/sponsor/sponsor-5.png"
import img6 from "../../../assets/img/sponsor/sponsor-6.png"
import img7 from "../../../assets/img/sponsor/sponsor-7.png"
import img8 from "../../../assets/img/sponsor/sponsor-8.png"
import img9 from "../../../assets/img/sponsor/sponsor-9.png"
import img10 from "../../../assets/img/sponsor/sponsor-10.png"

const Sponsor = () => {
    const images=[
        {
            img:img1
        },
        {
            img:img2
        },
        {
            img:img3
        },
        {
            img:img4
        },
        {
            img:img5
        },
        {
            img:img6
        },
        {
            img:img7
        },
        {
            img:img8
        },
        {
            img:img9
        },
        {
            img:img10
        }
    ]
    return (
        <div>
              <section id="sponsor-area">
        <div className="container">
            <div className="row text-center">
                <div className="col-lg-6 offset-lg-3">
                    <div className="section-heading">
                        <h4>Sponsors</h4>
                        <h2>75+ world’s leading companies with us </h2>
                    </div>
                </div>
            </div>
            <div className="sponsor-logo-wrapper">
{
    images.map((item,index)=>{
        return (
            <div className="sponsor-logo"key={index}>
            <a href="#!"><img src={item.img} alt="logo"/></a>
        </div>
        )
    })
}
            
            </div>
        </div>
    </section>
        </div>
    );
};

export default Sponsor;