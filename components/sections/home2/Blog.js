import Link from "next/link"

export default function Blog() {
    return (
        <>
            <section className="blog-area-three pt-120 pb-90">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="section-title-two text-center mb-50 tg-heading-subheading animation-style1">
                                <span className="sub-title tg-element-title">Customer Stories</span>
                                <h2 className="title tg-element-title">Read Our Latest Customer Stories</h2>
                                {/* <p>Ever find yourself staring at your computer screen a good consulting slogan to come to mind? Oftentimes.</p> */}
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6 col-sm-10">
                            <div className="blog-post-item-two">
                                <div className="blog-post-thumb-two">
                                    <Link href="https://www.kaispe.com/streamlining-customer-experience-how-kaispes-customer-portal-transformed-business/" target="_blank"><img src="/assets/img/vendor/customerOne.jpg" alt="" /></Link>
                                    <Link href="https://www.kaispe.com/customer-stories/" target="_blank" className="tag tag-two">Customer Stories</Link>
                                </div>
                                <div className="blog-post-content-two">
                                    <h2 className="title"><Link href="https://www.kaispe.com/streamlining-customer-experience-how-kaispes-customer-portal-transformed-business/" target="_blank">Streamlining Customer Experience: How KAISPE Customer Portal ...</Link></h2>
                                    {/* <p>Everything you need to start building area atching presence for your business.</p> */}
                                    {/* <div className="blog-meta">
                                        <ul className="list-wrap">
                                            <li>
                                                <Link href="/blog-details"><img src="/assets/img/blog/blog_avatar01.png" alt="" />Kat Doven</Link>
                                            </li>
                                            <li><i className="far fa-calendar" />22 Jan, 2023</li>
                                        </ul>
                                    </div> */}
                                     {/* <Link href="/contact" className="btn btn-one">Contact Us</Link> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-10">
                            <div className="blog-post-item-two">
                                <div className="blog-post-thumb-two">
                                    <Link href="https://www.kaispe.com/syscorp-automates-payroll-tax-calculation-using-kaispes-flexpayroll-built-on-microsoft-dynamics-365/" target="_blank"><img src="/assets/img/vendor/customerTwo.jpg" alt="" /></Link>
                                    <Link href="https://www.kaispe.com/customer-stories/" target="_blank" className="tag tag-two">Customer Stories</Link>
                                </div>
                                <div className="blog-post-content-two">
                                    <h2 className="title"><Link href="https://www.kaispe.com/syscorp-automates-payroll-tax-calculation-using-kaispes-flexpayroll-built-on-microsoft-dynamics-365/" target="_blank">SysCorp automates payroll tax calculation using KAISPE ...</Link></h2>
                                    {/* <p>Everything you need to start building area atching presence for your business.</p> */}
                                    {/* <div className="blog-meta">
                                        <ul className="list-wrap">
                                            <li>
                                                <Link href="/blog-details"><img src="/assets/img/blog/blog_avatar01.png" alt="" />Kat Doven</Link>
                                            </li>
                                            <li><i className="far fa-calendar" />22 Jan, 2023</li>
                                        </ul>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-10">
                            <div className="blog-post-item-two">
                                <div className="blog-post-thumb-two">
                                    <Link href="https://www.kaispe.com/4fingers-just-got-its-procurement-process-automated-with-kaispe-purchase-requisition-app/" target="_blank"><img src="/assets/img/vendor/customerThree.png" alt="" /></Link>
                                    <Link href="https://www.kaispe.com/customer-stories/" target="_blank" className="tag tag-two">Customer Stories</Link>
                                </div>
                                <div className="blog-post-content-two">
                                    <h2 className="title"><Link href="https://www.kaispe.com/4fingers-just-got-its-procurement-process-automated-with-kaispe-purchase-requisition-app/" target="_blank">4Fingers Just Got its Procurement Process Automated with KAISPE ...</Link></h2>
                                    {/* <p>Everything you need to start building area atching presence for your business.</p> */}
                                    {/* <div className="blog-meta">
                                        <ul className="list-wrap">
                                            <li>
                                                <Link href="/blog-details"><img src="/assets/img/blog/blog_avatar01.png" alt="" />Kat Doven</Link>
                                            </li>
                                            <li><i className="far fa-calendar" />22 Jan, 2023</li>
                                        </ul>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
