import React from 'react';

function App() {
  return (
    <div className="h-screen font-sans">
      <div className="mx-auto h-full flex justify-center py-4">
        <div className="w-1/3 text-center">
          <h1 className="text-gray-800 text-4xl font-bold tracking-wide mb-4">GitHub User Search</h1>
          <div className="flex">
            <input className="flex-grow border rounded-md mr-4 bg-gray-200 placeholder-gray-600 placeholder-ml-8" type="text" placeholder="Enter a username"/>
            <button className="flex-none px-4 py-2 rounded-md bg-indigo-600 text-white">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
