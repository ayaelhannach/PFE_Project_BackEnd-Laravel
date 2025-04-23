import React from "react";
import Navbar from "../home/menu";
import Carousel from "../home/header";
import AboutUs from "../home/aboutHome";
import Features from "../home/categories";
import Destinations from "../home/destinations";
import AddBusiness from "../home/addBus";
import TourGuides from "../home/Guides";
import AddGuide from "../home/addGui";
import ExperienceSection from "../home/topExp";
import Footer from "../home/footer";
import Favorites from "../home/Favorites";
function HomePage() {
    return (
        <div className="w-full min-h-screen">
            <Navbar />
            <Carousel />
            <AboutUs />
            <Features />
            <Destinations />
            <AddBusiness />
            <TourGuides />
            <AddGuide />
            <ExperienceSection />
            <Footer/>
        </div>
    );
}

export default HomePage;
