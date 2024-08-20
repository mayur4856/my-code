import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Fragment } from "react";


export const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </Fragment>
  );
};

// return React.createElement ("h1", null, "Hello Mayur Bhai");

