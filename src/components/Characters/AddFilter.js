import React from 'react';
import Card from '../UI/Card';
import classes from './AddFilter.module.css';

const AddFilter = ({
  onSpeciesChange,
  onGenderChange,
  onStatusChange,
  value,
}) => {
  return (
    <Card>
      <form className={classes.input}>
        <label htmlFor="speciesInput">Species</label>
        <input
          id="speciesInput"
          value={value.species}
          onChange={onSpeciesChange}
        ></input>
        <label htmlFor="status">Status</label>
        <input
          id="status"
          value={value.status}
          onChange={onStatusChange}
        ></input>
        <label htmlFor="gender">Gender</label>
        <input
          id="gender"
          value={value.gender}
          onChange={onGenderChange}
        ></input>
      </form>
    </Card>
  );
};

export default AddFilter;
