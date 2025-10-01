import React, { useEffect } from "react";
import "./index.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Homepage from "./pages/Homepage";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import ConnectWithUs from "./pages/ConnectWithUs";
import Accreditatons from "./pages/Accreditatons";
import Info from "./pages/Info";
import PageNotFound from "./components/PageNotFound";

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => {
  return (
    <Router>
      <Header />
      <ScrollToTop />
      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/info" element={<Info />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/connect" element={<ConnectWithUs />} />
          <Route path="/accreditations" element={<Accreditatons />} />
          {/* Catch-all route for 404s */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
