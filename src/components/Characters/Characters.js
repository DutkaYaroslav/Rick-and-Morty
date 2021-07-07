import React, { useState, useEffect } from 'react';
import Button from '../UI/Button';

const Characteres = () => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // useEffect(() => {
  //   fetch('https://rickandmortyapi.com/api/character/')
  //     .then((response) => {
  //       // console.log(response.json());
  //       return response.json();
  //     })
  //     .then((data) => {
  //       const transformedCharacters = data.results.map((character) => {
  //         return {
  //           id: character.id,
  //           name: character.name,
  //           status: character.status,
  //           species: character.species,
  //         };
  //       });
  //       setCharacters(transformedCharacters);
  //     })
  //     .catch((er) => {
  //       console.log(er);
  //     });
  // }, []);
  async function fetchCharacters() {
    setIsLoading(true);
    const response = await fetch('https://rickandmortyapi.com/api/character/');

    const data = await response.json();

    const transformedCharacters = data.results.map((character) => {
      return {
        id: character.id,
        name: character.name,
        status: character.status,
        species: character.species,
        img: character.image,
      };
    });
    setCharacters(transformedCharacters);
    setIsLoading(false);
  }

  return (
    <>
      <Button onClick={fetchCharacters}>Fetch Characters</Button>
      {isLoading && <h2>loading</h2>}
      {!isLoading &&
        characters.map((character) => {
          return (
            <ul key={character.id}>
              <li>{character.name}</li>
              <li>{character.status}</li>
              <li>{character.species}</li>
              <img src={character.img} />
            </ul>
          );
        })}
    </>
  );
};

export default Characteres;
