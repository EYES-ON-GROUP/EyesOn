import React from "react";

function Section2() {
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
              <img src="/assets/images/star-christmas (3).png" alt=""  className="lg:hidden"/>
              <img src="/assets/images/star-christmas (4).png" alt=""  className="max-lg:hidden"/>
            </span>
          </div>
          <p>Application avec une exellente note</p>
        </div>
      </div>
    </section>
  );
}

export default Section2;
