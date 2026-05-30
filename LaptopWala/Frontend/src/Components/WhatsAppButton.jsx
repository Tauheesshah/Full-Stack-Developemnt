import React from "react";

import { FaWhatsapp } from "react-icons/fa";

import "../CSS/WhatsAppButton.css";

const WhatsAppButton = () => {

  const phoneNumber = "919876543210";

  const whatsappLink =
    `https://wa.me/${phoneNumber}`;

  return (

    <a
      href={whatsappLink}
      target="_blank"
      rel="noreferrer"
      className="whatsapp-float"
    >

      <FaWhatsapp className="whatsapp-icon" />

    </a>
  );
};

export default WhatsAppButton;