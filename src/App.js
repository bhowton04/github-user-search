import React from 'react';
import Header from './components/header.js';
import SearchBar from './components/searchBar.js';
import SearchResults from './components/searchResults.js';

function App() {
  return (
    <div className="h-screen font-sans">
      <div className="m-4 h-full flex justify-center py-4">
        <div className="text-center sm:w-full md:w-3/4 max-w-3xl">
          <Header title="GitHub User Search"/>
          <SearchBar placeholderText="Enter a username to search" />
          <SearchResults 
            userName = "Mr. Doggo"
            realName = "Doggie McDoggerson"
            profileImg = "https://images.unsplash.com/photo-1536164261511-3a17e671d380?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2385&q=80"
            repoCount = "10"
            topLangauages = "JavaScript, HTML CSS" // this will actually be an object we map over in the SearchResults component
            commits90Days = "32"
          />
          <SearchResults 
            userName = "Ms. Kitty Kat"
            realName = "Katarina Calico"
            profileImg = "https://images.unsplash.com/photo-1582725461742-8ecd962c260d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
            repoCount = "2847"
            topLangauages = "C#, Swift, Java" // this will actually be an object we map over in the SearchResults component
            commits90Days = "164"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
