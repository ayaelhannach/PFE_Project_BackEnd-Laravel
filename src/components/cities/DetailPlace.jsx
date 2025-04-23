import React from 'react';
import { useParams } from 'react-router-dom';

// Importation des images
import rmilatImage from '../assets/rmilat.jpg';
import capSpartelImage from '../assets/cap-spartel.jpg';
import grotteHerculeImage from '../assets/grotte-d-hercule.jpg';
import user1Avatar from '../assets/user1.jpg';
import user2Avatar from '../assets/user2.jpg';
import user3Avatar from '../assets/user3.jpg';
import user4Avatar from '../assets/user4.jpg';
import user5Avatar from '../assets/user5.jpg';
import user6Avatar from '../assets/user6.jpg';
import user7Avatar from '../assets/user7.jpg';
import user8Avatar from '../assets/user8.jpg';
import user9Avatar from '../assets/user9.jpg';
import user10Avatar from '../assets/user10.jpg';
import user11Avatar from '../assets/user11.jpg';
import user12Avatar from '../assets/user12.jpg';
import user13Avatar from '../assets/user13.jpg';
import user14Avatar from '../assets/user14.jpg';
import user15Avatar from '../assets/user15.jpg';
import user16Avatar from '../assets/user16.jpg';
import user17Avatar from '../assets/user17.jpg';
import user18Avatar from '../assets/user18.jpg';
import user19Avatar from '../assets/user19.jpg';
import user20Avatar from '../assets/user20.jpg';

const lieuxDetails = {
  'Rmilat': {
    image: rmilatImage,
    description: 'Zone boisée idéale pour pique-niquer et se détendre.',
    avis: [
      { auteur: 'Omar', note: 5, commentaire: 'Endroit magnifique!', avatar: user1Avatar },
      { auteur: 'Leila', note: 4, commentaire: 'Joli mais souvent bondé.', avatar: user2Avatar },
      { auteur: 'Omar', note: 5, commentaire: 'Endroit magnifique!', avatar: user1Avatar },
      { auteur: 'Leila', note: 4, commentaire: 'Joli mais souvent bondé.', avatar: user2Avatar },
      { auteur: 'Choukri Douae', note: 5, commentaire: "Honestly, it's a great view and an even better atmosphere. I hope to visit it again.", avatar: user7Avatar },
      { auteur: 'Amina', note: 5, commentaire: 'Beautiful place to relax!', avatar: user8Avatar },
      { auteur: 'Ismail', note: 4, commentaire: 'Great spot for family outings.', avatar: user9Avatar },
      { auteur: 'Fatima', note: 5, commentaire: 'Stunning views and serene atmosphere.', avatar: user10Avatar },
      { auteur: 'Hamza', note: 5, commentaire: 'Perfect place for a picnic!', avatar: user11Avatar },
      { auteur: 'Sara', note: 4, commentaire: 'Loved the greenery and fresh air.', avatar: user12Avatar },
      { auteur: 'Achraf', note: 5, commentaire: 'A hidden gem in Tangier.', avatar: user13Avatar },
      { auteur: 'Zineb', note: 4, commentaire: 'Beautiful but can be crowded.', avatar: user14Avatar },
      { auteur: 'Ayoub', note: 5, commentaire: 'Amazing place to unwind!', avatar: user15Avatar },
      { auteur: 'Soufiane', note: 5, commentaire: 'Fantastic spot for nature lovers.', avatar: user16Avatar },
      { auteur: 'Naima', note: 4, commentaire: 'Lovely place but parking is an issue.', avatar: user17Avatar },
      { auteur: 'Hicham', note: 5, commentaire: 'Best place to escape the city!', avatar: user18Avatar },
      { auteur: 'Yasmina', note: 4, commentaire: 'Great but lacks amenities.', avatar: user19Avatar },
      { auteur: 'Samir', note: 5, commentaire: 'A must-visit in Tangier!', avatar: user20Avatar }
    ]
  },
  'Cap-Spartel': {
    image: capSpartelImage,
    description: "Un phare offrant une vue imprenable sur l'océan.",
    avis: [
      { auteur: 'Youssef', note: 5, commentaire: 'Vue splendide!', avatar: user3Avatar },
      { auteur: 'Salma', note: 5, commentaire: 'Un must à Tanger!', avatar: user4Avatar }
    ]
  },
  'Grotte-d-Hercule': {
    image: grotteHerculeImage,
    description: 'Grotte mythique avec une ouverture sur la mer.',
    avis: [
      { auteur: 'Karim', note: 5, commentaire: 'Incroyable formation naturelle!', avatar: user5Avatar },
      { auteur: 'Nadia', note: 4, commentaire: 'Superbe mais un peu touristique.', avatar: user6Avatar }
    ]
  }
};

const DetailPlace = () => {
  const { nom } = useParams();
  const lieu = lieuxDetails[nom.replace(/-/g, ' ')];

  if (!lieu) return <h2 className="text-center text-xl mt-10">Lieu non trouvé</h2>;

  return (
    <div className="flex flex-col items-center p-5 font-sans">
      <div className="w-full text-center mb-6">
        <h1 className="text-3xl font-bold mb-2">{nom.replace(/-/g, ' ')}</h1>
        <p className="text-sm text-gray-500">
          ★ ★ ★ ☆ ☆ (904 Reviews) • #4 of 98 things to do in Tangier • Points of Interest & Landmarks • Lighthouses
        </p>
      </div>

      <div className="flex flex-col lg:flex-row w-full lg:w-4/5 gap-6">
        {/* Section Commentaires */}
        <div className="flex-1 bg-gray-100 p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">What People are Saying</h3>
          <ul className="space-y-4">
            {lieu.avis.map((avis, index) => (
              <li key={index} className="flex items-start gap-3 bg-white p-3 rounded shadow">
                <img
                  src={avis.avatar}
                  alt={avis.auteur}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <strong className="block">{avis.auteur}</strong>
                  <span className="text-xs text-gray-500">Avril 2024</span>
                  <div className="text-yellow-500 text-sm">⭐ {avis.note}</div>
                  <p className="font-semibold mt-1 mb-1">"Amazing"</p>
                  <p className="text-sm text-gray-700">{avis.commentaire}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Section Image */}
        <div className="flex-1 text-center">
          <img
            src={lieu.image}
            alt={nom}
            className="w-full max-h-[400px] object-cover rounded-lg mt-2"
          />
          <div className="flex gap-3 mt-3 justify-center">
            {/* Miniatures si nécessaires */}
            {/* Exemple :
            <img src={lieu.image} className="w-20 h-16 object-cover rounded hover:opacity-80 cursor-pointer" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPlace;
