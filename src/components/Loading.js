import React from 'react'
import '../styles/loading.css'
import beanEaterSvg from '../img/Bean Eater-0.5s-197px.svg';
export default function Loading() {
  return (
    <div className='loading'>
      <img src={beanEaterSvg} alt='Loading...' />
    </div>
  )
}   
