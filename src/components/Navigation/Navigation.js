import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/characters">Characters</Link>
        </li>
        <li>
          <Link to="/episodes">Episodes</Link>
        </li>
        <li>
          <Link to="/locations">Locations</Link>
        </li>
        <li>
          <Link to="/watchlist">Watch list</Link>
        </li>
      </ul>
    </>
  );
};

export default Navigation;
