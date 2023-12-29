import img1 from '../../../assets/img/service/service-details-img.png';
import img2 from "../../../assets/img/icon/headphone-icon.png";
import img3 from "../../../assets/img/icon/decrotation-icon.png";
import img4 from "../../../assets/img/icon/home-icon.png";
import { Link } from 'react-router-dom';
const Details = () => {
    const service_list=[
        {
            list:"Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci phaedrum."
        },
        {
            list:"There are many variations of passages of Lorem Ipsum."
        },
        {
            list:"Available but the majority have alteration in some injected or words."
        },
        {
            list:"There are many variations of passages of Lorem Ipsum which don't look even slightly believable."
        },
    ]
    const services=[
        {
            img:img2,
            service:"24/7 services",
            description:"Enim in nisi ad dolor. Exercitation excepteur deserunt roident."
        },
        {
            img:img3,
            service:"Premium decorations",
            description:"Enim in nisi ad dolor. Exercitation excepteur deserunt roident."
        },
        {
            img:img4,
            service:"Luxury auditorium",
            description:"Enim in nisi ad dolor. Exercitation excepteur deserunt roident."
        },
    ]
    const events=[
        {
            events:"Corporate party",
            days:21
        },
        {
            events:"Private party",
            days:16
        },
        {
            events:"Wedding party",
            days:25
        },
        {
            events:"Conference",
            days:"08"
        },
        {
            events:" Business meeting",
            days:17
        },
        {
            events:"Friends party",
            days:28
        },
    ]
    const occasions=[
        {
            name:"Party"
        },
        {
            name:"Conference"
        },
        {
            name:"Cakes"
        },
        {
            name:"Decorations"
        },
        {
            name:"Wedding party"
        },
        {
            name:"Dance"
        },
        {
            name:"Finance"
        },
        {
            name:"Warehouse"
        },
        {
            name:"Business party"
        },
    ]
    return (
        <div>
             {/* <!-- service details  --> */}
    <section id="service-details" className="section-padding">
        <div className="container">
            <div className="service-details-wraper">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="service-details-left">
                            <div className="service-details-img">
                                <img src={img1} alt="img"/>
                            </div>
                            <div className="service-details-head">
                                <h2>Labore deserunt ea sunt do velit duis excepteur</h2>
                                <p>Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci phaedrum. There are many
                                    variations of passages of Lorem Ipsum available but the majority aliquip enim
                                    eiusmod.</p>
                                <p className="pt-3">If you are going to use a passage of Lorem Ipsum, you need to be sure
                                    there isn't anything embarrang hidden in the middle of text. All the Lorem Ipsum
                                    generators on the Internet tend to repeat predefined chunks as necessary, making
                                    this the first true. Quis culpa est dolor sint fugiat enim sit aliquip voluptate ea.
                                </p>
                                <h3>The most significant transport service we done!</h3>
                                <p>Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci phaedrum. There are
                                    many variations of passages of Lorem Ipsum frog available, but the majority have
                                    alteratir words which don't look even slightly believable. Est id culpa laborum.
                                    Consequat ut aliquip pariatur aliquip esse anim eiusmod sit dolor aliquip</p>

                                <div className="service-list">
                                    <ul>
                                        {
                                            service_list.map((item,index)=>{
                                                return (
                                                    <li key={index}>{item.list}</li> 
                                                )
                                            })
                                        }
                                      
                                    </ul>
                                </div>
                                <div className="project-details-card-wraper">
                                    <div className="row">
                                        {
                                            services.map((item,index)=>{
                                                return (
                                                    <div className="col-lg-4 col-md-6 col-sm-6 col-12"key={index}>
                                                    <div className="service-card-details">
                                                        <img src={item.img} alt="icon"/>
                                                        <h5 className="section-after">{item.service}</h5>
                                                        <p>{item.description}
                                                        </p>
                                                    </div>
                                                </div>
                                                )
                                            })
                                        }
                                      
                                    </div>
                                </div>
                                <p>Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci phaedrum. There are
                                    many
                                    variations of passages of Lorem Ipsum available, but the majority have
                                    alteration in
                                    some injected or words which don't look even slightly believable.</p>
                            </div>

                            <div className="service-details-accordion">
                                <h3>Frequently asked question</h3>
                                <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't
                                    anything em barrang hidden in the middle of text. All the making this the first
                                    true.
                                </p>

                                <div className="accordion-area">
                                    <div className="accordion" id="accordionExample">
                                        <div className="accordion-item accordion-wrapper">
                                            <h2 className="accordion-header" id="headingOne">
                                                <button className="accordion-button accordion-btn accordion-after" type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    Irure veniam commodo magna adipisicing esse adipisicing
                                                </button>
                                            </h2>
                                            <div id="collapseOne" className="accordion-collapse collapse show"
                                                aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <p>
                                                        Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Quisque velit
                                                        nisi, pretium ut lacinia in, elementum id enim. Pellentesque in ipsum id
                                                        orci porta dapibus.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item accordion-wrapper">
                                            <h2 className="accordion-header" id="headingTwo">
                                                <button className="accordion-button collapsed accordion-btn accordion-after" type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                    Magna Lorem ea qui et amet. Ipsum consequat commodo mollit adipisi.
                                                </button>
                                            </h2>
                                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                                                data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <p>
                                                        Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Quisque velit
                                                        nisi, pretium ut lacinia in, elementum id enim. Pellentesque in ipsum id
                                                        orci porta dapibus.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item accordion-wrapper">
                                            <h2 className="accordion-header" id="headingThree">
                                                <button className="accordion-button collapsed accordion-btn accordion-after" type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#collapseThree" aria-expanded="false"
                                                    aria-controls="collapseThree">
                                                    Adipisicing non cillum duis laborum ad consectetur commodo pariatur sunt sit qui
                                                </button>
                                            </h2>
                                            <div id="collapseThree" className="accordion-collapse collapse"
                                                aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <p>
                                                        Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Quisque velit
                                                        nisi, pretium ut lacinia in, elementum id enim. Pellentesque in ipsum id
                                                        orci porta dapibus.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item accordion-wrapper">
                                            <h2 className="accordion-header" id="headingFour">
                                                <button className="accordion-button collapsed accordion-btn accordion-after" type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#collapseFour" aria-expanded="false"
                                                    aria-controls="collapseThree">
                                                    Fugiat officia cupidatat fugiat anim excepteur pariatur.
                                                </button>
                                            </h2>
                                            <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour"
                                                data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <p>
                                                        Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Quisque velit
                                                        nisi, pretium ut lacinia in, elementum id enim. Pellentesque in ipsum id
                                                        orci porta dapibus.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item accordion-wrapper">
                                            <h2 className="accordion-header" id="headingFive">
                                                <button className="accordion-button collapsed accordion-btn accordion-after" type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#collapseFive" aria-expanded="false"
                                                    aria-controls="collapseFive">
                                                    Fugiat officia cupidatat fugiat anim excepteur pariatur.
                                                </button>
                                            </h2>
                                            <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive"
                                                data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <p>
                                                        Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Quisque velit
                                                        nisi, pretium ut lacinia in, elementum id enim. Pellentesque in ipsum id
                                                        orci porta dapibus.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="service-details-right">
                            <div className="service-search-field">
                                <div className="service-input">
                                    <input type="text" placeholder="Search here"/>
                                    <a href="#!"><img src="assets/img/icon/serach-icon.png" alt="icon"/></a>
                                </div>
                            </div>
                            <div className="service-rate-wraper">
                                <h3><span className="section-after">Our services</span></h3>
                                {
                                    events.map((item,index)=>{
                                        return (
                                            <div className="service-rate" key={index}>
                                    <p><a href="#!"><i className="fa fa-angle-right"></i> {item.events}</a></p>
                                    <h6>{item.days}</h6>
                                </div>
                                        )
                                    })
                                }
                            
                            </div>
                            <div className="service-tag-wraper">
                                <h3><span className="section-after">Popular tags</span></h3>
                                <div className="popular-tags">
                                    <ul>
                                        {
                                           occasions.map((item,index)=>{
                                            return (
                                                <li key={index}><Link to="/Services">{item.name}</Link></li>

                                            )
                                           }) 
                                        }
                                        
                                    </ul>
                                </div>
                            </div>
                            <div className="service-add-section">
                                <h2>Business conference</h2>
                                <p>Est do sit cupidatat reprehenderit sunt aliquip pariatur tempor.</p>
                                <a className="section-after" href="#!">LEARN MORE</a>
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

export default Details;