import Link from "next/link"
import { useState } from "react"

export default function Pricing() {
    const [isToggled, setToggled] = useState(false)
    const handleToggle = () => setToggled(!isToggled)
    return (
        <>
            <section className="pricing-area-two">
                <div className="pricing-shape">
                    <img src="/assets/img/images/pricing_shape.png" alt="" data-aos="fade-left" data-aos-delay={200} />
                </div>
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-12">
                            <div className="section-title-two mb-50 tg-heading-subheading animation-style3" style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                                <span className="sub-title">Flexible Pricing Plan</span>
                            </div>
                            <h2 className="title tg-element-title" style={{textAlign:"center", marginBottom:"60px"}}>We’ve offered the best <br /> pricing for you</h2>
                        </div>
                        {/* <div className="col-lg-6 col-md-10">
                            <div className="section-top-content mb-30">
                                <p>Ever find yourself staring at your computer screen a good consulting slogan to come to mind? Oftentimes.</p>
                            </div>
                        </div> */}
                    </div>
                    <div className="pricing-item-wrap">
                        {/* <div className={`pricing-tab ${isToggled ? "selected" : ""}`}>
                            <span className={`tab-btn monthly_tab_title ${isToggled ? "active" : ""}`}>Monthly</span>
                            <span className={`pricing-tab-switcher ${isToggled ? "active" : ""}`} onClick={handleToggle} />
                            <span className={`tab-btn annual_tab_title ${isToggled ? "active" : ""}`}>Yearly</span>
                        </div> */}
                        <div className="row justify-content-center">

                            <div className="col-lg-5 col-md-6 col-sm-10">
                                <div className="pricing-box-two">
                                    <div className="pricing-head-two">
                                        <h4 className="title">Basic Plan</h4>
                                        <div className="pricing-price-two">
                                            <h2 className="price"><strong>$</strong>{isToggled ? "" : "06"}<span>/{isToggled ? "" : "user/month"}</span></h2>
                                            <p style={{marginTop:"10px", marginBottom:"-20px"}}>Minimum 5 users</p>
                                        </div>
                                    </div>
                                    <div className="pricing-bottom">
                                        <div className="pricing-list">
                                            <ul className="list-wrap">
                                                <li><img src="/assets/img/icons/check_icon02.svg" alt="" />Creation, submission, and tracking of purchase orders.</li>
                                                <li><img src="/assets/img/icons/check_icon02.svg" alt="" />Automatic notifications to vendors when new POs are generated or when changes are made to existing orders.</li>
                                                <li><img src="/assets/img/icons/check_icon02.svg" alt="" />Vendor submission of electronic invoices.</li>
                                                <li><img src="/assets/img/icons/check_icon02.svg" alt="" />Automated invoice processing and validation against POs and contracts.</li>
                                                <li><img src="/assets/img/icons/check_icon02.svg" alt="" />Self-service vendor registration and onboarding processes.</li>
                                                <li><img src="/assets/img/icons/check_icon02.svg" alt="" />The ability to collect and store vendor information, such as contact details, tax information, and certifications.</li>
                                                <li><img src="/assets/img/icons/check_icon02.svg" alt="" />Secure messaging and communication channels between buyers and vendors.</li>
                                                <li><img src="/assets/img/icons/check_icon02.svg" alt="" />One admin user included</li>
                                            </ul>
                                        </div>
                                        <div className="pricing-btn-two">
                                            <Link href="https://appsource.microsoft.com/en-us/product/web-apps/kaispellc.kspvportal?tab=PlansAndPrice" className="btn">Get The Plan Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-6 col-sm-10">
                                <div className="pricing-box-two">
                                    <span className="popular">Popular</span>
                                    <div className="pricing-head-two">
                                        <h4 className="title">Advanced Plan</h4>
                                        <div className="pricing-price-two">
                                        <h2 className="price"><strong>$</strong>{isToggled ? "" : "08"}<span>/{isToggled ? "" : "user/month"}</span></h2>
                                        <p style={{marginTop:"10px", marginBottom:"-20px"}}>Minimum 5 users</p>
                                        </div>
                                    </div>
                                    <div className="pricing-bottom">
                                        <div className="pricing-list">
                                        <ul className="list-wrap">
                                                <li><img src="/assets/img/icons/check_icon02.svg" alt="" />Creation, submission, and tracking of purchase orders.</li>
                                                <li><img src="/assets/img/icons/check_icon02.svg" alt="" />Automatic notifications to vendors when new POs are generated or when changes are made to existing orders.</li>
                                                <li><img src="/assets/img/icons/check_icon02.svg" alt="" />Vendor submission of electronic invoices.</li>
                                                <li><img src="/assets/img/icons/check_icon02.svg" alt="" />Automated invoice processing and validation against POs and contracts.</li>
                                                <li><img src="/assets/img/icons/check_icon02.svg" alt="" />Self-service vendor registration and onboarding processes.</li>
                                                <li><img src="/assets/img/icons/check_icon02.svg" alt="" />The ability to collect and store vendor information, such as contact details, tax information, and certifications.</li>
                                                <li><img src="/assets/img/icons/check_icon02.svg" alt="" />Secure messaging and communication channels between buyers and vendors.</li>
                                                <li><img src="/assets/img/icons/check_icon02.svg" alt="" />One admin user included</li>
                                            </ul>
                                        </div>
                                        <div className="pricing-btn-two">
                                            <Link href="https://appsource.microsoft.com/en-us/product/web-apps/kaispellc.kspvportal?tab=PlansAndPrice" className="btn">Get The Plan Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="col-lg-4 col-md-6 col-sm-10">
                                <div className="pricing-box-two">
                                    <div className="pricing-head-two">
                                        <h4 className="title">Enterprise Plan</h4>
                                        <div className="pricing-price-two">
                                        <h2 className="price"><strong>$</strong>{isToggled ? "999" : "99"}<span>/{isToggled ? "year" : "month"}</span></h2>
                                        </div>
                                    </div>
                                    <div className="pricing-bottom">
                                        <div className="pricing-list">
                                            <ul className="list-wrap">
                                                <li><img src="/assets/img/icons/check_icon02.svg" alt="" />5000 User Activities</li>
                                                <li><img src="/assets/img/icons/check_icon02.svg" alt="" />Unlimited Access</li>
                                                <li><img src="/assets/img/icons/check_icon02.svg" alt="" />No Hidden Charge</li>
                                                <li><img src="/assets/img/icons/check_icon02.svg" alt="" />03 Time Updates</li>
                                                <li><img src="/assets/img/icons/check_icon02.svg" alt="" />Figma Source File</li>
                                                <li><img src="/assets/img/icons/check_icon02.svg" alt="" />Many More Facilities</li>
                                            </ul>
                                        </div>
                                        <div className="pricing-btn-two">
                                            <Link href="/contact" className="btn">Get The Plan Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
