import React from 'react';

const Search = ({searchChange}) => {
    return (
        <div>
            <input
                className='Search'
                type='search'
                placeholder='Search that Pokemon!'
                onChange={searchChange}
            />
        </div>
    )
}

export default Search;