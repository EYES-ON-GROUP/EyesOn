import { useClickAway } from "react-use";
import { useRef } from "react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";
import {routes} from "../routes";

export const NavMobile = () => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => setOpen(false));

  interface Route {
    title: string,
    href: string,
  }

  return (
    <div ref={ref} className="lg:hidden ">
      <Hamburger color={'white'} toggled={isOpen} size={30} toggle={setOpen} />
      {isOpen && (
        <div className="fixed left-0 shadow-4xl right-0 top-[6rem] p-5 pt-0 bg-blue  border-b border-b-white/20">
          <ul className="grid gap-2">
            {routes.map((route: Route) => {
             

              return (
                <li
                  key={route.title}
                  className="w-full p-[0.08rem] rounded-xl bg-blue "
                >
                  <a
                    onClick={() => setOpen((prev) => !prev)}
                    className={
                      "flex items-center justify-between w-full p-5 rounded-xl bg-transparent"
                    }
                    href={route.href}
                  >
                    <span className="text-white text-lg">{route.title}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

// import React from 'react'

// function index() {
//   return (
//     <div>index</div>
//   )
// }

