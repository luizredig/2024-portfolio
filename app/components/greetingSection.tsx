"use client";

import { useState } from "react";
import { TypeAnimation } from "react-type-animation";

const GreetingsSection = () => {
  const [currentKey, setCurrentKey] = useState(0);
  const gradients = [
    "#7BD0FF, #00DC80",
    "#F4D52F, #F19E21",
    "#A30CFF, #008DDC",
  ];

  return (
    <>
      <div className="p-5">
        <p>Hey there!</p>

        <div className="flex flex-row items-center gap-3 text-5xl">
          <p className="">I'm</p>

          <div
            className="flex h-[60px] items-center font-bold"
            style={{
              backgroundImage: `linear-gradient(to right, ${gradients[currentKey]})`,
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            <TypeAnimation
              sequence={[
                "redig",
                2000,
                "",
                () => setCurrentKey(1),
                "a son of God",
                2000,
                "",
                () => setCurrentKey(2),
                "a full stack developer",
                2000,
                "",
                () => setCurrentKey(0),
                "",
              ]}
              repeat={Infinity}
              wrapper="p"
              cursor={true}
              preRenderFirstString={true}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default GreetingsSection;
