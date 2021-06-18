import React from 'react';
import { useHistory } from 'react-router-dom';
import { Grid, Typography, AppBar, Toolbar, Button, Badge } from '@material-ui/core';
import { useStyles } from './Styles';
import { AddShoppingCart, } from '@material-ui/icons';

const ShopingRoom = () => {
    const history = useHistory();
    const classes = useStyles();
    const handleClickCart = () => {
        history.push("/cart")
    }
    return (
        <div>
            <Grid container item spacing={1} className={classes.container_image_grid}>
                <Grid container item sm={4} xs={12}>
                    <Grid item sm={12} xs={12} >
                        <img className={classes.image} src="/img1.jpg" alt="shoes" />
                    </Grid>
                    <Grid item sm={6} xs={6} ><Typography className={classes.container_image_typo}>Bella tops</Typography></Grid>
                    <Grid item sm={6} xs={6}><Typography className={classes.container_image_dollar} >$487.65</Typography></Grid>
                    <Grid item sm={12} xs={12}    ><Button className={classes.cart_icon} variant="contained" color="default">
                        ADD TO CART
                    </Button>   </Grid>
                </Grid>

            </Grid>

            <AppBar className={classes.appBar} position="fixed" color="primary">
                <Toolbar>
                    <Badge badgeContent={5} color="error">
                        <AddShoppingCart onClick={handleClickCart} fontSize="large" />

                    </Badge>
                </Toolbar>
            </AppBar>

        </div >
    )
}

export default ShopingRoom
