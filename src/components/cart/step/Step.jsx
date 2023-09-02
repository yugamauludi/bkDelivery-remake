import "./Step.scss"
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
const Step = () => {
    let currentUrl = window.location.pathname
    // eslint-disable-next-line react-hooks/exhaustive-deps
    let steps = ['/cart/preview','/cart/delivery','/cart/payment']
    let [active, setActive] = useState(0)
    useEffect(() => {
        setActive(steps.indexOf(currentUrl))
    }, [steps, currentUrl])
    return (
        <div className="step-wrapper">
            <Link to={active > 0 ? `/cart/preview` : '#'} className={`item ${active >= 0 ? 'active' : ''}`}>
                <span>1</span>
                <strong className="text">Cart</strong>
            </Link>
            <Link to={active > 0 ? `/cart/delivery` : '#'} className={`item ${active >= 1 ? 'active' : ''}`}>
                <span>2</span>
                <strong className="text">Delivery</strong>
            </Link>
            <Link to={active > 0 ? `/cart/payment` : '#'} className={`item ${active >= 2 ? 'active' : ''}`}>
                <span>3</span>
                <strong className="text">Payment</strong>
            </Link>
        </div>
    )
}

export default Step