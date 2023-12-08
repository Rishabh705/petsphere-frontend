import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { getPet } from '../utils/api';
import '../styles/Detail.css';
import Cat from '../img/Cat.jpg';
import Dog from '../img/Dog.jpg';

export default function Detail() {
  const params = useParams();
  const location = useLocation();
  const [results, setResults] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');

  React.useEffect(() => {
    async function loadPopular() {
      setLoading(true);
      try {
        const data = await getPet(params.id);
        setResults(data);
      } catch (err) {
        setError('error');
      } finally {
        setLoading(false);
      }
    }
    loadPopular();
  }, [params.id, location.pathname]);

  const photos = results?.photos?.map(pic => {
    return (
      pic?.large ? <img src={pic.large} alt="large" key={pic.large} />
        : pic?.medium ? <img src={pic.medium} alt="medium" key={pic.medium} />
          : <p>No image available</p>
    )
  }) || []

  return (
    <div className="detail-container">
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && (
        <>
          <div className="intro">
            {results.photos && results.photos[0] && results.photos[0].full ? (
              <img src={results.photos[0].full} alt={`${results.name}`} />
            ) : (
              results.type === 'Dog' ? (
                <img src={Dog} alt={`${results.name}`} />
              ) : (
                <img src={Cat} alt={`${results.name}`} />
              )
            )}
            <div className="intro2">
              <h2>{results.name}</h2>
              <h3>{results.breeds?.primary || 'Unknown Breed'}</h3>
              <div className="intro3">
                <h4>{results.age}  •  {results.gender}  •  {results.size}</h4>
              </div>
            </div>
          </div>
          <div className="details">
            <div className="desc">
              <h2>Description</h2>
              <hr />
              <p>{results?.description || "No description available"}</p>
              <ul className="attributes">
                <h4>Attributes : </h4>
                <li>{`Neutered: ${results.attributes?.spayed_neutered || 'Status Unknown'}`}</li>
                <li>{`Trained: ${results.attributes?.house_trained || 'Status Unknown'}`}</li>
                <li>{`Declawed: ${results.attributes?.declawed || 'Status Unknown'}`}</li>
                <li>{`Special needs: ${results.attributes?.special_needs || 'Status Unknown'}`}</li>
                <li>{`Current shots: ${results.attributes?.shots_current || 'Status Unknown'}`}</li>
              </ul>
            </div>
            <div className="pics">
              <h2>Photos</h2>
              <hr />
              <div className="photos">
                {photos}
              </div>
            </div>
            <div className="contact-details">
              <h2>Contact Information</h2>
              <hr />
              <p>{`Email: ${results.contact?.email || 'Unknown'}`}</p>
              <p>{`Phone: ${results.contact?.phone || 'Unknown'}`}</p>
              <ul className="attributes">
                <p>Address:</p>
                <li>{`City: ${results.contact?.address?.city || 'Unknown'}`}</li>
                <li>{`State: ${results.contact?.address?.state || 'Unknown'}`}</li>
                <li>{`Postal Code: ${results.contact?.address?.postcode || 'Unknown'}`}</li>
                <li>{`Country: ${results.contact?.address?.country || 'Unknown'}`}</li>
              </ul>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
