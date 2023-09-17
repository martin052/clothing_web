import React from "react";
import { FaInstagram } from "react-icons/fa"; // Import Instagram icon from a library like react-icons

const InstagramLink = () => {
  return (
    <a
      href="https://www.instagram.com/melissillusion/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaInstagram size={24} /> {/* Use an Instagram icon */}
    </a>
  );
};

export default InstagramLink;
