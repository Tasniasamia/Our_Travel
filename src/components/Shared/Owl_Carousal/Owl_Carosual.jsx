"use client"
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import img1 from '../../../assets/img/icon/testimonial-quotation.png';
import img2 from '../../../assets/img/common/testimonial-img.png';

import img3 from "../../../assets/img/icon/testimonial-quotation.png";
import img4 from "../../../assets/img/common/testimonial-img.png";
import img5 from "../../../assets/img/icon/testimonial-quotation.png";
import img6 from "../../../assets/img/common/testimonial-img.png";
const Owl_Carosual = () => {
    const options = {
        loop: true,
        items: 1,
        margin: 10,
        nav: true,
      };
      const testimonials = [
        {
          img: img1,
          text: `I appreciate your amazing services and professional staff for all your hard work and creative
          thinking. There are many variations of passages of rem Ipsum available, but
          the majority have alteration in some form.`,
          img2: img2,
          author:"Martha Martin",
          role:"Entrepreneur"
        },
        {
          img: img3,
          text: `I appreciate your amazing services and professional staff for all your hard work and creative
          thinking. There are many variations of passages of rem Ipsum available, but
          the majority have alteration in some form.`,
          img2: img4,
          author:"Martha Martin",
          role:"Entrepreneur"
        },
        {
          img: img5,
          text: `I appreciate your amazing services and professional staff for all your hard work and creative
          thinking. There are many variations of passages of rem Ipsum available, but
          the majority have alteration in some form.`,
          img2: img6,
          author:"Martha Martin",
          role:"Entrepreneur"
        },
      ];
      
    return (
        <div>
         
 

 
    <div>
      <section id="testimonial-area" className="slider-slide-btn">
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-8 offset-lg-2">
              <OwlCarousel className="owl-theme" {...options}>
                {/* Your carousel items go here */}

                {
                  testimonials.map((item,index)=>{
                    return (
                      <div className="testimonial-card" key={index}>
                      <div className="testimonial-icon">
                        <ul>
                          <li>
                            <img src={item.img} alt="icon" />
                          </li>
                        </ul>
                      </div>
                      <div className="testimonial-text">
                        <p>
                          {item.text}
                        </p>
                        <div className="testimonial-img">
                          <img src={img2} alt="img" />
                        </div>
                      </div>
                      <div className="author-info">
                        <h3>{item.author}</h3>
                        <p>{item.role}</p>
                      </div>
                    </div>
                    )
                  })
                }
            
                {/* Additional carousel items */}
              </OwlCarousel>
            </div>
          </div>
        </div>
      </section>
    </div>
 



        </div>
    );
};

export default Owl_Carosual;