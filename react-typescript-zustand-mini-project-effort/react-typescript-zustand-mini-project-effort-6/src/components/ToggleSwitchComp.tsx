import React from "react";
import { motion } from "framer-motion";
import { useToggleStore } from "../store/useToggleStore";

const ToggleSwitchComp = () => {
  const { isOn, toggle } = useToggleStore();
  return (
    <>
      <div className="toggle-container">
        <motion.div
          className={`toggle ${isOn ? "on" : "off"}`}
          onClick={toggle}
          animate={{
            backgroundColor: isOn ? "#4CAF50" : "#ccc", // Color change when toggled
          }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <motion.div
            className="switch-circle"
            animate={{
              x: isOn ? 30 : 0, // Move the circle left/right
            }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </motion.div>
        <p>{isOn ? "ON" : "OFF"}</p>
      </div>
    </>
  );
};

export default ToggleSwitchComp;
