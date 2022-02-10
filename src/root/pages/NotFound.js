import React, { Component } from 'react';
import ParticlesBackground from '../component/ParticlesBackground';
import { NotFoundConfig , SpaceConfig} from '../config/ParticleConfig';

class NotFound extends Component {
  render() {
    return (
     <div className="container">
         <div id="tsparticles" style={{
//   position: "fixed",
  width: "100%",
  height: "100%",
  
}}>
    <ParticlesBackground config ={SpaceConfig}/>
</div>

<div id="container" style={{color:"whitesmoke"}}>

  <h1 style={{color:"whitesmoke",fontSize:70}}>4ghfhfghgfhgh04</h1>
</div>

     </div>
    );
  }
}

export default NotFound;
