'use client'
import React from "react";
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

  return (
    <div className="bg-black min-h-screen flex justify-center items-center  min-w-screen">
        <Lottie options={defaultOptions}  height={'50%'} width={'50%'}/>
    </div>
  )
}

export default NotFound;
