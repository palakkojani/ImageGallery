import React from 'react'

const Search = () => {
    return (
        <div className='searchSection'>
            <div className='searchBar'>
                <input type="text" name="search" id="search" placeholder='search here' /> |
                <p>Images</p> |
                <p>Seach by image</p>
            </div>
        </div>
    )
}

export default Search
