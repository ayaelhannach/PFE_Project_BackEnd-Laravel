


import { useState } from "react";
import { Link } from "react-router-dom";
import { Globe, ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const [active, setActive] = useState("HOME");
  const [isCitiesOpen, setIsCitiesOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  const { t, i18n } = useTranslation();

  const menuItems = [
  { label: t("home"), link: "/" },
  { label: t("about"), link: "/about" },
  { label: t("favorites"), link: "/favorites" },
  { label: t("cities"), link: "/tanger", hasDropdown: true },  // Cities with dropdown
  { label: t("contact"), link: "/contact" },
];


  const cities = ["Tanger", "Chefchaouen", "Marrakech", "Casablanca"];

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0F3556] text-white px-6 py-4 flex items-center justify-between z-50">
      <div className="text-4xl font-bold italic" style={{ fontFamily: "Beau Rivage" }}>
        <span className="text-white">Your</span>{" "}
        <span className="text-[#F8DDAC]">Compass</span>
      </div>

      <div className="hidden md:flex gap-x-20 items-center">
        {menuItems.map((item) =>
          item.hasDropdown ? (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setIsCitiesOpen(true)}
              onMouseLeave={() => setIsCitiesOpen(false)}
            >
              <a
                href={item.link}
                onClick={() => setActive(item.label)}
                className={`uppercase font-semibold tracking-wide relative transition-all text-lg ${
                  active === item.label ? "text-white" : "text-white"
                }`}
              >
                {item.label}
                <ChevronDown className="inline-block ml-2 text-white" />
                {active === item.label && (
                  <span className="absolute left-0 bottom-0 h-[2px] w-full bg-gold"></span>
                )}
              </a>
              {isCitiesOpen && (
                <div className="absolute top-full left-0 bg-[#0F3556] w-64 border-t border-[#F8DDAC]">
                  <ul>
                    {cities.map((city, index) => (
                      <li key={index}>
                        <Link
                          to={`/${city.toLowerCase()}`}
                          onClick={() => setActive("CITIES")}
                          className="block py-2 px-4 text-white hover:bg-[#F8DDAC] transition-colors"
                        >
                          {city}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <Link
              key={item.label}
              to={item.link}
              onClick={() => setActive(item.label)}
              className={`uppercase font-semibold tracking-wide relative transition-all text-lg ${
                active === item.label ? "text-white" : "text-white"
              }`}
            >
              {item.label}
              {active === item.label && (
                <span className="absolute left-0 bottom-0 h-[2px] w-full bg-gold"></span>
              )}
            </Link>
          )
        )}
      </div>

      <div className="flex items-center space-x-6 ml-6">
        {/* Dropdown Language Selector */}
        <div
          className="relative"
          onMouseEnter={() => setIsLangOpen(true)}
          onMouseLeave={() => setIsLangOpen(false)}
        >
          <button className="flex items-center space-x-1 text-white">
            <Globe className="h-6 w-6 cursor-pointer" />
            <ChevronDown className="h-4 w-4" />
          </button>
          {isLangOpen && (
            <div className="absolute right-0 mt-2 w-28 rounded-md shadow-lg bg-white text-black z-50">
              <ul className="py-1">
                <li>
                  <button
                    onClick={() => i18n.changeLanguage("en")}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    English
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => i18n.changeLanguage("fr")}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    Français
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => i18n.changeLanguage("ar")}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    العربية
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>



        {/* <Link to="/tanger"> 
          <button className="login-btn px-4 py-1 rounded-full text-sm font-semibold">
            tanger
        </button>
      </Link> */}

        <Link to="/login">
          <button className="login-btn px-4 py-1 rounded-full text-sm font-semibold">
            {t("login")}
          </button>
        </Link>
        <Link to="/signin">
          <button className="signup-btn px-4 py-1 rounded-full text-sm font-semibold">
            {t("signup")}
          </button>
        </Link>
      </div>
    </nav>
  );
}


