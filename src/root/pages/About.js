import Header from "../component/Header";
import Particles from "react-tsparticles";
import Home from "./Home";

import { Typewriter } from 'react-simple-typewriter'
const About = () => {
  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const handleType = (count) => {
    // access word count number
    console.log(count)
  }

  const handleDone = () => {
    console.log(`Done after 5 loops!`)
  }
  return (
    <div style={{ backgroundColor: "white", padding: 0 }}>
      {/* Header */}

      <Particles
        style={{ position: "absolute" }}
        id="tsparticles"
        height={"100vh"}
        width={"100vw"}
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fullScreen: {
            zIndex: 0,
            enable: false,
          },

          background: {
            color: {
              value: "#000",
            },
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 3,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />
      <Header />
      <div style={{ position:"absolute",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",width:"100%",}}>
       
      <div style={{marginTop:"15%",marginBottom:"15%"}}>
      <h1 style={{ margin: 'auto 0', fontWeight: 'normal' ,color:"white",opacity:.5}}> Hi There!</h1>
      <h1 style={{ margin: 'auto 0', fontWeight: 'normal' ,color:"white",opacity:.8}}>
        I'M RAHUL PANDEY
       
      </h1>
      <h1 style={{ margin: 'auto 0', fontWeight: 'normal' }}>
      <span style={{ color: 'white', fontWeight: 'bold', }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['React Native', 'React Js', 'Developer !']}
            loop={1000}
            cursor
            cursorStyle='_'
            typeSpeed={50}
            deleteSpeed={30}
            delaySpeed={1000}
            onLoopDone={handleDone}
            onType={handleType}
          />
        </span>
       
      </h1>
      



      
      </div>
      </div>
      
    </div>
  );
};

export default About;
