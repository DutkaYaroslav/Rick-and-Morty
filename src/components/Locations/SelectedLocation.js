import React from 'react';
import Card from '../UI/Card';
import classes from './SelectedLocation.module.css';

const SelectedLocation = ({ onDimension, onType, onPlanet, value }) => {
  return (
    <Card>
      <form className={classes.input}>
        <label htmlFor="name">Name</label>
        <input id="name" value={value.nameInput} onChange={onPlanet}></input>
        <label htmlFor="type">Type</label>
        <input id="type" value={value.typeInput} onChange={onType}></input>
        <label htmlFor="dimensions">Dimension</label>
        <input
          id="dimensions"
          value={value.dimensionInput}
          onChange={onDimension}
        ></input>
      </form>
    </Card>
  );
};

export default SelectedLocation;
