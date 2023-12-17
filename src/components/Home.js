import React from 'react'
import '../styles/Home.css'
import {Link} from 'react-router-dom'

export default function Home() {
  return (
    <div className="container1">
      <div className="container2">
        <div className="background"></div>
        <div className="container3">
          <p>Welcome to <span className="beautify"><b>PetSphere</b></span></p>
          <p>"Welcome to Petsphere - streamline pet store with sleek cards and smart filters. Effortlessly find pets, explore details and enjoy a seamless experience on any device. Simplify pet adoption with Petsphere!"</p>
          <button>
            <Link to ='/pets'>Find Pets</Link>
          </button>
        </div>
      </div>
    </div>
  )
}
