import React, { useState } from 'react'
import '../styles/Results.css'
import { manageFavoritePet } from '../utils/api'
import { useNavigate } from 'react-router-dom'
import Cat from '../img/Cat.jpg'
import Dog from '../img/Dog.jpg'
import { useSelector } from 'react-redux'
import { FaRegHeart, FaHeart } from 'react-icons/fa'
import Loading from './Loading'

export default function Results({ results, loading, error, fav, setFav }) {
  const [err, setErr] = useState(null)
  const [status, setStatus] = useState('')
  const navigate = useNavigate()
  const auth = useSelector((state) => {
    return state.auth
  })
  if (loading) {
    return <Loading/>
  }

  if (error) {
    return <div>Error fetching results. Please try again later.</div>
  }

  const handleFav = (e, item) => {
    e.stopPropagation()

    //display the user that work is done ;)
    if(fav.some(favItem => favItem._id === item._id)){
      setFav(prev => prev.filter(favItem => favItem._id !== item._id));
    }
    else{
      setFav(prev=>[...prev,item])
    }

    manageFavoritePet(auth.user, item._id)
      .then((data) => {
        setFav(data.favorites)
        setStatus(data.message)
      })
      .catch(er => setErr(er.message))
  }
  const cards = results.map((item) => (
    <div className="card2" key={item._id} onClick={() => navigate(`/pets/${item._id}`)}>
      <span className="fav" onClick={(e) => { handleFav(e, item) }}>
        {fav.some(pet=>pet._id===item._id) ? (
          <FaHeart color='red' size={25} />
        ) : (
          <FaRegHeart size={25} />
        )}
      </span>
      <div className="card-image">
        {item.photos && item.photos[0] && item.photos[0].full ? (
          <img src={item.photos[0].full} alt={`${item.name}`} />
        ) : item.type === 'Dog' ? (
          <img src={Dog} alt={`${item.name}`} />
        ) : (
          <img src={Cat} alt={`${item.name}`} />
        )}
      </div>
      <div className="card-text">
        <div className="head">
          <h3>{item.name}</h3>
          <h4>
            {item.breeds.primary} • {item.age}
          </h4>
        </div>
      </div>
    </div>
  ))

  return (
    <div className="card-list">
      {cards.length > 0 ? (
        <>{cards}</>
      ) : (
        <h4 className="no-results">Sorry... No results found.</h4>
      )}
    </div>
  )
}
