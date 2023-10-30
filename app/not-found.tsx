'use client'
import React, { useEffect, useState } from "react";
import Lottie from "react-lottie";
import animationData from "../public/not-found.json";

function NotFound() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const [height, setHeight] = useState(window.outerWidth < 500 ? 200 : 400);
  useEffect(() => {
    const handleWindowResize = () => {
        if(window.outerWidth < 500 ) setHeight(200);
        else setHeight(400);
      };

      window.addEventListener('resize', handleWindowResize);

      return () => {
        window.removeEventListener('resize', handleWindowResize);
      };
  });

  return (
    <div className="bg-black h-screen flex justify-center items-center w-screen">
        <Lottie options={defaultOptions}  height={height} width={height}/>
    </div>
  )
}

export default NotFound;
