import "./DeliveryPage.scss";
import Step from "../../components/cart/step/Step";
import {Link} from "react-router-dom";

const DeliveryPage = () => {
    return (
        <div className="container section">
            <div className="row my-4">
                <div className="col-lg-10 mx-auto">
                    <Step />
                    <div className="mt-4">
                        <div className="wrapper-menu">
                            <div className="row">
                                <div className="col-lg-5">
                                    <div className="font-weight-600">GUEST DETAIL</div>
                                    <div className="form-group">
                                        <input className="form-control" placeholder="Full Name" />
                                    </div>
                                    <div className="form-group form-phone">
                                        <div className="country-code">+62</div>
                                        <input className="form-control input-phone" placeholder="Mobile Number"
                                               type="number" />
                                    </div>
                                </div>
                                <div className="col-lg-7 right-product address">
                                    <h5 className="text-old-gold font-weight-600">Lokasi Pengantaran</h5>
                                    <div className="my-3">
                                        <h6 className="mb-1">1. Set Lokasi Pengantaran di Peta</h6>
                                        <p className="note">Pastikan pin lokasi sudah sesuai dengan lokasi pengantaran</p>
                                        <iframe
                                            title={`title-${(Math.random() + 1).toString(36).substring(2)}`}
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15867.57988111059!2d106.82964875!3d-6.144807299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f59269e62e3d%3A0xb3da35d58f3f6382!2sJakarta%20International%20Expo%2C%20RW.10%2C%20East%20Pademangan%2C%20Pademangan%2C%20Central%20Jakarta%20City%2C%20Jakarta%2014410!5e0!3m2!1sen!2sid!4v1683650863691!5m2!1sen!2sid"
                                            width="100%" loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                                    </div>
                                    <div className="my-3">
                                        <h6 className="mb-1">2. Berikan Alamat Lengkap</h6>
                                        <p className="note">Tambahkan catatan atau acuan jika perlu (contoh: "di sebelah salon")</p>
                                        <textarea
                                            className="form-control"
                                            placeholder="Mohon set lokasi pengantaran di peta sebelum mengisi alamat pengantaran">
                                        </textarea>
                                    </div>
                                    <Link to="/cart/payment" className="btn btn-warning btn-order">Continue</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeliveryPage
