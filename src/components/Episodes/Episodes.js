import React, { useState, useEffect, useCallback } from 'react';
import Button from '../UI/Button';
import SelectEpisode from './SelectEpisode';
import Episode from './Episode';

const Episeodes = () => {
  const [episodes, setEpisodes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [nameInput, setNameInput] = useState('');
  const [error, setError] = useState(null);
  const [numberOfAllPages, setNumberOfAllPages] = useState();
  const [currentPage, setCurrentPage] = useState(1);

  const baseUrl = 'https://rickandmortyapi.com/api/episode';

  const fetchEpisodes = useCallback(async () => {
    try {
      setIsLoading(true);

      const response = await fetch(
        `${baseUrl}?page=${currentPage}&name=${nameInput}`,
      );
      if (!response.ok) {
        throw new Error('Something went wrong');
      }

      const data = await response.json();

      const transformedEpisodes = data.results.map((episode) => {
        return {
          id: episode.id,
          name: episode.name,
          date: episode.air_date,
          episode: episode.episode,
        };
      });
      setEpisodes(transformedEpisodes);
      setNumberOfAllPages(data.info.pages);
    } catch (er) {
      setError(er.message);
    }
    setIsLoading(false);
  }, [nameInput, currentPage]);

  useEffect(() => {
    const cleanUpFetchRequestFromInput = setTimeout(() => {
      fetchEpisodes();
    }, 300);

    return () => {
      clearTimeout(cleanUpFetchRequestFromInput);
    };
  }, [nameInput, currentPage, fetchEpisodes]);
  const nameFilterHandle = (e) => {
    // preventDefault()
    setNameInput(e.target.value);
  };
  const clearFiltersHandle = () => {
    setCurrentPage(1);
    setNameInput('');
  };

  const nextPageHandler = () => {
    if (currentPage < numberOfAllPages) {
      setCurrentPage((prevPage) => {
        return prevPage + 1;
      });
    }
  };

  const prevPageHandler = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => {
        return prevPage - 1;
      });
    }
  };
  return (
    <>
      <SelectEpisode selectedField={nameFilterHandle} value={nameInput} />
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

        {episodes.map((episode) => {
          return <Episode key={episode.id} episode={episode} />;
        })}
        {!isLoading && error && <p>{error}</p>}
      </div>
    </>
  );
};

export default Episeodes;
