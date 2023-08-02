import React, { useState, useEffect, useRef } from "react";
import "./index.css";

import useAnimationStore from "../../Store/AnimationState";
import { gsap } from "gsap";

const imageUrl = [
  "/assets/Performance/battery.webp",
  "/assets/Performance/Snapdragon.png",
];
export default function Performance() {
  const perfContRef = useRef();
  const activeState = useAnimationStore((state) => state.activeState);

  const [backgroundImage, setBackgroundImage] = useState(1);
  const handleBatteryClick = () => {
    setBackgroundImage(1);
  };

  const handleHelioClick = () => {
    setBackgroundImage(2);
  };

  useEffect(() => {
    if (activeState === 4) {
      gsap.to(perfContRef.current, {
        duration: 1,
        opacity: 1,
        delay: 0.7,
      });
      perfContRef.current.style.zIndex = 6;
    } else {
      gsap.to(perfContRef.current, {
        duration: 1,
        opacity: 0,
        delay: 0.7,
      });
    }
  }, [activeState]);

  return (
    <div
      ref={perfContRef}
      className='performance-container'
      style={{
        backgroundImage: `url(${imageUrl[backgroundImage - 1]})`,
      }}
    >
      {/* <span className='performance-header'>Snapdragon® 8+ Gen 1</span> */}
      <div className='performance-text-div'>
        <span
          className={`performance-text ${backgroundImage === 1 && "active"}`}
          onClick={handleBatteryClick}
        >
          Large 5000mAh Battery
        </span>
        <span
          className={`performance-text ${backgroundImage === 2 && "active"}`}
          onClick={handleHelioClick}
        >
          Snapdragon® 4 Gen 2 Mobile Platform
        </span>
      </div>
    </div>
  );
}
