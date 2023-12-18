import React, { useState, useEffect } from 'react'
import '../styles/favorites.css'
import { getFavorites } from '../utils/api'
import { useSelector } from 'react-redux'
import Results from './Results'
import PageCount from './PageCount'

export default function Favorites({ user }) {
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [page, setPage] = React.useState(1)

  //access the filter type set
  const filterType = useSelector((state) => {
    return state.filter
  })

  useEffect(() => {
    const fetchFavorites = async () => {
      setLoading(true)
      try {
        const data = await getFavorites(user)
        setResults(data)
      } catch (err) {
        setError(err)
        console.error('Error fetching favorites:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchFavorites()
  }, [user, error])

  //send 20 at a time to results
  const startIndex = (page - 1) * 20;
  const endIndex = startIndex + 20;
  const currentResults = results.slice(startIndex, endIndex);

  //filter those 20 results
  const favoritePets = currentResults.filter(pet => {
    for (const [key, value] of Object.entries(filterType)) {
      if (value === 'clear') {
        continue;  // Skip filtering for undefined values
      }

      // Check if the key has nested properties
      if (key in pet && typeof pet[key] === 'object') {
        if (pet[key].primary !== value) {
          return false;
        }
      } else {
        // Regular check for non-nested properties
        if (pet[key] !== value) {
          return false;
        }
      }
    }

    return true; // All filters passed
  })
  return (
    <div className="fav-cont">
      <div className="fav-results">
        <h2><span className="beautify">Furry Favorites</span></h2>
        <Results results={favoritePets} loading={loading} error={error} fav={favoritePets} setFav={setResults} />
      </div>
      <PageCount page={page} setPage={setPage} count={favoritePets.length} />
    </div>
  )
}
