import React from 'react';
import Navbar from "../home/menu";
import NavbarSecondary from '../cities/NavbarSecondary';
import HeroSection from '../cities/HeroSection';
import Description from '../cities/Description';
import ImageCarousel from '../cities/ImageCarousel'; 
import ThingsToDoPlaces from '../cities/ThingsToDoPlaces';
import PlacesToStay from '../cities/PlacesToStay';
import FoodAndDrink from '../cities/FoodAndDrink';
import RentalCars from '../cities/RentalCars';
import Footer from "../home/footer";
const HomeD = () => {
  return (
    <div className="home">
      <Navbar />
      <NavbarSecondary />
      <HeroSection />
      <Description />
      <ImageCarousel /> 
      <ThingsToDoPlaces/>
      <PlacesToStay />
      <FoodAndDrink/>
      <RentalCars/>
      <Footer/>
    </div>
  );
}

export default HomeD;
