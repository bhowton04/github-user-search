import React from "react";

const SearchBar = ({ placeholderText, execute, setUserName }) => {
  return (
    <form
      className="flex"
      onSubmit={(e) => {
        console.log("running");
        e.preventDefault();
        execute();
      }}
    >
      <input
        className="flex-grow border rounded-md mr-4 bg-gray-200 placeholder-gray-600 placeholder-ml-8 p-2"
        type="text"
        placeholder={placeholderText}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button
        className="flex-none px-4 py-2 rounded-md bg-indigo-600 text-white"
        type="submit"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
