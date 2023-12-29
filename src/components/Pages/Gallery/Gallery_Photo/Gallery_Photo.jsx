import img1 from "../../../../assets/img/gallery/gallery-1.png";
import img2 from "../../../../assets/img/gallery/gallery-2.png"
import img3 from "../../../../assets/img/gallery/gallery-3.png"
import img4 from "../../../../assets/img/gallery/gallery-4.png"
import img5 from "../../../../assets/img/gallery/gallery-5.png"
import img6 from "../../../../assets/img/gallery/gallery-6.png"


const Photo_Gallery = () => {
    return (
        <div>
             <section id="gallery-area" className="section-padding">
        <div className="container">
            <div className="row text-center">
                <div className="col-lg-6 offset-lg-3">
                    <div className="section-heading">
                        <h4>Photo gallery</h4>
                        <h2>Explore our recent photo gallery</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6">
                    <div className="gallery-left-side">
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="gallery-card gallery-one">
                                    <div className="gallery-img">
                                        <a href="#!"><img src={img1} alt="img"/></a>
                                    </div>
                                    <div className="gallery-text">
                                        <h5>Concert in germany 2022</h5>
                                        <p>Aute conse dolor sit id.</p>
                                    </div>
                                </div>
                                <div className="gallery-card">
                                    <div className="gallery-img">
                                        <a href="#!"><img src={img2} alt="img"/></a>
                                    </div>
                                    <div className="gallery-text">
                                        <h5>Concert in germany 2022</h5>
                                        <p>Aute conse dolor sit id.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="gallery-card">
                                    <div className="gallery-img">
                                        <a href="#!"><img src={img3} alt="img"/></a>
                                    </div>
                                    <div className="gallery-text">
                                        <h5>Concert in germany 2022</h5>
                                        <p>Aute conse dolor sit id.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="gallery-right-side">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="gallery-card gallery-one">
                                    <div className="gallery-img">
                                        <a href="#!"><img src={img4} alt="img"/></a>
                                    </div>
                                    <div className="gallery-text">
                                        <h5>Concert in germany 2022</h5>
                                        <p>Aute conse dolor sit id.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="gallery-card">
                                    <div className="gallery-img">
                                        <a href="#!"><img src={img5} alt="img"/></a>
                                    </div>
                                    <div className="gallery-text">
                                        <h5>Concert in germany 2022</h5>
                                        <p>Aute conse dolor sit id.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="gallery-card">
                                    <div className="gallery-img">
                                        <a href="#!"><img src={img6} alt="img"/></a>
                                    </div>
                                    <div className="gallery-text">
                                        <h5>Concert in germany 2022</h5>
                                        <p>Aute conse dolor sit id.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section> 
    <div className="row   mb-5">
    <div className="col-lg-12 mb-5">
<div className="common-btn">
    <button className="btn theme-btn">Load More...</button>
</div>
</div> 
</div>
        </div>
    );
};

export default Photo_Gallery;





