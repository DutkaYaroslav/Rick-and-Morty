import React, { useState } from 'react';
import classes from './Location.module.css';

const Location = ({ location }) => {
  const [moreInfoOnLocation, setMoreInfoOnLocation] = useState(false);

  const foolInfoLocationTogle = () => {
    setMoreInfoOnLocation(!moreInfoOnLocation);
  };
  return (
    <div className={classes.card} onClick={foolInfoLocationTogle}>
      {!moreInfoOnLocation && (
        <p className={classes.text}>name: {location.name}</p>
      )}
      {moreInfoOnLocation && (
        <>
          <p className={classes.text}>name: {location.name}</p>
          <p className={classes.text}>type: {location.type}</p>
          <p className={classes.text}>dimension: {location.dimension}</p>
        </>
      )}
    </div>
  );
};

export default Location;
