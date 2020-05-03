import React from 'react';

const SearchBar = ({placeholderText}) => {
  return (
    <div className="flex">
      <input className="flex-grow border rounded-md mr-4 bg-gray-200 placeholder-gray-600 placeholder-ml-8" type="text" placeholder={placeholderText}/>
      <button className="flex-none px-4 py-2 rounded-md bg-indigo-600 text-white">Search</button>            
    </div>
  )
}

export default SearchBar;