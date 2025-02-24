"use client";

import { useEffect, useRef, useState } from "react";
import { PauseIcon, Music2 } from "lucide-react";
import { Button } from "@/components/3partys/shadcn/button";

export default function Music() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    audioRef.current = new Audio(
      "https://poronesia.oss-ap-southeast-5.aliyuncs.com/Iyan/Tong%20Hua.mp3"
    );
    audioRef.current.volume = 0.5;
    audioRef.current.loop = true;
    audioRef.current.onended = () => setIsPlaying(false);

    // Menunggu interaksi pengguna untuk autoplay
    const enableAutoplay = () => {
      if (audioRef.current) {
        audioRef.current
          .play()
          .then(() => {
            console.log("Autoplay berhasil!");
            setIsPlaying(true);
          })
          .catch((err) => {
            console.warn(
              "Autoplay gagal, pengguna harus menekan tombol play.",
              err
            );
          });
      }
    };

    document.addEventListener("click", enableAutoplay, { once: true });

    return () => {
      document.removeEventListener("click", enableAutoplay);
      audioRef.current?.pause();
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((err) => console.warn("Gagal play:", err));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <Button
      variant="secondary"
      size="icon"
      className="rounded-full bg-red-800 hover:bg-red-900 text-white"
      onClick={togglePlay}
    >
      {isPlaying ? <PauseIcon /> : <Music2 />}
    </Button>
  );
}
