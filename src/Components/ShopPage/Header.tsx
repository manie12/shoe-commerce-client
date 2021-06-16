import React from 'react';
import { Typography, Grid, Paper } from '@material-ui/core';
import { useStyles } from './Styles';

const Header = () => {
    const classes = useStyles();

    return (
        <div>
            <Grid container spacing={3} alignItems="center" className={classes.container_head}>


                <Grid container style={{ backgroundColor: "#fcfcfc" }} spacing={2} justify="center" item sm={4}>

                    <Grid item sm={12}>
                        <Typography className={classes.container_text_head}>FREE SHIPPING</Typography>

                    </Grid>
                    <Grid item sm={12}>
                        <Typography className={classes.container_text_para}>On all orders above $2000</Typography>

                    </Grid>


                </Grid>

                <Grid container style={{ backgroundColor: "#FF4C4C" }} spacing={2} justify="center" item sm={4}>

                    <Grid item sm={12}>
                        <Typography className={classes.container_text_head}>FREE RETURN</Typography>

                    </Grid>
                    <Grid item sm={12}>
                        <Typography className={classes.container_text_para}>On first exchange in 30 days</Typography>

                    </Grid>


                </Grid>

                <Grid container style={{ backgroundColor: "#fcfcfc" }} spacing={2} justify="center" item sm={4}>

                    <Grid item sm={12}>
                        <Typography className={classes.container_text_head}>FREE SHIPPING</Typography>

                    </Grid>
                    <Grid item sm={12}>
                        <Typography className={classes.container_text_para}>Register & Save upto 29% </Typography>

                    </Grid>


                </Grid>



            </Grid>
            <Grid container justify="center" >
                <Grid className={classes.new_arrivals} item sm={12}> NEW ARRIVALS</Grid>
            </Grid>
        </div>
    )
}

export default Header
