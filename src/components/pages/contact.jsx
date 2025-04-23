import React from "react";
import Navbar from "../home/menu";
import Carousel from "../about/HeaderAbout";
import Footer from "../home/footer";
import ExperienceGrid from "../about/categories";


function Contact() {
    return (
        <div className="w-full min-h-screen">
            <Navbar />
            <Carousel/>
            
            <Footer/>
        </div>
    );
}

export default Contact;
