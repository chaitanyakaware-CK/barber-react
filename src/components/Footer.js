import React from "react";
import "./Footer.css"
function Footer(){
    return(
        <>

    <footer class="footer">
        <div class="container grid">
            <div class="footer-content">
                <h3>Hairsalone<span>.</span></h3>
                <p>Providing premium hair care and styling services since 2010. Your beauty is our passion.</p>
            </div>
            <div class="footer-content">
                <h4>Quick Links</h4>
                <ul>
                    <li>Our Services</li>
                    <li>Special Offers</li>
                    <li>Stylists</li>
                </ul>
            </div>
            <div class="footer-content">
                <h4>Contact Us</h4>
                <p>123 Hairsalone, Nagpur City</p>
                <p>+91 1234567890</p>
            </div>
        </div>
        <div class="bottom">
            <p>&copy; 2026 Hairsalone. All Rights Reserved.</p>
        </div>
    </footer>

        
        </>
    )

}
export default Footer