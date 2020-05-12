import React from "react";
import Header from "./components/header.js";
import SearchBar from "./components/searchBar.js";
import SearchResults from "./components/searchResults.js";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const USER_DATA = gql`
  {
    viewer {
      name
      followers(first: 10) {
        edges {
          node {
            id
            name
            avatarUrl
            login
            repositories {
              totalCount
            }
          }
        }
      }
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(USER_DATA);
  console.log("data: ", data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  const userCards = data.viewer.followers.edges.map((curr) => {
    return (
      <SearchResults
        userName={curr.node.login}
        realName={curr.node.name}
        profileImg={curr.node.avatarUrl}
        repoCount={curr.node.repositories.totalCount}
        topLangauages="JavaScript, HTML CSS" // this will actually be an object we map over in the SearchResults component
        commits90Days="32"
      />
    );
  });
  return (
    <div className="h-screen font-sans">
      <div className="m-4 h-full flex justify-center py-4">
        <div className="text-center sm:w-full md:w-3/4 max-w-3xl">
          <Header title="GitHub User Search" />
          <SearchBar placeholderText="Enter a username to search" />
          {userCards}
        </div>
      </div>
    </div>
  );
}

export default App;
