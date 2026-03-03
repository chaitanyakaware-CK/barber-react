import React from "react";
import "./Header.css"
function Header(){
    return(
        <>
            <header class="header">
                <div class="container content">
                    <div class="logo">HAIRSALONE<span>.</span></div>
                    <nav class="menu">
                        <ul>
                            <li> <a href="#home">Home</a></li>
                            <li> <a href="#about">About</a></li>
                            <li> <a href="#services"> Services </a></li>
                            <li> <a href="#portfolio"> Portfolio </a></li>
                        </ul>
                    </nav>

                    <div class="header-btn">
                        <button class="btn-primary">Book Now</button>
                    </div>
                </div>
            </header>
        
        </>
    )

}
export default Header