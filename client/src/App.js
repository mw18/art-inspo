import './App.css';
import React from 'react'
import Header from '../src/components/Header'
import Main from '../src/components/Main'



export default function App() {

  return (
    <div className="container">
    <Header className="item"/>
    <Main className="item"/>
   
    </div>
  );
}