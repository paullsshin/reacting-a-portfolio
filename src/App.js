import React from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css"
import About from './components/pages/About'
import Nav from "./components/Nav";
import Footer from './components/Footer'
import Home from './components/pages/Home'
import Portfolio from './components/pages/Portfolio'
import Contact from './components/pages/Contact'
import Resume from './components/pages/Resume'
// not sure whats going on

function App() {
  let Component
  switch (window.location.pathname) {
    case "/":
      Component = <Home />
      break
    case "/About":
      Component = <About />
      break
    case "/Portfolio":
      Component = <Portfolio />
      break
    case "/Contact":
      Component = <Contact />
      break
    case "/Resume":
      Component = <Resume />
      break
      default: 
       Component = <Home />
    }
  return (
    <>
      <Nav />
      <div className="container">
      {Component}
      {/* <About /> */}
      {/* <Contact /> */}
      </div>
      <footer className="bottom">
      <Footer />
      </footer>
    </>
  );
}

export default App;
