import React, { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddWatch.module.css';

const AddWatch = ({ onAddWatch, onClick }) => {
  const [name, setName] = useState('');
  const [episode, setEpisode] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    if (name.trim().length === 0 || episode.trim().length === 0) {
      return;
    }
    onAddWatch(name, episode);
    setName('');
    setEpisode('');
  };

  const episodeNameHandler = (e) => {
    setName(e.target.value);
  };

  const episodeNumberHandler = (e) => {
    setEpisode(e.target.value);
  };
  return (
    <Card>
      <form
        onSubmit={submitHandler}
        onClick={onClick}
        className={classes.input}
      >
        <label htmlFor="inputname">Name</label>
        <input
          value={name}
          onChange={episodeNameHandler}
          type="text"
          id="inputname"
        ></input>
        <label htmlFor="inpuepisode">Episode</label>
        <input
          value={episode}
          onChange={episodeNumberHandler}
          type="text"
          id="inpuepisode"
        ></input>
        <Button type="submit">Add</Button>
      </form>
    </Card>
  );
};

export default AddWatch;
