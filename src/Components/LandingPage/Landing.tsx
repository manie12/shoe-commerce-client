import React from 'react';
import Header from './Header';
import Body from './Body';
import { useStyles } from './Styles';

const Landing = () => {
    const classes = useStyles();

    return (
        <div className={classes.main_body}  >
            <Header />
            <Body />
        </div>
    )
}

export default Landing
