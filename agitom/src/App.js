import React from "react";
import './App.css';
import Footer from "./components/Footer/Footer";
import Header from './components/Header/Header';
import Home from "./components/Home";

function App() {
  return (
    <div className="app">
      <Header />
      <Home />

      <Footer />

    </div>
  );
}

export default App;
