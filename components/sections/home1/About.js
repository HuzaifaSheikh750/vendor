
import React, { useState } from 'react';

import Link from 'next/link'
export default function About() {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
      };


    return (
        <>
            <section className="about-area-three">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-6 col-md-9">
                            <div className="about-img-wrap-four"  style={{width:"110%", marginLeft:"-50px"}}>
                                <img src="/assets/img/vendor/streamlined.png" alt="" data-aos="fade-down-right" data-aos-delay={0} style={{width:"100%"}} />
                                {/* <img src="/assets/img/images/h2_about_img02.jpg" alt="" data-aos="fade-left" data-aos-delay={400} />     */}
                                {/* <div className="experience-wrap" data-aos="fade-up" data-aos-delay={300}>
                                    <h2 className="title">25 <span>Years</span></h2>
                                    <p>Of Experience in This Finance Advisory Company.</p>
                                </div> */}
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-content-three">
                                <div className="section-title-two mb-20 tg-heading-subheading animation-style3">
                                    <span className="sub-title">Get To know</span>
                                    <h2 className="title tg-element-title">Streamlined Procurement Workflow 
                                    Vendor Management Portal </h2>
                                </div>
                                <p className="info-one">Our Vendor Portal streamlines the procurement workflow, ensuring every step, 
                                from product requests to invoicing, is optimized for efficiency. The portal offers 
                                an array of features to facilitate a smooth procurement process: </p>

                                <div className="about-list-two">
                                    <ul className="list-wrap">
                                        <li>
                                            <div className="icon" >
                                            <i className="fas fa-arrow-right" style={{marginRight:"30px"}}/>
                                            </div>
                                            <div className="content">
                                                <h4 className="title">Vendor Quotation </h4>
                                                <p>Vendors can effortlessly submit quotations for requested products, 
                                                    simplifying the negotiation process for businesses seeking the best deals.</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon" >
                                            <i className="fas fa-arrow-right" style={{marginRight:"30px"}}/>
                                            </div>
                                            <div className="content">
                                                <h4 className="title">Contract Management</h4>
                                                <p>Draft and manage contracts or agreements directly within the portal, 
                                                    eliminating confusion and ensuring clarity in business relationships.</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                            <i className="fas fa-arrow-right" style={{marginRight:"30px"}}/>
                                            </div>
                                            <div className="content">
                                                <h4 className="title">Purchase Order Generation</h4>
                                                <p>Create purchase orders based on accepted quotations, enhancing accuracy 
                                                    and accountability in procurement transactions. </p>
                                            </div>
                                        </li>
                                        {
                                            isExpanded && (
                                                <li>
                                                <div className="icon">
                                                <i className="fas fa-arrow-right" style={{marginRight:"30px"}}/>
                                                </div>
                                                <div className="content">
                                                    <h4 className="title">Inventory Control</h4>
                                                    <p>Efficiently manage inventory across different sites and warehouses, enabling businesses to optimize stock levels and reduce operational costs.</p>
                                                </div>
                                            </li>
                                            )

                                        }
                                        
                                    </ul>
                                    {/* <Link href="/" className="btn transparent-btn">View More</Link> */}
                                    <button className="btn transparent-btn" onClick={toggleExpand}>
                                        {isExpanded ? "View Less" : "View More"}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about-shape-wrap-two">
                    <img src="/assets/img/images/h2_about_shape01.png" alt="" />
                    <img src="/assets/img/images/h2_about_shape02.png" alt="" />
                    <img src="/assets/img/images/h2_about_shape03.png" alt="" data-aos="fade-left" data-aos-delay={500} />
                </div>
            </section>
        </>
    )
}
