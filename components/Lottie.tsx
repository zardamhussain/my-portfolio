'use client'

import React, { useEffect, useState } from "react";
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

  const [height, setHeight] = useState(window.innerWidth < 480 ? 170 : 350);
  useEffect(() => {
    const handleWindowResize = () => {
        if(window.innerWidth < 480) setHeight(170);
        else setHeight(350);
      };

      window.addEventListener('resize', handleWindowResize);

      return () => {
        window.removeEventListener('resize', handleWindowResize);
      };
  });

  return <Lottie options={defaultOptions} height={height} width={height}/>;

}

export default Coder;
