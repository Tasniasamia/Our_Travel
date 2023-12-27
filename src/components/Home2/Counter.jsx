import img1 from "../../assets/img/icon/counter-1.png";
import img2 from "../../assets/img/icon/counter-2.png";
import img3 from "../../assets/img/icon/counter-3.png";
import img4 from "../../assets/img/icon/counter-4.png"
const Counter = () => {
const counters=[
    {
        img:img1,
        number:120,
        symbol:"+",
        topic:"Musical artist"
    },
    {
        img:img2,
        number:350,
        symbol:"+",
        topic:"Hours of music"
    },
    {
        img:img3,
        number:50,
        symbol:"k+",
        topic:"Seat allocated"
    },
    {
        img:img4,
        number:70,
        symbol:null,
        topic:"Music bandst"
    },
]
    // counter
    return (
        <div>
              <section id="counter">
        <div className="container">
            <div className="row">
                <div className="col-lg-10 offset-lg-1">
                    <div className="counter-area-wrapper">
                        {/* <div className="counter-details-home-two">
                            <div className="counter-img">
                                <img src="assets/img/icon/counter-1.png" alt="icon"/>
                            </div>
                            <div className="counter-area">
                                <h2><span className="counter">120</span>+</h2>
                            </div>
                            <p>Musical artist</p>
                        </div> */}
                     {
                        counters.map((item,index)=>{
                            return (
                                <div className="counter-details-home-two"key={index}>
                                <div className="counter-img">
                                    <img src={item.img} alt="icon"/>
                                </div>
                                <div className="counter-area">
                                    <h2><span className="counter">{item.number}</span> {item.symbol !=null && <span>{item.symbol}</span>}</h2>
                                </div>
                                <p>{item.topic}</p>
                            </div>
                            )
                        })
                     }
                        {/* <div className="counter-details-home-two">
                            <div className="counter-img">
                                <img src="assets/img/icon/counter-2.png" alt="icon"/>
                            </div>
                            <div className="counter-area">
                                <h2><span className="counter">350</span>+</h2>
                            </div>
                            <p>Hours of music</p>
                        </div>

                        <div className="counter-details-home-two">
                            <div className="counter-img">
                                <img src="assets/img/icon/counter-3.png" alt="icon"/>
                            </div>
                            <div className="counter-area">
                                <h2><span className="counter">50</span>k+</h2>
                            </div>
                            <p>Seat allocated</p>
                        </div>

                        <div className="counter-details-home-two">
                            <div className="counter-img">
                                <img src="assets/img/icon/counter-4.png" alt="icon"/>
                            </div>
                            <div className="counter-area">
                                <h2><span className="counter">70</span></h2>
                            </div>
                            <p>Music bandst</p>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    </section>
        </div>
    );
};

export default Counter;