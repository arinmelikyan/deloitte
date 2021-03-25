import React from 'react';
import { Button, makeStyles } from '@material-ui/core';

const styles = makeStyles((theme) => ({
    button: {
        padding: '20px 10px',
        fontSize: '20px',
        color: '#fff',
        display: 'block',
        borderBottom: '1px grey solid',
        width: '100%',
        textAlign: 'left',
    }
}))

const Category = ({ name, handleClick }) => {
    const classes = styles();

    return (
        <Button onClick={handleClick} color='inherit' className={classes.button}>
            {name}
        </Button>
    )
};

export default Category;