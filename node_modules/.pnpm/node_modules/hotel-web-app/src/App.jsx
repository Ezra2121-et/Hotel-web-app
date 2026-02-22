import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageLoader from "./components/PageLoader";
import CustomCursor from "./components/CustomCursor";
import ScrollToTop from "./components/ScrollToTop";
import MobileBookingButton from "./components/MobileBookingButton";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeatureBar from "./components/FeatureBar";
import About from "./components/About";
import VibeSection from "./components/VibeSection";
import Menu from "./components/Menu";
import SpecialOffers from "./components/SpecialOffers";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Reservations from "./components/Reservations";
import Location from "./components/Location";
import Footer from "./components/Footer";

// Admin Pages
import Login from "./pages/admin/Login";
import Dashboard from "./pages/admin/Dashboard";
import Bookings from "./pages/admin/Bookings";
import Rooms from "./pages/admin/Rooms";

function LandingPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeatureBar />
        <About />
        <VibeSection />
        <Menu />
        <SpecialOffers />
        <Gallery />
        <Testimonials />
        <Reservations />
        <Location />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <PageLoader />
      <CustomCursor />
      <ScrollToTop />
      <MobileBookingButton />

      <Routes>
        <Route path="/" element={<LandingPage />} />

        {/* Admin Routes */}
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/bookings" element={<Bookings />} />
        <Route path="/admin/rooms" element={<Rooms />} />
      </Routes>
    </Router>
  );
}

