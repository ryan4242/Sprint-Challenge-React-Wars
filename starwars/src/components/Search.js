import React from 'react';

const Search = props => {

  return (
    <form onSubmit={e => {
      e.preventDefault();
      props.set(`?search=${document.querySelector('#input').value.toLowerCase()}`)
    }}>
      <input id='input' type='text' placeholder='Search by character name' />
      <input type='submit' value='Search' />
    </form>
  )
}

export default Search;