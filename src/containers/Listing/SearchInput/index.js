import React from 'react';

import './searchInput.scss';

const SearchInput = ({ onSubmit }) => (
  <form
    className="search-input"
    role="search"
    onSubmit={e => {
      e.preventDefault();
      onSubmit(e.target.username.value);
    }}
  >
    <input
      className="search-input__field"
      type="search"
      name="username"
      placeholder="Enter username"
      aria-label="Type username"
    />
    <button className="search-input__submit">Search</button>
  </form>
)

export default SearchInput;
