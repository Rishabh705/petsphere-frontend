import React, { useState, useEffect } from 'react';
import '../styles/favorites.css';
import { getFavorites } from '../utils/api';
import Results from './Results';
import PageCount from './PageCount';

export default function Favorites({ user }) {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [page, setPage] = React.useState(1)

  useEffect(() => {
    const fetchFavorites = async () => {
      setLoading(true)
      try {
        const data = await getFavorites(user);
        setResults(data.favorites);
      } catch (err) {
        setError(err)
        console.error('Error fetching favorites:', error);
      } finally {
        setLoading(false)
      }
    }
    fetchFavorites();
  }, [user, error,page]);

  return (
    <div className="fav-cont">
      <h2><span className="beautify">Furry Favorites</span></h2>
      <Results results={results} loading={loading} error={error} fav={results} setFav={setResults} />
      <PageCount page= {page} setPage={setPage} count={results.length}/>
    </div>
  );
}
