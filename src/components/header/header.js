import React from 'react'
import {Link} from "react-router-dom"
import './header.scss'

import useSound from 'use-sound';
import boop from "../../assests/audios/boop.wav";
const Header = () => {
    const[play] = useSound(boop);
    // toggle theme
    const toggleTheme = () => {
         document.body.classList.toggle('dark');
         
    }
    // open sound 
    return (
        <>
            <header>
                  <nav >
                       <div className="container">
                       <Link to="/">
                            <h1>Where in the world?</h1>
                        </Link>
                        <button className="btn-toggle" id="toggle"  onClick={()=>toggleTheme()}>
                            <span onClick={play} className="sound"></span>
                            Dark Mode
                        </button>
                       </div>
                  </nav>
            </header>
        </>
    )
}

export default Header
