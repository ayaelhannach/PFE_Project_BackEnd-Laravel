import comptoirTangerImg from '../assets/comptoir_tanger.jpg';
import tableDuMarcheImg from '../assets/table_du_marche.jpg';
import cafeHafaImg from '../assets/cafe_hafa.jpg';
import elMoroccoClubImg from '../assets/el_morocco_club.jpg';
import leSaveurImg from '../assets/le_saveur.jpg';
import balconTangerImg from '../assets/balcon_tanger.jpg';
import darLidamImg from '../assets/dar_lidam.jpg';
import cafeDeParisImg from '../assets/cafe_de_paris.jpg';
import leBistrotImg from '../assets/le_bistrot.jpg';
import laPagodeImg from '../assets/la_pagode.jpg';
import coqHardiImg from '../assets/coq_hardi.jpg';
import cuisineMedinaImg from '../assets/cuisine_medina.jpg';
import casaJoseImg from '../assets/casa_jose.jpg';
import petitChezSoiImg from '../assets/petit_chez_soi.jpg';
import terrasseEpicesImg from '../assets/terrasse_epices.jpg';
import jardinAsilahImg from '../assets/jardin_asilah.jpg';
import fishMarketImg from '../assets/fish_market.jpg';
import cafeTissoukaImg from '../assets/cafe_tissouka.jpg';
import tanjiaImg from '../assets/tanjia.jpg';
import casseroleImg from '../assets/casserole.jpg';
import riadArtsImg from '../assets/riad_arts.jpg';
import maisonArabeImg from '../assets/maison_arabe.jpg';
import bistroMerImg from '../assets/bistro_mer.jpg';
import pashaImg from '../assets/pasha.jpg';
import mediterraneenneImg from '../assets/mediterraneenne.jpg';
import grillImg from '../assets/grill.jpg';
import Navbar from "../home/menu";
import Footer from "../home/footer";
import FilterRestaurants from '../cities/FilterRestaurants';
import HeroSectionRes from '../cities/HeroSectionRes';

import NavbarSecondary from '../cities/NavbarSecondary';


