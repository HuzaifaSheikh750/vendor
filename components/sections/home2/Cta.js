import Link from "next/link"

export default function Cta() {
    return (
        <>
            <section className="cta-area-two pt-120">
                <div className="container">
                    <div className="cta-inner-wrap-two" data-background="/assets/img/bg/cta_bg02.jpg">
                        <div className="row align-items-center">
                            <div className="col-lg-8">
                                <div className="cta-content">
                                        {/* <div className="cta-info-wrap">
                                            <div className="icon">
                                                <i className="flaticon-phone-call" />
                                            </div>
                                            <div className="content">
                                                <span>Call For More Info</span>
                                                <Link href="tel:0123456789">+123 8989 444</Link>
                                            </div>
                                        </div> */}
                                    <h2 className="title">Are you as excited about our vendor self service portal as we are?  </h2>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="cta-btn text-end">
                                    <Link href="/contact" className="btn btn-three">Contact Us</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
