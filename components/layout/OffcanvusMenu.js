import Link from "next/link"

export default function OffcanvusMenu({ isOffcanvus, handleOffcanvus }) {
    return (
        <>
            <div className={`extra-info ${isOffcanvus ? "active" : ""}`}>
                <div className="close-icon menu-close" onClick={handleOffcanvus}>
                    <button><i className="far fa-window-close" /></button>
                </div>
                <div className="logo-side mb-30">
                    <Link href="/"><img src="/assets/img/logo/logo.png" alt="Logo" /></Link>
                </div>
                <div className="side-info mb-30">
                    <div className="contact-list mb-30">
                        <h2>Address</h2>
                        <h4>USA Office  </h4>
                        <p>590 Madison Avenue 21st Floor Manhattan, NY 10022 USA.</p><br/>
                        <p>415 W. Golf Rd Suite 55-K (607 SF) Arlington Heights, IL 60005.</p><br/>
                        <p>USA : (+1)-315-791-4472</p><br/>

                    </div>
                    <div className="contact-list mb-30">
                        <h4>Pakistan Office</h4>
                        <p>Suite#213 Sumya Business Avenue MACHS Karachi, Pakistan.</p><br/>
                        <p>PAK : (+92)-213-432-6085</p>
                    </div>
                    <div className="contact-list mb-30">
                        <h4>Email Address</h4>
                        <p>info@kaispe.com</p>
                        {/* <p>example.mail@hum.com</p> */}
                    </div>
                </div>
                {/* <ul className="side-instagram list-wrap">
                    <li><Link href="#"><img src="/assets/img/images/sb_insta01.jpg" alt="" /></Link></li>
                    <li><Link href="#"><img src="/assets/img/images/sb_insta02.jpg" alt="" /></Link></li>
                    <li><Link href="#"><img src="/assets/img/images/sb_insta03.jpg" alt="" /></Link></li>
                    <li><Link href="#"><img src="/assets/img/images/sb_insta04.jpg" alt="" /></Link></li>
                    <li><Link href="#"><img src="/assets/img/images/sb_insta05.jpg" alt="" /></Link></li>
                    <li><Link href="#"><img src="/assets/img/images/sb_insta06.jpg" alt="" /></Link></li>
                </ul> */}
                 <div className="footer-social footer-social-three">
                                                <ul className="list-wrap">
                                                    <li><Link href="https://www.facebook.com/Kaispeco" target="_blank"><i className="fab fa-facebook-f" /></Link></li>
                                                    <li><Link href="https://pk.linkedin.com/company/kaispe" target="_blank"><i className="fab fa-linkedin" /></Link></li>
                                                    <li><Link href="https://twitter.com/i/flow/login?redirect_after_login=%2Fi%2Fflow%2Flogin" target="_blank"><i className="fab fa-twitter" /></Link></li>
                                                    <li><Link href="https://www.youtube.com/@kaispe" target="_blank"><i className="fab fa-youtube" /></Link></li>
                                                </ul>
                                            </div>
            </div>
            <div className={`offcanvas-overly ${isOffcanvus ? "active" : ""}`} onClick={handleOffcanvus} />
        </>
    )
}
