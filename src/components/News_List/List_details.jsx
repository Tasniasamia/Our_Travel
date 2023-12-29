import img1 from "../../assets/img/blog/news-list-1.png";
import img2 from "../../assets/img/blog/news-list-round.png";
import img3 from "../../assets/img/blog/news-list-2.png";
import img4 from "../../assets/img/blog/news-list-round.png" ;
import img5 from "../../assets/img/blog/news-list-3.png";
import img6 from "../../assets/img/blog/news-list-round.png";
import img7 from "../../assets/img/blog/news-list-4.png";
import img8 from "../../assets/img/blog/news-list-round.png";
import img9 from "../../assets/img/icon/serach-icon.png" ;
import { Link } from "react-router-dom";
const List_details = () => {
const category=[
{  name:"Travel agent"}  ,
{  name:"Honeymoon"}  ,
{  name:"Flights"}  ,
{  name:"Adventure"}  ,
{  name:"Hotels"}  ,
{  name:"Apartments"}  ,
{  name:"Flight service"}  ,
]
const popular_tags=[
    {
        tag:"Party"
    },
    {
        tag:"Conference"
    },
    {
        tag:"Cakes"
    },
    {
        tag:"Decorations"
    },
    {
        tag:"Wedding party"
    },
    {
        tag:"Dance"
    },
    {
        tag:"Finance"
    },
    {
        tag:"Warehouse"
    },
    {
        tag:"Business party"
    },
    
]

const news=[
    {
        img:img1,
        img2:img2,
        name:"Melisa campbell",
        date:"26 Oct 2021",
        read:"8 min read",
        title:"Veniam ex tempor qui ad amet mollit cillum aliqua aliqua. Fugiat tempor eu magna",
        subtitle:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its fru layout. The point of using Lorem Ipsum is that it has a more."

    },
    {
        img:img3,
        img2:img4,
        name:"Melisa campbell",
        date:"26 Oct 2021",
        read:"8 min read",
        title:"Veniam ex tempor qui ad amet mollit cillum aliqua aliqua. Fugiat tempor eu magna",
        subtitle:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its fru layout. The point of using Lorem Ipsum is that it has a more."

    },
    {
        img:img5,
        img2:img6,
        name:"Melisa campbell",
        date:"26 Oct 2021",
        read:"8 min read",
        title:"Veniam ex tempor qui ad amet mollit cillum aliqua aliqua. Fugiat tempor eu magna",
        subtitle:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its fru layout. The point of using Lorem Ipsum is that it has a more."

    },
    {
        img:img7,
        img2:img8,
        name:"Melisa campbell",
        date:"26 Oct 2021",
        read:"8 min read",
        title:"Veniam ex tempor qui ad amet mollit cillum aliqua aliqua. Fugiat tempor eu magna",
        subtitle:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its fru layout. The point of using Lorem Ipsum is that it has a more."

    },
]

    return (
        <div>
             <section id="news-list" className="section-padding">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 offset-lg-3">
                    <div className="section-heading text-center">
                        <h4>News</h4>
                        <h2>Our latest news & article</h2>
                    </div>
                </div>
            </div>
            <div className="news-list-area-wrapper">
                <div className="row">
                    <div className="col-lg-8">
                        {
                            news.map((item,index)=>{
                                return (
                                    <div className="news-list-card" key={index}>
                                    <div className="news-list-img">
                                        <a href="news-details.html"><img src={item.img} alt="img"/></a>
                                    </div>
                                    <div className="news-list-text">
                                        <div className="news-list-info">
                                            <div className="news-list-author-info">
                                                <img src={item.img2} alt="img"/>
                                                <h6>{item.name}</h6>
                                            </div>
                                            <div className="news-list-date">
                                                <ul>
                                                    <li>{item.date}</li>
                                                    <li>{item.read}</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <h2><Link to="/news_details">{item.title}</Link></h2>
                                        <p>{item.subtitle}<span><Link to="/news_details">Read more...</Link></span></p>
                                    </div>
                                </div>
                                )
                            })
                        }
                     
                        <div className="row">
                            <div className="col-lg-6 offset-lg-3">
                                <div className="count-page">
                                    <a href="#!">
                                        <p><i className="fa fa-angle-left"></i></p>
                                    </a>
                                    <a href="#!">
                                        <p>1</p>
                                    </a>
                                    <a href="#!">
                                        <p>2</p>
                                    </a>
                                    <a href="#!">
                                        <p>3</p>
                                    </a>
                                    <a href="#!">
                                        <p>4</p>
                                    </a>
                                    <a href="#!">
                                        <p>5</p>
                                    </a>
                                    <a href="#!">
                                        <p><i className="fa fa-angle-right"></i></p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="news-list-right">
                            <div className="news-list-search-field">
                                <div className="news-list-input">
                                    <input type="text" placeholder="Search here"/>
                                    <a href="#!"><img src={img9} alt="icon"/></a>
                                </div>
                            </div>
                            <div className="news-list-category-wrapper">
                                <h3><span className="section-after">Category</span></h3>
                                <div className="category-list">
                                    <ul>
                                        {
                                            category.map((item,index)=>{
                                                return (
                                                    <li key={index}><a href="#!">{item.name} </a></li>

                                                )
                                            })
                                        }
                                      
                                    </ul>
                                </div>
                            </div>
                            <div className="news-tag-wraper">
                                <h3><span className="section-after">Popular tags</span></h3>
                                <div className="popular-tags">
                                    <ul>

                                        {
                                            popular_tags.map((item,index)=>{
                                                return (
                                                    <li key={index}><Link to="/news">{item.tag}</Link></li>

                                                )
                                            })
                                        }
                                     
                                    </ul>
                                </div>
                            </div>
                            <div className="news-add-section">
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

export default List_details;