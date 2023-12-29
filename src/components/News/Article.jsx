import img1 from '../../assets/img/blog/news-one.png';
import img2 from '../../assets/img/blog/news-two.png';
import img3 from '../../assets/img/blog/news-three.png';
import img4 from '../../assets/img/blog/news-four.png';
import img5 from '../../assets/img/blog/news-five.png';
import img6 from '../../assets/img/blog/news-six.png';




const Article = () => {
    const articles=[
        {
            img:img1,
            date:15,
            month:"May",
            title:"Cillum do incididu veniam aute",
            des:"Anim exercitation qui velit esse amet ex exercitation ullamco fugiat culpa ea duis anim. Est velit sint veniam culpa ."

        },
        {
            img:img2,
            date:15,
            month:"May",
            title:"Occaecat et in irure excepteur",
            des:"Anim exercitation qui velit esse amet ex exercitation ullamco fugiat culpa ea duis anim. Est velit sint veniam culpa ."

        },
        {
            img:img3,
            date:15,
            month:"May",
            title:"Labore labore pariatur ex aute",
            des:"Anim exercitation qui velit esse amet ex exercitation ullamco fugiat culpa ea duis anim. Est velit sint veniam culpa ."

        },
        {
            img:img4,
            date:15,
            month:"May",
            title:"Eiusmod et ven adipisicing pront",
            des:"Anim exercitation qui velit esse amet ex exercitation ullamco fugiat culpa ea duis anim. Est velit sint veniam culpa ."

        },
        {
            img:img5,
            date:15,
            month:"May",
            title:"Nulla aliquip ex fugiat sint labis",
            des:"Anim exercitation qui velit esse amet ex exercitation ullamco fugiat culpa ea duis anim. Est velit sint veniam culpa ."

        },
        {
            img:img6,
            date:15,
            month:"May",
            title:"Culpa enim ipsum esse dolre duo",
            des:"Anim exercitation qui velit esse amet ex exercitation ullamco fugiat culpa ea duis anim. Est velit sint veniam culpa ."

        }
      
    ]
   
    return (
        <div>
                <section id="latest-news-area" className="section-padding">
        <div className="container">
            <div className="row text-center">
                <div className="col-lg-6 offset-lg-3">
                    <div className="section-heading">
                        <h4>News</h4>
                        <h2>Our latest news & article</h2>
                    </div>
                </div>
            </div>
            <div className="latest-news-wrapper">
                <div className="row">

                    {
                        articles.map((item,index)=>{
                            return (
                                <div className="col-lg-4 col-md-6 col-sm-12 col-12"key={index}>
                                <div className="news-card">
                                    <div className="news-img">
                                        <a href="news-details.html"><img src={item.img} alt="img"/></a>
                                    </div>
                                    <div className="news-card-text">
                                        <div className="news-date">
                                            <h3>{item.date} <span>{item.month}</span></h3>
                                        </div>
                                        <div className="news-info">
                                            <h3><a href="news-details.html">{item.title}</a> </h3>
                                            <p>{item.des}</p>
                                            <a href="news-details.html">Read More ...</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            )
                        })
                    }
                 

                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="common-btn news-btn">
                        <button className="btn theme-btn">Load More...</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </div>
    );
};

export default Article;