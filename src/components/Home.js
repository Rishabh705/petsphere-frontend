import React, { useState } from 'react';
import '../styles/Home.css';

export default function Home() {
  const [time_window, setTime_window] = useState('day');
  const [type, setType] = useState('tv');
  return (
    <div className="container1">
      <div className="background">
        <div className="container2">
          <p>Welcome to <span className="beautify"><b>StaffSphere</b></span></p>
          <p>"Welcome to Staffsphere – streamline employee management with sleek cards, quick search, and smart filters. Effortlessly create teams, explore details, and enjoy a seamless experience on any device. Simplify with Staffsphere!"</p>
        </div>
      </div>
    </div>
  );
}
