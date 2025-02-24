import { MailOpen } from "lucide-react";
import React, { useState, useEffect } from "react";
import { Button } from "../3partys/shadcn/button";

interface InvitationOverlayProps {
  title?: string;
  title2?: string;
  bride?: string;
  groom?: string;
}

const InvitationOverlay: React.FC<InvitationOverlayProps> = ({
  title = "Undangan",
  title2 = "Sangjit & Pemberkatan",
  bride = "ENJELIKA",
  groom = "OEY, TOMMI (DARTO)",
}) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  // Control body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => setIsOpen(false), 500);
  };

  if (!isOpen) return null;

  return (
    <div
      className={`
        bg-[linear-gradient(rgba(0,0,0,0.0),rgba(0,0,0,0.0)),url(/img/bg.webp)] bg-cover bg-center fixed inset-0 bg-[#830101] z-50 
        flex flex-col items-center justify-center text-white
        transition-all duration-500 ease-in-out px-8
        ${isVisible ? "opacity-100" : "opacity-0"}
      `}
    >
      <div
        className={`
        flex flex-col gap-10 items-center justify-center
        text-center
        transition-all duration-500 ease-in-out uppercase
        ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}
      `}
      >
        <div className="space-y-3">
          <h2 className="text-4xl md:text-3xl font-bold">{title}</h2>
          <h2 className="text-lg md:text-3xl font-bold px-6 py-1 border rounded-full">
            {title2}
          </h2>
        </div>
        <div className="space-y-1 font-chineseShangai font-bold">
          <p className="text-3xl md:text-2xl">{bride}</p>
          <p className="text-3xl md:text-2xl">&</p>
          <p className="text-3xl md:text-2xl">{groom}</p>
        </div>
        <Button
          variant="secondary"
          onClick={handleClose}
          className="rounded-full w-max px-6 py-6"
        >
          <MailOpen size={20} />
          Buka Undangan
        </Button>
      </div>
    </div>
  );
};

export default InvitationOverlay;
