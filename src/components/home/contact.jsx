import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";
import "leaflet/dist/leaflet.css";
import Navbar from "./menu";
import Footer from "./footer";
import Carousel from "./headerContact";

const ContactPage = () => {
  const contactInfo = {
    phone: "+212 05 22 38 67 89", // Morocco phone number
    email: "morocco@mosaicfactory.com", // Morocco email address
    showroomAddress: "123 Rue Mohammed V, Casablanca, Maroc", // Address in Morocco
    hours: {
      weekdays: "Lundi à Vendredi 9h/18h",
      saturday: "Samedi 10h/18h",
    },
    showroomHours: "Mardi à Samedi 10h/17h30",
    socialLinks: {
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
      youtube: "https://youtube.com",
    },
    showroomLocation: [33.5731, -7.5898], // Coordinates for Casablanca, Morocco
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <Carousel />
      {/* Main container for map and contact info */}
      <div className="w-full px-4 bg-white p-8 mt-10 mb-10 rounded-lg shadow-xl flex flex-col lg:flex-row gap-10 lg:gap-16 max-w-full mx-auto animate-fade-in">
        {/* Map on the left */}
        <div className="lg:w-1/2 w-full">
          <h3 className="text-2xl font-semibold text-[#0F3556] mb-4 animate-slide-in">Localisation</h3>
          <MapContainer
            center={contactInfo.showroomLocation}
            zoom={13}
            style={{ height: "400px", width: "100%" }}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={contactInfo.showroomLocation}>
              <Popup>
                Notre showroom à Casablanca<br />
                <a href="https://www.google.com/maps/dir/?api=1&destination=33.5731,-7.5898" target="_blank" rel="noopener noreferrer">
                  Obtenir des directions
                </a>
              </Popup>
            </Marker>
          </MapContainer>
        </div>

        {/* Contact Info on the right */}
        <div className="lg:w-1/2 w-full">
          <h3 className="text-2xl font-semibold text-[#0F3556] mb-4">Nos Coordonnées</h3>
          <p className="text-lg text-[#0F3556] mb-2">
            📞 Téléphone:{" "}
            <a
              href={`tel:${contactInfo.phone}`}
              className="text-[#0F3556] hover:text-[#0d2e4b] transition duration-300 ease-in-out"
            >
              {contactInfo.phone}
            </a>
          </p>
          <p className="text-lg text-[#0F3556] mb-2">
            📧 Email:{" "}
            <a
              href={`mailto:${contactInfo.email}`}
              className="text-[#0F3556] hover:text-[#0d2e4b] transition duration-300 ease-in-out"
            >
              {contactInfo.email}
            </a>
          </p>
          <p className="text-lg text-[#0F3556] mb-2">🕒 {contactInfo.hours.weekdays}</p>
          <p className="text-lg text-[#0F3556] mb-6">🕒 {contactInfo.hours.saturday}</p>
          <p className="text-lg text-[#0F3556] mb-2">
            📍 Showroom Casablanca: {contactInfo.showroomAddress}
          </p>
          <p className="text-lg text-[#0F3556] mb-6">🕒 {contactInfo.showroomHours}</p>

          {/* Find in Maps Link */}
          <div>
            <a
              href={`https://www.google.com/maps?q=${contactInfo.showroomLocation[0]},${contactInfo.showroomLocation[1]}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-[#0d2e4b] transition duration-300 ease-in-out custom-black-color"
            >
              📍 Trouvez-nous sur Google Maps
            </a>

          </div>

          {/* Social Media Links */}
          <div className="flex justify-start gap-6 mt-8">
            {Object.entries(contactInfo.socialLinks).map(([key, value]) => (
              <a
                key={key}
                href={value}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={key}
                className="text-[#0F3556] hover:text-[#0d2e4b] transition duration-300 ease-in-out"
              >
                {key === "facebook" && <FaFacebook size={32} />}
                {key === "twitter" && <FaTwitter size={32} />}
                {key === "linkedin" && <FaLinkedin size={32} />}
                {key === "instagram" && <FaInstagram size={32} />}
                {key === "youtube" && <FaYoutube size={32} />}
              </a>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactPage;
