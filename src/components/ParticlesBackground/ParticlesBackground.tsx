import React from 'react';
import Particles from 'react-particles-js';
import particlesConfig from '../../utils/ParticlesConfig';
import './ParticlesBackground.css';
interface ParticlesBackgroundProps{
    data: any;
}

export const ParticlesBackground: React.FC<ParticlesBackgroundProps> = ({data})=>{
return (
    <div className="particles__container">
        <Particles params={data}></Particles>
    </div>
);
}