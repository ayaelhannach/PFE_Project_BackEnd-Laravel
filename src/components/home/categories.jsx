
import React from "react";
import { useTranslation } from "react-i18next";
import { Hotel, Users, Utensils, MapPin, Car } from "lucide-react";

const Features = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const features = [
    {
      icon: <Hotel size={50} className="text-yellow-600" />,
      title: t("features.list.hotels.title"),
      description: t("features.list.hotels.description"),
    },
    {
      icon: <Users size={50} className="text-yellow-600" />,
      title: t("features.list.guides.title"),
      description: t("features.list.guides.description"),
    },
    {
      icon: <Utensils size={50} className="text-yellow-600" />,
      title: t("features.list.restaurants.title"),
      description: t("features.list.restaurants.description"),
    },
    {
      icon: <MapPin size={50} className="text-yellow-600" />,
      title: t("features.list.destinations.title"),
      description: t("features.list.destinations.description"),
    },
    {
      icon: <Car size={50} className="text-yellow-600" />,
      title: t("features.list.cars.title"),
      description: t("features.list.cars.description"),
    },
  ];

  return (
    <section 
      className={`py-20 bg-white ${isRTL ? "text-right" : "text-center"}`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <h2 className="text-5xl font-semibold font-serif mb-4 text-black">
        {t("features.title")}
      </h2>
      <p className="text-gray-600 text-lg mb-16">
        {t("features.subtitle")}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center space-y-6">
            {feature.icon}
            <h3 className="text-2xl font-semibold">{feature.title}</h3>
            <p className="text-gray-600 text-base">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;

