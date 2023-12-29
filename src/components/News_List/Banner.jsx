import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div>
            <section id="common-banner">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="common-banner-page text-center">
                        <h2>New list</h2>
                        <ul className="common-banner-page-link">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/">/</Link></li>
                            <li className="active-page">News list</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section> 
        </div>
    );
};

export default Banner;