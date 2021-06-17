import React from "react";
import GlobalStyle from "./globalStyles";
import Home from "./pages/HomePage/Home";
import Services from "./pages/Vet/Services";
import Products from "./pages/Proposs/Products";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { Navbar, Footer } from "./components";
import MyChatBot from "./shared/chatbot/ChatBot";
import "./App.css";
import {ThemeProvider} from 'styled-components';
import Register from "./pages/Register/register";
const Theme = {

 

   
  primaryColor:'#A0DACE',
  secondaryColor:'#F9A195',
  canvasColor:'#4D625E',
  backgroundColor:'#EFEEEA',
  text:{
  primaryTextColor:'#000000',
  secondaryTextColor:'#000',
  titleColor:'#3A364E'
  }
}
function App() {
  return (
    <Router>
    <ThemeProvider theme={Theme}>
      <GlobalStyle/>
      <ScrollToTop />
     <MyChatBot/>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/services" exact component={Services} />
        <Route path="/products" exact component={Products} />
        <Route path="/register" exact component={Register} />
      </Switch>
      <Footer />
      
    
    </ThemeProvider>
    </Router>
  );
}

export default App;

