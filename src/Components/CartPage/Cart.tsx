import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ArrowBack, Delete } from '@material-ui/icons'
import { Grid, Typography, AppBar, Toolbar, Button } from '@material-ui/core';
import { useStyles } from './Styles';
import { postsProps } from '../../Graphql/FetchPost';

type load = {
    posts: postsProps[],
    loading: boolean,
    postData: any
}


const Cart: React.FC<load> = ({ posts, loading, postData }) => {
    const [count, setCount] = useState<number>(1);


    const classes = useStyles();
    const history = useHistory();

    const handleGoBack = () => {
        history.goBack();
    }

    const postItems = posts.find(pos => pos.id === postData)



    const handleCount = () => {
        setCount(prev => prev + 1)
    }
    const handleCountMinus = () => {
        setCount(prev => prev - 1)
    }
    const handleCheckout = () => {
        history.push("/paypal")
    }

    return (
        <div className={classes.image_div}>
            <Grid container className={classes.image_container}>
                <Grid item sm={2} xs={2}>
                    <ArrowBack onClick={handleGoBack} fontSize="large" />
                </Grid>
                <Grid item sm={10} xs={10}>
                    <Typography className={classes.container_shopping}>SHOPPING LIST</Typography>
                </Grid>

            </Grid>
            <Grid container >



                <Grid key={postItems?.id}>

                    <Grid item sm={12} xs={12}>
                        <img className={classes.container_image} src={postItems?.image} alt="imalt" />
                    </Grid>
                    <Grid item sm={6} xs={12}>

                        <Typography className={classes.product_name}>{postItems?.productname}</Typography>

                    </Grid>
                    <Grid item sm={6} xs={6}>
                        <Typography className={classes.product_prices}>{postItems?.prices}</Typography>

                    </Grid>
                    <Grid item sm={6} xs={6}>
                        <Delete />
                    </Grid>
                    <Grid item sm={6} xs={6}>
                        {count}
                    </Grid>

                    <Grid item container xs={12} sm={12}>
                        <Grid item xs={4} sm={4}>
                            <Button onClick={handleCount} fullWidth variant="contained" style={{ backgroundColor: "#FF4C4C", fontWeight: 900 }}>
                                +
                            </Button>
                        </Grid>
                        <Grid item xs={4} sm={4}>

                            <Button fullWidth variant="contained" color="default">
                                {postItems?.prices}
                            </Button>
                        </Grid>
                        <Grid item xs={4} sm={4}>
                            <Button onClick={handleCountMinus} fullWidth variant="contained" style={{ backgroundColor: "#FF4C4C", fontWeight: 900 }}>
                                -
                            </Button>
                        </Grid>
                    </Grid>


                </Grid>

            </Grid>

            <Grid container className={classes.total_container} >
                <Grid item container spacing={1} justify="center" sm={12} xs={12}>
                    <Typography className={classes.total}>TOTAL</Typography>
                    <Button className={classes.total_button} style={{ backgroundColor: "black", color: "#fcfcfc" }} variant="contained" >
                        $ 4467.45
                    </Button>
                </Grid>
            </Grid>

            <AppBar onClick={handleCheckout} position="fixed" color="primary" className={classes.appBar}>
                <Toolbar>
                    <Typography className={classes.checkout} variant="h6">
                        CHECKOUT
                    </Typography>
                </Toolbar>
            </AppBar>
        </div >
    )
}

export default Cart
