import React from 'react';

const SearchBox = ({ searchfield, searchChange }) =>{
    return (
        <input className= 'tc bg-lightest-blue ba pa3 b--green br4 bw1'
        type = 'search'
        placeholder = 'search robots..'
        onChange = {searchChange}
        />
    )
}

export default SearchBox;