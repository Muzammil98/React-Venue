import React from "react";
import "./resources/styles.css";
import { Element } from "react-scroll";

import Header from "./components/header_footer/Header";
import Featured from "./components/featured";
import VenueNfo from "./components/venue_info";
import Highlight from "./components/highlights";
import Pricing from "./components/pricing";
import Location from "./components/location";
import Footer from "./components/header_footer/Footer";

function App() {
  return (
    <div className="App" style={{ height: "1500px" }}>
      <Header />
      <Element name="Featured">
        <Featured />
      </Element>
      <Element name="Venue">
        <VenueNfo />
      </Element>
      <Element name="Highlights">
        <Highlight />
      </Element>
      <Element name="Pricing">
        <Pricing />
      </Element>
      <Element name="Location">
        <Location />
      </Element>
      <Footer />
    </div>
  );
}

export default App;
