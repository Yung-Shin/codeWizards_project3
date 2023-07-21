// Import necessary dependencies
import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client'; // Import gql from @apollo/client to define the GraphQL query

// Define the GraphQL query
const GET_MATCHUPS = gql`
  query GetMatchups {
    matchups {
      _id
      // Add other fields you want to fetch from the server
    }
  }
`;

const Home = () => {
  // Use the useQuery hook to fetch data from the server
  const { loading, error, data } = useQuery(GET_MATCHUPS, {
    fetchPolicy: 'no-cache', // Disable cache for real-time data
  });

  // Extract the matchups from the data
  const matchupList = data?.matchups || [];

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error fetching matchups</div>;

  return (
    <div>
      {/* Display the list of matchups */}
      {matchupList.map((matchup) => (
        <div key={matchup._id}>
          <p>Matchup ID: {matchup._id}</p>
          {/* Add other fields you want to display */}
        </div>
      ))}
      <Link to="/create-matchup">Create New Matchup</Link> {/* Link to a page where users can create a new matchup */}
    </div>
  );
};

export default Home;
