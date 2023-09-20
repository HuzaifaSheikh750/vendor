import Link from "next/link"

export default function Features() {
    return (
        <>
            <section className="features-area-three">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-7">
                            <div className="section-title-two text-center mb-40 tg-heading-subheading animation-style1">
                                <span className="sub-title tg-element-title">What We Do For You</span>
                                <h2 className="title tg-element-title">Features & Functions of Vendor Portal Software </h2>
                            </div>
                        </div>
                    </div>
                    <div className="features-item-wrap-two">
                        <div className="row justify-content-center">
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="features-item-three">
                                    <div className="features-icon-three">
                                        {/* <i className="flaticon-inspiration" /> */}
                                        <img src="/assets/img/vendor/manage.png" alt="" />
                                    </div>
                                    <div className="features-content-three">
                                        <h2 className="title">Manage Vendors</h2>
                                        <p>Effectively nurture vendor lationships by overseeing profiles and gauging performance metrics within the portal</p>
                                        <Link href="/services-3" className="link-btn">See Details <img src="/assets/img/icons/right-arrow.svg" alt="" /></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="features-item-three">
                                    <div className="features-icon-three">
                                        {/* <i className="flaticon-layers" /> */}
                                        <img src="/assets/img/vendor/pricing.png" alt="" />
                                    </div>
                                    <div className="features-content-three">
                                        <h2 className="title">Plan and Pricing</h2>
                                        <p>Cater to a spectrum of business needs and financial considerations a range of thoughtfully designed subscription</p>
                                        <Link href="/services-3" className="link-btn">See Details <img src="/assets/img/icons/right-arrow.svg" alt="" /></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="features-item-three">
                                    <div className="features-icon-three">
                                        {/* <i className="flaticon-calculator" /> */}
                                        <img src="/assets/img/vendor/quote.png" alt="" />

                                    </div>
                                    <div className="features-content-three">
                                        <h2 className="title">Vendor Quotation</h2>
                                        <p>Simplify procurement by collecting comprehensive vendor quotations containing vital details like pricing & etc</p>
                                        <Link href="/services-3" className="link-btn">See Details <img src="/assets/img/icons/right-arrow.svg" alt="" /></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="features-item-three">
                                    <div className="features-icon-three">
                                        {/* <i className="flaticon-investment" /> */}
                                        <img src="/assets/img/vendor/create.png" alt="" />
                                        
                                    </div>
                                    <div className="features-content-three">
                                        <h2 className="title">Create Quotation</h2>
                                        <p>Empower businesses with the capability to construct and distribute their own quotations, fostering seamless transactions</p>
                                        <Link href="/services-3" className="link-btn">See Details <img src="/assets/img/icons/right-arrow.svg" alt="" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
