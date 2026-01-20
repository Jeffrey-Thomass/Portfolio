import React from 'react'
import LightRays from './LightRays';

export default function App() {
  return (
    <div style={{ width: '100%', height: '100%', position: 'relative'  , background: 'black'}}>
  <LightRays
    raysOrigin="top-center"
    raysColor="#fafafa"
    raysSpeed={2}
    lightSpread={0.7}
    rayLength={1.5}
    followMouse={true}
    mouseInfluence={0.4}
    noiseAmount={0.5}
    distortion={0}
    className="custom-rays"
    pulsating={false}
    fadeDistance={1.2}
    saturation={2}
/>
</div>
  )
}
