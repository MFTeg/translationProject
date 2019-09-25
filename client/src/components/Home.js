import React, { Component } from "react";
import Navbar from "./Navbar/index";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
// import LogoImg from "../components/Image/logoImg.png";
// import basketOfKittens from "../image/basket-of-kittens.jpg";

class Search extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Header />
        <Footer />
        {/* <img src="./image/cute-cat.jpeg" alt="Placeholder" /> */}
      </div>
    );
  }
}
export default Search;