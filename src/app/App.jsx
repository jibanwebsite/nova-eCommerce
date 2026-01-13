import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../features/home/Home";
import { Wishlist } from "../features/wishlist/wishlist";
import { Cart } from "../features/cart/Cart";
import { Login } from "../features/auth/Login";
import { ProductListing } from "../features/product/ProductListing";
import { ProductDetail } from "../features/product/ProductDetail";
import { ShopHome } from "../features/shop/ShopHome";
import { Contact } from "../features/contact/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/men-tshirts" element={<ProductListing />} />
        <Route path="/clothing" element={<ProductListing />} />
        <Route path="/shop/:gender/:category" element={<ProductListing />} />
        <Route path="/shop/:gender" element={<ShopHome />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
