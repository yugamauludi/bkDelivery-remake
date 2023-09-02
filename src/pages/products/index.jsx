import './ProductPage.scss'
import {useParams} from "react-router-dom";
import {useDispatch} from 'react-redux';
import {addProduct} from "../../store/reducers/cart";
import {menuMasterData} from "../../data";
import {convertStringToSlug, formatPrice} from "../../helpers";
import MenuLeftSidebar from "../../components/menus/MenuLeftSidebar";
import FormQuantity from "../../components/cart/form_quantity/FormQuantity";
import {useState} from "react";

const Product = () => {
    const dispatch = useDispatch()
    let [quantity, setQuantity] = useState(0)
    let {menu, product} = useParams()
    let menuSelected = menuMasterData.find(mn => convertStringToSlug(mn.title) === menu)
    let productSelected = menuSelected.product.find(mn => convertStringToSlug(mn.title) === product)

    const onAddToCart = () => {
        if (quantity < 1) return
        dispatch(addProduct({
            ...productSelected,
            quantity: quantity
        }))
    }
    return (
        <div className="container section">
            <div className="row my-4">
                <div className="col-lg-9 mx-auto">
                    <div className="row">
                        <div className="col-lg-3 mb-3">
                            <MenuLeftSidebar menus={menuMasterData} menuSlug={menu} />
                        </div>
                        <div className="col-lg-9 mb-3">
                            <div className="wrapper-menu">
                                <div className="row h-100">
                                    <div className="col-lg-8">
                                        <div className="py-3">
                                            <div className="text-center">
                                                <div className="product-title mb-3">{productSelected.title}</div>
                                                <p className="product-note mb-4">{productSelected.note}</p>
                                            </div>
                                            <div className="image-product">
                                                <img src={productSelected.image} className="image-product-detail"
                                                     alt="product-img" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 right-product">
                                        <div className="py-3">
                                            <div className="price mb-2">Rp. {formatPrice(productSelected.price)}</div>
                                            <div className="add-on mb-2">ADD ON -</div>
                                            <div className="mb-3">
                                                <FormQuantity
                                                    onQuantityChange={(val) => setQuantity(val)}
                                                />
                                            </div>
                                            <button
                                                className="btn btn-order"
                                                onClick={onAddToCart}
                                            >Add To Cart</button>
                                        </div>
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

export default Product