import React, { useState } from 'react';
import classes from './Episode.module.css';

const Episode = ({ episode }) => {
  const [moreInfoOnEpisode, setMoreInfoOnEpisode] = useState(false);

  const moreEpisodeDetails = () => {
    setMoreInfoOnEpisode(!moreInfoOnEpisode);
  };

  return (
    <div className={classes.card} onClick={moreEpisodeDetails}>
      {!moreInfoOnEpisode && (
        <p className={classes.text}>name: {episode.name}</p>
      )}
      {moreInfoOnEpisode && (
        <>
          <p className={classes.text}>name: {episode.name}</p>

          <p className={classes.text}>date: {episode.date}</p>

          <p className={classes.text}>episode: {episode.episode}</p>
        </>
      )}
    </div>
  );
};

export default Episode;
