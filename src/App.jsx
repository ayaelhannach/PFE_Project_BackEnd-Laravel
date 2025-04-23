import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./components/forms/login";
import HomePage from "./components/pages/homePage";
import BusinessForm from "./components/forms/addBusiness";
import SignUp from "./components/forms/signin";
import ResetPassword from "./components/forms/resetPassword";
import ProfileForm from "./components/forms/addGuides";
import AboutPage from "./components/pages/aboutPage";
import Sidebar from "./components/admin/menuAdmin"; // Keep the Sidebar import
import AdminPage from "./components/pages/adminPage";
import AdminProfile from "./components/admin/AdminProfile";
import Favorites from "./components/home/Favorites";
import ContactPage from "./components/home/contact";
import SubmissionsTable from "./components/admin/Submissions";






import HomeD from "./components/pagesD/Home"
import About from './components/pagesD/About';
import Service from './components/pagesD/Service';
import Contact from './components/pagesD/Contact';
import SeeMore1 from './components/cities/SeeMore1';
import SeeMore2 from './components/cities/SeeMore1'; 
import SeeMore3 from './components/cities/SeeMore1'; 
import SeeMore4 from './components/cities/SeeMore1';
import DetailPlace from './components/cities/DetailPlace';
import DetailsRental from './components/cities/DetailsRental';
import FoodDetails from './components/cities/FoodDetails';
import FoodAndDrink from './components/cities/FoodAndDrink';
import PlacesToStay from './components/cities/PlacesToStay';
import HotelDetails from './components/cities/HotelDetails';
import Hotels from './components/pagesD/Hotels';
import Activities from './components/pagesD/Activities';
import Restaurants from './components/pagesD/Restaurants';
import RentalCars from './components/pagesD/RentalCars2';
import Cheznous from './components/cities/Cheznous'; 
import HeroSection3 from './components/cities/HeroSection3';
import HeroSection2 from './components/cities/HeroSection2';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signin" element={<SignUp />} />
        <Route path="/forget_password" element={<ResetPassword />} />
        <Route path="/profileGuide" element={<ProfileForm />} />
        <Route path="/AddBuss" element={<BusinessForm />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/create_signup" element={<SignUp />} />
        <Route path="/signup_login" element={<LoginPage />} />
        <Route path="/your-cancel-destination" element={<HomePage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/admin-profile" element={<AdminProfile />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/contact" element={<ContactPage />} />



        <Route path="/admin-sidebar" element={<Sidebar />} /> {/* Keep Sidebar route */}
        <Route path="/submission" element={<SubmissionsTable />} />








        
        
        <Route path="/tanger" element={<HomeD />} />
        <Route path="/see-more" element={<SeeMore1 />} />
        <Route path="/seemore2" element={<SeeMore2 />} />
        <Route path="/seemore3" element={<SeeMore3 />} />
        <Route path="/seemore3" element={<SeeMore3 />} />
        <Route path="/seemore4" element={<SeeMore4 />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/hotels" element={<Hotels/>} />
        <Route path="/rental-cars" element={<RentalCars />} />
        <Route path="/food-and-drink" element={<FoodAndDrink />} />
        <Route path="/food-and-drink/:nom" element={<FoodDetails />} />
        <Route path="/logo" element={<Cheznous />} /> 
        <Route path="/details/:nom" element={<DetailPlace />} />
        <Route path="/rental-cars/:nom" element={<DetailsRental />} />
        <Route path="/" element={<PlacesToStay />} />
        <Route path="/hotel/:nom" element={<HotelDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Hotel" element={<HeroSection2/>} />
        <Route path="/car-rental" element={<HeroSection3/>} />


      </Routes>
    </Router>
  );
}

export default App;
