import React from "react";
import Home from "./home/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import Books from "./books/Books";

export default class App extends React.Component{
  render(){
    return(
      <>
      <Home/>
      <Books/>
      </>
      
    )
   
  }
}
