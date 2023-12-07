import React, { useState } from 'react';
import '../styles/Home.css';

export default function Home() {
  const [time_window, setTime_window] = useState('day');
  const [type, setType] = useState('tv');
  return (
    <div className="container1">
      <div className="background">
        <div className="container2">
          <p>Welcome to <span className="beautify"><b>PetSphere</b></span></p>
          <p>"Welcome to Petsphere – streamline pet store with sleek cards and smart filters. Effortlessly find pets, explore details and enjoy a seamless experience on any device. Simplify pet adoption with Petsphere!"</p>
        </div>
      </div>
    </div>
  );
}