const restaurants = [
  { 
    name: "Le Comptoir de Tanger", 
    description: "Cuisine méditerranéenne raffinée avec des produits frais et locaux.",
    price: "250 MAD",
    image: comptoirTangerImg,
  },
  { 
    name: "Restaurant La Table du Marche", 
    description: "Un restaurant gastronomique avec une belle vue sur la ville et des plats à base de produits locaux.",
    price: "350 MAD",
    image: tableDuMarcheImg,
  },
  { 
    name: "Café Hafa", 
    description: "Café emblématique de Tanger offrant une vue spectaculaire sur le détroit de Gibraltar.",
    price: "150 MAD",
    image: cafeHafaImg,
  },
  { 
    name: "El Morocco Club", 
    description: "Restaurant élégant servant une cuisine marocaine moderne avec une touche européenne.",
    price: "400 MAD",
    image: elMoroccoClubImg,
  },
  { 
    name: "Le Saveur", 
    description: "Une fusion entre cuisine marocaine et internationale, avec des plats créatifs et raffinés.",
    price: "300 MAD",
    image: leSaveurImg,
  },
  { 
    name: "Le Balcon de Tanger", 
    description: "Restaurant avec une vue imprenable sur la mer Méditerranée, proposant des fruits de mer frais.",
    price: "250 MAD",
    image: balconTangerImg,
  },
  { 
    name: "Dar Lidam", 
    description: "Spécialités marocaines traditionnelles dans un cadre chaleureux et authentique.",
    price: "200 MAD",
    image: darLidamImg,
  },
  { 
    name: "Café de Paris", 
    description: "Un café français classique offrant une gamme de pâtisseries et de plats légers.",
    price: "120 MAD",
    image: cafeDeParisImg,
  },
  { 
    name: "Le Bistrot", 
    description: "Cuisine française authentique, avec des plats du terroir et des vins raffinés.",
    price: "350 MAD",
    image: leBistrotImg,
  },
  { 
    name: "La Pagode", 
    description: "Un restaurant asiatique chic, servant une cuisine chinoise, japonaise et thaïlandaise.",
    price: "250 MAD",
    image: laPagodeImg,
  },
  { 
    name: "Le Coq Hardi", 
    description: "Restaurant français avec des viandes grillées et des plats à base de produits locaux.",
    price: "300 MAD",
    image: coqHardiImg,
  },
  { 
    name: "La Cuisine de la Médina", 
    description: "Cuisine marocaine traditionnelle avec une belle sélection de tajines et couscous.",
    price: "150 MAD",
    image: cuisineMedinaImg,
  },
  { 
    name: "Restaurant Casa José", 
    description: "Spécialités espagnoles, principalement des tapas et paellas, dans une ambiance décontractée.",
    price: "250 MAD",
    image: casaJoseImg,
  },
  { 
    name: "Le Petit Chez Soi", 
    description: "Cuisine franco-marocaine dans un cadre intime et accueillant.",
    price: "200 MAD",
    image: petitChezSoiImg,
  },
  { 
    name: "La Terrasse des Épices", 
    description: "Restaurant avec une terrasse panoramique, servant des plats marocains épicés et savoureux.",
    price: "300 MAD",
    image: terrasseEpicesImg,
  },
  { 
    name: "Le Jardin d'Asilah", 
    description: "Un restaurant calme et verdoyant offrant une fusion de cuisine marocaine et méditerranéenne.",
    price: "250 MAD",
    image: jardinAsilahImg,
  },
  { 
    name: "Le Fish Market", 
    description: "Restaurant spécialisé dans les fruits de mer frais et locaux.",
    price: "350 MAD",
    image: fishMarketImg,
  },
  { 
    name: "Café Tissouka", 
    description: "Café décontracté servant une cuisine locale marocaine, notamment des pâtisseries.",
    price: "80 MAD",
    image: cafeTissoukaImg,
  },
  { 
    name: "Restaurant Le Tanjia", 
    description: "Cuisine marocaine traditionnelle avec des tajines et des couscous préparés selon les recettes anciennes.",
    price: "200 MAD",
    image: tanjiaImg,
  },
  { 
    name: "La Casserole", 
    description: "Restaurant au style épuré servant des plats marocains contemporains.",
    price: "250 MAD",
    image: casseroleImg,
  },
  { 
    name: "Le Riad des Arts", 
    description: "Cuisine locale et fusion dans un riad traditionnel, avec des expositions d'art.",
    price: "300 MAD",
    image: riadArtsImg,
  },
  { 
    name: "La Maison Arabe", 
    description: "Restaurant marocain de luxe offrant une expérience culinaire unique dans un cadre raffiné.",
    price: "500 MAD",
    image: maisonArabeImg,
  },
  { 
    name: "Bistro La Mer", 
    description: "Cuisine méditerranéenne de fruits de mer, avec une belle vue sur la mer.",
    price: "350 MAD",
    image: bistroMerImg,
  },
  { 
    name: "Le Pasha", 
    description: "Plats marocains et orientaux raffinés dans un cadre somptueux.",
    price: "400 MAD",
    image: pashaImg,
  },
  { 
    name: "La Méditerranéenne", 
    description: "Cuisine italienne et méditerranéenne, avec des pizzas artisanales et des pâtes fraîches.",
    price: "200 MAD",
    image: mediterraneenneImg,
  },
  { 
    name: "Le Grill", 
    description: "Restaurant spécialisé dans les viandes grillées et les barbecue marocains.",
    price: "250 MAD",
    image: grillImg,
  }
];

const Restaurants = () => {
   return ( <> <Navbar/>  
   <NavbarSecondary/>   
   <HeroSectionRes />
   <FilterRestaurants/>
   <Footer/> </>
);
};


export default Restaurants;
