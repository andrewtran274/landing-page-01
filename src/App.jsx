import React from "react";
import Header from "./Components/Header";
import Feature from "./Components/Feature";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Presentation from "./Components/Presentation";
import aboutImage from "./assets/App Landing Template/images/Frame 19.png";
import aboutImage2 from "./assets/App Landing Template/images/download.png";
const App = () => {
  return (
    <div className="App">
      <Header />
      <Feature />
      <About
        image={aboutImage}
        title="Comes With All You Need For Daily Life"
        button="Get The App"
      />
      <Presentation />
      <About
        image={aboutImage2}
        title="Download And Get The APP Now"
        button="Download"
      />
      <Contact />
    </div>
  );
};

export default App;
