import "./PreviewPage.scss";
import Step from "../../components/cart/step/Step";
import icTrash from "../../assets/icons/ic_trash.png";
import FormQuantity from "../../components/cart/form_quantity/FormQuantity";
import {Link} from "react-router-dom";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {cartList, removeProduct, updateQuantity} from "../../store/reducers/cart";
import {formatPrice} from "../../helpers";
const CartPreview = () => {
    const dispatch = useDispatch();
    const cart_list = useSelector(cartList)

    const subTotal = () => {
        return cart_list.reduce((n, {price, quantity}) => n + (price * quantity), 0) || 0
    }

    const maxNote = 15
    let [note, setNote] = useState('')
    const onNoteTyping = (value) => {
        if (value.length <= maxNote) setNote(value)
    }

    return (
        <div className="container section">
            <div className="row my-4">
                <div className="col-lg-10 mx-auto">
                    <Step />
                    <div className="mt-4">
                        <div className="wrapper-menu">
                            <div className="row">
                                <div className="col-lg-9">
                                    <table className="table-cart">
                                        <thead>
                                        <tr>
                                            <th colSpan={2}>Menu Item</th>
                                            <th>Quantity</th>
                                            <th className="text-right">Subtotal</th>
                                            <th></th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {
                                            cart_list.map((cl, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <td>
                                                            <img src={cl.image} className="image" alt="product-pic" />
                                                        </td>
                                                        <td>
                                                            <div className="title-product">{cl.title}</div>
                                                            {/*<div className="subtitle">Drink: Coke</div>*/}
                                                        </td>
                                                        <td>
                                                            <FormQuantity
                                                                originQuantity={cl.quantity}
                                                                onQuantityChange={(val) => {
                                                                    dispatch(updateQuantity({
                                                                        ...cl,
                                                                        quantity: val
                                                                    }))
                                                                }} />
                                                        </td>
                                                        <td className="text-right">
                                                            <div className="price">Rp. {formatPrice(cl.price)}</div>
                                                        </td>
                                                        <td>
                                                            <img src={icTrash} alt="trash" className="icon-trash"
                                                                 onClick={() => dispatch(removeProduct(cl))} />
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                        </tbody>
                                    </table>
                                    <div className="my-4">
                                        <Link to="/" className="decoration-none">
                                            <div className="font-weight-600 text-gold">Continue Shopping</div>
                                        </Link>
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Add Notes</label>
                                        <input className="form-control" maxLength={maxNote}
                                               onChange={e => onNoteTyping(e.target.value)} />
                                        <div className="max-content">{note.length}/{maxNote}</div>
                                    </div>
                                </div>
                                <div className="col-lg-3 right-product">
                                    <div className="py-3">
                                        <div className="title-subtotal mb-1">Order Subtotal*</div>
                                        <div className="cart-price mb-2">Rp. {formatPrice(subTotal())}</div>
                                        <div className="note-cart mb-4">*Price might change due to your delivery location.</div>
                                        {/*<button className="btn btn-order mb-2">Login To Order</button>*/}
                                        <Link className="btn btn-link btn-link-outline" to={`/cart/delivery`}>
                                            Continue as Guest
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartPreview