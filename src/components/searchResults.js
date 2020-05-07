import React from 'react';

const SearchResults = ({ userName, realName, profileImg, repoCount, topLangauages, commits90Days }) => {
  return (
    <div className="mt-4 w-full text-left  border-t-2 border-gray-400">
      <h3 className="mt-2 mb-2 text-gray-900 text-lg">{userName} ({realName})</h3>
      <div className="flex sm:h-24 md:h-40">
        <img src={profileImg} 
          className="flex-none sm:w-24 md:w-40 object-cover" alt={ userName + " profile image"}/>
        
        <div className="flex-grow ml-8">
          <p>Repo Count: {repoCount}</p>
          <p>Top Langauges: {topLangauages}</p>
          <p># commits in last 90 days: {commits90Days}</p>
          <p>Something else: xyz</p>
        </div>
      </div> 
    </div>
  )
}

export default SearchResults;