import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel as Car } from "react-responsive-carousel";
import Church from "../../../../assets/images/church.jpg";
import ChurchIcon from "../../../../assets/images/church-icon.jpg";

export default function Carousel() {
  return (
    <div className="absolute w-full h-full">
      <Car
        animationHandler={"fade"}
        autoPlay={true}
        transitionTime={1500}
        infiniteLoop={true}
        showArrows={false}
        showIndicators={false}
        showStatus={false}
        showThumbs={false}
        className="w-full h-full bg-semi-transparent"
      >
        <div className="">
          <img className="h-[100vh] w-full object-cover" src={Church} />
        </div>
        <div className="">
          <img className="h-[100vh] w-full object-cover" src={ChurchIcon} />
        </div>
      </Car>
    </div>
  );
}
