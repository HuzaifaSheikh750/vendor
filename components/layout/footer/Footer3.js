import Link from "next/link"

export default function Footer3() {
    return (
        <>
            <footer>
                <div className="footer-area-three">
                    <div className="footer-top-three">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-5 col-md-7">
                                    <div className="footer-widget">
                                        <div className="fw-logo">
                                            <Link href="/"><img src="/assets/img/logo/w_logo.png" alt="" /></Link>
                                        </div>
                                        <div className="footer-content">
                                            <p>KAISPE has been providing solutions and 
                                                services to customers using Microsoft 
                                                Dynamics, Azure, Power platform, Oracle 
                                                NetSuite, mobile and web app development.</p>
                                            <div className="footer-social footer-social-three">
                                                <ul className="list-wrap">
                                                    <li><Link href="https://www.facebook.com/Kaispeco" target="_blank"><i className="fab fa-facebook-f" /></Link></li>
                                                    <li><Link href="https://pk.linkedin.com/company/kaispe" target="_blank"><i className="fab fa-linkedin" /></Link></li>
                                                    <li><Link href="https://twitter.com/i/flow/login?redirect_after_login=%2Fi%2Fflow%2Flogin" target="_blank"><i className="fab fa-twitter" /></Link></li>
                                                    <li><Link href="https://www.youtube.com/@kaispe" target="_blank"><i className="fab fa-youtube" /></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-5 col-sm-6">
                                    <div className="footer-widget">
                                        <h4 className="fw-title">Email Address</h4>
                                        <div className="footer-info" style={{marginBottom:"30px"}}>
                                            <ul className="list-wrap">
                                                <li>
                                                    <div className="icon">
                                                        <i className="flaticon-mail" />
                                                    </div>
                                                    <div className="content">
                                                        <p>info@kaispe.com</p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <h4 className="fw-title">Contact Number</h4>

                                        <div className="footer-info">
                                            <ul className="list-wrap">
                                                <li>
                                                    <div className="icon">
                                                        <i className="flaticon-phone-call" />
                                                    </div>
                                                    <div className="content">
                                                        <Link href="tel:0123456789">USA : (+1)-315-791-4472</Link>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <i className="flaticon-phone-call" />
                                                    </div>
                                                    <div className="content">
                                                        <Link href="tel:0123456789"> PAK : (+92)-213-432-6085</Link>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>
                    
                                <div className="col-lg-4 col-md-7">
                                    <div className="footer-widget">
                                        <h4 className="fw-title">Address</h4>
                                        <div className="footer-info">
                                            <ul className="list-wrap">
                                                <li>
                                                    <div className="icon">
                                                        <i className="flaticon-pin" />
                                                    </div>
                                                    <div className="content">
                                                        <p>590 Madison Avenue 21st Floor Manhattan, NY 10022 USA.</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <i className="flaticon-pin" />
                                                    </div>
                                                    <div className="content">
                                                        <p>415 W. Golf Rd Suite 55-K (607 SF) Arlington Heights, IL 60005.</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <i className="flaticon-pin" />
                                                    </div>
                                                    <div className="content">
                                                        <p>Suite#213 Sumya Business Avenue MACHS Karachi, Pakistan.</p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom-three">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="copyright-text-two text-center">
                                        <p>Copyright © <a href="https://www.kaispe.com/" target="_blank">KAISPE </a>| All Right Reserved</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
