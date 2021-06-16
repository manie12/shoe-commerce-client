import React from 'react';
import { useHistory } from 'react-router-dom';
import { Grid, Typography, Button } from '@material-ui/core';
import { useStyles } from './Styles';


const Body = () => {
    const classes = useStyles();
    const history = useHistory();
    const handleClickShop = () => {
        history.push("/shop")
    }

    return (
        <div style={{ color: "#fcfcfc" }} >
            <Grid container  >
                <Grid item container sm={6} className={classes.body_Item} xs={12}>
                    <Grid item sm={12} className={classes.body_cent}>
                        <Typography className={classes.body_center_typo} >Trends of the Century</Typography>

                    </Grid>
                    <Grid item sm={12} className={classes.body_center}>
                        <Typography className={classes.body_center_casual} variant="h6" >CASUAL SHOES <br /> FOR MEN</Typography>

                    </Grid>
                    <Grid item sm={6} xs={6} className={classes.body_center}>
                        <Button variant="contained" className={classes.button1} onClick={handleClickShop}>
                            SHOP NOW
                        </Button>
                    </Grid>
                    <Grid item sm={6} xs={6} className={classes.body_center}>
                        <Button variant="contained" className={classes.button2}>
                            READ MORE
                        </Button>
                    </Grid>

                </Grid>
                <Grid item style={{ backgroundColor: "#2596BE" }} sm={6}><img className={classes.imageGrid} src="/img1.jpg" alt="shoes " /></Grid>
            </Grid >
        </div >
    )
}

export default Body;
