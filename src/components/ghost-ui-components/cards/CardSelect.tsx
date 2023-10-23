"use client"

import { useState } from "react";

export default function CardSelect() {
  const [select, isSeelect] = useState();

  const ofertData = [
    [
      {
        name: "oferta",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      },
      {
        name: "oferta",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      },
    ],
    [
      {
        name: "oferta",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      },
      {
        name: "oferta",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      },
    ],
  ];
  return (
    <div className="max-w-xl break-inside-avoid border-gray-900 p-3 rounded-md w-full border-2">
      <div className="w-full flex flex-col gap-3">
        <h2 className="text-2xl font-bold mb-3">Selecciona un campo</h2>
        {ofertData.map((items, index) => (
          <div key={index} className="flex gap-3 justify-between">
            {items.map((item, i) => (
              <div key={i} className="rounded-md border-2 p-2 relative focus:border-2 bg-[#02071d]">
                <input type="checkbox" className="absolute right-2 h-5 w-5 focus:bg-phosphorescent-green p-1 cursor-pointer border-2 appearance-none rounded-full top-2" />
                <h3 className="text-lg font-bold">{item.name}</h3>
                <p className="text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
      <button className="py-3 w-full bg-phosphorescent-green rounded-md mt-3 text-black font-semibold">
        Continuar
      </button>
    </div>
  );
}
