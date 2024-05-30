import React from 'react';
import { useState, useEffect } from 'react';

export default function SearchBar(props) {

//State
const [searchData, setSearchData] = useState({
    searchterm: "",
})

//Handle change
const handleChange = (event) => {
    setSearchData({...searchData, [event.target.name]: event.target.value})
}
const handleSubmit = (event) => {
    event.preventDefault()
    props.onSearch(searchData.searchterm)
    setSearchData({searchterm:""})
}
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text"
            name="searchterm"
            placeholder='Search City'
            onChange={handleChange}
            value={searchData.searchterm} />
            <input type="submit" value="submit" />
        </form>
    </div>
  )
}
