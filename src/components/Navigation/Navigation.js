import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Navigation.module.css';

const Navigation = () => {
  return (
    <div className={classes.header}>
      <div>
        <h1 className={classes.cheader}>Rick and Morty</h1>
      </div>
      <div className={classes.listcontainer}>
        <ul className={classes.list}>
          <li className={classes.item}>
            <Link className={classes.color} to="/characters">
              Characters
            </Link>
          </li>
          <li className={classes.item}>
            <Link className={classes.color} to="/episodes">
              Episodes
            </Link>
          </li>
          <li className={classes.item}>
            <Link className={classes.color} to="/locations">
              Locations
            </Link>
          </li>
          <li className={classes.item}>
            <Link className={classes.color} to="/watch">
              Watch
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
