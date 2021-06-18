import React from 'react';
import Header from './Header';
import ShoppingRoom from './ShopingRoom';
import { useStyles } from './Styles';
const Shop = () => {
    const classes = useStyles();

    return (
        <div className={classes.main_shop}>
            <Header />
            <ShoppingRoom />
        </div>
    )
}

export default Shop
