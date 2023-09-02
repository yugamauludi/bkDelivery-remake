import {
  Routes,
  Route
} from "react-router-dom";
import './custom.scss';
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import TheHeader from "./components/TheHeader";
import HomePage from "./pages/HomePage";
import TheFooter from "./components/TheFooter";
import Menu from "./pages/menus";
import Product from "./pages/products";
import CartPreview from "./pages/cart/PreviewPage";
import DeliveryPage from "./pages/cart/DeliveryPage";
import PaymentPage from "./pages/cart/PaymentPage";

const App = () => {
  return (
    <>
      <TheHeader />
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/menus/:menu" element={ <Menu /> } />
        <Route path="/products/:menu/:product" element={ <Product /> } />
        <Route path="/cart/preview" element={ <CartPreview /> } />
        <Route path="/cart/delivery" element={ <DeliveryPage /> } />
        <Route path="/cart/payment" element={ <PaymentPage /> } />
      </Routes>
      <TheFooter />
    </>
  );
}

export default App;
