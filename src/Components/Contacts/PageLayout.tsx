import React from 'react';
import { useHistory } from 'react-router-dom';
import { Grid, Typography, TextField } from '@material-ui/core';
import { useStyles } from './Styles';
import { Facebook, Instagram, Send, Twitter, WhatsApp, ArrowBack } from '@material-ui/icons';

const PageLayout = () => {
    const classes = useStyles();
    const history = useHistory();

    const handleClickArrow = () => {
        history.goBack();
    }
    return (
        <div className={classes.container_dix}>
            <Grid container>
                <Grid item container sm={6} xs={12}>
                    <Grid sm={1} xs={1}><ArrowBack onClick={handleClickArrow} /> </Grid>
                    <Grid item sm={11} xs={11}>
                        <Typography className={classes.boutique_logo}>BOUTIQUE</Typography>
                    </Grid>
                    <Grid item className={classes.number_one} sm={12} xs={12}>
                        The number one online store for shoes in the world
                    </Grid>
                    <Grid item className={classes.number_one} sm={12} xs={12}>
                        Catch us on Social Platforms
                    </Grid>
                    <Grid item container sm={12} xs={12}>
                        <Grid item sm={3} xs={3} >
                            <Facebook style={{ color: "blue" }} fontSize="large" />
                        </Grid>
                        <Grid item sm={3} xs={3}>
                            <Twitter style={{ color: "blue" }} fontSize="large" />
                        </Grid>
                        <Grid item sm={3} xs={3}>
                            <WhatsApp style={{ color: "green" }} fontSize="large" />
                        </Grid>
                        <Grid item sm={3} xs={3}>
                            <Instagram style={{ color: "purple" }} fontSize="large" />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item container spacing={1} sm={6} xs={12}>
                    <Grid item sm={12}>
                        <Typography className={classes.news_letter}>NEWS LETTER</Typography>
                    </Grid>
                    <Grid item className={classes.number_one} sm={12}>
                        Subcribe to our mail ,youll get our latest news
                    </Grid>
                    <Grid item sm={10} xs={10}>
                        <TextField
                            id=""
                            label=" Email Address"
                            variant="filled"
                            fullWidth
                        />
                    </Grid>
                    <Grid item sm={2} xs={2}>
                        <Send fontSize="large" />
                    </Grid>
                    <Grid container item sm={12} xs={12}>
                        <Grid item container sm={6} xs={12}>
                            <Grid item sm={12} xs={12}>
                                <Typography className={classes.customer} >CUSTOMER SERVICES</Typography>

                            </Grid>
                            <Grid item sm={12} xs={12}>
                                <Typography className={classes.policy_terms}>Delevery & Returns</Typography>
                            </Grid>
                            <Grid item sm={12} xs={12}>
                                <Typography className={classes.policy_terms}>Warranty </Typography>
                            </Grid>
                            <Grid item sm={12} xs={12}>
                                <Typography className={classes.policy_terms}>Terms & Conditions </Typography>
                            </Grid>
                            <Grid item sm={12} xs={12}>
                                <Typography className={classes.policy_terms}>Privacy Policy </Typography>
                            </Grid>

                        </Grid>
                        <Grid item container sm={6} xs={12}>
                            <Grid item sm={12} xs={12} >
                                <Typography className={classes.customer}>
                                    CONTACT US
                                </Typography>

                            </Grid>
                            <Grid item sm={12} xs={12}>
                                <Typography>PHONE</Typography>
                                <Typography>+254703121351</Typography>
                            </Grid>
                            <Grid item sm={12} xs={12}>
                                <Typography>Email</Typography>
                                <Typography>boutique@gmail.com</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default PageLayout
