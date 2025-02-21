import Image from "next/image";

export default function Pages() {
  return (
    <main className="h-svh bg-[#830101] text-white">
      <div className="h-svh relative flex justify-center max-w-[768px] m-auto">
        <Image
          src="/img/lampion.webp"
          alt="lampion"
          width={1000}
          height={1000}
          priority
          style={{
            width: "100%",
            height: "auto",
          }}
          className="absolute w-full left-0 top-0 z-10"
        />
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
          className="absolute bottom-0 z-30"
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
          className="absolute bottom-20 z-30 w-[86%] md:w-[70%]"
        />
        <div className="flex flex-col justify-center pb-[70%] items-center gap-5 text-[12px] md:text-base text-center px-8 md:px-24 z-20">
          <p className="mt-[14%] md:mt-[15%] text-[13px] md:text-base px-4 py-1 border rounded-full uppercase font-bold">
            Sangjit & Pemberkatan
          </p>
          <div className="space-y-1 text-center">
            <h1 className="px-[66px] font-bold text-2xl md:text-3xl">
              ENJELIKA
            </h1>
            <h1 className="px-[66px] font-bold text-2xl md:text-3xl">&</h1>
            <h1 className="px-[66px] font-bold text-2xl md:text-3xl text-center">
              OEY, TOMMI (DARTO)
            </h1>
          </div>
          <p className="text-sm">Minggu, 16 Maret 2025</p>
          <p>
            &quot;Bila dalam perjalanan hidupmu, engkau menemukan seorang teman
            yang bijaksana dan cocok untuk hidup denganmu, hendaklah engkau
            berjalan bersama dengan gembira dan penuh kesadaran mengatasi segala
            bahaya&quot;
          </p>
          <p>(Dhammapada XXIII-328)</p>
        </div>
      </div>
    </main>
  );
}
