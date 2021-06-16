import React from 'react';
import { Typography, Grid } from '@material-ui/core';

const Header = () => {
    return (
        <div>
            <Grid container>
                <Grid item sm={4}>
                    <Typography>FREE SHIPPING</Typography>
                    <Typography>On all orders above $2000</Typography>
                </Grid>
                <Grid item sm={4}>
                    <Typography>FREE RETURN</Typography>
                    <Typography>On first exchange in 30 days</Typography>
                </Grid>
                <Grid item sm={12}>
                    <Typography>FREE SHIPPING</Typography>
                    <Typography>REgister and save upto $29</Typography>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item sm={12}>
                    <Typography>ARRIVALS</Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default Header
