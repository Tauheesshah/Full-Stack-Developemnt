import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "7304338616"; // Replace with your number
  const message = "Hello CyberNet, I would like to know more about your courses.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 p-4 rounded-full shadow-2xl animate-bounce hover:scale-110 transition-all duration-300"
    >
      <FaWhatsapp className="text-white text-4xl" />
    </a>
  );
};

export default WhatsAppButton;