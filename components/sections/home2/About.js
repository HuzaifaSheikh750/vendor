export default function About() {
    return (
        <>
            <section className="about-area-four pb-120">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-6 col-md-10 order-0 order-lg-2">
                            <div className="about-img-wrap-four">
                                <div className="" style={{width:"120%", marginTop:'40PX'}}>
                                    <img src="/assets/img/vendor/vendorService.png" alt="" />
                                </div>
                                {/* <div className="icon"><i className="flaticon-business-presentation" /></div> */}
                                {/* <img src="/assets/img/images/h3_about_img02.jpg" alt="" className="img-two" /> */}
                                <div className="about-shape-wrap-three">
                                    <img src="/assets/img/images/h3_about_shape01.png" alt="" />
                                    <img src="/assets/img/images/h3_about_shape02.png" alt="" />
                                    <img src="/assets/img/images/h3_about_shape03.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6    ">
                            <div className="about-content-four">
                                <div className="section-title-two mb-30 tg-heading-subheading animation-style1">
                                    <span className="sub-title tg-element-title">Get To know US</span>
                                    <h2 className="title tg-element-title">Vendor Service Portal Enabling Easy Collaboration</h2>
                                </div>
                                <p>Say yes to the platform that revolutionizes the way businesses interact with vendors, manage purchases, and optimize supply chains.</p>
                                <div className="about-list-three">
                                    <ul className="list-wrap">
                                        <li>
                                            <div className="icon" style={{marginRight:"30px"}}>
                                                {/* <i className="flaticon-profit" /> */}
                                                <img src="/assets/img/vendor/friendly.png" alt="" />
                                            </div>
                                            <div className="content">
                                                <h2 className="title">User-Friendly Interface</h2>
                                                <p>Navigate the portal effortlessly, accessing critical information with just a few clicks.</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon" style={{marginRight:"30px"}}>
                                                {/* <i className="flaticon-mission" /> */}
                                                <img src="/assets/img/vendor/mobile.png" alt="" />
                                            </div>
                                            <div className="content">
                                                <h2 className="title">Mobile Compatibility</h2>
                                                <p>Access the vendor portal app on various devices including desktops, tablets, and mobile phones.</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon" style={{marginRight:"30px"}}>
                                                {/* <i className="flaticon-mission" /> */}
                                                <img src="/assets/img/vendor/quotation.png" alt="" />
                                            </div>
                                            <div className="content">
                                                <h2 className="title">AI-Enhanced Quotation</h2>
                                                <p>Experience future ready procurement with AI assisted quotations, helping you make optimal purchasing decisions</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
