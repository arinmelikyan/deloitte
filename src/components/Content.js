import React from 'react';
import {
    Card,
    CardContent,
    Typography,
    CardActions,
    Button,
    makeStyles,
} from '@material-ui/core';

const styles = makeStyles((themes) => ({
  card: {
    backgroundColor: '#000',
    color: '#fff',
    border: '1px #fff solid',
    width: '460px',
    height: '430px',
  },
  button: {
    backgroundColor: '#3D4849',
  }
}))

const Content = ({ name, description, image, viewContent }) => {
  const classes = styles();

  return (
    <div className="content">
      <Card className={classes.card}>
        <CardContent>
          <img className="content-img"  src={image} alt={name} />
        </CardContent>
        <div className="content-description">
          <CardContent>
            <Typography variant="body2" component="p">
              {name}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="medium" className={classes.button} color="inherit" onClick={viewContent}>Add</Button>
          </CardActions>
        </div>
      </Card>
    </div>
  )
};

export default Content;
