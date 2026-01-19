import Hero from "./Hero";
import Navbar from "./Navbar";
import About from "./About";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
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
