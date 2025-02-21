import React, { useState } from "react";

interface InvitationOverlayProps {
  title?: string;
  bride?: string;
  groom?: string;
}

const InvitationOverlay: React.FC<InvitationOverlayProps> = ({
  title = "Undangan Sangjit & Pemberkatan",
  bride = "ENJELIKA",
  groom = "OEY, TOMMI (DARTO)",
}) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => setIsOpen(false), 500); // Match with transition duration
  };

  if (!isOpen) return null;

  return (
    <div
      className={`
        fixed inset-0 bg-[#830101] z-50 
        flex flex-col items-center justify-center text-white
        transition-all duration-500 ease-in-out
        ${isVisible ? "opacity-100" : "opacity-0"}
      `}
    >
      <div
        className={`
        text-center space-y-6 
        transition-all duration-500 ease-in-out
        ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}
      `}
      >
        <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
        <div className="space-y-1">
          <p className="text-xl md:text-2xl">{bride}</p>
          <p className="text-xl md:text-2xl">&</p>
          <p className="text-xl md:text-2xl">{groom}</p>
        </div>
        <button
          onClick={handleClose}
          className="px-6 py-3 rounded-full border-2 border-white 
                   hover:bg-white hover:text-[#830101] 
                   transition-colors duration-300 
                   text-sm md:text-base font-semibold"
        >
          Buka Undangan
        </button>
      </div>
    </div>
  );
};

export default InvitationOverlay;
