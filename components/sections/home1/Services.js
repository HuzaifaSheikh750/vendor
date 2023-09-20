import Link from "next/link"
import { useState } from 'react'

export default function Services() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
            <section className="services-area-two services-bg-two" data-background="/assets/img/bg/services_bg02.jpg">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12 col-md-12">
                            <div className="section-title-two mb-20 tg-heading-subheading animation-style3" style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                                <span className="sub-title" >EASY TO KNOW</span>
                            </div>
                            <h2 className="title tg-element-title"  style={{textAlign:"center", fontWeight:"bolder", fontSize:"40px"}}>Insightful Analytics and Reporting </h2>
                            <p style={{textAlign:"center", fontSize:"15px", margin:"30px"}}>Data driven decision making is the bedrock of modern business success. Our Vendor Portal offers insightful analytics 
                            and reporting. Your business can now have more automated operations, hence improving data sorting and vendor 
                            management through e order management and purchase order management. </p>
                        </div>
                        {/* <div className="col-lg-6 col-md-4">
                            <div className="view-all-btn text-end mb-30">
                                <Link href="/services" className="btn">See All Service</Link>
                            </div>
                        </div> */}
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                            <div className="services-item-two" onMouseEnter={() => handleToggle(1)} onMouseLeave={() => handleToggle(1)}>
                                <div className="services-thumb-two">
                                    <img src="/assets/img/vendor/insightOne.png" alt="" />
                                    <div className="item-shape">
                                        <img src="/assets/img/services/services_item_shape.png" alt="" />
                                    </div>
                                </div>
                                <div className="services-content-two">
                                    <div className="icon">
                                        {/* <i className="flaticon-piggy-bank" /> */}
                                        <img src="/assets/img/vendor/dashboard.png" alt="" />
                                    </div>
                                    <h2 className="title">Comprehensive Dashboard</h2>
                                    <p style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>Access a comprehensive dashboard presenting key metrics and analytics related to procurement, vendor interactions, and more.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                            <div className="services-item-two" onMouseEnter={() => handleToggle(2)} onMouseLeave={() => handleToggle(2)}>
                                <div className="services-thumb-two">
                                    <img src="/assets/img/vendor/insightTwo.png" alt="" />
                                    <div className="item-shape">
                                        <img src="/assets/img/services/services_item_shape.png" alt="" />
                                    </div>
                                </div>
                                <div className="services-content-two">
                                    <div className="icon">
                                        {/* <i className="flaticon-calculator" /> */}
                                        <img src="/assets/img/vendor/integration.png" alt="" />
                                    </div>
                                    <h2 className="title">Integration with ERPs</h2>
                                    <p style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>Seamlessly integrate the portal with various Enterprise Resource Planning systems, enhancing data synchronization and operational efficiency. </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                            <div className="services-item-two" onMouseEnter={() => handleToggle(3)} onMouseLeave={() => handleToggle(3)}>
                                <div className="services-thumb-two">
                                    <img src="/assets/img/vendor/insightThree.png" alt="" />
                                    <div className="item-shape">
                                        <img src="/assets/img/services/services_item_shape.png" alt="" />
                                    </div>
                                </div>
                                <div className="services-content-two">
                                    <div className="icon">
                                        {/* <i className="flaticon-money" /> */}
                                        <img src="/assets/img/vendor/tracking.png" alt="" />
                                    </div>
                                    <h2 className="title">Real time Tracking</h2>
                                    <p style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>With the modern vendor order automation system, you can also track the progress of orders and deliveries in real-time, ensuring timely and accurate procurement.</p>
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                            <div className="services-item-two" onMouseEnter={() => handleToggle(4)} onMouseLeave={() => handleToggle(4)}>
                                <div className="services-thumb-two">
                                    <img src="/assets/img/services/h2_services_img04.jpg" alt="" />
                                    <div className="item-shape">
                                        <img src="/assets/img/services/services_item_shape.png" alt="" />
                                    </div>
                                </div>
                                <div className="services-content-two">
                                    <div className="icon">
                                        <i className="flaticon-layers" />
                                    </div>
                                    <h2 className="title"><Link href="/services-details">Risk Management</Link></h2>
                                    <p style={{ display: `${isActive.key == 4 ? "block" : "none"}` }}>Morem ipsum dolor ametey consectre adipiscing.</p>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
        </>
    )
}
