// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      home: "Home",
      about: "About Us",
      service: "Service",
      cities: "Cities",
      contact: "Contact",
      login: "Log in",
      signup: "Sign up",
      about_text: "We are a company dedicated to providing top-quality tourism services in Morocco. Our goal is to help you explore the best destinations with ease and comfort.",
      read_more: "Read More",
      add_banner: {
        subtitle: "Add your business for $100 and reach more customers!",
        title: "Add your business",
        description: "Add your business today and connect with more customers! Enjoy increased visibility, attract a wider audience, and grow your sales effortlessly. Start now and take your business to the next level.",
        button: "Add Business"
      },

      add_guide: {
        subtitle: "Add your details to become a part of our network of tour guides to start connecting with travelers!",
        title: "Tour Guide",
        description: "Add your details to become a part of our network of tour guides to start connecting with travelers!",
        button: "Add Profile"
      },
      features: {
        title: "Our Features",
        subtitle: "Your guide to the best hotels, restaurants, attractions, and transportation in Morocco.",
        list: {
          hotels: {
            title: "Hotels",
            description: "Enjoy delicious dishes at our signature restaurants, offering a unique blend of traditional Moroccan flavors and modern culinary creativity."
          },
          guides: {
            title: "Tour Guide",
            description: "Enjoy delicious dishes at our signature restaurants, offering a unique blend of traditional Moroccan flavors and modern culinary creativity."
          },
          restaurants: {
            title: "Restaurants",
            description: "Enjoy delicious dishes at our signature restaurants, offering a unique blend of traditional Moroccan flavors and modern culinary creativity."
          },
          destinations: {
            title: "Destinations",
            description: "Explore the most beautiful tourist destinations, where breathtaking landscapes, rich history, and unique cultural experiences await at every turn."
          },
          favorites:"favorites",
          cars: {
            title: "Rental Cars",
            description: "Enjoy the freedom to explore Morocco at your own pace with our reliable car rental services."
          }
        }
      },

      destinationSection: {
        title: "The best destinations for your next vacation",
        subtitle: "Here's where other travelers are going"
      },



      footer: {
        about: "About Your Compass",
        about_text: "Your Compass is a tourism platform that helps travelers discover Morocco by offering services such as hotel reservations, car rentals, recommended restaurants, and sightseeing tours.",
        contact_us: "Contact Our",
        latest_tweets: "Latest Tweets",
        tweet_one: "Fellows and they knew it is",
        tweet_two: "Skipper too the millionaire",
        get_in_touch: "Get in Touch",
        phone: "(1-8016-7890-1990)",
        copyright: "Copyrights © YourCompass 2017. All Rights Reserved"
      },

      tourGuides: {
        title: "Tour Guides",
        description: "Connect with tourists and grow your business by joining our platform as a tour guide.",
      },


      translation: {
        welcomeToMorocco: "Welcome to Morocco",
        yourCompass: "Your Compass, your gateway to discovering Morocco's magic.",
        welcomeToChefchaouen: "Welcome to Chefchaouen",
        experienceChefchaouen: "Experience the enchanting blue city of Chefchaouen with Your Compass.",
        welcomeToMarrakech: "Welcome to Marrakech",
        discoverMarrakech: "Discover the magic of Marrakech with Your Compass.",
        welcomeToTangier: "Welcome to Tangier",
        exploreTangier: "Explore the vibrant beauty of Tangier with Your Compass.",
        search: "Search...",
      },
      
      
      
      
      
    }
  },
  fr: {

    translation: {
      home: "Accueil",
      favorites:"Favoris",
      about: "À propos",
      service: "Service",
      cities: "Villes",
      contact: "Contact",
      login: "Connexion",
      signup: "Inscription",
      about_text: "Nous sommes une entreprise spécialisée dans les services touristiques de qualité au Maroc. Notre objectif est de vous aider à découvrir les meilleures destinations avec confort.",
      read_more: "Lire la suite",
      add_banner: {
        subtitle: "Ajoutez votre entreprise pour 100 $ et atteignez plus de clients !",
        title: "Ajoutez votre entreprise",
        description: "Ajoutez votre entreprise aujourd'hui et touchez plus de clients ! Profitez d'une meilleure visibilité, attirez un public plus large et augmentez vos ventes facilement. Commencez maintenant et développez votre activité.",
        button: "Ajouter mon entreprise"
      },
      add_guide: {
        subtitle: "Ajoutez vos informations pour rejoindre notre réseau de guides touristiques et commencer à rencontrer des voyageurs !",
        title: "Guide touristique",
        description: "Ajoutez vos informations pour rejoindre notre réseau de guides touristiques et commencer à rencontrer des voyageurs !",
        button: "Ajouter mon profil"
      },


      features: {
        title: "Nos Services",
        subtitle: "Votre guide pour les meilleurs hôtels, restaurants, attractions et transports au Maroc.",
        list: {
          hotels: {
            title: "Hôtels",
            description: "Savourez de délicieux plats dans nos restaurants emblématiques, alliant cuisine marocaine traditionnelle et créativité moderne."
          },
          guides: {
            title: "Guide Touristique",
            description: "Savourez de délicieux plats dans nos restaurants emblématiques, alliant cuisine marocaine traditionnelle et créativité moderne."
          },
          restaurants: {
            title: "Restaurants",
            description: "Savourez de délicieux plats dans nos restaurants emblématiques, alliant cuisine marocaine traditionnelle et créativité moderne."
          },
          destinations: {
            title: "Destinations",
            description: "Explorez les plus belles destinations touristiques avec des paysages à couper le souffle et une culture riche."
          },
          cars: {
            title: "Voitures de location",
            description: "Profitez de la liberté d'explorer le Maroc à votre rythme grâce à nos services de location de voitures fiables."
          }
        }
      },


      translation: {
        welcomeToMorocco: "Bienvenue au Maroc",
        yourCompass: "Votre boussole, votre porte d'entrée pour découvrir la magie du Maroc.",
        welcomeToChefchaouen: "Bienvenue à Chefchaouen",
        experienceChefchaouen: "Découvrez la ville bleue enchanteresse de Chefchaouen avec Your Compass.",
        welcomeToMarrakech: "Bienvenue à Marrakech",
        discoverMarrakech: "Découvrez la magie de Marrakech avec Your Compass.",
        welcomeToTangier: "Bienvenue à Tanger",
        exploreTangier: "Explorez la beauté vibrante de Tanger avec Your Compass.",
        search: "Chercher...",
      },






      destinationSection: {
        title: "Les meilleures destinations pour vos prochaines vacances",
        subtitle: "Voici où vont les autres voyageurs"
      },


      footer: {
        about: "À propos de Your Compass",
        about_text: "Your Compass est une plateforme touristique qui aide les voyageurs à découvrir le Maroc en offrant des services tels que la réservation d'hôtels, la location de voitures, des restaurants recommandés et des visites touristiques.",
        contact_us: "Contactez-nous",
        latest_tweets: "Derniers Tweets",
        tweet_one: "Les compagnons savaient que c'était",
        tweet_two: "Le skipper est devenu millionnaire",
        get_in_touch: "Contactez-nous",
        phone: "(1-8016-7890-1990)",
        copyright: "Droits d'auteur © YourCompass 2017. Tous droits réservés"
      },

      tourGuides: {
        title: "Guides Touristiques",
        description: "Connectez-vous avec les touristes et développez votre entreprise en rejoignant notre plateforme en tant que guide touristique.",
      }
      
      
      
      
      
    }
  },
  ar: {
    translation: {
      favorites:"المفضلة",
      home: "الرئيسية",
      about: "من نحن",
      service: "الخدمة",
      cities: "المدن",
      contact: "اتصل",
      login: "تسجيل الدخول",
      signup: "إنشاء حساب",
      about_text: "نحن شركة متخصصة في تقديم خدمات سياحية متميزة في المغرب. هدفنا هو مساعدتك في اكتشاف أجمل الوجهات بكل سهولة وراحة.",
      read_more: "اقرأ المزيد",
      add_banner: {
        subtitle: "أضف عملك مقابل 100 دولار وحقق المزيد من العملاء!",
        title: "أضف عملك التجاري",
        description: "أضف عملك اليوم وتواصل مع المزيد من العملاء! استمتع برؤية أكبر، واجذب جمهورًا أوسع، وزد من مبيعاتك بسهولة. ابدأ الآن وخذ عملك إلى المستوى التالي.",
        button: "أضف عملي"
      },

      add_guide: {
        subtitle: "أضف بياناتك لتصبح جزءًا من شبكتنا من المرشدين السياحيين وتبدأ بالتواصل مع المسافرين!",
        title: "مرشد سياحي",
        description: "أضف بياناتك لتصبح جزءًا من شبكتنا من المرشدين السياحيين وتبدأ بالتواصل مع المسافرين!",
        button: "أضف ملفك"
      },


      translation: {
        welcomeToMorocco: "مرحبًا بكم في المغرب",
        yourCompass: "بوصلة الخاصة بك، بوابتك لاكتشاف سحر المغرب.",
        welcomeToChefchaouen: "مرحبًا بكم في شفشاون",
        experienceChefchaouen: "اكتشف المدينة الزرقاء الساحرة شفشاون مع Your Compass.",
        welcomeToMarrakech: "مرحبًا بكم في مراكش",
        discoverMarrakech: "اكتشف سحر مراكش مع Your Compass.",
        welcomeToTangier: "مرحبًا بكم في طنجة",
        exploreTangier: "استكشف جمال طنجة النابض بالحياة مع Your Compass.",
        search: "بحث...",
      },



      features: {
        title: "مميزاتنا",
        subtitle: "دليلك لأفضل الفنادق والمطاعم والمعالم السياحية ووسائل النقل في المغرب.",
        list: {
          hotels: {
            title: "الفنادق",
            description: "استمتع بأشهى الأطباق في مطاعمنا المميزة التي تمزج بين النكهات المغربية التقليدية والإبداع العصري."
          },
          guides: {
            title: "المرشدين السياحيين",
            description: "استمتع بأشهى الأطباق في مطاعمنا المميزة التي تمزج بين النكهات المغربية التقليدية والإبداع العصري."
          },
          restaurants: {
            title: "المطاعم",
            description: "استمتع بأشهى الأطباق في مطاعمنا المميزة التي تمزج بين النكهات المغربية التقليدية والإبداع العصري."
          },
          destinations: {
            title: "الوجهات",
            description: "اكتشف أجمل الوجهات السياحية حيث تنتظرك مناظر خلابة وتجارب ثقافية غنية."
          },
          cars: {
            title: "تأجير السيارات",
            description: "استمتع بحرية استكشاف المغرب على طريقتك الخاصة مع خدمات تأجير السيارات الموثوقة."
          }
        }
      },



      destinationSection: {
        title: "أفضل الوجهات لعطلتك القادمة",
        subtitle: "إليك الأماكن التي يزورها المسافرون الآخرون"
      },


      footer: {
        about: "حول Your Compass",
        about_text: "Your Compass هي منصة سياحية تساعد المسافرين على اكتشاف المغرب من خلال تقديم خدمات مثل حجز الفنادق وتأجير السيارات والمطاعم الموصى بها وجولات سياحية.",
        contact_us: "اتصل بنا",
        latest_tweets: "أحدث التغريدات",
        tweet_one: "الزملاء علموا أنه",
        tweet_two: "القبطان أصبح مليونيرًا",
        get_in_touch: "تواصل معنا",
        phone: "(1-8016-7890-1990)",
        copyright: "حقوق الطبع والنشر © YourCompass 2017. جميع الحقوق محفوظة"
      },


      tourGuides: {
        title: "دليل سياحي",
        description: "تواصل مع السياح ونمّي عملك من خلال الانضمام إلى منصتنا كدليل سياحي.",
      },



  welcomeToMorocco: "مرحبًا بكم في المغرب",
  yourCompass: "بوصلة الخاصة بك، بوابتك لاكتشاف سحر المغرب.",
  welcomeToChefchaouen: "مرحبًا بكم في شفشاون",
  experienceChefchaouen: "اكتشف المدينة الزرقاء الساحرة شفشاون مع Your Compass.",
  welcomeToMarrakech: "مرحبًا بكم في مراكش",
  discoverMarrakech: "اكتشف سحر مراكش مع Your Compass.",
  welcomeToTangier: "مرحبًا بكم في طنجة",
  exploreTangier: "استكشف جمال طنجة النابض بالحياة مع Your Compass.",
  search: "بحث..."
      
      
      
      
      
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
