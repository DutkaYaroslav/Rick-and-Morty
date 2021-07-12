import React, { useState, useEffect, useCallback } from 'react';
import Button from '../UI/Button';
import SelectedLocation from './SelectedLocation';
import Location from './Location';

const Locations = () => {
  const [locations, setLocations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [nameInput, setNameInput] = useState('');
  const [typeInput, setTypeInput] = useState('');
  const [dimensionInput, setDimensionInput] = useState('');
  const [error, setError] = useState(null);
  const [numberOfAllPages, setNumberOfAllPages] = useState();
  const [currentPage, setCurrentPage] = useState(1);

  const baseUrl = 'https://rickandmortyapi.com/api/location';

  const fetchEpisodes = useCallback(async () => {
    try {
      setIsLoading(true);

      const response = await fetch(
        `${baseUrl}?page=${currentPage}&name=${nameInput}&type=${typeInput}&dimension=${dimensionInput}`,
      );
      if (!response.ok) {
        throw new Error('Something went wrong');
      }

      const data = await response.json();

      const transformedEpisodes = data.results.map((location) => {
        return {
          id: location.id,
          name: location.name,
          type: location.type,
          dimension: location.dimension,
        };
      });
      setLocations(transformedEpisodes);
      setNumberOfAllPages(data.info.pages);
    } catch (er) {
      setError(er.message);
    }
    setIsLoading(false);
  }, [nameInput, currentPage, dimensionInput, typeInput]);

  useEffect(() => {
    const cleanUp = setTimeout(() => {
      // console.log('fetching');
      fetchEpisodes();
    }, 300);

    return () => {
      // console.log('clean up');
      clearTimeout(cleanUp);
    };
  }, [fetchEpisodes]);
  const nameFilterHandle = (e) => {
    // preventDefault()
    setNameInput(e.target.value);
  };

  const typeFilterHandle = (e) => {
    setTypeInput(e.target.value);
  };

  const dimensionFilterHandle = (e) => {
    setDimensionInput(e.target.value);
  };
  const clearFiltersHandle = () => {
    setCurrentPage(1);
    setNameInput('');
    setDimensionInput('');
    setTypeInput('');
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
      <SelectedLocation
        onType={typeFilterHandle}
        onDimension={dimensionFilterHandle}
        onPlanet={nameFilterHandle}
        value={{
          typeInput: typeInput,
          dimensionInput: dimensionInput,
          nameInput: nameInput,
        }}
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

      {isLoading && <h2>loading</h2>}

      <div className="main">
        {locations.map((location) => {
          return <Location key={location.id} location={location} />;
        })}
      </div>

      {!isLoading && error && <p>{error}</p>}
    </>
  );
};

export default Locations;
