import img1 from "../../assets/img/blog/news-list-1.png";
import img2 from "../../assets/img/blog/news-list-round.png";
import img3 from "../../assets/img/blog/news-list-2.png";
const List_details = () => {
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
                        <div className="news-list-card">
                            <div className="news-list-img">
                                <a href="news-details.html"><img src={img1} alt="img"/></a>
                            </div>
                            <div className="news-list-text">
                                <div className="news-list-info">
                                    <div className="news-list-author-info">
                                        <img src={img2} alt="img"/>
                                        <h6>Melisa campbell</h6>
                                    </div>
                                    <div className="news-list-date">
                                        <ul>
                                            <li>26 Oct 2021</li>
                                            <li>8 min read</li>
                                        </ul>
                                    </div>
                                </div>
                                <h2><a href="news-details.html">Veniam ex tempor qui ad amet mollit cillum aliqua
                                        aliqua. Fugiat tempor eu magna</a></h2>
                                <p>It is a long established fact that a reader will be distracted by the readable
                                    content of a page when looking at its fru layout. The point of using Lorem Ipsum is
                                    that it has a more. <span><a href="news-details.html">Read more...</a></span></p>
                            </div>
                        </div>
                        <div className="news-list-card">
                            <div className="news-list-img">
                                <a href="news-details.html"><img src={img3} alt="img"/></a>
                            </div>
                            <div className="news-list-text">
                                <div className="news-list-info">
                                    <div className="news-list-author-info">
                                        <img src="assets/img/blog/news-list-round.png" alt="img">
                                        <h6>Melisa campbell</h6>
                                    </div>
                                    <div className="news-list-date">
                                        <ul>
                                            <li>26 Oct 2021</li>
                                            <li>8 min read</li>
                                        </ul>
                                    </div>
                                </div>
                                <h2><a href="news-details.html">Veniam ex tempor qui ad amet mollit cillum aliqua
                                        aliqua. Fugiat tempor eu magna</a></h2>
                                <p>It is a long established fact that a reader will be distracted by the readable
                                    content of a page when looking at its fru layout. The point of using Lorem Ipsum is
                                    that it has a more. <span><a href="news-details.html">Read more...</a></span></p>
                            </div>
                        </div>
                        <div className="news-list-card">
                            <div className="news-list-img">
                                <a href="news-details.html"><img src="assets/img/blog/news-list-3.png" alt="img"></a>
                            </div>
                            <div className="news-list-text">
                                <div className="news-list-info">
                                    <div className="news-list-author-info">
                                        <img src="assets/img/blog/news-list-round.png" alt="img">
                                        <h6>Melisa campbell</h6>
                                    </div>
                                    <div className="news-list-date">
                                        <ul>
                                            <li>26 Oct 2021</li>
                                            <li>8 min read</li>
                                        </ul>
                                    </div>
                                </div>
                                <h2><a href="news-details.html">Veniam ex tempor qui ad amet mollit cillum aliqua
                                        aliqua. Fugiat tempor eu magna</a>
                                </h2>
                                <p>It is a long established fact that a reader will be distracted by the readable
                                    content of a page when looking at its fru layout. The point of using Lorem Ipsum is
                                    that it has a more. <span><a href="news-details.html">Read more...</a></span></p>
                            </div>
                        </div>
                        <div className="news-list-card">
                            <div className="news-list-img">
                                <a href="news-details.html"><img src="assets/img/blog/news-list-4.png" alt="img"></a>
                            </div>
                            <div className="news-list-text">
                                <div className="news-list-info">
                                    <div className="news-list-author-info">
                                        <img src="assets/img/blog/news-list-round.png" alt="img">
                                        <h6>Melisa campbell</h6>
                                    </div>
                                    <div className="news-list-date">
                                        <ul>
                                            <li>26 Oct 2021</li>
                                            <li>8 min read</li>
                                        </ul>
                                    </div>
                                </div>
                                <h2><a href="news-details.html">Veniam ex tempor qui ad amet mollit cillum aliqua
                                        aliqua. Fugiat tempor eu magna</a>
                                </h2>
                                <p>It is a long established fact that a reader will be distracted by the readable
                                    content of a page when looking at its fru layout. The point of using Lorem Ipsum is
                                    that it has a more. <span><a href="news-details.html">Read more...</a></span></p>
                            </div>
                        </div>
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
                                    <input type="text" placeholder="Search here">
                                    <a href="#!"><img src="assets/img/icon/serach-icon.png" alt="icon"></a>
                                </div>
                            </div>
                            <div className="news-list-category-wrapper">
                                <h3><span className="section-after">Category</span></h3>
                                <div className="category-list">
                                    <ul>
                                        <li><a href="#!">Travel agent </a></li>
                                        <li><a href="#!">Honeymoon</a></li>
                                        <li><a href="#!">Flights</a></li>
                                        <li><a href="#!">Adventure</a></li>
                                        <li><a href="#!">Hotels</a></li>
                                        <li><a href="#!">Apartments</a></li>
                                        <li><a href="#!">Flight service</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="news-tag-wraper">
                                <h3><span className="section-after">Popular tags</span></h3>
                                <div className="popular-tags">
                                    <ul>
                                        <li><a href="news.html">Party</a></li>
                                        <li><a href="news.html">Conference</a></li>
                                        <li><a href="news.html">Cakes</a></li>
                                        <li><a href="news.html">Decorations</a></li>
                                        <li><a href="news.html">Wedding party</a></li>
                                        <li><a href="news.html">Dance</a></li>
                                        <li><a href="news.html">Finance</a></li>
                                        <li><a href="news.html">Warehouse </a></li>
                                        <li><a href="news.html">Business party</a></li>
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