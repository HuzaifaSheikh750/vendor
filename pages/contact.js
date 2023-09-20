import Layout from "@/components/layout/Layout"
import Seo from "@/components/layout/Seo"

export default function Contact() {
    return (
        <>
            <Layout headerStyle={6} footerStyle={3} breadcrumbTitle="Contact Us">
                <Seo pageTitle="Vendor Portal | Contact" />
                
                <div>
                    <section className="inner-contact-area pt-120 pb-120">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-5">
                                    <div className="inner-contact-img">
                                        <img src="/assets/img/images/contact_img.jpg" alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="inner-contact-info">
                                        <h2 className="title">Our Office Address</h2>
                                        <div className="contact-info-item">
                                            <h5 className="title-two">USA Office</h5>
                                            <ul className="list-wrap">
                                                <li> <i className="fa fa-building" style={{marginRight:"30px"}}/>  590 Madison Avenue 21st Floor Manhattan, NY 10022 USA.</li>
                                                <li>  <i className="fa fa-building" style={{marginRight:"30px"}}/>415 W. Golf Rd Suite 55-K (607 SF) Arlington Heights, IL 60005.</li>
                                                <li>  <i className="fa fa-phone" style={{marginRight:"30px"}}/>USA : (+1)-315-791-4472</li>
                                                
                                            </ul>
                                        </div>
                                        <div className="contact-info-item">
                                            <h5 className="title-two">Pakistan Office</h5>
                                            <ul className="list-wrap">
                                                <li>  <i className="fa fa-building" style={{marginRight:"30px"}}/>Suite#213 Sumya Business Avenue MACHS Karachi, Pakistan.</li>
                                                <li>  <i className="fa fa-phone" style={{marginRight:"30px"}}/>PAK : (+92)-213-432-6085</li>
                                            </ul>
                                        </div>
                                        <div className="contact-info-item">
                                            <h5 className="title-two">Email Address</h5>
                                            <ul className="list-wrap">
                                                <li>  <i className="fa fa-envelope" style={{marginRight:"30px"}}/>info@kaispe.com</li>
                                               
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="contact-map">
                        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.332792000835!2d144.96011341744386!3d-37.805673299999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sbd!4v1685027435635!5m2!1sen!2sbd" allowFullScreen loading="lazy" /> */}
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.6485162274853!2d67.08542207450901!3d24.875851444643132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f4eed80f0d7%3A0x9c9174078432c893!2sKAISPE!5e0!3m2!1sen!2s!4v1695103600424!5m2!1sen!2s"allowFullScreen loading="lazy"></iframe>
                    </div>
                </div>
            </Layout>
        </>
    )
}