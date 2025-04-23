import React from "react";
import {
  HomeIcon,
  FileTextIcon,
  ServerIcon,
  UsersIcon,
  BriefcaseIcon,
  StarIcon,
  BuildingIcon,
  LogOutIcon,
  BellIcon,
  SearchIcon,
  GlobeIcon,
} from "lucide-react";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const menuItems = [
  { label: "Dashboard", icon: <HomeIcon className="w-5 h-5" />, key: "dashboard" },
  { label: "Users", icon: <UsersIcon className="w-5 h-5" />, key: "evaluators" },
  { label: "Cities", icon: <BuildingIcon className="w-5 h-5" />, key: "cities" },
  { label: "Categories", icon: <BriefcaseIcon className="w-5 h-5" />, key: "categories" },
  { label: "Services", icon: <ServerIcon className="w-5 h-5" />, key: "services" },
  { label: "Activities", icon: <BuildingIcon className="w-5 h-5" />, key: "places" },
  { label: "Guides", icon: <BuildingIcon className="w-5 h-5" />, key: "clients" },
  { label: "Logout", icon: <LogOutIcon className="w-5 h-5" />, key: "logout" },
];

const Sidebar = ({ setActivePage, activePage }) => {
  const handleLogout = async () => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#c5a76f",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, logout",
    });

    if (result.isConfirmed) {
      window.location.href = "http://localhost:5173";
      try {
        await axios.get("http://localhost:8000/sanctum/csrf-cookie", {
          withCredentials: true,
        });
        await axios.post("http://localhost:8000/api/logout", {}, {
          withCredentials: true,
        });
        console.log("Logout request sent.");
      } catch (error) {
        console.error("Logout error (but already redirected):", error);
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#f9f9f9]">
      {/* Top Navigation Bar */}
      <div className="flex justify-between items-center bg-white px-6 py-4 shadow fixed w-full top-0 z-50">
        <div className="flex items-center gap-6">
          <h2 className="text-xl font-bold text-black">
            Your<span className="text-[#c5a76f]">Compass</span>
          </h2>
          <div className="relative w-96">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for something..."
              className="pl-10 pr-4 py-2 w-full bg-white border border-gray-200 rounded-full shadow-sm text-black focus:outline-none focus:ring-2 focus:ring-[#c5a76f]"
            />
          </div>
        </div>

        <div className="flex items-center gap-6">
          <Link to="/submission" className="relative flex items-center gap-2 cursor-pointer">
            <BellIcon className="text-gray-600 w-5 h-5" />
            <span className="absolute top-0 right-0 inline-flex items-center justify-center w-2.5 h-2.5 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full"></span>
          </Link>
          <div className="flex items-center gap-2">
            <Link to="/admin-profile" className="flex items-center gap-2 cursor-pointer">
              <img src="/images/admin.png" alt="User" className="w-8 h-8 rounded-full" />
              <div className="text-sm text-right">
                <p className="font-medium">L.A.A</p>
                <p className="text-gray-500 text-xs">admin</p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div className="fixed top-[72px] left-0 w-64 bg-white h-full border-r shadow-sm pt-6">
        <ul className="space-y-2">
          {menuItems.map((item, index) => {
            let itemClass = "text-gray-700 hover:bg-[#0f3556] hover:text-white";
            if (activePage === item.key) {
              itemClass = "bg-[#c5a76f] text-white";
            }
            if ((activePage === "edit" || activePage === "create") && item.key === "dashboard") {
              itemClass = "bg-blue-600 text-white";
            }

            return (
              <li
                key={index}
                className={`flex items-center px-6 py-3 cursor-pointer transition text-sm font-medium ${itemClass}`}
                onClick={() => {
                  if (item.key === "logout") {
                    handleLogout();
                  } else {
                    setActivePage(item.key);
                  }
                }}
              >
                {item.icon}
                <span className="ml-3">{item.label}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
