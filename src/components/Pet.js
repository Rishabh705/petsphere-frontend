import React from 'react'
import Results from './Results'
import { getPets,getFavorites } from '../utils/api' // get all pets
import PageCount from './PageCount'
import {useSelector} from 'react-redux'

export default function Pet() {
  const [results, setResults] = React.useState([])
  const [fav, setFav] = React.useState([])
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(null)
  const [page, setPage] = React.useState(1)

  //access the filter type set
  const filterType = useSelector((state)=>{
    return state.filter
  })
  
  const auth = useSelector((state)=>{
    return state.auth
  })
  React.useEffect(() => {
    async function loadResults() {
      setLoading(true)
      setError(null)
      try {
        const data = await getPets(page,filterType)
        setResults(data)
        const  data2 = await getFavorites(auth.user,page,filterType);
        setFav(data2)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }
    loadResults()
  }, [page,filterType,auth.user])
  
  return (
    <div className='srchresults-cont1'>
      <Results results={results} loading={loading} error={error} fav={fav} setFav={setFav}/>
      <PageCount page= {page} setPage={setPage} count={results.length}/>
    </div>
  )
}
