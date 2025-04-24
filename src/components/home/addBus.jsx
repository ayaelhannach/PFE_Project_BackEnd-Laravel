

import React from 'react';
import { Link } from "react-router-dom";  
import { useTranslation } from 'react-i18next';

const AddBusiness = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  return (
    <div 
      className="relative flex items-center justify-center min-h-screen bg-cover bg-center mt-20" 
      style={{ backgroundImage: "url('images/addbuss.jpg')" }}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <div className={`relative text-white px-6 max-w-2xl ${isRTL ? "text-right" : "text-center"}`}>
        <p className="text-sm uppercase tracking-wide text-yellow-400 mb-2">
          {t("add_banner.subtitle")}
        </p>
        <h1 className="text-4xl font-bold italic mb-4">
          {t("add_banner.title")}
        </h1>
        <p className="text-lg mb-6">
          {t("add_banner.description")}
        </p>
        <Link to='/AddBuss'>
          <button className="bg-yellow-500 text-gray-900 font-semibold py-3 px-6 rounded-lg shadow-md 
                             hover:bg-yellow-600 transition duration-300">
            {t("add_banner.button")}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AddBusiness;

