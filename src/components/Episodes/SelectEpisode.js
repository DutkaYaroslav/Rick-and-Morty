import React from 'react';
import classes from './SelectedEpisode.module.css';
import Card from '../UI/Card';

const SelectEpisode = ({ selectedField, value }) => {
  return (
    <Card>
      <form className={classes.input}>
        <label htmlFor="episode">Episode</label>
        <input id="episode" value={value} onChange={selectedField}></input>
      </form>
    </Card>
  );
};

export default SelectEpisode;
