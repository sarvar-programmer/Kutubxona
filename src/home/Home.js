import React from "react";
import Body from './Body.js'
import Footer from "./Footer.js";
import Contact from "./Contact.js";
import News from "./News.js";
import Header from "./Header.js";

export default class Home extends React.Component {

  render() {
  
    return (
      <>
        <Header/>
        <Body/>
        <News/>
        <Contact/>
        <Footer/>
      </>
    )
  }
}