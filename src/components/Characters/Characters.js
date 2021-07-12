import React, { useState, useEffect, useCallback } from 'react';
import Button from '../UI/Button';
import AddFilter from './AddFilter';
import Character from './Character';
// import Left from '@material-ui/icons/NavigateBefore';
// import Right from '@material-ui/icons/NavigateNext';
// import Back from '@material-ui/icons/RestorePage';

const Episodes = () => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [nextPage, setNextPage] = useState(1);
  const [numberOfAllPages, setNumberOfAllPages] = useState();
  const [status, setStatus] = useState('');
  const [gender, setGender] = useState('');
  const [species, setSpecies] = useState('');

  const baseUrl = `https://rickandmortyapi.com/api/character`;

  const fetchCharacters = useCallback(async () => {
    try {
      setIsLoading(true);

      const response = await fetch(
        `${baseUrl}?page=${nextPage}&status=${status}&gender=${gender}&species=${species}`,
      );
      if (!response.ok) {
        throw new Error('Something went wrong');
      }

      const data = await response.json();

      const transformedCharacters = data.results.map((character) => {
        return {
          id: character.id,
          name: character.name,
          status: character.status,
          species: character.species,
          img: character.image,
          gender: character.gender,
        };
      });
      setCharacters(transformedCharacters);
      setNumberOfAllPages(data.info.pages);
    } catch (er) {
      setError(er.message);
    }
    setIsLoading(false);
  }, [nextPage, status, baseUrl, gender, species]);

  useEffect(() => {
    const cleanUpRequests = setTimeout(() => {
      fetchCharacters();
    }, 300);
    return () => {
      clearTimeout(cleanUpRequests);
    };
  }, [fetchCharacters, nextPage, status]);

  const nextPageHandler = () => {
    if (nextPage < numberOfAllPages) {
      setNextPage((prevPage) => {
        return prevPage + 1;
      });
    }
  };

  const prevPageHandler = () => {
    if (nextPage > 1) {
      setNextPage((prevPage) => {
        return prevPage - 1;
      });
    }
  };

  const statusFilterHandle = (e) => {
    // preventDefault()
    setStatus(e.target.value);
  };

  const genderFilterHandle = (e) => {
    // preventDefault()
    setGender(e.target.value);
  };

  const speciesFilterHandle = (e) => {
    // preventDefault()
    setSpecies(e.target.value);
  };

  const clearFiltersHandle = () => {
    setNextPage(1);
    setSpecies('');
    setStatus('');
    setGender('');
  };

  // const moreInfoTogle = (e) => {
  //   setMoreinfo(!moreInfoId);
  // };
  return (
    <>
      <AddFilter
        onSpeciesChange={speciesFilterHandle}
        onGenderChange={genderFilterHandle}
        onStatusChange={statusFilterHandle}
        value={{ status: status, gender: gender, species: species }}
      />
      <div>
        <Button onClick={clearFiltersHandle}>clear all changes</Button>

        <Button onClick={prevPageHandler} type="button">
          prev page
        </Button>
        <Button onClick={nextPageHandler} type="button">
          next page
        </Button>
      </div>
      <div className="main">
        {isLoading && <h2>loading</h2>}
        {!isLoading &&
          characters.map((character) => {
            return <Character key={character.id} character={character} />;
          })}
        {!isLoading && error && <p>{error}</p>}
      </div>
    </>
  );
};

export default Episodes;
