import img1 from '../../assets/img/portfolio/portfolio-one.png';
import img2 from '../../assets/img/portfolio/portfolio-two.png';
import img3 from '../../assets/img/portfolio/portfolio-three.png';
import img4 from '../../assets/img/portfolio/portfolio-four.png';
import img5 from '../../assets/img/portfolio/portfolio-five.png';
import img6 from '../../assets/img/portfolio/portfolio-six.png';
const Details = () => {
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
          
{/* <!-- service section --> */}
    <section id="portfolio-two-area" className="section-padding">
        <div className="container">
            <div className="row text-center">
                <div className="col-lg-6 offset-lg-3">
                    <div className="section-heading">
                        <h4>Portfolio</h4>
                        <h2>Check our amazing and best portfolio</h2>
   
                    </div>
                </div>
            </div>
            <div className="portfolio-two-area">
                <div className="row">
            

          {
            portfolios.map((item,index)=>{
                return (
                    <div className="col-lg-4 col-md-6 col-sm-12 col-12"key={index}>
                        <div className="portfolio-two-card">
                                <a href="portfolio-details.html"><img src={item.img}
                                        alt="img"/></a>
                            <div className="portfolio-overlay">
                                <div>
                                <h3><a href="portfolio-details.html">{item.title}</a></h3>
                                <p>{item.des}</p>
                                </div>
                            </div>
                        </div>
                    </div>
             
                )
            })
          }


                    <div className="col-lg-12">
                        <div className="portfolio-btn">
                            <button className="btn theme-btn">Load More...</button>
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