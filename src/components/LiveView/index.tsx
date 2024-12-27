import React from "react";

function LiveView() {
  return (
    <div className="h-auto md:grid grid-cols-2  gap-16 mx-auto lg:gap-40 lg:w-[85%] justify-between place-items-center pb-10 px-4 ">
      <div>
        <h1 className="text-blue text-center lg:text-2xl  md:text-left mb-10 text-xl">
          <span className="font-semibold">
            <span className="text-orange font-bold md:text-5xl text-2xl">
              LiveView{" "}
            </span>
            <br />
            Vos Yeux sur Leur Monde, en Temps Réel !
          </span>
        </h1>

        <p className="text-center mb-10 md:text-left font-semibold">
          Découvrez la puissance de LiveView, votre superpouvoir pour voir,
          comprendre et agir en direct ! Avec une visibilité instantanée sur
          l’écran de votre enfant, chaque clic, chaque interaction devient
          transparent. Protégez-les des dangers cachés, guidez-les dans leurs
          choix numériques, et soyez là, au moment précis où ils ont besoin de
          vous. Avec LiveView, vous n’êtes plus spectateur : vous êtes au cœur
          de l’action, en temps réel, avec un contrôle total. Modernité,
          sécurité, et tranquillité réunies en un seul outil !
        </p>
      </div>

      <div className="h-[500px]  mx-auto w-[90%]">
        <video autoPlay controls muted className="h-full w-full">
          <source src="/assets/videos/enr.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default LiveView;
