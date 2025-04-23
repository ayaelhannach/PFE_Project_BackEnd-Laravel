import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-12 bg-white border border-gray-300">
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-3xl font-serif italic mb-4 text-black">{t('about_us')}</h2>
        <p className="text-gray-700 text-base leading-relaxed mb-6">
          {t("about_text")}
        </p>
        
        <button className="bg-[#c3a37d] text-white py-2 px-6 rounded-lg shadow-md hover:bg-[#a88b6a] transition duration-300">
          {t('read_more')}
        </button>
      </div>
      <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
        <img src="images/abt.jpeg" alt="People riding camels" className="w-[400px] h-auto rounded-lg shadow-lg" />
      </div>
    </div>
  );
};

export default AboutUs;
