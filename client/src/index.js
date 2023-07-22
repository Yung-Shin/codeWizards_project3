// Import necessary dependencies
import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';

// Import required Apollo Client dependencies
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

// Create an Apollo Client instance
const client = new ApolloClient({
  uri: '/graphql', // Replace with the URL of your GraphQL server
  cache: new InMemoryCache(),
});

// Render the App component wrapped in ApolloProvider
ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById('root')
);
