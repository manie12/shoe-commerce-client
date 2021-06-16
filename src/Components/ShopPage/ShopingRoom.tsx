import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { useStyles } from './Styles';

const ShopingRoom = () => {
    const classes = useStyles();

    return (
        <div>
            <Grid container className={classes.container_image_grid}>
                <Grid item sm={12} >
                    <img className={classes.image} src="/img1.jpg" />
                </Grid>
                <Grid item sm={12} className={classes.container_image}><Typography style={{ textAlign: "center", backgroundColor: "black", color: "#fcfcfc" }}>NEW</Typography></Grid>
                <Grid item sm={12}><Typography>Bella Tops</Typography></Grid>
                <Grid><Typography>$487.65</Typography></Grid>
            </Grid>

        </div>
    )
}

export default ShopingRoom
