import React from "react";
import { ParticleConfig, ParticleConfigTwo ,ParticleConfigThree} from "../config/ParticleConfig";
import Particle from "react-tsparticles";
const ParticlesBackground = () => {
  return <Particle params={ParticleConfigThree}></Particle>;
};
export default ParticlesBackground;
