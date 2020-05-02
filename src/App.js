import React from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="h-screen font-sans">
      <div className="mx-auto h-full flex justify-center py-4">
        <div className="w-1/3 text-center">
          <Header title="GitHub User Search"/>
          <SearchBar placeholderText="Enter a username to search" />
        </div>
      </div>
    </div>
  );
}

export default App;
