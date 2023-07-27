// Import necessary dependencies
import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// Import required Apollo Client dependencies
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Login from './Login';
import Layout from './Layout';
// Create an Apollo Client instance

const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql', // Replace with the URL of your GraphQL server
  cache: new InMemoryCache(),
});



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Login />,

      },
    ],
  },
]);



// Render the App component wrapped in ApolloProvider
ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
    <ApolloProvider client={client}>
        <RouterProvider router={router} />  
   </ApolloProvider>
    </React.StrictMode>

);
