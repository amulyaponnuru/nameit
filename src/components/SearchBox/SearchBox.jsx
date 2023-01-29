import React from 'react';
import './SearchBox.css';

const SearchBox = ({onInputChange}) => {
    return (
        <div className='search-container'>
            <input
            className='search-input'
            placeholder='Type keywords'
            onChange={(event) => onInputChange(event.target.value)}
            />
        </div>
    )
}

export default SearchBox;