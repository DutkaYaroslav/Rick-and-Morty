import React, { useState } from 'react';
import classes from './Character.module.css';

const Character = ({ character }) => {
  const [moreInfoId, setMoreinfo] = useState(false);

  const moreInfoTogle = () => {
    setMoreinfo(!moreInfoId);
  };

  return (
    <>
      <div className={classes.card} onClick={moreInfoTogle}>
        <img className={classes.img} src={character.img} alt="hero" />
        {!moreInfoId && <p className={classes.text}>name: {character.name}</p>}
        {moreInfoId && (
          <>
            <p className={classes.text}>name: {character.name}</p>
            <p className={classes.text}>status: {character.status}</p>
            <p className={classes.text}>species: {character.species}</p>
            <p className={classes.text}>gender: {character.gender}</p>
          </>
        )}
      </div>
    </>
  );
};

export default Character;
