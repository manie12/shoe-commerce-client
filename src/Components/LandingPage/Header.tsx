import React from 'react';
import { useHistory } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { useStyles } from './Styles';
const Header = () => {
    const classes = useStyles();
    const history = useHistory();
    const handleContact = () => {
        history.push("/contact")
    }
    const handleClickShop = () => {
        history.push("/shop")
    }


    return (
        <div >
            <AppBar className={classes.appBar} position="fixed" >
                <Toolbar >
                    <Grid container >
                        <Grid item className={classes.header} sm={7}><Typography variant="h5" >Boutique</Typography></Grid>
                        <Grid item className={classes.header} sm={1}><Typography onClick={handleClickShop} >Shop </Typography></Grid>
                        <Grid item className={classes.header} sm={1}><Typography>About Us</Typography></Grid>
                        <Grid item className={classes.header} sm={2}><Typography onClick={handleContact} >Customer Service</Typography></Grid>
                    </Grid>

                </Toolbar>

            </AppBar>
            <Grid className={classes.menu} container >
                <Grid item xs={6}><Typography className={classes.menu_typo} variant="h6">BOUTIQUE</Typography></Grid>
                <Grid item container justify="flex-end" xs={6}>
                    <Typography className={classes.menu_contacts}>Contact Us</Typography>
                </Grid>
            </Grid>


        </div>
    )
}

export default Header
