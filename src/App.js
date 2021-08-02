import React,{ useState, useEffect } from 'react';
import AboutUs from './AboutUs';
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
    <div className="app">
      <MediaQuery maxWidth={1050}>
        <NavBarMobile scrollNav={scrollNav}/>
      </MediaQuery >
      <MediaQuery minWidth={1052}>
        <NavBar scrollNav={scrollNav}/>
      </MediaQuery>
      <Header/>
      <AboutUs/>
      <MediaQuery maxWidth={1050}>
        <ServicesMolible/>
      </MediaQuery>
      <MediaQuery minWidth={1050}>
        <ServicesDesk/>
      </MediaQuery>
      <ContactUs/>
    </div>
  );
}

export default App;
