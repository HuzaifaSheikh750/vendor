import Link from "next/link"
import VideoPopup from "@/components/elements/PopupVideo"
export default function Banner() {
    return (
        <>
            <section className="banner-area-three" >
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-md-9 order-0 order-lg-2">
                            <div className="banner-img-three" data-aos="fade-left" data-aos-delay={300} style={{width:"160%", marginLeft:"50px,", marginTop:"-100px"}}>
                                <img src="/assets/img/vendor/mainTab.png" alt="" className="main-img" />
                                {/* <img src="/assets/img/banner/h3_banner_img02.jpg" alt="" className="img-two" data-parallax="{&quot;y&quot; : 100 }" /> */}
                                {/* <img src="/assets/img/banner/h3_banner_img03.jpg" alt="" className="img-three" data-parallax="{&quot;x&quot; : -100 }" /> */}
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="banner-content-three">
                                <h3 className="title" data-aos="fade-right" data-aos-delay={0}>Empowering Business Relationships with Vendor Portal</h3>
                                <p data-aos="fade-right" data-aos-delay={300}>Sort your raw data of vendors by bringing it to one platform of the Vendor Portal by KAISPE.</p>
                                {/* <form action="#" className="banner-form" data-aos="fade-right" data-aos-delay={600}>
                                    <input type="text" placeholder="E-mail Address" />
                                    <button type="submit"><i className="flaticon-right-arrow" /></button>
                                </form> */}
                                 <div className="banner-btn" style={{marginTop:"40px"}}>
                                    <Link href="https://outlook.office365.com/owa/calendar/KAISPE878766@NETORGFT2992819.onmicrosoft.com/bookings/" className="btn" data-aos-delay={700} style={{marginRight:"20px"}}>Book a Demo</Link>
                                    <VideoPopup style={1}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="banner-shape-wrap-three" >
                    <img src="/assets/img/banner/h3_banner_shape01.png" alt="" />
                    {/* <img src="/assets/img/banner/h3_banner_shape02.png" alt="" /> */}
                </div>
            </section>
        </>
    )
}
