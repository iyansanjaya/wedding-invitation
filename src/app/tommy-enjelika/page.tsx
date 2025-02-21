"use client";

import Image from "next/image";
import { BlurFade } from "@/components/magicui/blur-fade";
import { CalendarDays } from "lucide-react";
import InvitationOverlay from "@/components/template/opening";

export default function Pages() {
  return (
    <>
      <InvitationOverlay />
      <main className="h-svh bg-[#830101] text-white">
        <div className="h-svh relative flex justify-center max-w-[64rem] m-auto bg-[linear-gradient(rgba(0,0,0,0.0),rgba(0,0,0,0.0)),url(/img/bg.webp)] bg-cover bg-center">
          <Image
            src="/img/image-foot.webp"
            alt="lampion"
            width={1000}
            height={1000}
            priority
            style={{
              width: "100%",
              height: "auto",
            }}
            className="absolute bottom-0 z-10"
          />
          <Image
            src="/img/avatar.png"
            alt="lampion"
            width={1000}
            height={1000}
            priority
            style={{
              height: "auto",
            }}
            className="absolute bottom-20 z-10 w-[86%] lg:w-[70%]"
          />
          <div className="flex flex-col justify-center pb-[70%] pt-10 lg:pt-[16%] items-center gap-5 text-[12px] lg:text-base text-center px-8 lg:px-24 z-20">
            <BlurFade delay={0.25} inView>
              <p className="mt-[14%] lg:mt-[15%] text-[13px] lg:text-base px-4 py-1 border rounded-full uppercase font-bold">
                Sangjit & Pemberkatan
              </p>
            </BlurFade>
            <BlurFade delay={0.5} inView>
              <div className="space-y-1 text-center">
                <h1 className="px-[66px] font-bold text-2xl lg:text-3xl">
                  ENJELIKA
                </h1>
                <h1 className="px-[66px] font-bold text-2xl lg:text-3xl">&</h1>
                <h1 className="px-[66px] font-bold text-2xl lg:text-3xl text-center">
                  OEY, TOMMI (DARTO)
                </h1>
              </div>
            </BlurFade>
            <BlurFade delay={0.75} inView className="flex gap-1 items-center">
              <CalendarDays size={16} />
              <p className="text-sm">Minggu, 16 Maret 2025</p>
            </BlurFade>
            <BlurFade delay={1} inView>
              <p className="px-0 md:px-[6rem]">
                &quot;Bila dalam perjalanan hidupmu, engkau menemukan seorang
                teman yang bijaksana dan cocok untuk hidup denganmu, hendaklah
                engkau berjalan bersama dengan gembira dan penuh kesadaran
                mengatasi segala bahaya&quot;
              </p>
            </BlurFade>
            <BlurFade delay={1.25} inView>
              <p>(Dhammapada XXIII-328)</p>
            </BlurFade>
          </div>
        </div>
        <div className="h-svh relative max-w-[64rem] m-auto bg-[linear-gradient(rgba(0,0,0,0.0),rgba(0,0,0,0.0)),url(/img/bg.webp)] bg-cover bg-center">
          <div className="flex flex-col gap-2 items-center justify-center text-center px-10">
            <Image
              src="/img/man-2.webp"
              alt="image"
              width={1000}
              height={1000}
              style={{
                height: "auto",
                objectFit: "contain",
              }}
              className="w-[100%] lg:w-[70%] pt-14 pb-4"
            />
            <p className="text-lg">Tommi (Darto)</p>
            <p className="font-bold text-2xl">OEY, TOMMI</p>
            <div className="text-sm">
              <p>Putra keempat dari lima bersaudara Dari</p>
              <p>(Alm) Tuan. Tek Kwi dan Nyonya Oey, Siaw Bie </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
