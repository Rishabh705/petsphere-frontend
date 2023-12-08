import React from 'react'
import '../styles/Footer.css'
import github from '../img/github.png'
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <section className="container6">
            <ul className='more-ul'>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>
            <ul>
                <li><a href="https://github.com/Rishabh705/petstore-frontend"><img src={github} alt="github" height={24} /></a></li>
            </ul>
        </section>

    )
}
