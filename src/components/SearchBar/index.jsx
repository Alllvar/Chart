import React from 'react';
import SearchIcon from '../../assets/icons/search.svg'
import './index.scss'

export function SearchBar ({ setQuery }) {
    return (
        <label
            className="search-label"
            htmlFor="search"
        >
            <img src={SearchIcon} alt="icon" />
            <input
                className="search-input"
                name="search"
                type="search"
                placeholder="Search"
                onChange={event => setQuery(event.target.value)}
            />
        </label>
    )
}