import React from "react";
import { FaFacebook } from "react-icons/fa"; // Import Facebook icon from a library like react-icons

const FacebookLink = () => {
  return (
    <a
      href="https://www.facebook.com/profile.php?id=61552403312482"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaFacebook size={24} /> {/* Use a Facebook icon */}
    </a>
  );
};

export default FacebookLink;
