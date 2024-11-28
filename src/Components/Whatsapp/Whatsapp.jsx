import React from "react";
import "./Whatsapp.css";

const Whatsapp = () => {
  return (
    <a 
      href="https://wa.me/+5493513063528" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="whatsappButton"
    >
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
        alt="WhatsApp" 
        className="whatsappIcon" 
      />
    </a>
  );
};

export default Whatsapp;
