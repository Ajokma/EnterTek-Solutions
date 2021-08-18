import React,{ useState, useEffect } from 'react';
import AboutUs from './AboutUs';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import ContactUs from './ContactUs';
import Header from './Header';
import NavBar from './NavBar';
import ServicesDesk from './ServicesDesk';
import MediaQuery from 'react-responsive'
import ServicesMolible from './ServicesMolible';
import NavBarMobile from './NavBarMobile';

function App(props) {
  const [scrollNav, setScrollNav]= useState(false);

    const changeNav =() =>{
        if( window.scrollY >= 70){
            setScrollNav(true);
        } else{
            setScrollNav(false)
        }
    }
    useEffect(()=>{
        window.addEventListener('scroll', changeNav);
    }, []);
  return (
    <Router className="app">
      <MediaQuery maxWidth={1250}>
        <NavBarMobile scrollNav={scrollNav}/>
      </MediaQuery >
      <MediaQuery minWidth={1252}>
        <NavBar scrollNav={scrollNav}/>
      </MediaQuery>
      <Switch>
        <Route exact path="/EnterTek-Solutions/about">
          <AboutUs/>
        </Route>
        <Route  path="/EnterTek-Solutions">
          <Header/>
          <MediaQuery maxWidth={1250}>
            <ServicesMolible/>
          </MediaQuery>
          <MediaQuery minWidth={1251}>
            <ServicesDesk/>
          </MediaQuery>
          <ContactUs/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
