import React from 'react';
import Navbar from "../home/menu";
import Footer from "../home/footer";
import HeroSectionAc from '../cities/HeroSectionAc';
// Importation des images
import promenadeImg from '../assets/promenade.jpg';
import excursionBateauImg from '../assets/excursion_bateau.jpg';
import cuisineMarocaineImg from '../assets/cuisine_marocaine.jpg';
import galerieArtImg from '../assets/galerie_art.jpg';
import randonneeImg from '../assets/randonnee.jpg';
import soukImg from '../assets/souk.jpg';
import spaImg from '../assets/spa.jpg';
import coursCuisineImg from '../assets/cours_cuisine.jpg';
import artisanatImg from '../assets/artisanat.jpg';
import observationOiseauxImg from '../assets/observation_oiseaux.jpg';
import museeForbesImg from '../assets/musee_forbes.jpg';
import promenadeChameauImg from '../assets/promenade_chameau.jpg';
import kasbaImg from '../assets/kasba.jpg';
import soireeMusicaleImg from '../assets/soiree_musicale.jpg';
import plongeeImg from '../assets/plongee.jpg';
import veloElectriqueImg from '../assets/velo_electrique.jpg';
import capMalabataImg from '../assets/cap_malabata.jpg';
import yogaImg from '../assets/yoga.jpg';
import safariPhotoImg from '../assets/safari_photo.jpg';
import FilterActivities from '../cities/FilterActivities';
import NavbarSecondary from '../cities/NavbarSecondary';

const activities = [
  { 
    name: "Promenade dans les rues de Tanger", 
    description: "Découvrez la ville en flânant dans ses rues vibrantes, en explorant ses petites boutiques et ses cafés animés.",
    price: "Gratuit",
    image: promenadeImg,
  },
  { 
    name: "Excursion en bateau", 
    description: "Participez à une excursion en bateau pour une vue imprenable sur la ville depuis la mer et pour admirer les paysages côtiers.",
    price: "150 MAD",
    image: excursionBateauImg,
  },
  { 
    name: "Dégustation de la cuisine marocaine", 
    description: "Savourez des plats traditionnels marocains comme le tajine, le couscous et les pâtisseries locales dans des restaurants typiques.",
    price: "Varie selon les restaurants",
    image: cuisineMarocaineImg,
  },
  { 
    name: "Visite de galeries d'art", 
    description: "Explorez les galeries d'art contemporain et les expositions d'artistes locaux et internationaux qui enrichissent la scène culturelle de Tanger.",
    price: "20-30 MAD",
    image: galerieArtImg,
  },
  { 
    name: "Randonnée dans les collines de Tanger", 
    description: "Randonnez à travers les collines autour de la ville pour profiter de vues spectaculaires et découvrir la nature environnante.",
    price: "Gratuit",
    image: randonneeImg,
  },
  { 
    name: "Visite de souks locaux", 
    description: "Plongez dans l'ambiance des marchés traditionnels où vous pourrez acheter de l'artisanat, des épices et des produits locaux.",
    price: "Gratuit",
    image: soukImg,
  },
  { 
    name: "Séance de bien-être et de spa", 
    description: "Offrez-vous un moment de détente avec un massage ou un soin au hammam pour vous ressourcer après une journée de découvertes.",
    price: "Varie selon les spas",
    image: spaImg,
  },
  { 
    name: "Cours de cuisine marocaine", 
    description: "Apprenez à préparer des plats marocains traditionnels grâce à un cours de cuisine animé par des chefs locaux.",
    price: "300-500 MAD",
    image: coursCuisineImg,
  },
  { 
    name: "Visite d'ateliers d'artisanat", 
    description: "Découvrez le savoir-faire traditionnel marocain dans les ateliers d'artisanat où vous pourrez observer et acheter des pièces uniques.",
    price: "Gratuit",
    image: artisanatImg,
  },
  { 
    name: "Observation des oiseaux", 
    description: "Participez à une sortie d'observation des oiseaux et explorez la faune locale dans les environs de Tanger.",
    price: "Gratuit",
    image: observationOiseauxImg,
  },
  { 
    name: "Visite du Musée Forbes", 
    description: "Un musée unique où vous pourrez explorer l'histoire de Tanger à travers des expositions sur les personnalités locales et internationales.",
    price: "30 MAD",
    image: museeForbesImg,
  },
  { 
    name: "Promenade en chameau", 
    description: "Vivez une expérience inoubliable en faisant une promenade à dos de chameau dans les dunes aux alentours de Tanger.",
    price: "200 MAD",
    image: promenadeChameauImg,
  },
  { 
    name: "Visite de la Kasbah", 
    description: "Explorez l'ancienne forteresse de la Kasbah et découvrez son histoire fascinante et ses vues panoramiques sur la ville.",
    price: "10 MAD",
    image: kasbaImg,
  },
  { 
    name: "Soirée musicale traditionnelle", 
    description: "Assistez à un spectacle de musique traditionnelle marocaine et de danse en plein cœur de la médina de Tanger.",
    price: "100 MAD",
    image: soireeMusicaleImg,
  },
  { 
    name: "Plongée sous-marine", 
    description: "Explorez les fonds marins autour de Tanger avec une expérience de plongée sous-marine pour découvrir la faune aquatique locale.",
    price: "500 MAD",
    image: plongeeImg,
  },
  { 
    name: "Tour en vélo électrique", 
    description: "Faites un tour de la ville à vélo électrique, pour une exploration éco-responsable et agréable de Tanger.",
    price: "150 MAD",
    image: veloElectriqueImg,
  },
  { 
    name: "Visite du Cap Malabata", 
    description: "Découvrez le Cap Malabata, un point de vue spectaculaire offrant une vue imprenable sur le détroit de Gibraltar.",
    price: "Gratuit",
    image: capMalabataImg,
  },
  { 
    name: "Séance de yoga en plein air", 
    description: "Participez à une séance de yoga en plein air avec vue sur la mer, pour une expérience de relaxation unique.",
    price: "100-150 MAD",
    image: yogaImg,
  },
  { 
    name: "Safari photo dans la nature", 
    description: "Partez à l'aventure pour capturer la beauté de la faune et de la flore autour de Tanger lors d'un safari photo guidé.",
    price: "250 MAD",
    image: safariPhotoImg,
  }
];

const Activities = () => {
  return (<> <Navbar/>
  <NavbarSecondary/>
    <HeroSectionAc />
    <FilterActivities/>
   <Footer/> </>
  );
};

export default Activities;
