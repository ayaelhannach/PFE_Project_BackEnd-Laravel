<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ServiceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {



        DB::table('services')->insert([
            'name' => 'Les Grottes d’Hercule',
            'slug' => 'Les Grottes d’Hercule',
            'description' => 'Site mythique avec une ouverture en forme de carte d’Afrique, face à l’océan Atlantique. Site mythique avec une ouverture en forme de carte d’Afrique, face à l’océan Atlantique. Site mythique avec une ouverture en forme de carte d’Afrique, face à l’océan Atlantique.',
            'website' => 'Ministère de la Culture.com',
            'address' => 'Tangier ,morocco',
            'email' => 'hercule@gmail.com',
            'phone_number' => '+212625457896',
            'user_id' => 1,
            'city_id' => 1,
            'category_id' => 4,
            'submission_id'=>1,
            'image'=>'/images/Activities/image19.jpg',
        ]);


        DB::table('services')->insert([
            'name' => 'Le Cap Spartel',
            'slug' => 'Le Cap Spartel',
            'description' => 'Où la mer Méditerranée rencontre l’océan Atlantique, avec un phare emblématique. Où la mer Méditerranée rencontre l’océan Atlantique, avec un phare emblématique. Où la mer Méditerranée rencontre l’océan Atlantique, avec un phare emblématique.',
            'website' => 'LeCapSpartel.com',
            'address' => 'Tangier ,morocco',
            'email' => 'capspartel@gmail.com',
            'phone_number' => '+212625457896',
            'user_id' => 2,
            'city_id' => 1,
            'category_id' => 4,
            'submission_id'=>1,
            'image'=>'/images/Activities/capspartel.jpg',
        ]);





        DB::table('services')->insert([
            'name' => 'Plage Achakkar',
            'slug' => 'Plage Achakkar',
            'description' => 'Belle plage proche des Grottes d’Hercule. Où la mer Méditerranée rencontre l’océan Atlantique, avec un phare emblématique. Où la mer Méditerranée rencontre l’océan Atlantique, avec un phare emblématique. Où la mer Méditerranée rencontre l’océan Atlantique, avec un phare emblématique. ',
            'website' => 'Plage Achakar.com',
            'address' => 'Tangier ,morocco',
            'email' => 'achakkar@gmail.com',
            'phone_number' => '+212625457896',
            'user_id' => 2,
            'city_id' => 1,
            'category_id' => 4,
            'submission_id'=>1,
            'image'=>'/images/Activities/image5.jpg',
        ]);



        DB::table('services')->insert([
            'name' => 'Parc Perdicaris (Forêt de Rmilat)',
            'slug' => 'Parc Perdicaris (Forêt de Rmilat)',
            'description' => 'Un parc boisé parfait pour les balades en pleine nature. Où la mer Méditerranée rencontre l’océan Atlantique, avec un phare emblématique. Où la mer Méditerranée rencontre l’océan Atlantique, avec un phare emblématique.',
            'website' => 'rmilat.com',
            'address' => 'Tangier ,morocco',
            'email' => 'rmilat@gmail.com',
            'phone_number' => '+212625457896',
            'user_id' => 2,
            'city_id' => 1,
            'category_id' => 4,
            'submission_id'=>1,
            'image'=>'/images/Activities/image12.jpg',
        ]);


        DB::table('services')->insert([
            'name' => ' Mnar Park',
            'slug' => 'Mnar park',
            'description' => 'Le Mnar Park est un complexe touristique situé à environ 7 km du centre de Tanger, sur la route de Ksar Sghir, près du Cap Malabata. C’est une destination idéale pour les familles, les groupes d’amis ou les amateurs de loisirs en plein air',
            'website' => 'www.mnarpark.com',
            'address' => 'Tangier ,morocco',
            'email' => 'mnarpark@gmail.com',
            'phone_number' => '+212625457896',
            'user_id' => 2,
            'city_id' => 1,
            'category_id' => 4,
            'submission_id'=>1,
            'image'=>'/images/Activities/mnar.png',

        ]);

        DB::table('services')->insert([
            'name' => 'La Kasbah de Tanger ',
            'slug' => 'la kasbah',
            'description' => 'Une ancienne forteresse offrant une vue panoramique sur le détroit de Gibraltar. Où la mer Méditerranée rencontre l’océan Atlantique, avec un phare emblématique. Où la mer Méditerranée rencontre l’océan Atlantique, avec un phare emblématique.',
            'address' => 'Tangier ,morocco',
            'email' => 'kasbah@gmail.com',
            'website'=>'Visittanger.com',
            'phone_number' => '+212625457896',
            'user_id' => 1,
            'city_id' => 1,
            'category_id' => 4,
            'submission_id'=>1,
            'image'=>'/images/Activities/image9.jpg',
        ]);


        DB::table('services')->insert([
            'name' => 'La Médina',
            'slug' => 'la medina',
            'description' => 'Un labyrinthe de ruelles animées avec des souks, des cafés traditionnels et de l’artisanat. Où la mer Méditerranée rencontre l’océan Atlantique, avec un phare emblématique.Où la mer Méditerranée rencontre l’océan Atlantique, avec un phare emblématique.',
            'website' => 'VisitMorocco.com',
            'address' => 'Tangier ,morocco',
            'email' => 'medina@gmail.com',
            'phone_number' => '+212625457896',
            'user_id' => 1,
            'city_id' => 1,
            'category_id' => 4,
            'submission_id'=>1,
            'image'=>'/images/Activities/image4.jpg',
        ]);


        DB::table('services')->insert([
            'name' => 'Markkala',
            'slug' => 'markala',
            'description' => 'Un labyrinthe de ruelles animées avec des souks, des cafés traditionnels et de l’artisanat.Où la mer Méditerranée rencontre l’océan Atlantique, avec un phare emblématique. Où la mer Méditerranée rencontre l’océan Atlantique, avec un phare emblématique.',
            'website' => 'VisitMorocco.com',
            'address' => 'Tangier ,morocco',
            'email' => 'markala@gmail.com',
            'phone_number' => '+212625457896',
            'user_id' => 1,
            'city_id' => 1,
            'category_id' => 4,
            'submission_id'=>1,
            'image'=>'/images/Activities/marqala.jpeg',
        ]);





        DB::table('services')->insert([
            'name' => 'Vieille Médina d’Asilah',
            'slug' => 'vieille-medina-asilah',
            'description' => 'La vieille médina d’Asilah est célèbre pour ses ruelles paisibles, ses murs peints de fresques colorées par des artistes du monde entier et son ambiance artistique. Elle attire chaque année de nombreux touristes notamment pendant le festival culturel d’Asilah.',
            'website' => 'https://www.visitmorocco.com/fr/asilah',
            'address' => 'Asilah, Maroc',
            'email' => 'info@visitasilah.com',
            'phone_number' => '+212601234567',
            'user_id' => 2,
            'city_id' => 3, // supposons que 3 correspond à Asilah dans ta table cities
            'category_id' => 4, // catégorie "lieux touristiques"
            'submission_id'=>1,
            'image'=>'/images/Activities/assilah.png',
        ]);


        DB::table('services')->insert([
        'name' => 'Place Jemaa el-Fna',
        'slug' => 'jemaa-el-fna',
        'description' => 'Cœur vivant de Marrakech, la place Jemaa el-Fna est célèbre pour ses artistes de rue, conteurs, charmeurs de serpents et stands de nourriture traditionnelle. Où la mer Méditerranée rencontre l’océan Atlantique, avec un phare emblématique. Où la mer Méditerranée rencontre l’océan Atlantique, avec un phare emblématique.',
        'website' => 'https://visitmarrakech.com/jemaa-el-fna',
        'address' => 'Médina, Marrakech, Maroc',
        'email' => 'jemaa@visitmarrakech.com',
        'phone_number' => '+212624567123',
        'user_id' => 2,
        'city_id' => 2,
        'category_id' => 4,
        'submission_id'=>1,
        'image'=>'/images/Activities/merr.png',
        ]);









// les hotels

DB::table('services')->insert([
    'name' => 'Hotel Farah Tanger',
    'slug' => 'hotel-farah-tanger',
    'description' => 'L’hôtel Farah Tanger est un établissement de luxe offrant des chambres modernes, une vue imprenable sur la mer et une piscine extérieure. Où la mer Méditerranée rencontre l’océan Atlantique, avec un phare emblématique. Où la mer Méditerranée rencontre l’océan Atlantique, avec un phare emblématique.',
    'website' => 'https://www.farah-tanger.com',
    'address' => 'Avenue Mohamed VI, Tanger, Maroc',
    'email' => 'contact@farah-tanger.com',
    'phone_number' => '+212539930000',
    'user_id' => 2,
    'city_id' => 1,
    'category_id' => 1,
    'submission_id'=>1,
    'image'=>'/images/hotels/h2.jpeg',
    
]);

DB::table('services')->insert([
    'name' => 'Hotel Hilton',
    'slug' => 'hotel-ibis-tanger',
    'description' => 'L’hôtel hilton Tanger est un choix économique avec un excellent service, situé à proximité des attractions touristiques et des plages.',
    'website' => 'https://hilton.com',
    'address' => 'Tanger, Maroc',
    'email' => 'ibis.tanger@accor.com',
    'phone_number' => '+212539930111',
    'user_id' => 2,
    'city_id' => 1,
    'category_id' => 1,
    'submission_id'=>1,
    'image'=>'/images/hotels/h1.jpeg',
]);

DB::table('services')->insert([
    'name' => 'Hotel Royal Tulip Tanger',
    'slug' => 'hotel-royal-tulip-tanger',
    'description' => 'Un hôtel haut de gamme avec un service de qualité, offrant des chambres spacieuses et une belle vue sur le détroit de Gibraltar. Où la mer Méditerranée rencontre l’océan Atlantique, avec un phare emblématique. Où la mer Méditerranée rencontre l’océan Atlantique, avec un phare emblématique.',
    'website' => 'https://www.royaltulip.com',
    'address' => 'Avenue Mohamed VI, Tanger, Maroc',
    'email' => 'royaltulip@tanger.com',
    'phone_number' => '+212539800222',
    'user_id' => 2,
    'city_id' => 1,
    'category_id' => 1,
    'submission_id'=>1,
    'image'=>'/images/hotels/h3.jpeg',
]);

DB::table('services')->insert([
    'name' => 'Hotel Atlas Almohades Tanger',
    'slug' => 'hotel-atlas-almohades-tanger',
    'description' => 'Un hôtel confortable situé dans le centre de Tanger, avec un service accueillant et une belle terrasse avec vue sur la ville. Où la mer Méditerranée rencontre l’océan Atlantique, avec un phare emblématique. Où la mer Méditerranée rencontre l’océan Atlantique, avec un phare emblématique.',
    'website' => 'https://www.atlasalmohades.com',
    'address' => 'Avenue Mohamed VI, Tanger, Maroc',
    'email' => 'atlasalmohades@tanger.com',
    'phone_number' => '+212539930333',
    'user_id' => 2,
    'city_id' => 1,
    'category_id' => 1,
    'submission_id'=>1,
    'image'=>'/images/hotels/h4.jpeg',
]);

DB::table('services')->insert([
    'name' => 'Hotel Malabata',
    'slug' => 'hotel-malabata-tanger',
    'description' => 'L’hôtel Malabata est un établissement 4 étoiles situé sur les hauteurs de Tanger, offrant une vue panoramique sur la mer Méditerranée. Où la mer Méditerranée rencontre l’océan Atlantique, avec un phare emblématique.',
    'website' => 'https://www.hotelmalabata.com',
    'address' => 'Avenue Malabata, Tanger, Maroc',
    'email' => 'contact@hotelmalabata.com',
    'phone_number' => '+212539930444',
    'user_id' => 2,
    'city_id' => 1,
    'category_id' => 1,
    'submission_id'=>1,
    'image'=>'/images/hotels/h5.jpeg',
]);



DB::table('services')->insert([
    'name' => 'Hotel La Mamounia',
    'slug' => 'hotel-la-mamounia-marrakech',
    'description' => 'L’hôtel La Mamounia est un palace légendaire à Marrakech, connu pour ses jardins magnifiques et son service de classe mondiale. Où la mer Méditerranée rencontre l’océan Atlantique, avec un phare emblématique. Où la mer Méditerranée rencontre l’océan Atlantique, avec un phare emblématique.',
    'website' => 'https://www.mamounia.com',
    'address' => 'Avenue Bab Jdid, Marrakech, Maroc',
    'email' => 'info@mamounia.com',
    'phone_number' => '+212524388000',
    'user_id' => 2,
    'city_id' => 2,
    'category_id' => 1,
    'submission_id'=>1,
    'image'=>'/images/hotels/img8.png',
    
]);








DB::table('services')->insert([
    'name' => 'Hotel Al Khaima',
    'slug' => 'hotel-al-khaima-assilah',
    'description' => 'L’hôtel Al Khaima est situé à quelques pas de la plage d’Asilah, offrant un cadre charmant et accueillant pour les visiteurs. Où la mer Méditerranée rencontre l’océan Atlantique, avec un phare emblématique. Où la mer Méditerranée rencontre l’océan Atlantique, avec un phare emblématique.',
    'website' => 'https://www.alkhaimaassilah.com',
    'address' => 'Plage d’Asilah, Asilah, Maroc',
    'email' => 'info@alkhaimaassilah.com',
    'phone_number' => '+212539927201',
    'user_id' => 2,
    'city_id' => 4,
    'category_id' => 1,
    'submission_id'=>1,
    'image'=>'/images/hotels/img20.png',
]);



DB::table('services')->insert([
    'name' => 'Hotel Sofitel Essaouira',
    'slug' => 'hotel-sofitel-essaouira',
    'description' => 'Le Sofitel Essaouira Mogador Golf & Spa est un hôtel de luxe offrant des vues sur l’océan Atlantique, un spa et un terrain de golf. Où la mer Méditerranée rencontre l’océan Atlantique, avec un phare emblématique. Où la mer Méditerranée rencontre l’océan Atlantique, avec un phare emblématique.',
    'website' => 'https://www.sofitel.com',
    'address' => 'Mogador, Essaouira, Maroc',
    'email' => 'sofitel.essaouira@sofitel.com',
    'phone_number' => '+212524474040',
    'user_id' => 2,
    'city_id' => 3,
    'category_id' => 1,
    'submission_id'=>1,
    'image'=>'/images/hotels/img11.png',
]);






//aussi restaurant 


DB::table('services')->insert([
    'name' => 'Le Saveur du Poisson',
    'slug' => 'le-saveur-du-poisson-tanger',
    'description' => 'Le Saveur du Poisson est un restaurant renommé à Tanger, offrant une variété de fruits de mer frais dans un cadre convivial et agréable. Où la mer Méditerranée rencontre l’océan Atlantique, avec un phare emblématique. Où la mer Méditerranée rencontre l’océan Atlantique, avec un phare emblématique.',
    'website' => 'https://www.saveurdupoisson.com',
    'address' => '2 Rue de la Liberté, Tanger, Maroc',
    'email' => 'saveurpoisson@tanger.com',
    'phone_number' => '+212539934512',
    'user_id' => 2,
    'city_id' => 1,
    'category_id' => 2,
    'submission_id'=>1, // catégorie "restaurants"
    'image'=>'/images/Restaurants/restaurant9.jpg',
]);

DB::table('services')->insert([
    'name' => 'Restaurant El Morocco Club',
    'slug' => 'restaurant-el-morocco-club-tanger',
    'description' => 'Le Morocco Club est un restaurant haut de gamme à Tanger, offrant une cuisine marocaine traditionnelle dans un cadre élégant. Où la mer Méditerranée rencontre l’océan Atlantique, avec un phare emblématique. Où la mer Méditerranée rencontre l’océan Atlantique, avec un phare emblématique.',
    'website' => 'https://www.elmoroccoclub.com',
    'address' => '9 Rue de la Kasbah, Tanger, Maroc',
    'email' => 'info@elmoroccoclub.com',
    'phone_number' => '+212539931234',
    'user_id' => 2,
    'city_id' => 1,
    'category_id' => 2,
    'submission_id'=>1,
    'image'=>'/images/Restaurants/restaurant7.jpg',
]);

DB::table('services')->insert([
    'name' => 'Restaurant Riad Tanja',
    'slug' => 'restaurant-riad-tanja-tanger',
    'description' => 'Le Restaurant Riad Tanja propose une expérience culinaire marocaine authentique, dans un cadre traditionnel avec une vue magnifique sur la médina de Tanger. Où la mer Méditerranée rencontre l’océan Atlantique, avec un phare emblématique.',
    'website' => 'https://www.riadtanja.com',
    'address' => '5 Rue de la Kasbah, Tanger, Maroc',
    'email' => 'contact@riadtanja.com',
    'phone_number' => '+212539930567',
    'user_id' => 2,
    'city_id' => 1,
    'category_id' => 2,
    'submission_id'=>1,
    'image'=>'/images/Restaurants/restaurant10.jpg',
]);

DB::table('services')->insert([
    'name' => 'La Table de la Kasbah',
    'slug' => 'la-table-de-la-kasbah-tanger',
    'description' => 'La Table de la Kasbah est un restaurant offrant une vue imprenable sur le détroit de Gibraltar, avec une cuisine marocaine raffinée. Où la mer Méditerranée rencontre l’océan Atlantique, avec un phare emblématique. Où la mer Méditerranée rencontre l’océan Atlantique, avec un phare emblématique.',
    'website' => 'https://www.tablekasbah.com',
    'address' => '2 Rue des Oudayas, Tanger, Maroc',
    'email' => 'contact@tablekasbah.com',
    'phone_number' => '+212539932111',
    'user_id' => 2,
    'city_id' => 1,
    'category_id' => 2,
    'submission_id'=>1,
    'image'=>'/images/Restaurants/restaurant11.jpg',
]);

DB::table('services')->insert([
    'name' => 'Le Nabab',
    'slug' => 'le-nabab-tanger',
    'description' => 'Le Nabab est un restaurant offrant une fusion de la cuisine marocaine et internationale, avec une ambiance chaleureuse et moderne. Où la mer Méditerranée rencontre l’océan Atlantique, avec un phare emblématique. Où la mer Méditerranée rencontre l’océan Atlantique, avec un phare emblématique.',
    'website' => 'https://www.lenabab.com',
    'address' => '6 Rue Ben M’Sik, Tanger, Maroc',
    'email' => 'contact@lenabab.com',
    'phone_number' => '+212539934780',
    'user_id' => 2,
    'city_id' => 1,
    'category_id' => 2,
    'submission_id'=>1,
    'image'=>'/images/Restaurants/restaurant17.jpg',
]);




DB::table('services')->insert([
    'name' => 'Le Jardin',
    'slug' => 'le-jardin-marrakech',
    'description' => 'Le Jardin est un restaurant et café à Marrakech, offrant une cuisine marocaine traditionnelle dans un cadre verdoyant et relaxant. Où la mer Méditerranée rencontre l’océan Atlantique, avec un phare emblématique. Où la mer Méditerranée rencontre l’océan Atlantique, avec un phare emblématique.',
    'website' => 'https://www.lejardinmarrakech.com',
    'address' => '32 Souk El Jeld, Marrakech, Maroc',
    'email' => 'contact@lejardinmarrakech.com',
    'phone_number' => '+212524387499',
    'user_id' => 2,
    'city_id' => 2,
    'category_id' => 2,
    'submission_id'=>1,
    'image'=>'/images/Restaurants/restaurant13.jpg',
]);

DB::table('services')->insert([
    'name' => 'Dar Yacout',
    'slug' => 'dar-yacout-marrakech',
    'description' => 'Dar Yacout est un restaurant légendaire à Marrakech, offrant une expérience culinaire marocaine unique dans un cadre somptueux. Où la mer Méditerranée rencontre l’océan Atlantique, avec un phare emblématique. Où la mer Méditerranée rencontre l’océan Atlantique, avec un phare emblématique.',
    'website' => 'https://www.daryacout.com',
    'address' => '79 Derb Sidi Ahmed Soussi, Marrakech, Maroc',
    'email' => 'info@daryacout.com',
    'phone_number' => '+212524380880',
    'user_id' => 2,
    'city_id' => 2,
    'category_id' => 2,
    'submission_id'=>1,
    'image'=>'/images/Restaurants/restaurant23.jpg',
]);

DB::table('services')->insert([
    'name' => 'Le Comptoir Darna',
    'slug' => 'le-comptoir-darna-marrakech',
    'description' => 'Le Comptoir Darna est un restaurant et bar très populaire à Marrakech, offrant une cuisine marocaine et internationale accompagnée de spectacles en soirée. Où la mer Méditerranée rencontre l’océan Atlantique, avec un phare emblématique. Où la mer Méditerranée rencontre l’océan Atlantique, avec un phare emblématique.',
    'website' => 'https://www.comptoirdarna.com',
    'address' => 'Avenue Echouhada, Marrakech, Maroc',
    'email' => 'contact@comptoirdarna.com',
    'phone_number' => '+212524387654',
    'user_id' => 2,
    'city_id' => 2,
    'category_id' => 2,
    'submission_id'=>1,
    'image'=>'/images/Restaurants/restaurant3.jpg',
]);



DB::table('services')->insert([
    'name' => 'La Table by Madada',
    'slug' => 'la-table-by-madada-essaouira',
    'description' => 'La Table by Madada est un restaurant chic à Essaouira, offrant une cuisine méditerranéenne et marocaine dans un cadre raffiné et moderne. Où la mer Méditerranée rencontre l’océan Atlantique, avec un phare emblématique. Où la mer Méditerranée rencontre l’océan Atlantique, avec un phare emblématique.',
    'website' => 'https://www.madadatable.com',
    'address' => '17 Rue d’Agadir, Essaouira, Maroc',
    'email' => 'contact@madadatable.com',
    'phone_number' => '+212524471800',
    'user_id' => 2,
    'city_id' => 3,
    'category_id' => 2,
    'submission_id'=>1,
    'image'=>'/images/Restaurants/restaurant4.jpg',
]);

DB::table('services')->insert([
    'name' => 'Restaurant Elizir',
    'slug' => 'restaurant-elizir-essaouira',
    'description' => 'Le restaurant Elizir offre une fusion créative de la cuisine marocaine et méditerranéenne, avec un cadre moderne et confortable. Où la mer Méditerranée rencontre l’océan Atlantique, avec un phare emblématique. Où la mer Méditerranée rencontre l’océan Atlantique, avec un phare emblématique.',
    'website' => 'https://www.elizir.com',
    'address' => 'Place Moulay Hassan, Essaouira, Maroc',
    'email' => 'contact@elizir.com',
    'phone_number' => '+212524471234',
    'user_id' => 2,
    'city_id' => 3,
    'category_id' => 2,
    'submission_id'=>1,
    'image'=>'/images/Restaurants/restaurant14.jpg',
]);




//rental cars


DB::table('services')->insert([
    'name' => 'Tanger Rent A Car',
    'slug' => 'tanger-rent-a-car',
    'description' => 'Tanger Rent A Car offre une large gamme de véhicules à louer, de l\'économique au haut de gamme, avec des services de qualité et une assistance 24/7. Où la mer Méditerranée rencontre l’océan Atlantique, avec un phare emblématique. Où la mer Méditerranée rencontre l’océan Atlantique, avec un phare emblématique.',
    'website' => 'https://www.tangerrentacar.com',
    'address' => '5 Rue de la Gare, Tanger, Maroc',
    'email' => 'info@tangerrentacar.com',
    'phone_number' => '+212539933001',
    'user_id' => 2,
    'city_id' => 1,
    'category_id' => 3, // catégorie "location de voitures"
    'submission_id'=>1,
    'image'=>'/images/RentalCars/c1.jpg',
]);

DB::table('services')->insert([
    'name' => 'Hertz Tanger',
    'slug' => 'hertz-tanger',
    'description' => 'Hertz Tanger offre un service de location de voitures fiable avec une flotte moderne, des prix compétitifs et un service client irréprochable. Où la mer Méditerranée rencontre l’océan Atlantique, avec un phare emblématique. Où la mer Méditerranée rencontre l’océan Atlantique, avec un phare emblématique.',
    'website' => 'https://www.hertz.com',
    'address' => 'Avenue Mohamed VI, Tanger, Maroc',
    'email' => 'contact@hertz.com',
    'phone_number' => '+212539935678',
    'user_id' => 2,
    'city_id' => 1,
    'category_id' => 3,
    'submission_id'=>1,
    'image'=>'/images/RentalCars/c2.jpg',
]);

DB::table('services')->insert([
    'name' => 'Avis Tanger',
    'slug' => 'avis-tanger',
    'description' => 'Avis Tanger propose des voitures de location pour tous les budgets, avec des options flexibles et un service client toujours disponible.Où la mer Méditerranée rencontre l’océan Atlantique, avec un phare emblématique. Où la mer Méditerranée rencontre l’océan Atlantique, avec un phare emblématique.',
    'website' => 'https://www.avis.com',
    'address' => '11 Boulevard Pasteur, Tanger, Maroc',
    'email' => 'info@avis.com',
    'phone_number' => '+212539933221',
    'user_id' => 2,
    'city_id' => 1,
    'category_id' => 3,
    'submission_id'=>1,
    'image'=>'/images/RentalCars/c3.jpg',
]);

DB::table('services')->insert([
    'name' => 'Europcar Tanger',
    'slug' => 'europcar-tanger',
    'description' => 'Europcar Tanger propose des voitures de location de qualité supérieure, avec un service rapide et flexible pour les clients.Où la mer Méditerranée rencontre l’océan Atlantique, avec un phare emblématique. Où la mer Méditerranée rencontre l’océan Atlantique, avec un phare emblématique.',
    'website' => 'https://www.europcar.com',
    'address' => '7 Rue Ibn Batouta, Tanger, Maroc',
    'email' => 'tanger@europcar.com',
    'phone_number' => '+212539931234',
    'user_id' => 2,
    'city_id' => 1,
    'category_id' => 3,
    'submission_id'=>1,
    'image'=>'/images/RentalCars/c4.jpg',
]);

DB::table('services')->insert([
    'name' => 'Sixt Tanger',
    'slug' => 'sixt-tanger',
    'description' => 'Sixt Tanger propose une large gamme de véhicules pour tous les types de voyages, avec un service client professionnel et une qualité garantie.Où la mer Méditerranée rencontre l’océan Atlantique, avec un phare emblématique.Où la mer Méditerranée rencontre l’océan Atlantique, avec un phare emblématique.',
    'website' => 'https://www.sixt.com',
    'address' => '34 Avenue Moulay Ismail, Tanger, Maroc',
    'email' => 'tanger@sixt.com',
    'phone_number' => '+212539930111',
    'user_id' => 2,
    'city_id' => 1,
    'category_id' => 3,
    'submission_id'=>1,
    'image'=>'/images/RentalCars/c5.jpg',
]);



DB::table('services')->insert([
    'name' => 'Marrakech Rent A Car',
    'slug' => 'marrakech-rent-a-car',
    'description' => 'Marrakech Rent A Car offre une gamme variée de véhicules de location à des prix compétitifs, avec un service rapide et fiable.Où la mer Méditerranée rencontre l’océan Atlantique, avec un phare emblématique. Où la mer Méditerranée rencontre l’océan Atlantique, avec un phare emblématique.',
    'website' => 'https://www.marrakechrentacar.com',
    'address' => '8 Rue Moulay Ismail, Marrakech, Maroc',
    'email' => 'info@marrakechrentacar.com',
    'phone_number' => '+212524450123',
    'user_id' => 2,
    'city_id' => 2,
    'category_id' => 3,
    'submission_id'=>1,
    'image'=>'/images/RentalCars/c6.jpg',
]);

DB::table('services')->insert([
    'name' => 'Hertz Marrakech',
    'slug' => 'hertz-marrakech',
    'description' => 'Hertz Marrakech offre un service de location de voitures de qualité, avec des options flexibles et un excellent service client.Où la mer Méditerranée rencontre l’océan Atlantique, avec un phare emblématique. Où la mer Méditerranée rencontre l’océan Atlantique, avec un phare emblématique.',
    'website' => 'https://www.hertz.com',
    'address' => '3 Avenue Mohamed VI, Marrakech, Maroc',
    'email' => 'marrakech@hertz.com',
    'phone_number' => '+212524435678',
    'user_id' => 2,
    'city_id' => 2,
    'category_id' => 3,
    'submission_id'=>1,
    'image'=>'/images/RentalCars/c7.jpg',
]);

DB::table('services')->insert([
    'name' => 'Europcar Marrakech',
    'slug' => 'europcar-marrakech',
    'description' => 'Europcar Marrakech propose des véhicules de qualité supérieure à la location, avec un service rapide et flexible adapté aux besoins des clients.Où la mer Méditerranée rencontre l’océan Atlantique, avec un phare emblématique. Où la mer Méditerranée rencontre l’océan Atlantique, avec un phare emblématique.',
    'website' => 'https://www.europcar.com',
    'address' => '15 Rue de la Liberté, Marrakech, Maroc',
    'email' => 'marrakech@europcar.com',
    'phone_number' => '+212524436789',
    'user_id' => 2,
    'city_id' => 2,
    'category_id' => 3,
    'submission_id'=>1,
    'image'=>'/images/RentalCars/c8.jpg',
]);



DB::table('services')->insert([
    'name' => 'Essaouira Rent A Car',
    'slug' => 'essaouira-rent-a-car',
    'description' => 'Essaouira Rent A Car offre une large gamme de voitures de location pour tous les budgets, avec un service client de qualité et une flexibilité maximale.Où la mer Méditerranée rencontre l’océan Atlantique, avec un phare emblématique.Où la mer Méditerranée rencontre l’océan Atlantique, avec un phare emblématique.',
    'website' => 'https://www.essaouirarentacar.com',
    'address' => '2 Rue Moulay Ali, Essaouira, Maroc',
    'email' => 'contact@essaouirarentacar.com',
    'phone_number' => '+212524472233',
    'user_id' => 2,
    'city_id' => 3,
    'category_id' => 3,
    'submission_id'=>1,
    'image'=>'/images/RentalCars/c1.jpg',
]);

DB::table('services')->insert([
    'name' => 'Sixt Essaouira',
    'slug' => 'sixt-essaouira',
    'description' => 'Sixt Essaouira propose des voitures de location de haute qualité, avec un service fiable et flexible, parfait pour découvrir la ville et ses environs.Où la mer Méditerranée rencontre l’océan Atlantique, avec un phare emblématique.',
    'website' => 'https://www.sixt.com',
    'address' => '5 Avenue Mohammed V, Essaouira, Maroc',
    'email' => 'essaouira@sixt.com',
    'phone_number' => '+212524470999',
    'user_id' => 2,
    'city_id' => 3,
    'category_id' => 3,
    'submission_id'=>1,
    'image'=>'/images/RentalCars/c3.jpg',
]);




DB::table('services')->insert([
    'name' => 'Assilah Rent A Car',
    'slug' => 'assilah-rent-a-car',
    'description' => 'Assilah Rent A Car offre un large choix de véhicules à louer pour découvrir cette belle ville et ses environs.Où la mer Méditerranée rencontre l’océan Atlantique, avec un phare emblématique.',
    'website' => 'https://www.assilarentacar.com',
    'address' => '10 Rue Al-Maghrib, Assilah, Maroc',
    'email' => 'contact@assilarentacar.com',
    'phone_number' => '+212539937444',
    'user_id' => 2,
    'city_id' => 4,
    'category_id' => 3,
    'submission_id'=>1,
    'image'=>'/images/RentalCars/c5.jpg',
]);






DB::table('services')->insert([
    'name' => 'Hotel Parador',
    'slug' => 'hotel-parador',
    'description' => 'L\'Hotel Parador est un hôtel charmant offrant des chambres confortables et une vue imprenable sur les montagnes de Chefchaouen.Où la mer Méditerranée rencontre l’océan Atlantique, avec un phare emblématique.',
    'website' => 'https://www.hotelparador.com',
    'address' => 'Chefchaouen, Maroc',
    'email' => 'info@hotelparador.com',
    'phone_number' => '+212539890123',
    'user_id' => 2,
    'city_id' => 5,
    'category_id' => 1, // catégorie "hôtel"
    'submission_id'=>1,
    'image'=>'/images/chaoun/h2.jpeg',
]);

DB::table('services')->insert([
    'name' => 'Hotel Ras El Maa',
    'slug' => 'hotel-ras-el-maa',
    'description' => 'L\'Hotel Ras El Maa est un hôtel moderne et confortable, situé près de la source Ras El Maa, offrant une vue magnifique sur la médina de Chefchaouen.Où la mer Méditerranée rencontre l’océan Atlantique, avec un phare emblématique.',
    'website' => 'https://www.hotelraselmaa.com',
    'address' => 'Chefchaouen, Maroc',
    'email' => 'contact@hotelraselmaa.com',
    'phone_number' => '+212539812345',
    'user_id' => 2,
    'city_id' => 5,
    'category_id' => 1, // catégorie "hôtel"
    'submission_id'=>1,
    'image'=>'/images/chaoun/h1.jpeg',
]);

DB::table('services')->insert([
    'name' => 'Restaurant Aladdin',
    'slug' => 'restaurant-aladdin',
    'description' => 'Le Restaurant Aladdin propose une cuisine marocaine traditionnelle dans un cadre chaleureux et accueillant au cœur de Chefchaouen. Où la mer Méditerranée rencontre l’océan Atlantique, avec un phare emblématique.',
    'website' => 'https://www.restaurantaladdin.com',
    'address' => 'Chefchaouen, Maroc',
    'email' => 'info@restaurantaladdin.com',
    'phone_number' => '+212539899888',
    'user_id' => 2,
    'city_id' => 5,
    'category_id' => 2, // catégorie "restaurant"
    'submission_id'=>1,
    'image'=>'/images/chaoun/r1.jpeg',
]);

DB::table('services')->insert([
    'name' => 'Restaurant Casa Hassan',
    'slug' => 'restaurant-casa-hassan',
    'description' => 'Le Restaurant Casa Hassan offre une cuisine raffinée avec des plats locaux et méditerranéens, dans une ambiance élégante et conviviale. Où la mer Méditerranée rencontre l’océan Atlantique, avec un phare emblématique.',
    'website' => 'https://www.restaurantcasahassan.com',
    'address' => 'Chefchaouen, Maroc',
    'email' => 'contact@restaurantcasahassan.com',
    'phone_number' => '+212539876543',
    'user_id' => 2,
    'city_id' => 5,
    'category_id' => 2, // catégorie "restaurant"
    'submission_id'=>1,
    'image'=>'/images/chaoun/r2.jpeg',
]);

DB::table('services')->insert([
    'name' => 'La Médina de Chefchaouen',
    'slug' => 'medina-de-chefchaouen',
    'description' => 'La médina de Chefchaouen est célèbre pour ses ruelles étroites et ses bâtiments peints en bleu, une ville historique pleine de charme et de culture.Où la mer Méditerranée rencontre l’océan Atlantique, avec un phare emblématique.',
    'website' => 'https://www.visitmorocco.com/fr/chefchaouen',
    'address' => 'Chefchaouen, Maroc',
    'email' => 'info@chefchaouenmedina.com',
    'phone_number' => '+212539865432',
    'user_id' => 2,
    'city_id' => 5,
    'category_id' => 4, // catégorie "lieu touristique"
    'submission_id'=>1,
    'image'=>'/images/chaoun/a1.jpeg',
]);

DB::table('services')->insert([
    'name' => 'chefchaoun star',
    'slug' => 'mont-bouhachem',
    'description' => 'Le Mont Bouhachem est une montagne située près de Chefchaouen, idéale pour les randonnées et offrant une vue imprenable sur la région montagneuse. Où la mer Méditerranée rencontre l’océan Atlantique, avec un phare emblématique.',
    'website' => 'https://www.montbouhachem.com',
    'address' => 'Chefchaouen, Maroc',
    'email' => 'info@montbouhachem.com',
    'phone_number' => '+212539877654',
    'user_id' => 2,
    'city_id' => 5,
    'category_id' => 1, // catégorie "lieu touristique"
    'submission_id'=>1,
    'image'=>'/images/chaoun/h3.jpeg',
]);


        
    }
}
