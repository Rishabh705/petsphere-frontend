import React from 'react'
import '../styles/Footer.css'
import github from '../img/github.png'
import lin from '../img/linkedin.png'
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <section className="container6">
            <ul className='more-ul'>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>
            <ul>
                <li><a href="https://github.com/Rishabh705"><img src={github} alt="github" height={24} /></a></li>
                <li><a href='https://www.linkedin.com/in/rishabh-singh-93b68223a'><img src={lin} alt="linkedin" height={25.4} /></a></li>
            </ul>
        </section>

    )
}
