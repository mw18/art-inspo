import './App.css';
import React from 'react'
import Header from '../src/components/Header'
import Main from '../src/components/Main'
import Footer from '../src/components/Footer'



export default function App() {

  return (
    <div className="container">
    <Header />
    <Main />
    <Footer/>
   
    </div>
  );
}