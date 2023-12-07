import React from 'react';
import '../styles/Results.css';
import { useNavigate } from 'react-router-dom';
import Cat  from '../img/Cat.jpg'
import Dog  from '../img/Dog.jpg'

export default function Results({ results, loading, error }) {
  const navigate = useNavigate();

  if (loading) {
    return <div>Loading...</div>; // You can replace this with a loading spinner or any loading indicator
  }

  if (error) {
    return <div>Error fetching results. Please try again later.</div>; // Handle the error case
  }


  const cards = results.map(item => (
    <div className="card2" key={item._id} onClick={() => navigate(`/pets/${item._id}`)}>
      <div className="card-image">
        {item.photos && item.photos[0] && item.photos[0].full ? (
          <img src={item.photos[0].full} alt={`${item.name}`} />
        ) : (
          item.type === 'Dog' ? (
            <img src={Dog} alt={`${item.name}`} />
          ) : (
            <img src={Cat} alt={`${item.name}`} />
          )
        )}
      </div>
      <div className="card-text">
        <div className="head">
          <h3>{item.name} ⚉ {item.age}</h3>
          <h4>{item.breeds.primary}</h4>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="card-list">
      {cards.length > 0 ? (
        <>{cards}</>
      ) : (
        <h4 className="no-results">Sorry... No results found.</h4>
      )}
    </div>
  );
}
