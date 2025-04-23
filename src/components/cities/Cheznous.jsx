import React from "react";
import { Link } from "react-router-dom";



const ChezNous = () => {
  return (
    <div className="font-sans text-[#0F3556] bg-white">
      {/* Hero Section */}
      <section className="bg-[#0F3556] text-white py-24 px-6 text-center">
        <h1 className="text-5xl font-bold mb-4">
          Bienvenue chez <span className="text-[#F8DDAC]">Your Compass</span>
        </h1>
        <p className="text-xl max-w-2xl mx-auto leading-relaxed">
          Votre guide ultime pour explorer Tanger et vivre une expérience locale authentique, enrichissante et inoubliable.
        </p>
      </section>

      {/* Qui sommes-nous */}
      <section className="bg-white py-20 px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-[#0F3556]">Qui sommes-nous ?</h2>
          <p className="text-lg leading-relaxed mb-4">
            <strong>Your Compass</strong> est née de la passion pour Tanger et de l’envie de faire découvrir cette ville vibrante
            sous un angle unique. Notre équipe locale regroupe des professionnels amoureux de leur ville, qui souhaitent partager
            avec vous les trésors cachés, les bonnes adresses, et les expériences culturelles inoubliables.
          </p>
          <p className="text-lg leading-relaxed">
            Grâce à notre expertise du terrain et notre réseau de partenaires fiables, nous accompagnons chaque voyageur de manière
            personnalisée. Que vous veniez seul, en couple, en famille ou en groupe, nous vous offrons un accompagnement sur-mesure.
          </p>
        </div>
      </section>

      {/* Histoire de Tanger */}
      <section className="bg-[#F8DDAC] text-[#0F3556] py-20 px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">Un peu d'histoire sur Tanger</h2>
          <p className="text-lg leading-relaxed">
            Tanger, perle du nord du Maroc, est une ville où se mêlent traditions et modernité. Sa situation géographique stratégique,
            à la croisée de l’Europe et de l’Afrique, en a fait un point de rencontre des civilisations. Des Phéniciens aux Romains,
            en passant par les Portugais, les Espagnols et les Français, chaque peuple a laissé son empreinte.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            Aujourd’hui encore, Tanger conserve cette aura cosmopolite qui attire écrivains, artistes, musiciens et aventuriers.
            Sa médina animée, ses plages ensoleillées et son patrimoine architectural offrent un décor idéal pour s’immerger
            dans l’histoire tout en profitant de la modernité de la ville.
          </p>
        </div>
      </section>

      {/* Nos Services */}
      <section className="bg-[#fefefe] py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-[#0F3556] text-center">Nos Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Restaurants",
                desc: "Explorez une sélection raffinée de restaurants, allant des tables traditionnelles marocaines aux adresses gastronomiques.",
                link: "/components/pagesD/Restaurants",
              },
              {
                title: "Voitures de Location",
                desc: "Choisissez parmi une gamme de véhicules modernes pour vos déplacements confortables et flexibles à Tanger.",
                link: "/components/pagesD/RentalCars2",
              },
              {
                title: "Hôtels",
                desc: "Des hébergements soigneusement sélectionnés pour tous les styles de voyageurs, du luxe au charme authentique.",
                link: "/components/pagesD/Hotels",
              },
              {
                title: "Lieux Touristiques",
                desc: "Accédez aux meilleurs spots de Tanger : monuments, plages secrètes, vues panoramiques et trésors cachés.",
                link: "/components/pagesD/Activities",
              },
            ].map((service, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl border border-[#E6ECF2] text-center hover:shadow-lg transition duration-300"
              >
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-700 text-base mb-6">{service.desc}</p>
                <Link to={service.link}>
                  <button className="bg-[#0F3556] text-[#F8DDAC] hover:bg-[#122d45] hover:text-white px-5 py-2 rounded-full font-medium transition-all duration-300">
                    Découvrir
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture & Loisirs */}
      <section className="bg-[#F8DDAC] py-20 px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-[#0F3556]">
            Activités Culturelles et Loisirs
          </h2>
          <p className="text-lg leading-relaxed">
            Tanger offre une richesse culturelle inégalée. Expositions, concerts, ateliers artisanaux ou balades dans les souks : chaque moment devient une aventure sensorielle.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            Que vous soyez passionné d'histoire, d’art, de gastronomie ou de nature, vous trouverez à Tanger une palette d’activités qui enrichiront votre séjour.
          </p>
        </div>
      </section>

      {/* Service Unique */}
      <section className="bg-white py-20 px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-[#0F3556]">Notre Service Unique</h2>
          <p className="text-lg leading-relaxed">
            Contrairement aux services classiques, nous plaçons l’humain au cœur de notre accompagnement. Nous prenons
            le temps d’échanger avec vous pour bâtir une expérience vraiment personnalisée.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            Besoin d’un guide francophone, de réservations, d’un programme complet ? <strong>Your Compass</strong> est là pour faciliter votre vie à Tanger.
          </p>
        </div>
      </section>

      {/* Témoignages */}
      <section className="bg-[#0F3556] text-white py-20 px-8">
  <h2 className="text-4xl font-bold mb-12 text-center text-[#F8DDAC]">
    Témoignages de Voyageurs
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
    {[
      {
        text: `"Grâce à Your Compass, j'ai découvert des endroits incroyables à Tanger. Des ruelles secrètes aux couchers de soleil magiques sur la mer, tout était orchestré avec soin et passion. Une expérience inoubliable !"`,
        author: "Choukri, Douae",
      },
      {
        text: `"Service impeccable, équipe très réactive et conseils au top. On a pu découvrir la culture marocaine autrement, loin des circuits touristiques classiques. Bravo pour l’organisation !"`,
        author: "Ameur, El Moukh",
      },
      {
        text: `"Je voyage souvent, mais c’est la première fois que je me suis senti aussi accompagné. Ils ont anticipé mes besoins avant même que je les exprime. Une vraie pépite pour les voyageurs exigeants."`,
        author: "El Hannach, Aya",
      },
      {
        text: `"Un service humain, chaleureux, et ultra personnalisé. Grâce à eux, Tanger est devenue l’une de mes plus belles destinations. Je recommande à 200 % !"`,
        author: "El Jomi, Ibtissam",
      },
    ].map((testimonial, i) => (
      <div
        key={i}
        className="bg-white text-[#0F3556] p-6 rounded-2xl shadow-lg border-l-4 border-[#F8DDAC] relative transition duration-300 transform hover:shadow-2xl hover:-translate-y-1"
      >
        <svg
          className="absolute top-4 right-4 text-[#F8DDAC]"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          width="30"
          height="30"
          viewBox="0 0 24 24"
        >
          <path d="M7.5 21h-5v-6c0-5.25 4.25-9.5 9.5-9.5v4.5c-2.75 0-5 2.25-5 5v6zm14 0h-5v-6c0-5.25 4.25-9.5 9.5-9.5v4.5c-2.75 0-5 2.25-5 5v6z" />
        </svg>
        <p className="text-lg italic leading-relaxed mb-4">{testimonial.text}</p>
        <p className="font-semibold text-right">– {testimonial.author}</p>
      </div>
    ))}
  </div>
</section>

      {/* Copyright */}
<div className="text-center text-sm text-[#0F3556] border-t border-gray-300 py-4">
  Copyrights © YourCompass 2017. All Rights Reserved
</div>

    </div>

  );
};

export default ChezNous;
