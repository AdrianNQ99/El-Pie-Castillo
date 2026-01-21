import Hero from "../component/Hero";
import Navbar from "../component/Navbar";
import About from "../component/About";
import Menu from "../component/Menu";
import Gallery from "../component/Gallery";
import Reservation from "../component/Reservation";
import Contact from "../component/Contact";
import Footer from "../component/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <section className="min-h-screen">
        <div className="flex min-h-screen flex-col">
          <Hero />
          <About />
        </div>
      </section>
      <Menu />
      <Gallery />
      <Reservation />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
