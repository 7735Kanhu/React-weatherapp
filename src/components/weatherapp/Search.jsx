import React from 'react'
import './Weather.css'


const Search = ({search,setSearch,handleSearch}) => {
  return (
    <div className='search-container'>
        <input type="text" placeholder='Enter City Name...' onChange={(e)=>setSearch(e.target.value)}/>
        <button onClick={handleSearch}>Search</button>
    </div>
  )
}

export default Search