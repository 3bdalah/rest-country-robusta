import React from 'react'
import {Link} from "react-router-dom"
import './header.scss'

const Header = () => {
    // toggle theme
    const toggleTheme = () => 
        document.body.classList.toggle('dark');

    return (
        <>
            <header>
                  <nav >
                       <div className="container">
                       <Link to="/">
                            <h1>Where in the world?</h1>
                        </Link>
                        <button className="btn-toggle" id="toggle" onClick={()=> toggleTheme()}>
                            {/* <i className="far fa-moon"></i>
                            <i className="fas fa-moon"></i> */}
                            Dark Mode
                        </button>
                       </div>
                  </nav>
            </header>
        </>
    )
}

export default Header
