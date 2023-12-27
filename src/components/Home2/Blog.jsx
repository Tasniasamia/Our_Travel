import blog1 from "../../assets/img/blog/blog-1.png";
import blog2 from "../../assets/img/blog/blog-2.png"
import blog3 from "../../assets/img/blog/blog-3.png"
import calender from "../../assets/img/icon/calendar.png";
import admin from "../../assets/img/icon/admin.png"
const Blog = () => {
    const blogs=[
        {
            img:blog1,
            title:"We are very careful handling the valuable times",
            description:"Lorem ipsum dolor sit amet, consectetur notted turis coni adipis do eiusmod...",
            date:"20 Dec, 2021",
            role:"Admin"
        },
        {
            img:blog2,
            title:"We are very careful handling the valuable times",
            description:"Lorem ipsum dolor sit amet, consectetur notted turis coni adipis do eiusmod...",
            date:"20 Dec, 2021",
            role:"Admin"
        },
        {
            img:blog3,
            title:"We are very careful handling the valuable times",
            description:"Lorem ipsum dolor sit amet, consectetur notted turis coni adipis do eiusmod...",
            date:"20 Dec, 2021",
            role:"Admin"
        }
    ]
    return (
        <div>
             <section id="home-two-blog-area">
        <div className="container">
            <div className="row text-center">
                <div className="col-lg-6 offset-lg-3">
                    <div className="section-heading">
                        <h4>News & Blog</h4>
                        <h2>Read our latest news & blogs</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                {
                    blogs.map((item,index)=>{
                        return (
                            <div className="col-lg-4 col-md-6 col-sm-12 col-12"key={index}>
                            <div className="blog-card-wrapper">
                                <div className="blog-card-img">
                                    <a href="news-details.html"><img src={item.img} alt="img"/></a>
                                </div>
                                <div className="blog-card-text">
                                    <h3><a href="news-details.html">{item.title}</a></h3>
                                    <p>{item.description} <a
                                            href="news-details.html">Read more</a></p>
                                    <div className="blog-card-bottom-wraper">
                                        <div className="blog-bottom-box blog-padding-right">
                                            <div className="blog-bottom-icon">
                                                <img src={calender} alt="icon"/>
                                            </div>
                                            <div className="blog-bottom-content">
                                                <h6>Date: <span>{item.date}</span></h6>
                                            </div>
                                        </div>
                                        <div className="blog-bottom-box">
                                            <div className="blog-bottom-icon">
                                                <img src={admin} alt="icon"/>
                                            </div>
                                            <div className="blog-bottom-content">
                                                <h6>By: <span>{item.role}</span></h6>
                                            </div>
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
    </section>
        </div>
    );
};

export default Blog;