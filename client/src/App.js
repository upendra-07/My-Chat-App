// src/App.js
import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_HELLO } from './graphql/queries/getHello';

const App = () => {
  const { loading, error, data } = useQuery(GET_HELLO);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <h1>{data.hello}</h1>
    </div>
  );
};

export default App;
