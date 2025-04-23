import tangerCarRentalImg from '../assets/tanger_car_rental.jpg';
import prestigeAutoImg from '../assets/prestige_auto.jpg';
import luxuryDriveImg from '../assets/luxury_drive.jpg';
import atlasRentCarImg from '../assets/atlas_rent_car.jpg';
import quickCarRentalImg from '../assets/quickcar_rental.jpg';
import speedyRentImg from '../assets/speedy_rent.jpg';
import eliteCarHireImg from '../assets/elite_car_hire.jpg';
import globalDriveImg from '../assets/global_drive.jpg';
import moroccoRentCarsImg from '../assets/morocco_rent_cars.jpg';
import Navbar from "../home/menu";
import Footer from "../home/footer";
import HeroSection3 from '../cities/HeroSection3';
import FilterCars from '../cities/FilterCars';
import NavbarSecondary from '../cities/NavbarSecondary';



const rentalAgencies = [
  { 
    name: "Tanger Car Rental",
    address: "Avenue Mohamed V, Tanger, Maroc",
    phone: "+212 6 12 34 56 78",
    image: tangerCarRentalImg,
  },
  { 
    name: "Prestige Auto",
    address: "Rue de la Liberté, Tanger, Maroc",
    phone: "+212 6 98 76 54 32",
    image: prestigeAutoImg,
  },
  { 
    name: "Luxury Drive",
    address: "Boulevard Pasteur, Tanger, Maroc",
    phone: "+212 5 39 45 78 90",
    image: luxuryDriveImg,
  },
  { 
    name: "Atlas Rent Car",
    address: "Route de Rabat, Tanger, Maroc",
    phone: "+212 6 22 33 44 55",
    image: atlasRentCarImg,
  },
  { 
    name: "QuickCar Rental",
    address: "Gare ONCF, Tanger Ville",
    phone: "+212 6 55 44 33 22",
    image: quickCarRentalImg,
  },
  { 
    name: "Speedy Rent",
    address: "Aéroport Ibn Battouta, Tanger",
    phone: "+212 6 88 99 77 66",
    image: speedyRentImg,
  },
  { 
    name: "Elite Car Hire",
    address: "Zone industrielle Gzenaya, Tanger",
    phone: "+212 6 45 67 89 01",
    image: eliteCarHireImg,
  },
  { 
    name: "Global Drive",
    address: "Corniche Malabata, Tanger",
    phone: "+212 5 39 12 34 56",
    image: globalDriveImg,
  },
  { 
    name: "Morocco Rent Cars",
    address: "Port de Tanger Ville",
    phone: "+212 6 11 22 33 44",
    image: moroccoRentCarsImg,
  }
];

const RentalCars = () => {
  return ( <> <Navbar/>
  <NavbarSecondary/>
  <HeroSection3/>
 < FilterCars/>
    <Footer/></>
  );
};

export default RentalCars;
