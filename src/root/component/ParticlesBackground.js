import React from "react";
import { ParticleConfig, ParticleConfigTwo ,ParticleConfigThree} from "../config/ParticleConfig";
import Particle from "react-tsparticles";
const ParticlesBackground = (props) => {
  return <Particle params={props.config}></Particle>;
};
export default ParticlesBackground;
