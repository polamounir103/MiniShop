import { Suspense, lazy, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Loader from "./components/shared/Loader/Loader"; // استخدام الـ Loader
import "./App.css";

// استيراد المكونات بشكل كسول
const NavBar = lazy(() => import("./components/shared/Navbar"));
const Footer = lazy(() => import("./components/shared/Footer"));
const Home = lazy(() => import("./pages/Home"));
const Product = lazy(() => import("./pages/Product"));
const Shop = lazy(() => import("./pages/Shop"));
const Cart = lazy(() => import("./pages/Cart"));

// مكون التمرير إلى الأعلى عند تغيير المسار
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname) window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={<Loader />}>
        <NavBar />
        <ToastContainer />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/products/:id" element={<Product />} />
          <Route exact path="/shop" element={<Shop />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </Suspense>
    </Router>
  );
}

export default App;
