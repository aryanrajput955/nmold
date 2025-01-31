import { useEffect } from "react";
import styled from "styled-components";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

const Title = styled.h2`
  font-size: 3rem;
  font-weight: 600;
  font-family: "Jost";
  position: absolute;
  left: 10%;
  top: 20%;
  color: white;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 4rem;
    left: 15%;
    top: 30%;
  }

  @media (min-width: 1024px) {
    font-size: 5rem;
  }
`;

const Word = styled(motion.span)`
  display: inline-block;
  margin-right: 0.25em;
  white-space: nowrap;
`;

const Character = styled(motion.span)`
  display: inline-block;
  margin-right: -0.05em;
`;

const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh; /* Full viewport height */
  overflow: hidden;
`;

const ScrollDownText = styled.div`
  position: absolute;
  top: 50%; /* Adjust as needed */
  left: 50%;
  transform: translateX(-40%);
  text-align: center;
  color: #f5f5f5;
  font-family: "Jost";
  font-size: 1.5rem;
  font-weight: bold;
  z-index: 10;

  @media (min-width: 768px) {
    top: 55%;
  }
`;

export default function Automation() {
  const text = "Welcome to Automation Services"; // This would normally be passed into this component as a prop!

  const ctrls = useAnimation();

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      ctrls.start("visible");
    }
    if (!inView) {
      ctrls.start("hidden");
    }
  }, [ctrls, inView]);

  const wordAnimation = {
    hidden: {},
    visible: {},
  };

  const characterAnimation = {
    hidden: {
      opacity: 0,
      y: `0.25em`,
    },
    visible: {
      opacity: 1,
      y: `0em`,
      transition: {
        duration: 1,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  return (
    <>
      <VideoContainer>
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
          src="https://videos.pexels.com/video-files/5532774/5532774-uhd_2732_1440_25fps.mp4"
        >
          Your browser does not support the video tag.
        </video>
        <Title aria-label={text} role="heading">
          {text.split(" ").map((word, index) => {
            return (
              <Word
                ref={ref}
                aria-hidden="true"
                key={index}
                initial="hidden"
                animate={ctrls}
                variants={wordAnimation}
                transition={{
                  delayChildren: index * 0.25,
                  staggerChildren: 0.05,
                }}
              >
                {word.split("").map((character, index) => {
                  return (
                    <Character
                      aria-hidden="true"
                      key={index}
                      variants={characterAnimation}
                    >
                      {character}
                    </Character>
                  );
                })}
              </Word>
            );
          })}
        </Title>
        <ScrollDownText>
          <p className="animate-blink">Scroll Down</p>
          <img className=" ml-5 h-20" src="./doublearrow.png" alt="" />
        </ScrollDownText>
      </VideoContainer>
      <div className="w-full bg-white py-10">
        <h2 className="font-josefin text-3xl md:text-4xl pt-7 pl-5 md:pl-12">
          Why Automation?
        </h2>
        <div className="flex flex-col md:flex-row pl-5 md:pl-10 gap-10 md:gap-20">
          <div className="flex-1">
            <div className="mt-10 flex flex-col md:flex-row items-center md:items-start">
              <img className="mt-3 mr-2 h-16" src="./time-managament.png" alt="" />
              <div>
                <h4 className="font-jost text-lg font-medium">INCREASED EFFICIENCY:</h4>
                <p className="font-jost text-lg">
                  Automation speeds up processes by performing repetitive tasks faster than humans. This reduces the time spent on manual work, allowing tasks to be completed more quickly.
                </p>
              </div>
            </div>
            <div className="mt-5 flex flex-col md:flex-row items-center md:items-start">
              <img className="mt-3 mr-2 h-16" src="./veracity.png" alt="" />
              <div>
                <h4 className="font-jost text-lg font-medium">CONSISTENCY AND ACCURACY:</h4>
                <p className="font-jost text-lg">
                  Automation reduces the risk of human error. Machines or software performing tasks consistently lead to more reliable results.
                </p>
              </div>
            </div>
            <div className="mt-5 flex flex-col md:flex-row items-center md:items-start">
              <img className=" mt-3 mr-2 h-16" src="./protect.png" alt="" />
              <div>
                <h4 className="font-jost text-lg font-medium">IMPROVED SAFETY:</h4>
                <p className="font-jost text-lg">
                  In hazardous environments, automation can take over dangerous tasks, reducing the risk of injury to human workers. Robots or machines can perform work in environments that are too risky for people.
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1 relative">
            <img
              className="  w-full h-auto md:absolute md:top-0 md:right-0 rounded-xl object-cover"
              src="./whyautomation.jpg"
              alt="Why Automation"
            />
          </div>
        </div>
      </div>
      <div className=" lg:ml-20 flex flex-col md:flex-row  gap-12 py-40 px-5 md:px-16">
        <div className="flex-1 flex flex-col justify-start">
          <h2 className="font-semibold text-3xl md:text-4xl font-josefin">
            HOME AUTOMATION
          </h2>
          <p className="text-lg pt-5 font-medium font-jost">
            Home automation involves the use of technology to control and automate household systems and appliances, such as lighting, heating, cooling, entertainment devices, and security systems. Often referred to as "smart home technology," it enables homeowners to monitor and manage their homes remotely or automatically through smartphones, voice commands, or pre-set routines.
            <br /><br />
            With the integration of Internet of Things (IoT) devices, home automation has become more accessible and customizable, allowing for seamless control and energy efficiency.
          </p>
          <div>
            <Link to={"/home-automation"}>
              <button
                type="submit"
                className="mt-6 font-jost flex justify-center gap-2 items-center mx-auto lg:mx-0 shadow-xl hover:bg-neutral-900 text-sm lg:text-lg bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-blue-gray-900 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-emerald-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
              >
                Explore More
                <svg
                  className="w-6 h-6 lg:w-8 lg:h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-1 lg:p-2 rotate-45"
                  viewBox="0 0 16 19"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                    className="fill-gray-800 group-hover:fill-gray-800"
                  ></path>
                </svg>
              </button>
            </Link>
          </div>
        </div>
        <div className="flex-1 mt-10 md:mt-0">
          <img
            className="w-full h-auto md:h-[500px] md:w-[400px] hover:blur-[1px] hover:scale-105 transition-all ease-linear rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50"
            src="./home_auto.jpg"
            alt="Home Automation"
          />
        </div>
      </div>
    </>
  );
}