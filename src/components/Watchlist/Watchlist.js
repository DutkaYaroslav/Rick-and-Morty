import Button from '../UI/Button';
import Card from '../UI/Card';
import classes from './WatchList.module.css';

const WatchList = ({ onSeriesToWatch, onRemove }) => {
  return (
    <>
      {onSeriesToWatch.map((seria) => {
        return (
          <Card key={seria.id}>
            <div className={classes.note}>
              <p className={classes.text}>{seria.name}</p>
              <p className={classes.text}>{seria.series}</p>
              <Button
                onClick={() => {
                  onRemove(seria.id);
                }}
              >
                delete
              </Button>
            </div>
          </Card>
        );
      })}
    </>
  );
};

export default WatchList;
