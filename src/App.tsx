import React from 'react';
import { useQuery } from '@apollo/client';
import getCharacters from './schema/characters/getCharacters';

const App = () => {
  const { data, loading, error } = useQuery(getCharacters);

  if (loading) return <h1>Loading</h1>;
  return (
    <ul>
      {data.characters.results.map((character: any) => (
        <li key={character.id}>{character.name}</li>
      ))}
    </ul>
  );
};

export default App;
