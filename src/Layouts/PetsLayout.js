import React, { useEffect, useState } from 'react'
import { TbBrandGoogleBigQuery } from 'react-icons/tb'
import { Outlet } from 'react-router-dom'
import '../styles/SearchLayout.css'
import { getBreeds } from '../utils/api'
import { useDispatch, useSelector } from 'react-redux'
import { changeFilter } from '../store/slices/filterSlices'

export default function PetsLayout() {
  const dispatch = useDispatch()
  const [activeSpecies, setActiveSpecies] = useState(false)
  const [typeFilter, setTypeFilter] = useState('')
  const [breeds, setBreeds] = useState([])  // State to store breeds

  const filterType = useSelector((state) => {
    return state.filter
  })

  const handleFilterChange = (ky, val) => {
    dispatch(changeFilter({ key: ky, value: val }))

    if (ky === 'type' && val !== 'clear') {
      setTypeFilter(val)
      dispatch(changeFilter({ key: 'breed', value: 'clear' }))
      dispatch(changeFilter({ key: 'age', value: 'clear' }))
      dispatch(changeFilter({ key: 'gender', value: 'clear' }))
      setActiveSpecies(true)
    } else if (ky === 'type' && val === 'clear') {
      setTypeFilter('clear')
      dispatch(changeFilter({ key: 'type', value: 'clear' }))
      dispatch(changeFilter({ key: 'breed', value: 'clear' }))
      dispatch(changeFilter({ key: 'age', value: 'clear' }))
      dispatch(changeFilter({ key: 'gender', value: 'clear' }))
      setActiveSpecies(false)
    }
  }

  // Fetch breeds when the component mounts or when filterType changes
  useEffect(() => {
    async function loadBreeds() {
      try {
        const data = await getBreeds(typeFilter)
        setBreeds(data)
      } catch (err) {
        console.error('Error fetching breeds:', err)
      }
    }
    loadBreeds()
  }, [typeFilter])

  // Toggling visibility of advanced search in small screens
  useEffect(() => {
    const advsrch = document.querySelector('.advancedcont1')
    const advicon = document.querySelector('.right-arrow')
    function switchOn(evt) {
      advsrch.classList.toggle('show')
    }
    advicon.addEventListener('click', switchOn)
    return function () {
      advicon.removeEventListener('click', switchOn)
    }
  }, [])

  const buttonClasses = (filterKey, value) =>
    `filter-btn ${filterType[filterKey] === value ? 'clicked' : ''}`


  const speciesTypes = ['Dog', 'Cat'] // Add filter types

  const breedTypes = breeds

  const genderTypes = ['Male', 'Female'] // Add filter types
  const ageTypes = ['Baby', 'Adult', 'Young', 'Senior'] // Add filter types

  const species = speciesTypes.map((btn) => (
    <button
      key={btn}
      onClick={() => handleFilterChange('type', btn)}
      className={buttonClasses('type', btn)}
    >
      {btn}
    </button>
  ))

  const breed = breedTypes.map((btn) => (
    <button
      key={btn}
      onClick={() => handleFilterChange('breed', btn)}
      className={buttonClasses('breed', btn)}
    >
      {btn}
    </button>
  ))

  const ages = ageTypes.map((btn) => (
    <button
      key={btn}
      onClick={() => handleFilterChange('age', btn)}
      className={buttonClasses('age', btn)}
    >
      {btn}
    </button>
  ))

  const genders = genderTypes.map((btn) => (
    <button
      key={btn}
      onClick={() => handleFilterChange('gender', btn)}
      className={buttonClasses('gender', btn)}
    >
      {btn}
    </button>
  ))

  return (
    <div className="srchlcont1">
      <div className="left-nav">
        <TbBrandGoogleBigQuery color="#dd3b50" size={25} className="right-arrow" />
      </div>
      <div className="srchlcont2">
        <div className="advancedcont1">
          <div className="advanced-title">
            <h4>
              <span className="beautify">Filter Options</span>
            </h4>
            <hr />
          </div>
          <div className="results">
            <div className="filterby">
              <div className="filters">
                <h5 className="beautify">Species</h5>
                <div className="buttons">
                  {species}
                  <button className="filter-btn clear-btn" onClick={() => handleFilterChange('type', 'clear')}>
                    Clear
                  </button>
                </div>
              </div>
              {activeSpecies && (
                <div className="additional-filters">
                  <div className="filters">
                    <h5 className="beautify">Breed</h5>
                    <div className="buttons">
                      {breed}
                      <button className="filter-btn clear-btn" onClick={() => handleFilterChange('breed', 'clear')}>
                        Clear
                      </button>
                    </div>
                  </div>
                  <div className="filters">
                    <h5 className="beautify">Gender</h5>
                    <div className="buttons">
                      {genders}
                      <button className="filter-btn clear-btn" onClick={() => handleFilterChange('gender', 'clear')}>
                        Clear
                      </button>
                    </div>
                  </div>
                  <div className="filters">
                    <h5 className="beautify">Age</h5>
                    <div className="buttons">
                      {ages}
                      <button className="filter-btn clear-btn" onClick={() => handleFilterChange('age', 'clear')}>
                        Clear
                      </button>
                    </div>
                  </div>
                </div>
              )
              }
            </div>
          </div>
        </div>
        <div className="srchlcont3">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
