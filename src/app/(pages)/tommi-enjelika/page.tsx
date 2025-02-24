"use client";

import Image from "next/image";
import { BlurFade } from "@/components/3partys/magicui/blur-fade";
import { CalendarDays, Heart, Instagram, MapPinned } from "lucide-react";
import InvitationOverlay from "@/components/template/opening";
import { ShinyButton } from "@/components/3partys/magicui/shiny-button";
import Link from "next/link";
import Countdown from "@/components/atoms/countdown";
import SaveToCalendar from "@/components/atoms/save-to-calendar";
import Music from "@/components/atoms/music";

export default function Pages() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <>
      <main className="relative h-full bg-[#830101] text-white bg-[linear-gradient(rgba(0,0,0,0.0),rgba(0,0,0,0.0)),url(/img/bg.webp)] bg-center">
        <div className="fixed z-40 fixed bottom-3 right-3">
          <Music />
        </div>
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
            className="absolute bottom-0 z-20 w-full md:w-[66%]"
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
                className="w-full md:w-[50%] pb-4"
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
              <p className="text-lg">Enjel</p>
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
        <div className="flex flex-col gap-12 justify-center items-center">
          <BlurFade delay={0.25} inView>
            <Image
              src="/img/bg2.webp"
              alt="Background 2"
              width={2000}
              height={2000}
              style={{
                height: "auto",
                objectFit: "contain",
              }}
              className="rounded-0 lg:rounded-2xl w-[100%] max-w-[50rem]"
            />
          </BlurFade>
          <div className="flex flex-col gap-10 items-center justify-center text-center px-10">
            <BlurFade delay={0.25} inView className="space-y-10">
              <h1 className="font-bold text-3xl md:text-4xl">Counting Day</h1>
              <Countdown />
              <SaveToCalendar />
            </BlurFade>
            <BlurFade delay={0.5} inView className="space-y-6">
              <div>
                <div className="flex gap-4 items-center justify-center">
                  <Heart size={24} fill="#fff" />
                  <h1 className="font-bold text-2xl md:text-3xl uppercase">
                    Sangjit
                  </h1>
                  <Heart size={24} fill="#fff" />
                </div>
                <p>Minggu, 16 Maret 2025</p>
              </div>
              <p className="font-bold text-lg">Pukul 10:00 - 14:00 WIB</p>
              <div className="space-y-1">
                <p>Bertempat di:</p>
                <p className="font-bold">Pondok Sentul</p>
                <p className="text-sm italic">
                  Curug Kulon, Kec. Curug, Kabupaten Tangerang, Banten 15810
                </p>
              </div>
              <div>
                <Link
                  href="https://maps.app.goo.gl/TqWMjwWKXkpk62su5"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ShinyButton className="bg-white">
                    <div className="flex flex-row gap-2 items-center">
                      <MapPinned size={16} />
                      Google Maps
                    </div>
                  </ShinyButton>
                </Link>
              </div>
            </BlurFade>
            <BlurFade delay={0.75} inView className="space-y-6">
              <div>
                <div className="flex gap-2 items-center justify-center">
                  <Heart size={24} fill="#fff" />
                  <h1 className="font-bold text-2xl md:text-3xl uppercase">
                    Pemberkatan
                  </h1>
                  <Heart size={24} fill="#fff" />
                </div>
                <p>Minggu, 16 Maret 2025</p>
              </div>
              <p className="font-bold text-lg">Pukul 16:00 - 18:00 WIB</p>
              <div className="space-y-1">
                <p>Bertempat di:</p>
                <p className="font-bold">Vihara Gunavardhana</p>
                <p className="text-sm italic">
                  Perumahan Dasana Indah RT.002, RT.002/RW.029, Bojong Nangka,
                  Kec. Klp. Dua, Kabupaten Tangerang, Banten 15810
                </p>
              </div>
              <div>
                <Link
                  href="https://maps.app.goo.gl/rnzRh13ngyaEEJcb8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ShinyButton className="bg-white">
                    <div className="flex flex-row gap-2 items-center">
                      <MapPinned size={16} />
                      Google Maps
                    </div>
                  </ShinyButton>
                </Link>
              </div>
            </BlurFade>
          </div>
          <BlurFade delay={0.25} inView>
            <Image
              src="/img/bg3.webp"
              alt="Background 3"
              width={2000}
              height={2000}
              style={{
                height: "auto",
                objectFit: "contain",
              }}
              className="rounded-0 lg:rounded-2xl w-[100%] max-w-[50rem]"
            />
          </BlurFade>
        </div>
        <div className="px-8 py-4 bg-white md:bg-transparent font-light text-[12px] text-black md:text-white text-center">
          <p>Copyright © {year} All Rights Reserved</p>
          <p>
            Created by{" "}
            <Link
              href="https://iyansanjaya.my.id"
              target="_blank"
              rel="noopener norefferer"
            >
              <b>Iyan Sanjaya</b>
            </Link>
          </p>
        </div>
      </main>
    </>
  );
}
