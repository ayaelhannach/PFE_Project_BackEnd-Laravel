import React, { useState } from "react";
import { FaCalendarAlt, FaUserFriends } from "react-icons/fa";
import { motion } from "framer-motion";

const DateSelector = () => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState({ rooms: 1, adults: 2, children: 0 });
  const [focusedInput, setFocusedInput] = useState(null);

  const handleGuestChange = (field, value) => {
    setGuests((prev) => ({
      ...prev,
      [field]: Math.max(0, parseInt(value) || 0),
    }));
  };

  const inputVariants = {
    focused: {
      scale: 1.03,
      boxShadow: "0 6px 8px rgba(15, 53, 86, 0.25)",
      borderWidth: "2px",
      transition: { duration: 0.2 }
    },
    notFocused: {
      scale: 1,
      boxShadow: "none",
      borderWidth: "1px",
      transition: { duration: 0.2 }
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[#F8DDAC] rounded-xl p-8 shadow-xl text-[#0F3556] max-w-4xl mx-auto border-2 border-[#0F3556]"
    >
      <div className="flex flex-col md:flex-row gap-6 items-end">
        {/* Check-in */}
        <motion.div 
          className="flex-1 min-w-[220px]"
          whileHover={{ scale: 1.02 }}
        >
          <label className="font-bold text-lg flex items-center gap-3 mb-3">
            <FaCalendarAlt className="text-xl" />
            Check In
          </label>
          <motion.input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            onFocus={() => setFocusedInput("checkIn")}
            onBlur={() => setFocusedInput(null)}
            variants={inputVariants}
            animate={focusedInput === "checkIn" ? "focused" : "notFocused"}
            className="bg-white border-2 border-[#0F3556] rounded-xl px-5 py-3 w-full outline-none focus:ring-2 focus:ring-[#0F3556] cursor-pointer text-lg"
          />
        </motion.div>

        {/* Check-out */}
        <motion.div 
          className="flex-1 min-w-[220px]"
          whileHover={{ scale: 1.02 }}
        >
          <label className="font-bold text-lg flex items-center gap-3 mb-3">
            <FaCalendarAlt className="text-xl" />
            Check Out
          </label>
          <motion.input
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            onFocus={() => setFocusedInput("checkOut")}
            onBlur={() => setFocusedInput(null)}
            variants={inputVariants}
            animate={focusedInput === "checkOut" ? "focused" : "notFocused"}
            className="bg-white border-2 border-[#0F3556] rounded-xl px-5 py-3 w-full outline-none focus:ring-2 focus:ring-[#0F3556] cursor-pointer text-lg"
          />
        </motion.div>

        {/* Guests */}
        <motion.div 
          className="flex-1 min-w-[280px]"
          whileHover={{ scale: 1.02 }}
        >
          <label className="font-bold text-lg flex items-center gap-3 mb-3">
            <FaUserFriends className="text-xl" />
            Guests
          </label>
          <div className="flex gap-3">
            {["rooms", "adults", "children"].map((field, index) => (
              <motion.div 
                key={field}
                className="flex-1"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <label className="text-sm block mb-2 text-center capitalize font-medium">
                  {field}
                </label>
                <motion.input
                  type="number"
                  min={field === "rooms" ? 1 : 0}
                  value={guests[field]}
                  onChange={(e) => handleGuestChange(field, e.target.value)}
                  onFocus={() => setFocusedInput(field)}
                  onBlur={() => setFocusedInput(null)}
                  variants={inputVariants}
                  animate={focusedInput === field ? "focused" : "notFocused"}
                  className="bg-white border-2 border-[#0F3556] rounded-xl px-3 py-2 w-full outline-none text-center text-lg font-medium"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default DateSelector;