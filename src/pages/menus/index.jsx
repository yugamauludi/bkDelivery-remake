import "./MenuPage.scss"
import {useParams, Link} from "react-router-dom";
import {convertStringToSlug, formatPrice} from "../../helpers";
import {menuMasterData} from "../../data";
import MenuLeftSidebar from "../../components/menus/MenuLeftSidebar";

const Menu = () => {
    let {menu} = useParams()
    let menus = menuMasterData
    let menuSelected = menus.find(mn => convertStringToSlug(mn.title) === menu)
    return (
        <div className="container section">
            <div className="row my-4">
                <div className="col-lg-9 mx-auto">
                    <div className="row">
                        <div className="col-lg-3 mb-3">
                            <MenuLeftSidebar menus={menus} menuSlug={menu} />
                        </div>
                        <div className="col-lg-9 mb-3">
                            <div className="row">
                                {
                                    menuSelected.product.map((pr, index) => {
                                        return (
                                            <div className="col-lg-6 my-3" key={index}>
                                                <Link
                                                    to={`/products/${convertStringToSlug(menuSelected.title)}/${convertStringToSlug(pr.title)}`}
                                                    className="text-decoration-none">
                                                    <div className="wrapper-menu">
                                                        <div className="row">
                                                            <div className="col-4 col-lg-12">
                                                                <img src={pr.image} className="image-menu"
                                                                     alt="product-pic" />
                                                            </div>
                                                            <div className="col-8 col-lg-12 product-caption">
                                                                <div className="product-title mb-1">{pr.title}</div>
                                                                <div className="product-price">
                                                                    Rp. {formatPrice(pr.price)}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Menu