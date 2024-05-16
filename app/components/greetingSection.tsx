"use client";

import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";

const GreetingsSection = () => {
  const [sequenceKey, setSequenceKey] = useState(1);

  useEffect(() => {
    console.log("renderizou");
  }, [sequenceKey]);

  return (
    <>
      <p className="text-5xl text-white">Hey there!</p>

      <div className="flex flex-row items-center gap-1 text-xl text-white">
        <p>I'm</p>

        {sequenceKey === 1 && (
          <TypeAnimation
            sequence={["redig", 3000, "", () => setSequenceKey(2)]}
            className="bg-gradient-to-r from-[#7BD0FF] to-[#00DC80] bg-clip-text font-bold text-transparent"
            repeat={Infinity}
            cursor={true}
          />
        )}

        {sequenceKey === 2 && (
          <TypeAnimation
            sequence={["a son of God", 3000, "", () => setSequenceKey(3)]}
            className="bg-gradient-to-r from-[#F4D52F] to-[#F19E21] bg-clip-text font-bold text-transparent"
            repeat={Infinity}
            cursor={true}
          />
        )}

        {sequenceKey === 3 && (
          <TypeAnimation
            sequence={[
              "a full stack developer",
              3000,
              () => setSequenceKey(1),
              "",
            ]}
            className="bg-gradient-to-r from-[#A30CFF] to-[#008DDC] bg-clip-text font-bold text-transparent"
            repeat={Infinity}
            cursor={true}
          />
        )}
      </div>
    </>
  );
};

export default GreetingsSection;
