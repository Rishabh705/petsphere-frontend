import React from 'react'
import "../styles/NotFound.css"
import { Link } from 'react-router-dom'
export default function NotFound() {
  return (
    <div id="notfound">
      <div className="notfound">
        <div className="notfound-404">
          <h1>Oops!</h1>
          <h2>404 - The Page can't be found</h2>
        </div>
        <Link to="/">Go To Homepage</Link>
      </div>
    </div>
  )
}
