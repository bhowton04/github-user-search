import React, { useState } from "react";
import Header from "./components/header.js";
import SearchBar from "./components/searchBar.js";
import SearchResults from "./components/searchResults.js";
import { useQuery, useLazyQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const USER_DATA = gql`
  query User($username: String!) {
    search(query: $username, type: USER, first: 10) {
      edges {
        node {
          ... on User {
            id
            name
            avatarUrl
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
  const [username, setUserName] = useState(null);
  const [execute, { loading, error, data }] = useLazyQuery(USER_DATA, {
    variables: {
      username,
    },
  });
  // console.log(username);
  // console.log("error: ", error);
  // console.log("data: ", data);

  // if (loading || loading === null) return <p>Loading...</p>;
  // if (error) return <p>Error :(</p>;
  const userCards =
    data &&
    data.search.edges.length > 0 &&
    data.search.edges.map((curr) => {
      // console.log("curr: ", curr);
      if (curr.node.name) {
        return (
          <SearchResults
            userName={curr.node.login}
            realName={curr.node.name}
            profileImg={curr.node.avatarUrl}
            repoCount={curr.node.repositories.totalCount}
            topLangauages="JavaScript, HTML CSS" // this will actually be an object we map over in the SearchResults component
            commits90Days="32"
            key={curr.node.id}
          />
        );
      }
    });
  return (
    <div className="h-screen font-sans">
      <div className="m-4 h-full flex justify-center py-4">
        <div className="text-center sm:w-full md:w-3/4 max-w-3xl">
          <Header title="GitHub User Search" />
          <SearchBar
            placeholderText="Enter a username to search"
            execute={execute}
            setUserName={setUserName}
          />
          {userCards}
        </div>
      </div>
    </div>
  );
}

export default App;
