import img1 from '../../assets/img/portfolio/portfolio-one.png';
import img2 from '../../assets/img/portfolio/portfolio-two.png';
import img3 from '../../assets/img/portfolio/portfolio-three.png';
import img4 from '../../assets/img/portfolio/portfolio-four.png';
import img5 from '../../assets/img/portfolio/portfolio-five.png';
import img6 from '../../assets/img/portfolio/portfolio-six.png';

const Portfoliotab = () => {
    const portfolios=[
        {
            img:img1,
            title:"Wedding party",
            des:"Anim exercitation qui velit esse amet ex exercitation ullamco fugiat culpa ea duis anim. Est velit sintveniam culpa .",

        },
        {
            img:img2,
            title:"Corporate party",
            des:"Anim exercitation qui velit esse amet ex exercitation ullamco fugiat culpa ea duis anim. Est velit sintveniam culpa .",
            
        },
        {
            img:img3,
            title:"Private party",
            des:"Anim exercitation qui velit esse amet ex exercitation ullamco fugiat culpa ea duis anim. Est velit sintveniam culpa .",
            
        },
        {
            img:img4,
            title:"Friends party",
            des:"Anim exercitation qui velit esse amet ex exercitation ullamco fugiat culpa ea duis anim. Est velit sintveniam culpa .",
            
        },
        {
            img:img5,
            title:"conference",
            des:"Anim exercitation qui velit esse amet ex exercitation ullamco fugiat culpa ea duis anim. Est velit sintveniam culpa .",
            
        },
        {
            img:img6,
            title:"Business Meeting",
            des:"Anim exercitation qui velit esse amet ex exercitation ullamco fugiat culpa ea duis anim. Est velit sintveniam culpa .",
            
        }
    ]
    return (
        <div>
              <section id="portfolio-area" className="section-padding">
        <div className="container">
            <div className="row text-center">
                <div className="col-lg-6 offset-lg-3">
                    <div className="section-heading">
                        <h4>Portfolio</h4>
                        <h2>Check our amazing and best portfolio</h2>
                    </div>
                </div>
            </div>
            <div className="portfolio-tab-area">
                <ul className="nav nav-pills portfolio-list" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active portfolio-link px-5" id="pills-portfolio-tab"
                            data-bs-toggle="pill" data-bs-target="#pills-portfolio" type="button" role="tab"
                            aria-controls="pills-portfolio" aria-selected="true">All</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link portfolio-link" id="pills-business-tab" data-bs-toggle="pill"
                            data-bs-target="#pills-business" type="button" role="tab" aria-controls="pills-business"
                            aria-selected="false">Business party</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link portfolio-link" id="pills-birthday-tab" data-bs-toggle="pill"
                            data-bs-target="#pills-birthday" type="button" role="tab" aria-controls="pills-birthday"
                            aria-selected="false">Birthday</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link portfolio-link" id="pills-wedding-tab" data-bs-toggle="pill"
                            data-bs-target="#pills-wedding" type="button" role="tab" aria-controls="pills-wedding"
                            aria-selected="false">Wedding party</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link portfolio-link" id="pills-conference-tab" data-bs-toggle="pill"
                            data-bs-target="#pills-conference" type="button" role="tab" aria-controls="pills-conference"
                            aria-selected="false">Conference</button>
                    </li>
                </ul>
            </div>

            <div className="portfolio-tab-contant">
                <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-portfolio" role="tabpanel"
                        aria-labelledby="pills-portfolio-tab">
                        <div className="portfolio-area-wrapper">
                        <div className="row">
             {
                portfolios.map((item,index)=>{
                    return (
                  
                    <div className="col-lg-4 col-md-6 col-sm-12 col-12"key={index}>
                    <div className="portfolio-card">
                        <div className="portfolio-img">
                            <a href="portfolio-details.html"><img
                                    src={item.img} alt="img"/></a>
                        </div>
                        <div className="portfolio-text">
                            <h3><a href="portfolio-details.html">{item.title}</a></h3>
                            <p>{item.des}</p>
                        </div>
                    </div>
                </div>
                    )
                })
             }
             </div>
                          
                        </div>
                    </div>








                    <div className="tab-pane fade" id="pills-business" role="tabpanel" aria-labelledby="pills-business-tab">
                        <div className="portfolio-area-wrapper">
                        <div className="row">
             {
                portfolios.map((item,index)=>{
                    return (
                   
                    <div className="col-lg-4 col-md-6 col-sm-12 col-12"key={index}>
                    <div className="portfolio-card">
                        <div className="portfolio-img">
                            <a href="portfolio-details.html"><img
                                    src={item.img} alt="img"/></a>
                        </div>
                        <div className="portfolio-text">
                            <h3><a href="portfolio-details.html">{item.title}</a></h3>
                            <p>{item.des}</p>
                        </div>
                    </div>
                </div>
                    )
                })
             }
             </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="pills-birthday" role="tabpanel" aria-labelledby="pills-birthday-tab">
                        <div className="portfolio-area-wrapper">
                        <div className="row">
             {
                portfolios.map((item,index)=>{
                    return (
                   
                    <div className="col-lg-4 col-md-6 col-sm-12 col-12"key={index}>
                    <div className="portfolio-card">
                        <div className="portfolio-img">
                            <a href="portfolio-details.html"><img
                                    src={item.img} alt="img"/></a>
                        </div>
                        <div className="portfolio-text">
                            <h3><a href="portfolio-details.html">{item.title}</a></h3>
                            <p>{item.des}</p>
                        </div>
                    </div>
                </div>
                    )
                })
             }
             </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="pills-wedding" role="tabpanel" aria-labelledby="pills-wedding-tab">
                        <div className="portfolio-area-wrapper">
                        <div className="row">
             {
                portfolios.map((item,index)=>{
                    return (
                   
                    <div className="col-lg-4 col-md-6 col-sm-12 col-12"key={index}>
                    <div className="portfolio-card">
                        <div className="portfolio-img">
                            <a href="portfolio-details.html"><img
                                    src={item.img} alt="img"/></a>
                        </div>
                        <div className="portfolio-text">
                            <h3><a href="portfolio-details.html">{item.title}</a></h3>
                            <p>{item.des}</p>
                        </div>
                    </div>
                </div>
                    )
                })
             }
             </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="pills-conference" role="tabpanel"
                        aria-labelledby="pills-conference-tab">
                        <div className="portfolio-area-wrapper">
                        <div className="row">
             {
                portfolios.map((item,index)=>{
                    return (
                   
                    <div className="col-lg-4 col-md-6 col-sm-12 col-12"key={index}>
                    <div className="portfolio-card">
                        <div className="portfolio-img">
                            <a href="portfolio-details.html"><img
                                    src={item.img} alt="img"/></a>
                        </div>
                        <div className="portfolio-text">
                            <h3><a href="portfolio-details.html">{item.title}</a></h3>
                            <p>{item.des}</p>
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
    </section>
        </div>
    );
};

export default Portfoliotab;