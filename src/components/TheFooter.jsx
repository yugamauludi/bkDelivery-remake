import icPhone from '../assets/icons/ic_phone.png'
import icEmail from '../assets/icons/ic_email.png'
import icFb from '../assets/icons/ic_fb.png'
import icYoutube from '../assets/icons/ic_youtube.png'
import icTwitter from '../assets/icons/ic_twitter.png'

const TheFooter = () => {
    return <div className="footer bg-dark text-light">
        <div className="container">
            <div className="title">BURGER KING® DELIVERY</div>
            <div className="second">
                <div className="my-2">
                    <a href="/" className="phone mr-20">
                        <img src={icPhone} className="icon mr-5" alt="phone-icon" />
                        15000 25
                    </a>
                </div>
                <div className="my-2">
                    <a href="/" className="mr-20">
                        <img src={icEmail} className="icon mr-5" alt="phone-icon" />
                        guestservice@burgerking.co.id
                    </a>
                </div>
                <div className="d-flex my-2">
                    <a href="/" className="mr-5"><img src={icFb} className="icon mr-5" alt="social" /></a>
                    <a href="/" className="mr-5"><img src={icTwitter} className="icon mr-5" alt="social" /></a>
                    <a href="/" className="mr-5"><img src={icYoutube} className="icon mr-5" alt="social" /></a>
                </div>
            </div>
            <div className="third">
                <div className="my-2 mr-12 right-line"><a href="/">About Us</a></div>
                <div className="my-2 mr-12 right-line"><a href="/">Kebijakan Privasi</a></div>
                <div className="my-2 mr-12 right-line"><a href="/">Syarat dan Ketentuan</a></div>
                <div className="my-2 mr-12">TM & © 2023 Burger King Corporation. Used Under License. All rights reserved.</div>
            </div>
        </div>
    </div>
}

export default TheFooter;