import React, { Component } from 'react';
import './App.css';
import  Header from './Components/header';
import  Footer from './Components/footer';



class  App extends Component{
  render(){

 

  return (


    <div className="App">
         <Header />
    <div className="Content">
      <p>    Hello , this is my First Step in React</p>
    </div>
        <Footer />
  </div>



  );
}}

export default App;
