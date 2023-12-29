import img1 from '../../../assets/img/icon/card-icon.png';
import img2 from "../../../assets/img/icon/decoration.png";
import img3 from "../../../assets/img/icon/photo-icon.png";
import img4 from "../../../assets/img/icon/cake-icon.png";
import img5 from "../../../assets/img/icon/food-icon.png";
import img6 from "../../../assets/img/icon/sefty-icon.png";
const Best_Services = () => {
    const Services=[
        {
         img:img1,
         title:"Invitation card",
         des:"Consectetur excepteur ut elit ad id non ex cupidatat quis cillum incididunt sunt culpa labore. Pariatur duis non excepteur ipsum tempor tempor nulla eu cons."
        },
        {
            img:img2,
            title:"Decoration",
            des:"Consectetur excepteur ut elit ad id non ex cupidatat quis cillum incididunt sunt culpa labore. Pariatur duis non excepteur ipsum tempor tempor nulla eu cons."
        },
        {
            img:img3,
            title:"Photo, Video, Audio",
            des:"Consectetur excepteur ut elit ad id non ex cupidatat quis cillum incididunt sunt culpa labore. Pariatur duis non excepteur ipsum tempor tempor nulla eu cons."
        },
        {
            img:img4,
            title:"Party cakes",
            des:"Consectetur excepteur ut elit ad id non ex cupidatat quis cillum incididunt sunt culpa labore. Pariatur duis non excepteur ipsum tempor tempor nulla eu cons."
        },
        {
            img:img5,
            title:"Premium food",
            des:"Consectetur excepteur ut elit ad id non ex cupidatat quis cillum incididunt sunt culpa labore. Pariatur duis non excepteur ipsum tempor tempor nulla eu cons."
        },
        {
            img:img6,
            title:"Full safety",
            des:"Consectetur excepteur ut elit ad id non ex cupidatat quis cillum incididunt sunt culpa labore. Pariatur duis non excepteur ipsum tempor tempor nulla eu cons."
        }
    ]
    return (
        <div>
                <section id="best-service-area" className="section-padding">
        <div className="container">
            <div className="row text-center">
                <div className="col-lg-6 offset-lg-3">
                    <div className="section-heading">
                        <h4>We are best</h4>
                        <h2>All services in one place</h2>
                    </div>
                </div>
            </div>
            <div className="best-service-card-wrapper">
                <div className="row">
                    {
                        Services.map((item,index)=>{
                            return (
                                <div className="col-lg-4 col-md-6 col-sm-12 col-12"key={index}>
                                <div className="best-service-card ">
                                    <img src={item.img} alt="icon"/>
                                    <h3>{item.title}</h3>
                                    <p>{item.des}</p>
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

export default Best_Services;