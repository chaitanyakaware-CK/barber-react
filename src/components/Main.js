import React from "react";
import Barber from "../asset/Barber.jpg"
import Hair2 from "../asset/Hair2.jpg"
import Hair3 from "../asset/Hair3.jpg"
import Hair4 from "../asset/Hair4.jpg"
import Hair5 from "..//asset/Hair5.jpg"
import Hair6 from "..//asset/Hair6.jpg"

import "./Main.css"
function Main(){
    return(
        <>
    <main>

        {/* Main Banner */}
        <section class="banner" id="home">
            <div class="overlay">
                <div class="container banner-content">
                    <h1>Expert Hair Styling <br/>For Your Daily Look</h1>
                    <p>Experience the ultimate in hair care and styling with our professional team.</p>
                    <a href="#services" class="btn-primary">View Our Services</a>
                </div>
            </div>
        </section>

        {/* About section */}
        <section class="about-section" id="about">
            <div class="container about-grid">
                <div class="about-image">
                    {/* img */}
                    <img src={Barber} alt="barber"/>
                </div>
                <div class="about-text">
                    <span class="sub-title">Since 2010</span>
                    <h2>We Are Best Hair Salon <br/>In The City</h2>
                    <p>Our salon provides a relaxing atmosphere where we offer a wide range of hair services including cutting, styling, and coloring. Our expert stylists are dedicated to providing you with the best experience possible.</p>
                    <button class="btn-primary">Learn More</button>
                </div>
            </div>
        </section>

        {/* Service Section */}
        <section class="services-section" id="services">
            <div class="container">
                <div class="section-header">
                    <h2>Our Services</h2>
                    <p>Choose from our wide range of premium salon treatments.</p>
                </div>
                <div class="services-grid">
                    <div class="service-card">
                        <div class="icon">✂️</div>
                        <h3>Haircut & Styling</h3>
                        <p>Professional cuts and styles tailored to your face shape and personal preference.</p>
                    </div>
                    <div class="service-card">
                        <div class="icon">🎨</div>
                        <h3>Hair Coloring</h3>
                        <p>Full color, highlights, or balayage using high-quality, long-lasting products.</p>
                    </div>
                    <div class="service-card">
                        <div class="icon">🧖‍♀️</div>
                        <h3>Hair Treatments</h3>
                        <p>Nourishing treatments to restore health, shine, and strength to your hair.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Portfolio Section */}
        <section class="portfolio" id="portfolio">
            <div class="portfolio-header">
                    <h2>Our Portfolio</h2> <br/>
            </div>
            <div class="portfolio-header">
                <p>Crafting confidence, one strand at a time.</p>
            </div>
            <div class="style">
                <img src={Hair2} alt="Hair2" height={"350px"}/>
                <img src={Hair3} alt="Hair3" height={"350px"}/>
                <img src={Hair4} alt="Hair4" height={"350px"}/>
                <img src={Hair5} alt="Hair5" height={"350px"}/>
                <img src={Hair6} alt="Hair6" height={"350px"}/>
            </div>
        </section>
    </main>

        
        </>
    )
}
export default Main