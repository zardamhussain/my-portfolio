'use client'

import React from "react";
import Lottie from "react-lottie";

const Coder = ( { name }: any ) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: require(`../public/${name}.json`),
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
    };


  return <Lottie options={defaultOptions} height={'100%'} width={'100%'}/>;

}

export default Coder;
