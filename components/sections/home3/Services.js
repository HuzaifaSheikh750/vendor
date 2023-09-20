import Link from "next/link"

export default function Services() {
    return (
        <>
            <section className="services-area-three">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-12 col-lg-12 col-md-12" >
                            <div className="section-title-two mb-20 tg-heading-subheading animation-style2" style={{display:"flex", justifyContent:"center", alignItems:"center"}} >
                                <span className="sub-title tg-element-title" >EASY TO KNOW</span>
                                
                            </div>
                            <h2 className="title tg-element-title mb-40" style={{textAlign:"center", fontWeight:"bolder", fontSize:"40px"}}>Easy Invoicing and Tracking all <br/>Financial Transactions </h2>
                        </div>
                        {/* <div className="col-xl-7 col-lg-6 col-md-4">
                            <div className="view-all-btn text-end mb-30">
                                <Link href="/services" className="btn transparent-btn-two">See All Service</Link>
                            </div>
                        </div> */}
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
                            <div className="services-item-three">
                                <div className="services-thumb-three">
                                    <Link href="/services-details"><img src="/assets/img/vendor/easyOne.png" alt="" /></Link>
                                </div>
                                <div className="services-content-three">
                                    <div className="services-icon">
                                        {/* <i className="flaticon-healthcare" /> */}
                                        <img src="/assets/img/vendor/payment.png" alt="" />
                                    </div>
                                    <h4 className="title">Payment Flexibility</h4>
                                    <p>Having an online order tracking system comes with a range of payment methods  to suit your financial preferences. </p>
                                    <div className="overlay-icon">
                                        {/* <i className="flaticon-healthcare" /> */}
                                        <img src="/assets/img/vendor/paymentGrey.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
                            <div className="services-item-three">
                                <div className="services-thumb-three">
                                    <Link href="/services-details"><img src="/assets/img/vendor/easyTwo.png" alt="" /></Link>
                                </div>
                                <div className="services-content-three">
                                    <div className="services-icon">
                                        {/* <i className="flaticon-protection" /> */}
                                        <img src="/assets/img/vendor/online.png" alt="" />

                                    </div>
                                    <h4 className="title">Online Payment Integration</h4>
                                    <p>Seamlessly integrate online payment systems, enabling 
                                        hassle free and secure financial transactions.</p>
                                    <div className="overlay-icon">
                                        {/* <i className="flaticon-protection" /> */}
                                        <img src="/assets/img/vendor/onlineGrey.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
                            <div className="services-item-three">
                                <div className="services-thumb-three">
                                    <Link href="/services-details"><img src="/assets/img/vendor/easyThree.png" alt="" /></Link>
                                </div>
                                <div className="services-content-three">
                                    <div className="services-icon">
                                        {/* <i className="flaticon-ship" /> */}
                                        <img src="/assets/img/vendor/invoice.png" alt="" />

                                    </div>
                                    <h4 className="title">Invoicing Simplified</h4>
                                    <p>Generate and manage invoices within vendor self service invoicing, ensuring accuracy and 
                                        transparency in financial documentation. </p>
                                    <div className="overlay-icon">
                                        {/* <i className="flaticon-ship" /> */}
                                        <img src="/assets/img/vendor/invoiceGrey.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
                            <div className="services-item-three">
                                <div className="services-thumb-three">
                                    <Link href="/services-details"><img src="/assets/img/services/h4_services_img04.jpg" alt="" /></Link>
                                </div>
                                <div className="services-content-three">
                                    <div className="services-icon">
                                        <i className="flaticon-house" />
                                    </div>
                                    <h4 className="title"><Link href="/services-details">Fire Insurance</Link></h4>
                                    <p>when an unknown printeawr took galley Insurance type andey ollowing.</p>
                                    <div className="overlay-icon">
                                        <i className="flaticon-house" />
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
                <div className="services-shape-four">
                    <img src="/assets/img/services/h4_services_shape.png" alt="" data-aos="fade-left" data-aos-delay={200} />
                </div>
            </section>
        </>
    )
}
