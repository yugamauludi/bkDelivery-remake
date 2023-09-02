import "./PaymentPage.scss"
import Step from "../../components/cart/step/Step"
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {cartList} from "../../store/reducers/cart";
import {formatPrice} from "../../helpers";
import icDana from "../../assets/images/payments/logo_dana.png"
import icOvo from "../../assets/images/payments/logo_ovo.png"
import icGopay from "../../assets/images/payments/logo_gopay.png"
import icCheck from "../../assets/icons/ic_check.png"

const PaymentPage = () => {
    const cart_list = useSelector(cartList)

    let surcharge = 4545
    let deliveryFee = 0
    let [ppn, setPpn] = useState(0)
    let [subtotal, setSubtotal] = useState(0)
    let [total, setTotal] = useState(0)
    let [paymentSelected, setPaymentSelected] = useState('')

    useEffect(() => {
        setSubtotal(cart_list.reduce((n, {price, quantity}) => n + (price * quantity), 0) || 0)
        setPpn(0.1 * (subtotal + deliveryFee))
        setTotal(subtotal + deliveryFee + ppn + surcharge)
    }, [cart_list, subtotal, deliveryFee, ppn, surcharge])

    return (
        <div className="container section">
            <div className="row my-4">
                <div className="col-lg-10 mx-auto">
                    <Step />
                    <div className="mt-4">
                        <div className="wrapper-menu">
                            <div className="row">
                                <div className="col-lg-6">
                                    <table className="table-item mb-3">
                                        <thead>
                                        <tr>
                                            <th colSpan={3}>Order Summary</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {
                                            cart_list.map((cl, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <td>{cl.title}</td>
                                                        <td className="text-right">x {cl.quantity}</td>
                                                        <td className="text-right">
                                                            Rp. {formatPrice(cl.quantity * cl.price)}
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                        </tbody>
                                    </table>
                                    <table className="table-price">
                                        <tbody>
                                        <tr>
                                            <td>Subtotal</td>
                                            <td className="text-right">{formatPrice(subtotal)}</td>
                                        </tr>
                                        <tr>
                                            <td>Delivery fee</td>
                                            <td className="text-right">{formatPrice(deliveryFee)}</td>
                                        </tr>
                                        <tr>
                                            <td>PPN 10%</td>
                                            <td className="text-right">{formatPrice(ppn)}</td>
                                        </tr>
                                        <tr>
                                            <td>Delivery Surcharge</td>
                                            <td className="text-right">{formatPrice(surcharge)}</td>
                                        </tr>
                                        <tr>
                                            <td className="total-bill">Total</td>
                                            <td className="total-bill text-right">Rp. {formatPrice(total)}</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="col-lg-6 right-product payment-right">
                                    <div className="mb-3">
                                        <div className="title-sec mb-1">Deliver To</div>
                                        <p className="caption">JL. RE. Martadinata, Block B-O No. 10, Ancol, Kec. Pademangan, Jkt Utara, Daerah Khusus Ibukota Jakarta 14430, Indonesia</p>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-md-6">
                                            <button className="btn btn-sm btn-order-outline">Apply Kupon / Promo Code</button>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="total-bill text-right">Rp. {formatPrice(total)}</div>
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <div className="title-sec mb-1">Pay With</div>
                                        <div className="col-md-4">
                                            <div className={`pay-item ${paymentSelected === 'dana' ? 'active' : ''}`}
                                                 onClick={() => setPaymentSelected('dana')} >
                                                <img src={icCheck} alt="ic-check" className="icon-check" />
                                                <img src={icDana} alt="logo-pay" />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className={`pay-item ${paymentSelected === 'ovo' ? 'active' : ''}`}
                                                 onClick={() => setPaymentSelected('ovo')} >
                                                <img src={icCheck} alt="ic-check" className="icon-check" />
                                                <img src={icOvo} alt="logo-pay" />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className={`pay-item ${paymentSelected === 'gopay' ? 'active' : ''}`}
                                                 onClick={() => setPaymentSelected('gopay')} >
                                                <img src={icCheck} alt="ic-check" className="icon-check" />
                                                <img src={icGopay} alt="logo-pay" />
                                            </div>
                                        </div>
                                    </div>
                                    <button className="btn btn-order">Place My Order</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaymentPage
