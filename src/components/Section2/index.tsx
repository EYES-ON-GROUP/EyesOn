import React from "react";
import TryNow from "../TryNow";

function Section2() {
  // bg-[position:-5%_37%] bg-[length:160%]
  return (
    <section className="py-20 px-8">
      <h1 className="text-blue text-center text-xl">
        CONTRÔLE PARENTAL{" "}
        <span className="font-semibold">
          eyes <span className="text-orange">ON</span>
        </span>
      </h1>

      <p className="text-2xl font-bold text-center my-4">
        La sécurité de votre famille entre des mains expertes
      </p>

      <div className="grid mt-10 lg:mt-20 gap-y-10 grid-cols-2 md:grid-cols-3 gap-4">
        <div className="text-center">
          <h2 className="text-3xl lg:text-5xl font-bold">3 Millions </h2>
          <p>Dangers evites</p>
        </div>
        <div className="text-center">
          <h2 className="text-3xl lg:text-5xl font-bold">1 Millions </h2>
          <p>Familles protegees</p>
        </div>
        <div className="max-md:col-span-2  text-center">
          <div className="flex justify-center gap-2 place-items-center">
            <span className="text-3xl lg:text-5xl font-bold">4.3</span>
            <span>
              <img
                src="/assets/images/star-christmas (3).png"
                alt=""
                className="lg:hidden"
              />
              <img
                src="/assets/images/star-christmas (4).png"
                alt=""
                className="max-lg:hidden"
              />
            </span>
          </div>
          <p>Application avec une exellente note</p>
        </div>
      </div>
      <p className="text-2xl font-bold text-center mt-20">
        <span className="text-blue text-[1.5em]">"</span> Que peut faire cette
        application? <span className="text-blue text-[1.5em]">"</span>
      </p>

      {/* Section protection */}
      <div className="flex justify-evenly m-auto items-center mt-20 mm:max-lm:block mm:max-lm:mt-10 mm:max-lm:flex-col mm:max-lm:justify-center ">
        <div className="w-[35%] text-left mm:max-lm:w-full mm:max-lm:text-center md:max-lm:w-[45%]">
          <h1 className="font-semibold mb-6 text-[28px] leading-snug mm:max-lm:text-[20px] mm:max-lm:mb-3 md:max-lm:text-[2px]">
            Assurez la sécurité de vos enfants sur Internet
          </h1>
          <p className="mb-6 mm:max-lm:text-justify mm:max-lm:mb-3">
            Offrez à vos enfants un environnement en ligne sécurisé. Avec
            eyesON, surveillez et gérez leur activité sur tous leurs appareils
            en toute simplicité, où qu’ils soient, pour une tranquillité
            d'esprit totale.
          </p>
          <TryNow />
        </div>
        <video
          autoPlay
          loop
          muted
          className="w-[35%] h-[32%] mm:max-lm:w-full mm:max-lm:mt-6 "
          poster="/assets/images/mask.png"
        >
          <source src="/assets/videos/videoIcons.webm" type="video/webm" />
        </video>
        {/* className="w-[35%] h-[32%] " */}
      </div>

      {/* section icones */}
      <div className="flex justify-evenly m-auto items-center mt-20  mm:max-lm:mt-12 mm:max-lm:flex mm:max-lm:flex-col-reverse ">
        <video
          autoPlay
          loop
          muted
          className="w-[35%] h-[32%] mm:max-lm:w-full mm:max-lm:mt-4 mm:max-lm:order-2"
          poster="/assets/images/MaskTrois.png"
        >
          <source src="/assets/videos/videoUne.webm" type="video/webm" />
        </video>
        <div className="w-[35%] text-left mm:max-lm:w-full mm:max-lm:text-center mm:max-lm:order-2 md:max-lm:w-[45%]">
          <h1 className="font-semibold mb-6 text-[28px] leading-snug mm:max-lm:mb-3 mm:max-lm:text-[20px] md:max-lm:text-[22px]">
            Définissez votre niveau de surveillance
          </h1>
          <p className="mb-6 mm:max-lm:text-justify mm:max-lm:mb-3">
            Filtrez les sites Web, fixez des limites d’utilisation, bloquez des
            applications, recevez des rapports détaillés et bien plus encore.
            Personnalisez ainsi l’expérience numérique de vos enfants en
            fonction de leurs besoins et de vos préférences
          </p>
          <button className="bg-[#4652AC] rounded-[18px] text-center text-white w-[94px] h-[32px] ">
            View Demo
          </button>
        </div>
      </div>

      {/* section favorisez */}
      <div className="flex justify-evenly m-auto items-center mm:max-lm:block mm:max-lm:mt-10 mm:max-lm:justify-center mm:max-lm:flex-col mt-20 ">
        <div className="w-[35%] text-left mm:max-lm:w-full mm:max-lm:text-center md:max-lm:w-[45%] ">
          <h1 className="font-semibold mb-6 text-[28px] leading-snug mm:max-lm:mb-3 mm:max-lm:text-[20px] md:max-lm:text-[22px]">
            Favorisez de bonnes habitudes numériques
          </h1>
          <p className="mb-6 mm:max-lm:text-justify mm:max-lm:mb-3">
            Aidez vos enfants à développer une relation saine à la technologie.
            Qustodio vous permet de leur libérer du temps pour des activités
            dans le monde réel et d’encourager de bonnes habitudes numériques au
            cours de leur croissance
          </p>
          <TryNow />
        </div>
        <video
          autoPlay
          loop
          muted
          className="w-[35%] h-[32%] mm:max-lm:w-full mm:max-lm:mt-6"
          poster="/assets/images/MaskFav.png"
        >
          <source src="/assets/videos/videoDeux.webm" type="video/webm" />
        </video>
      </div>
    </section>
  );
}

export default Section2;
