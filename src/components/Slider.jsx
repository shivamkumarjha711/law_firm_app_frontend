import React, { useEffect, useState } from "react";
import second from "../assets/first.jpg";
import first from "../assets/second.jpg";
import third from "../assets/third.jpg";


function Slider() {
  const [currentImage, setCurrentImage] = useState(0);


  const imgArr = [first, second, third];


  const handleForwClick = () => {
    if (currentImage < 2) {
      setCurrentImage((prev) => prev + 1);
    } else {
      setCurrentImage(0);
    }
  };


  const handlePrevClick = () => {
    if (currentImage > 0) {
      setCurrentImage((prev) => prev - 1);
    } else {
      setCurrentImage(2);
    }
  };

  useEffect(() => {
    const sliderInterval = setInterval(() => {
        handleForwClick()
    }, 3000);

    return () => clearInterval(sliderInterval)
  }, [currentImage])
  

  return (
    <div>
      <div className="h-[500px] w-full relative">
        <div
          className="absolute top-[45%] right-4 text-white text-6xl font-bold cursor-pointer"
          onClick={() => handleForwClick()}
        >
          &gt;
        </div>
        <div
          className="absolute top-[45%] left-4 text-white text-6xl font-bold cursor-pointer"
          onClick={() => handlePrevClick()}
        >
          &lt;
        </div>
        <img src={imgArr[currentImage]} alt="" className="h-full w-full" />
      </div>
    </div>
  );
}


export default Slider;



