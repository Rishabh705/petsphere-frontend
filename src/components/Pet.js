import React from 'react'
import Results from './Results'
import { getPets } from '../utils/api' // get all pets
import PageCount from './PageCount'
import {useSelector} from 'react-redux'

export default function Pet() {
  const [results, setResults] = React.useState([])
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(null)
  const [page, setPage] = React.useState(1)

  //access the filter type set
  const filterType = useSelector((state)=>{
    return state.filter
  })
  React.useEffect(() => {
    async function loadResults() {
      setLoading(true)
      try {
        const data = await getPets(page,filterType)
        setResults(data)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }
    loadResults()
  }, [page,filterType])

  return (
    <div className='srchresults-cont1'>
      <Results results={results} loading={loading} error={error}/>
      <PageCount page= {page} setPage={setPage} count={results.length}/>
    </div>
  )
}
