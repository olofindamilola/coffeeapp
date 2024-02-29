import React from 'react'
import './navbar.scss'
import twitter from '../../images/twitter.svg'
import logo from '../../images/logo-black.svg'
import ig from '../../images/instagram.svg'
import fb from '../../images/facebook.svg'
import linkedln from '../../images/linkendln.svg'
import search from '../../images/search-icon.svg'

const Navbar = () => {
  return (
    <div className='container'>
      <div className="nav-container">
        <div className="logoContainer">
         <img className="logo"src={logo} alt="Coffee roastery logo" />
          <form className='search'>
              <img src={search} alt="Search icon" />
              <input type="text" placeholder='search' />
                    <div className="socials">
                      <img className="icon" src={linkedln} alt="LinkedIn icon" />
                      <img className="icon" src={twitter} alt="Twitter icon" />
                      <img className="icon" src={fb} alt="Facebook icon" />
                      <img className="icon" src={ig} alt="Instagram icon" />
                    </div>    
          </form>
        </div>
              <div className="side">
                
               
                <div className="nav-links">
                  <div className="nav-link"><a href="/about">About</a></div>
                  <div className="nav-link"><a href="/contact">Events</a></div>
                  <div className="nav-link"><a href="/list">Nordic roaster</a></div>
                  <div className="nav-link"><a href="/event">Results</a></div>
                  <div className="nav-link"><a href="/event">Links</a></div>
                  <div className="nav-link"><a href="/event">Contact</a></div>
                 </div> 
            </div>
      </div>
    </div>
  )
}

export default Navbar