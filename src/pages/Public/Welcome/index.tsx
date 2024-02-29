import React, { useEffect, useRef } from "react";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import Header from "./Layout/header";
import Carousel from "./Layout/Carousel";
import {
  DevicePhoneMobileIcon,
  FireIcon,
  UserGroupIcon,
} from "@heroicons/react/16/solid";
import Church from "../../../assets/images/church.jpg";
import PhoneLive from "../../../assets/images/mobile-live.png";
import Youtube from "../../../assets/images/youtube.svg";
import Facebook from "../../../assets/images/fb.svg";
import Instagram from "../../../assets/images/insta.svg";
import Tiktok from "../../../assets/images/tiktok.svg";
import Footer from "./Layout/footer";
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
    <ParallaxProvider>
      <div>
        <Header />
        <section
          className="overflow-hidden"
          style={{
            borderBottomLeftRadius: "40% 5%",
            borderBottomRightRadius: "40% 5%",
          }}
        >
          <div className="h-[80vh] relative">
            <Carousel />
            <div className="flex items-center justify-center text-center h-[90vh] w-[95%] ml-auto mr-auto relative desktop:w-[80%] laptop:w-[90%] tablet:w-[90%]">
              <div className="mb-80">
                <h1 className="text-4xl text-white">
                  “…I have come that they may have life, and have it to the
                  full.”
                </h1>
                <h3 className="text-xl text-white mt-2">JOHN 10:10</h3>
                <button className="uppercase text-sm mt-5 bg-blue-400 py-3 px-5 rounded-sm font-bold border-2 border-blue-400 text-white shadow-md transition-all duration-500 hover:bg-blue-900">
                  Attend to our church online
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className=" flex flex-col tablet:flex-row gap-10 translate-y-[-5rem]  items-center justify-center flex-wrap">
          <div className="w-[80%] h-80 tablet:max-w-[20rem] shadow-xl bg-white rounded-xl p-10 flex flex-col items-center text-slate-600 text-sm font-pop">
            <DevicePhoneMobileIcon
              strokeWidth={0.5}
              className={"w-28 h-28 text-slate-400"}
            />
            <span className="mt-2 flex flex-col items-center">
              <p className="text-center font-bold text-md">
                JOIN OUR SUNDAY ONLINE SERVICE
              </p>
              <span className="text-blue-300">On-site and Online</span>
              <span>10:00 AM & 12:30PM</span>
              <span>
                <span className="text-blue-300">Youtube:</span> 7:30 PM
              </span>
            </span>
          </div>
          <div className="w-[80%] h-80 tablet:max-w-[20rem] shadow-xl bg-white rounded-xl p-10 flex flex-col items-center text-slate-600 text-sm font-pop">
            <UserGroupIcon
              strokeWidth={0.5}
              className={"w-28 h-28 text-slate-400"}
            />
            <span className="mt-2 flex flex-col items-center">
              <p className="text-center font-bold text-md">
                NEW TO OUR FAMILY?
              </p>
              <a className="text-blue-300 cursor-pointer">CLICK HERE</a>
              <p className="text-center">
                And our coaches will connect with you.
              </p>
            </span>
          </div>
          <div className="w-[80%] h-80 tablet:max-w-[20rem] shadow-xl bg-white rounded-xl p-10 flex flex-col items-center text-slate-600 text-sm font-pop">
            <FireIcon
              strokeWidth={0.5}
              className={"w-28 h-28 text-slate-400"}
            />
            <span className="mt-2 flex flex-col items-center">
              <p className="text-center font-bold text-md">
                JOIN A LIFEGROUP TODAY!
              </p>
              <a className="text-blue-300 cursor-pointer">CLICK HERE</a>
              <p className="text-center">And we will reach out to you.</p>
            </span>
          </div>
        </section>
        <section className="flex flex-col items-center font-pop laptop:mb-20 mb-40">
          <FireIcon strokeWidth={0.5} className={"w-28 h-28 text-slate-400"} />
          <h3
            className={
              "text-slate-400 mt-2 text-center tracking-[5px] laptop:tracking-[20px]"
            }
          >
            WELCOME TO
          </h3>
          <h1
            className={
              "font-bold tracking-tighter text-4xl text-slate-700 text-center"
            }
          >
            WORLD OF LIFE CHRISTIAN ASSEMBLY
          </h1>
          <p className="mt-10 px-6 tablet:px-20 desktop:px-60 text-sm text-slate-600 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
            repellat. Harum nostrum aut, dolores accusamus placeat itaque
            suscipit dolore, fugiat architecto assumenda beatae ad quisquam.
            Incidunt consequatur repudiandae molestias nobis. Lorem ipsum dolor,
            sit amet consectetur adipisicing elit. Itaque libero exercitationem
            laboriosam eligendi necessitatibus. Fugit repellendus eum nisi error
            placeat, aut voluptas ducimus culpa? Nesciunt ipsum quisquam
            excepturi dolores voluptates.
          </p>
          <button className="uppercase text-sm mt-5 bg-blue-400 py-3 px-5 rounded-md font-bold border-2 border-blue-400 text-white shadow-md transition-all duration-500 hover:bg-blue-900">
            LEARN MORE
          </button>
        </section>
        <section
          className="relative min-h-[70vh] bg-semi-transparent"
          style={{
            borderBottomLeftRadius: "40% 5%",
            borderBottomRightRadius: "40% 5%",
          }}
        >
          <div className="flex flex-col-reverse laptop:flex-row laptop:px-48 px-2 laptop:gap-12 pt-20">
            <div className="flex flex-col items-center laptop:items-end laptop:pt-10 pb-20 w-full laptop:w-1/2 pt-[350px]">
              <FireIcon
                strokeWidth={0.5}
                className={"w-28 h-28 text-slate-100"}
              />
              <h3 className="text-center laptop:text-left tracking-tight text-slate-200 laptop:float-right text-[25px]">
                JOIN US EVERY
              </h3>
              <br />
              <h3 className="tracking-tight font-glory text-slate-200 laptop:float-right text-[25px] translate-y-[-30px]">
                SUNDAY FOR OUR
              </h3>
              <h3 className="text-center laptop:text-left tracking-tighter text-white laptop:float-right text-[50px] font-bold">
                ONLINE
              </h3>
              <br />
              <h3 className="tracking-tighter text-white laptop:float-right text-[50px] font-bold translate-y-[-40px]">
                SERVICE
              </h3>
              <h3 className="text-center laptop:text-left tracking-tight  text-slate-200 laptop:float-right text-sm">
                09:00 AM & 1:00 PM at WOLCA APALIT
              </h3>
              <br />
              <h3 className="tracking-tight font-glory text-slate-200 laptop:float-right text-sm translate-y-[-20px]">
                Livestream at FB at Youtube Premiere at 7:00 PM
              </h3>
              <button className="uppercase text-sm mt-5 bg-transparent py-3 px-5 rounded-md font-bold border-2 border-blue-400 text-white shadow-md transition-all duration-500 hover:bg-blue-900">
                WATCH PREVIOUS VIDEOS
              </button>
            </div>
            <div className="relative w-full laptop:w-1/2">
              <img src={PhoneLive} className="z-[10] laptop:h-[789px] w-[250px] laptop:w-auto absolute left-1/2 transform -translate-x-1/2 -translate-y-[180px] laptop:left-0 laptop:transform-none" />
            </div>
          </div>
          <div
            className="w-full h-full top-0 overflow-hidden absolute z-[-10] bg-semi-transparent"
            style={{
              borderBottomLeftRadius: "40% 5%",
              borderBottomRightRadius: "40% 5%",
            }}
          >
            <Parallax speed={-20} className="absolute w-full h-[110%] top-0">
              <img src={Church} className="w-full h-full object-cover" />
            </Parallax>
          </div>
        </section>
        <section className="flex flex-col items-center font-pop mb-20 mt-20 laptop:mt-64">
          <FireIcon strokeWidth={0.5} className={"w-28 h-28 text-slate-400"} />

          <h1 className="font-bold tracking-wider text-4xl text-slate-700 mt-2">
            WOLCA
          </h1>
          <h3
           
            className={"text-2xl text-slate-400 tracking-[5px] laptop:tracking-[20px]"}
          >
            ANNOUNCEMENTS
          </h3>
          <div className="flex flex-row flex-1 mt-10 gap-10 flex-wrap items-center justify-center w-full">
            <div className="rounded-xl shadow-lg drop-shadow-lg h-[30rem] w-[80%] tablet:max-w-[400px] desktop:max-w-[500px] flex flex-col items-center text-slate-500">
              <img
                src={Church}
                alt=""
                className="h-[70%] object-cover w-full rounded-t-xl"
              />
              <h1 className="font-bold tracking-tighter text-2xl text-slate-700 mt-6 text-center">
                PRAYERWORKS
              </h1>
              <span className="text-sm mt-2">Saturdays 7:00 AM via Zoom</span>
              <span className="text-sm mt-2">
                Zoom ID: 897 2755 6570 | Passcode: PRAY
              </span>
            </div>
            <div className="rounded-xl shadow-lg drop-shadow-lg h-[30rem] w-[80%] tablet:max-w-[400px] desktop:max-w-[500px] flex flex-col items-center text-slate-500">
              <img
                src={Church}
                alt=""
                className="h-[70%] object-cover w-full rounded-t-xl"
              />
              <h1 className="font-bold tracking-tighter text-2xl text-slate-700 mt-6 text-center">
                STAY CONNECTED & BE UPDATED!
              </h1>
              <span className="text-sm mt-4 flex flex-row">
                <img src={Facebook} alt="" className="w-8 h-8" />
                <img src={Instagram} alt="" className="w-8 h-8" />
                <img src={Youtube} alt="" className="w-8 h-8" />
                <img src={Tiktok} alt="" className="w-8 h-8" />
              </span>
            </div>
          </div>
        </section>
        <section
          className="relative min-h-[70vh] bg-semi-transparent"
          style={{
            borderTopLeftRadius: "110% 30%",
            borderTopRightRadius: "110% 30%",
          }}
        >
          <div className="px-5 tablet:px-20 py-20 flex flex-row">
            <span className="w-1/2 hidden laptop:block">
              <img
                src={Church}
                className="w-full mt-12 h-full object-cover rounded-tl-[60px] rounded-br-[60px]"
              />
            </span>
            <div className="flex flex-col pt-10 gap-4 w-full laptop:w-1/2 laptop:pl-16 items-center laptop:items-start">
              <FireIcon
                strokeWidth={0.5}
                className={"w-28 h-28 text-slate-100"}
              />

              <h3 className="tracking-tight  text-slate-200 text-center laptop:text-left text-[43px] font-bold translate-y-[-15px]">
                GIVE?
              </h3>

              <h3 className=" text-slate-200 text-sm mt-[-20px] text-center laptop:text-left">
                “Remember this: Whoever sows sparingly will also reap sparingly,
                and whoever sows generously will also reap generously. Each of
                you should give what you have decided in your heart to give, not
                reluctantly or under compulsion, for God loves a cheerful
                giver.”
              </h3>
              <br />
              <h3 className="font-glory text-slate-200 float-left text-sm mt-[-30px]">
                2 Corinthians 9:6-7
              </h3>

              <button className="uppercase text-sm mt-5 bg-transparent py-3 px-5 rounded-md font-bold border-2 border-blue-400 text-white shadow-md transition-all duration-500 hover:bg-blue-900">
                GIVE YOUR TITHES, OFFERINGS AND PLEDGES
              </button>
            </div>
          </div>
          <div
            className="w-full h-full top-0 overflow-hidden absolute z-[-10] bg-semi-transparent"
            style={{
              borderTopLeftRadius: "110% 30%",
              borderTopRightRadius: "110% 30%",
            }}
          >
            <Parallax speed={-20} className="absolute w-full h-[120%] top-0">
              <img
                src={Church}
                className="w-full h-full object-cover translate-y-[-30px]"
              />
            </Parallax>
          </div>
        </section>
        <Footer />
      </div>
    </ParallaxProvider>
  );
};

export default Welcome;
