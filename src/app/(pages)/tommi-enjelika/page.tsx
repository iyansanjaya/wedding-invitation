"use client";

import Image from "next/image";
import { BlurFade } from "@/components/3partys/magicui/blur-fade";
import { CalendarDays, Instagram } from "lucide-react";
import InvitationOverlay from "@/components/template/opening";
import { ShinyButton } from "@/components/3partys/magicui/shiny-button";
import Link from "next/link";

export default function Pages() {
  return (
    <>
      <main className="h-full bg-[#830101] text-white bg-[linear-gradient(rgba(0,0,0,0.0),rgba(0,0,0,0.0)),url(/img/bg.webp)] bg-center">
        <div className="h-svh relative flex justify-center max-w-[64rem] m-auto">
          <InvitationOverlay />
          <Image
            src="/img/avatar.png"
            alt="lampion"
            width={1000}
            height={1000}
            priority
            style={{
              height: "auto",
            }}
            className="absolute bottom-20 z-10 w-[86%] md:w-[54%]"
          />
          <Image
            src="/img/image-foot.webp"
            alt="lampion"
            width={1000}
            height={1000}
            priority
            style={{
              height: "auto",
            }}
            className="absolute bottom-0 z-20 w-[100%] md:w-[66%]"
          />
          <div className="flex flex-col items-center gap-5 text-[12px] md:text-base text-center pt-[8%] md:pt-[2%] px-8 md:px-24 z-20">
            <BlurFade delay={0.25} inView>
              <p className="mt-[14%] md:mt-[15%] text-[13px] md:text-base px-4 py-1 border rounded-full uppercase font-bold">
                Sangjit & Pemberkatan
              </p>
            </BlurFade>
            <BlurFade delay={0.5} inView>
              <div className="font-chineseShangai space-y-1 text-center">
                <h1 className="px-[50px] font-bold text-3xl md:text-4xl">
                  ENJELIKA
                </h1>
                <h1 className="px-[50px] font-bold text-3xl md:text-4xl">&</h1>
                <h1 className="px-[50px] font-bold text-3xl md:text-4xl text-center">
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
        <div className="max-w-[64rem] m-auto py-14 space-y-14">
          <div className="flex flex-col gap-2 items-center justify-center text-center px-10">
            <BlurFade
              delay={0.25}
              inView
              className="flex items-center justify-center"
            >
              <Image
                src="/img/man-2.webp"
                alt="image"
                width={1000}
                height={1000}
                style={{
                  height: "auto",
                  objectFit: "contain",
                }}
                className="w-[100%] md:w-[50%] pb-4"
              />
            </BlurFade>
            <BlurFade delay={0.4} inView className="space-y-2">
              <p className="text-lg">Tommi (Darto)</p>
              <p className="font-chineseShangai font-bold text-2xl">
                OEY, TOMMI
              </p>
              <div className="text-sm">
                <p>Putra keempat dari lima bersaudara dari</p>
                <p>(Alm) Tuan. Tek Kwi dan Nyonya Oey, Siaw Bie </p>
              </div>
            </BlurFade>
            <BlurFade delay={0.55} inView className="pt-4">
              <Link
                href="https://instagram.com/tommypedrosa88"
                rel="noopener"
                target="_blank"
              >
                <ShinyButton className="bg-white">
                  <div className="flex flex-row gap-2 items-center">
                    <Instagram size={16} />
                    Instagram
                  </div>
                </ShinyButton>
              </Link>
            </BlurFade>
          </div>
          <div className="flex flex-col gap-2 items-center justify-center text-center px-10">
            <BlurFade
              delay={0.7}
              inView
              className="flex items-center justify-center"
            >
              <Image
                src="/img/woman-2.webp"
                alt="image"
                width={1000}
                height={1000}
                style={{
                  height: "auto",
                  objectFit: "contain",
                }}
                className="w-[100%] md:w-[50%] pb-4"
              />
            </BlurFade>
            <BlurFade delay={0.25} inView className="space-y-2">
              <p className="text-lg">Enjell</p>
              <p className="font-chineseShangai font-bold text-2xl">ENJELIKA</p>
              <div className="text-sm">
                <p>Putri terakhir dari dua bersaudara dari</p>
                <p>(Alm) Tuan.Eng Kiu dan Nyonya Anti Ernawati</p>
              </div>
            </BlurFade>
            <BlurFade delay={0.25} inView className="pt-4">
              <Link
                href="https://instagram.com/e.enjlika4"
                rel="noopener"
                target="_blank"
              >
                <ShinyButton className="bg-white">
                  <div className="flex flex-row gap-2 items-center">
                    <Instagram size={16} />
                    Instagram
                  </div>
                </ShinyButton>
              </Link>
            </BlurFade>
          </div>
        </div>
      </main>
    </>
  );
}
