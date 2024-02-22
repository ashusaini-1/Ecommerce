import Navbar from "./components/header/Navbar";
// import TopNav from "./components/header/TopNav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Footer from "./components/footer/Footer";
import ProductDetail from "./components/productDetails/ProductDetail";
import BuyNow from "./components/payment/BuyNow";
import AddProducts from "./components/addProducts/AddProducts";
import Body from "./components/mainBody/Body";
 import UserProfile from "./components/profile/UserProfile";
import ContactUs from "./components/contactUs/Contact";
import AboutUs from "./components/contactUs/AboutUs";
import ListedProducts from "./components/listedProducts/ListedProducts";


function App() {
  return (
    <Router>
   {/* <TopNav/> */}
      <Navbar />
      <div style={{ paddingTop: "2%", width: "100%" }}>
        <Routes>
          <Route path="/" element={<Body/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/add/product" element={<AddProducts />} />
          <Route path="/product/detail" element={<ProductDetail />} />
          <Route path="/purchase" element={<BuyNow />} />
          <Route path="/user/profile" element={<UserProfile />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about" element={<AboutUs />} />
         {/* <Route path="/carousel" element={<Carousel/>} />  */}
         <Route path="/product/categories/:data" element={<ListedProducts />} />
          <Route path="/*" element={<Login />} />
        
        </Routes>
      </div>

      <Footer />
    </Router>
  );
}

export default App;
