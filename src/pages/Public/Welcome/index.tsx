import React, { useEffect, useRef } from "react";

const Welcome = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollTop =
          window.pageYOffset || document.documentElement.scrollTop;
        const parallaxOffset = scrollTop * 0.4; // Adjust the parallax effect as needed
        const backgroundPosition = `50% ${parallaxOffset}px`;
        parallaxRef.current.style.backgroundPosition = backgroundPosition;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <section
        className="h-[100vh] bg-church bg-no-repeat bg-cover relative"
        style={{ height: "100vh", backgroundPosition: "50% 0px" }}
        ref={parallaxRef}
      >
        <div className="h-28 bg-yellow-900">asd</div>
        
        <div className="overlay"></div>
        <div className="flex items-center justify-center text-center h-[90vh] w-[95%] ml-auto mr-auto relative desktop:w-[80%] laptop:w-[90%] tablet:w-[90%]">
          <div className="mb-80">
            <h1 className="text-4xl text-white">Title Here</h1>
            <h3 className="text-xl text-white">Subtitle Here</h3>
          </div>
        </div>
      </section>
      <section className="h-[100vh] bg-church bg-no-repeat bg-cover"></section>
    </div>
  );
};

export default Welcome;
