"use client";

import { MessageCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";


export function WhatsappButton() {
  const phoneNumber = "+523223787506"; // Reemplaza con tu número de WhatsApp
  const message = "Hola, me gustaría obtener más información sobre sus servicios.";

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
      aria-label="Contactar por WhatsApp"
    >
      { <FaWhatsapp  className="h-7 w-7" fill="currentColor" />}
      {/* <MessageCircle className="h-7 w-7" fill="currentColor" /> */}
    </button>
  );
}
