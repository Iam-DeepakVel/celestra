import React from "react";
import "./footer.css"
import { FontAwesomeIcon } from '@fontawesome/react-fontawesome'
import { faPhone } from '@fontawesome/free-solid-svg-icons';
import { faLocationPin } from '@fontawesome/free-solid-svg-icons';
import { faMailBulk } from '@fontawesome/free-solid-svg-icons';
import { faCopyright } from '@fontawesome/free-solid-svg-icons';
import { faHeart } from '@fontawesome/free-solid-svg-icons';
import { faInstagram } from "@fontawesome/free-brands-svg-icons";



const Footer = () => {
<FontAwesomeIcon icon={faMailBulk} style={{color: 'white'}} />
    const handleClickHome = () => {
        const element = document.getElementById('hero-container')
        if(element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    };

    const handleClickVenue = () => {
            const element = document.getElementById('venue-container')
            if(element) {
                element.scrollIntoView({ behavior: 'smooth' })
            }
    };
    
    const handleClickEvent = () => {
            const element = document.getElementById('event-container')
            if(element) {
                element.scrollIntoView({ behavior: 'smooth' })
            }
    };

    const handleClickConut = () => {
            const element = document.getElementById('countDown-container')
            if(element) {
                element.scrollIntoView({ behavior: 'smooth' })
            }
    };


    return(
        <section className="footer">
            <div className="contentBox">
                
                    <div className="about-us">
                        <div className="headding">
                            <h3 className="celestraHeroFont text-2xl mb-2 tracking-widest text-center">
                                <span className="celestraHeroFont text-4xl text-red-600 tracking-widest">A</span>
                                bout 
                                <span className="celestraHeroFont text-4xl text-red-600 tracking-widest">U</span>
                                s
                            </h3>
                        </div>
                        <div className="abt-content">
                            <p className="text-md mb-4  celestraHeroFont">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <div className="insta-icon">
                                <a href="https://www.instagram.com/it_symposium_2k23/"><FontAwesomeIcon icon={faInstagram} size="2x" style={{color: "white"}}/></a>
                            </div>
                        </div>
                    </div>
                    <div className="navigation">
                        <div className="headding">
                            <h3 className="celestraHeroFont text-2xl mb-2 tracking-widest text-center">
                                <span className="celestraHeroFont text-4xl text-red-600 tracking-widest">N</span>
                                avigation
                            </h3>
                        </div>
                        <div className="nav-btn">
                            <span><button className="celestraHeroFont" onClick={handleClickHome}><span className="celestraHeroFont text-2xl text-red-600 tracking-widest">H</span>ome</button></span>
                            <span><button className="celestraHeroFont" onClick={handleClickVenue}><span className="celestraHeroFont text-2xl text-red-600 tracking-widest">V</span>enue</button></span>                  
                            <span><button className="celestraHeroFont" onClick={handleClickConut}><span className="celestraHeroFont text-2xl text-red-600 tracking-widest">C</span>ount <span className="text-2xl text-red-600 tracking-widest">D</span>own</button></span>
                            <span><button className="celestraHeroFont" onClick={handleClickEvent}><span className="celestraHeroFont text-2xl text-red-600 tracking-widest">E</span>vents</button></span>
                        </div>
                    </div>
                
                
                    <div className="contact">
                        <div className="headding">
                            <h3 className="celestraHeroFont text-2xl mb-2 tracking-widest text-center">
                                <span className="celestraHeroFont text-4xl text-red-600 tracking-widest">C</span>
                                ontact
                            </h3>
                        </div>
                        <div className="contact-info text-md mb-4  celestraHeroFont">
                            <div className="contact-content">
                                <div className="icon">
                                    <FontAwesomeIcon icon={faLocationPin} style={{color: 'white'}} />
                                </div>
                                <div className="icon-content">
                                    <span>Lorem ipsum dolor sit</span>
                                </div>
                            </div>
                            <div className="contact-content">
                                <div className="icon">
                                    <FontAwesomeIcon icon={faPhone} style={{color: 'white'}} />
                                </div>
                                <div className="icon-content">
                                    <span>Lorem ipsum dolor sit</span>
                                </div>
                            </div>                            
                            <div className="contact-content">
                                <div className="icon">
                                    <FontAwesomeIcon icon={faMailBulk} style={{color: 'white'}} />
                                </div>
                                <div className="icon-content">
                                    <span>Lorem ipsum dolor sit</span>
                                </div>
                            </div>
                        </div>
                    </div>                
            </div>
            <div className="cpyryt">
                <div className="cpyrytContent">
                    <span className="cpyryt-icon"><FontAwesomeIcon icon={faCopyright} style={{color: 'white'}} /></span>
                    <span className="cpyryt-content celestraHeroFont tracking-widest text-center">2023 IT. Made with</span>
                    <span className="heart-icon"><FontAwesomeIcon icon={faHeart} beat style={{color: "#be2520"}} /></span>
                </div>
            </div>
        </section>
    )
}
export default Footer