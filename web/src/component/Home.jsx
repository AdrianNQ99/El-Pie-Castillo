import Hero from "./Hero";
import Navbar from "./Navbar";
import About from "./About";

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
      {/*
        <Menu/>
        <Gallery/>
        <Reservation/>
        <Contact/>
        <Footer/>
        */}
    </div>
  );
};

export default Home;
