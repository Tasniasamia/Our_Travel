"use client"
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import img1 from '../../assets/img/blog/news-details-img.png';
import img2 from "../../assets/img/blog/news-details-author.png";
import img3 from "../../assets/img/icon/calender-icon.png";
import blog1 from "../../assets/img/blog/news-details-1.png";
import blog2 from "../../assets/img/blog/news-details-2.png";
import blog3 from "../../assets/img/blog/news-details-3.png";
import theme_color from "../../assets/img/icon/theme-color-check.png";
import img8 from "../../assets/img/blog/Zyphar.png";
import img9 from "../../assets/img/icon/quatation-icon.png";
import img10 from '../../assets/img/icon/like-icon.png';
import slide1 from "../../assets/img/blog/news-slide-1.png";
import slide2 from "../../assets/img/blog/news-slide-2.png";
import post1 from '../../assets/img/blog/claient-1.png';
import post2 from "../../assets/img/blog/claient-2.png";
const Article = () => {
    const blogs=[
        {
            img:blog1
        },
        {
            img:blog2
        },
        {
            img:blog3
        }
    ]
    const themes=[
        {
            description:"Veniam anim sint nisi deserunt tempor aliqua veniam et ad excepteur culpa sit magna tempor aliqua sint proident proident occaecat excepteur est."
        },
        {
            description:"Incididunt minim et dolore culpa ad id ea. Tempor dolore deserunt velit culpa aliquip pariatur aliquip."
        },
        {
            description:"Incididunt minim et dolore culpa ad id ea. Tempor dolore deserunt velit culpa aliquip pariatur aliquip."
        },
        {
            description:"Lorem occaecat laborum elit veniam fugiat exercitation cillum nulla consectetur."
        }
    ]
    const occasion=[
        {
          name:"Wedding"
        },
        {
            name:"Decorations"
        },
        {
            name:"Party"
        },
        {
            name:"Wedding"
        },
        {
            name:"conference"
        },
        {
            name:"Party"
        }
    ]
    const sliders=[
        {
            img:slide1,
            title:"Reprehenderit enim labo reprehenderit ut"
        },
        {
            img:slide2,
            title:"Magna quis anim aliqua ut consectetur"
        },
        {
            img:slide1,
            title:"Reprehenderit enim labo reprehenderit ut"
        },
        {
            img:slide2,
            title:"Magna quis anim aliqua ut consectetur"
        },
    ]
    const posts=[
        {
            img:post1,
            name:"James martin",
            des:"Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci phaedrum. There are many variations of passages of Lorem Ipsum available but the majority."
        },
        {
            img:post2,
            name:"James martin",
            des:"Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci phaedrum. There are many variations of passages of Lorem Ipsum available but the majority."
        }
    ]
    const options = {
        loop: true,
        items:2,
        nav: true,
      };
    return (
        <div>
             <section id="news-details" className="section-padding">
        <div className="container">
            <div className="row">
                <div className="col-lg-10 offset-lg-1">
                    <div className="news-details-head">
                        <div className="news-details-top-img">
                            <img src={img1} alt="img"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="news-details-area">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="news-details-head-text">
                            <div className="news-details-top-info">
                                <div className="news-details-author-info">
                                    <img src={img2} alt="img"/>
                                    <h6>Johnny Sincom <span>From</span> Event club</h6>
                                </div>
                                <div className="news-details-date-info">
                                    <img src={img3} alt="img"/>
                                    <h6>Date: <span>20 May, 2022</span></h6>
                                </div>
                            </div>
                            <h2>We are very efficient to handling your wedding and other party</h2>
                        </div>
                        <div className="news-details-content">
                            <p className="paragraph-padding">Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci
                                phaedrum. There are many
                                variations of passages of Lorem Ipsum available but the majority aliquip enim eiusmod.
                                There are many variations of passages of frog available but the.</p>
                            <p className="paragraph-padding">Irure sunt ex ea mollit ullamco excepteur ut sint cillum
                                tempor. Exercitation non Lorem
                                eu eiusmod sunt in exercitation. Quis tempor proident quis proident. Sint ea dolore
                                labore eiusmod nisi excepteur irure. Voluptate sint sint qui et laborum. Consequat
                                aliquip voluptate esse voluptate aliqua elit fugiat mollit. Ea eu non deserunt laboris
                                irure labore enim qui et ad. Excepteur quis labore Lorem sit elit in eiusmod et aute
                                dolor.</p>
                            <p>Aliqua pariatur nisi sit dolore do quis quis ipsum incididunt. Cillum incididunt sunt
                                minim ipsum reprehenderit. Eu consequat magna deserunt duis. Sint dolor anim id ut ex
                                amet sunt pariatur.</p>
                            <div className="news-details-gallery">
                                <div className="row">
                                    {
                                        blogs.map((item,index)=>{
                                            return (
                                                <div className="col-lg-4 col-md-6 col-sm-6 col-12"key={index}>
                                                <div className="news-details-gallery-card">
                                                    <img src={item.img} alt="image"/>
                                                </div>
                                            </div>
                                            )
                                        })
                                    }
                                   
                                </div>
                            </div>
                            <p>Purchasing from select family farmers who farm organically because they believe in it and
                                so we do. We are conscious of air miles and our carbon footprint so a lot of our produce
                                comes from Egypt. </p>
                            <div className="news-details-list-area">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="news-list">
                                            <ul>
                                                {
                                                    themes.map((item,index)=>{
                                                        return (
                                                            <li key={index}><img src={theme_color} alt="icon"/> {item.description}</li>

                                                        )
                                                    })

                                                }
                                              
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="news-single-card">
                                            <div className="news-card-img">
                                                <img src={img8} alt="img"/>
                                            </div>
                                            <div className="news-card-info">
                                                <p>Sunt incididunt eiusmod occaecat proident. Laboris ipsum cillum
                                                    labore magna eiusmod fugiat elit aliquip consectetur proident velit
                                                    nulla adipisicing.</p>
                                                <h5>Sandra Zyphar</h5>
                                                <p className="news-para">Managing Director</p>
                                                <div className="news-quote-img">
                                                    <img src={img9} alt="icon"/>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p>Labore quis sunt veniam dolor eiusmod culpa occaecat cupidatat in mollit est. Fugiat eu
                                veniam consequat et fugiat. Aute nostrud non occaecat dolore mollit enim deserunt duis
                                culpa commodo laboris fugiat. Anim sint sint eiusmod adipisicing ex irure minim. Magna
                                est non Lorem ad voluptate consequat et qui incididunt enim.</p>
                            <div className="news-details-category-area">
                                <div className="news-details-category">
                                    <ul>
                                        {
                                            occasion.map((item,index)=>{
                                                return (
                                        <li key={index}>
                                            <a href="#!">{item.name}</a>
                                        </li> 
                                                )
                                            })
                                        }
                                     
                                    </ul>
                                </div>
                                <div className="news-details-social-area">
                                    <div className="news-details-like">
                                        <img src={img10} alt="icon"/>
                                        <p>2.5k Like</p>
                                    </div>
                                    <div className="news-details-shear">
                                        <p>Share projects:</p>
                                        <div className="shear-icon">
                                            <a href="#!"><i className="fab fa-facebook"></i></a>
                                            <a href="#!"><i className="fab fa-twitter-square"></i></a>
                                            <a href="#!"><i className="fab fa-instagram"></i></a>
                                            <a href="#!"><i className="fab fa-linkedin"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="news-details-slider-area news-slide-btn">
                                <div className="row">
                                    <div className="col-lg-12">
                                    <OwlCarousel className="owl-theme" {...options}>                                            {
                                                sliders.map((item,index)=>{
                                                    return (
                                                        <div className="news-details-slide-card"key={index}>
                                                        <div className="news-slide-card">
                                                            <div className="news-slide-img">
                                                                <img src={item.img} alt="img"/>
                                                            </div>
                                                            <div className="news-slide-text">
                                                                <h6>{item.title}</h6>
                                                                <a href="#!">Read more...</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    )
                                                })
                                            }
                                            {/* <div className="news-details-slide-card">
                                                <div className="news-slide-card">
                                                    <div className="news-slide-img">
                                                        <img src={item.img} alt="img"/>
                                                    </div>
                                                    <div className="news-slide-text">
                                                        <h6>Reprehenderit enim labo reprehenderit ut</h6>
                                                        <a href="#!">Read more...</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="news-details-slide-card">
                                                <div className="news-slide-card">
                                                    <div className="news-slide-img">
                                                        <img src="assets/img/blog/news-slide-2.png" alt="img">
                                                    </div>
                                                    <div className="news-slide-text">
                                                        <h6>Magna quis anim aliqua ut consectetur</h6>
                                                        <a href="#!">Read more...</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="news-details-slide-card">
                                                <div className="news-slide-card">
                                                    <div className="news-slide-img">
                                                        <img src="assets/img/blog/news-slide-1.png" alt="img">
                                                    </div>
                                                    <div className="news-slide-text">
                                                        <h6>Reprehenderit enim labo reprehenderit ut</h6>
                                                        <a href="#!">Read more...</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="news-details-slide-card">
                                                <div className="news-slide-card">
                                                    <div className="news-slide-img">
                                                        <img src="assets/img/blog/news-slide-2.png" alt="img">
                                                    </div>
                                                    <div className="news-slide-text">
                                                        <h6>Magna quis anim aliqua ut consectetur</h6>
                                                        <a href="#!">Read more...</a>
                                                    </div>
                                                </div>
                                            </div> */}
                                        </OwlCarousel>
                                    </div>
                                </div>
                            </div>

                            <div className="comment-area-details">
                                <h3>2 Comments</h3>
                                <div className="post-comment-wrapper">
                                   
                                {
                                    posts.map((item,index)=>{
                                        return (
                                            <div className="post-comment-item" key={index}>
                                            <div className="post-comment-img">
                                                <img src={item.img} alt="img"/>
                                            </div>
                                            <div className="post-comment-text">
                                                <div className="post-names-replay">
                                                    <h5>{item.name}</h5>
                                                    <a href="#!"><i className="fas fa-reply"></i>Reply</a>
                                                </div>
                                                <p>{item.des}
                                                </p>
                                            </div>
                                        </div>   
                                        )
                                    })
                                }
                                </div>
                            </div>
                            <div className="comment-form-area">
                                <h3>Leave a comment</h3>
                                <div className="comment-form">
                                    <form action="#!" id="comment-form">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <input type="text" className="form-control"
                                                        placeholder="Enter full name" required/>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <input type="text" className="form-control"
                                                        placeholder="Enter email address" required/>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <textarea rows="5" placeholder="Write your comments"
                                                        className="form-control" required></textarea>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="submit-btn">
                                                    <button className="btn theme-btn">Submit comment</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
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

export default Article;