import React, { useEffect, useState } from "react";
import "./typingText.scss";

const TypingText = () => {
  const textToType = "Hello, I am Gabi";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      setDisplayedText((prevText) => prevText + textToType[currentIndex]);

      currentIndex++;

      if (currentIndex === textToType.length) {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [textToType]);

  return <div className="typing-text">{displayedText}</div>;
};

export default TypingText;
