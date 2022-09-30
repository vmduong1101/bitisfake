import React, { useEffect, useState } from 'react'
import './App.css';
import { loadAnimation } from "lottie-web";
import { defineLordIconElement } from "lord-icon-element";
import Header from './Common/Header';
import Footer from './Common/Footer';
import { products } from './Products';
import Animated from './Common/Animated';
import Scroll from './Common/Scroll';

defineLordIconElement(loadAnimation);

function App() {


  return (
    <div className="App font-body min-h-screen">
      <Header products={products} />
      <Animated />
      <Footer />
      <Scroll />
    </div>
  );
}

export default App;
