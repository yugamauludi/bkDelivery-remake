import logoBK from '../assets/images/logo_bk.png'
import iconCart from '../assets/icons/ic_cart.png'
import {useSelector} from "react-redux";
import {cartList} from "../store/reducers/cart";
import {Link} from "react-router-dom";

const TheHeader = () => {
    const cart_list = useSelector(cartList)
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand website" to={`/`}>
                    <img src={logoBK} className="navbar-logo" alt="logo"/>
                </Link>
                <div className="collapse navbar-collapse website" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="/menus/kings-chicken--rasa-baru-">
                                <div className="subtitle">Delivery</div>
                                <div className="title">Order</div>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="/">
                                <div className="subtitle">Get Fresh</div>
                                <div className="title">Promotions</div>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="/">
                                <div className="subtitle">Exclusive</div>
                                <div className="title">Large Order</div>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="nav-link website website-right">
                    <div className="title mr-15">LOGIN</div>
                    <Link className="wrapper-ic-cart" to={`/cart/preview`}>
                        <img src={iconCart} alt="logo-cart" />
                        <div className="total-cart">
                            {cart_list.reduce((n, {quantity}) => n + quantity, 0)}
                        </div>
                    </Link>
                </div>
                <div className="mobile">
                    <button className="navbar-toggler mobile-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/">
                                    <div className="subtitle">Delivery</div>
                                    <div className="title">Order</div>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/">
                                    <div className="subtitle">Get Fresh</div>
                                    <div className="title">Promotions</div>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/">
                                    <div className="subtitle">Exclusive</div>
                                    <div className="title">Large Order</div>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <Link className="mobile-logo" to={`/`}>
                        <img src={logoBK} className="navbar-logo" alt="logo" />
                    </Link>
                    <div className="nav-link mobile-right">
                        <div className="title mr-15">LOGIN</div>
                        <Link className="wrapper-ic-cart" to={`/cart/preview`}>
                            <img src={iconCart} alt="logo-cart" />
                            <div className="total-cart">
                                {cart_list.reduce((n, {quantity}) => n + quantity, 0)}
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default TheHeader;