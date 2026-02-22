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

export default function App() {
  return (
    <>
      <PageLoader />
      <CustomCursor />
      <ScrollToTop />
      <MobileBookingButton />
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
