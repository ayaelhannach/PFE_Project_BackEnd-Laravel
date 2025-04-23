import React from "react";
import { useTranslation } from "react-i18next";
import { Youtube, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  return (
    <footer className="bg-[#0d3b66] text-white min-h-[500px] flex flex-col">
      <div className="flex-grow">
        <div className="max-w-screen-xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* About */}
          <div>
            <h3 className="text-xl font-semibold italic mb-4 border-b-2 border-white inline-block">
              {t("footer.about")}
            </h3>
            <p className="text-sm text-gray-300 mt-4">
              {t("footer.about_text")}
            </p>
            <h4 className="mt-6 mb-2 font-semibold">{t("footer.contact_us")}</h4>
            <div className="flex space-x-4 mt-2">
              <a href="#"><Youtube className="w-6 h-6 hover:text-yellow-400" /></a>
              <a href="#"><Instagram className="w-6 h-6 hover:text-yellow-400" /></a>
              <a href="#"><Facebook className="w-6 h-6 hover:text-yellow-400" /></a>
              <a href="#"><Twitter className="w-6 h-6 hover:text-yellow-400" /></a>
            </div>
          </div>

          {/* Tweets */}
          <div>
            <h3 className="text-xl font-semibold italic mb-4 border-b-2 border-white inline-block">
              {t("footer.latest_tweets")}
            </h3>
            <div className="text-sm text-gray-300 space-y-4 mt-4">
              <div>
                <p>{t("footer.tweet_one")}</p>
                <a href="http://CourCompass/" className="text-blue-300 hover:underline">http://CourCompass/</a>
                <p className="text-yellow-400 mt-1">6 Days ago</p>
              </div>
              <div>
                <p>{t("footer.tweet_two")}</p>
                <a href="http://CourCompass/" className="text-blue-300 hover:underline">http://CourCompass/</a>
                <p className="text-yellow-400 mt-1">10 Days ago</p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold italic mb-4 border-b-2 border-white inline-block">
              {t("footer.get_in_touch")}
            </h3>
            <div className="text-sm text-gray-300 mt-4 space-y-2">
              <p>{t("footer.phone")}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-300 border-t border-gray-500 py-4">
        {t("footer.copyright")}
      </div>
    </footer>
  );
};

export default Footer;
