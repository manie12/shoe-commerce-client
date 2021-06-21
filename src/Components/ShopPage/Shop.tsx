import React from 'react';
import Header from './Header';
import ShoppingRoom from './ShopingRoom';
import { useStyles } from './Styles';
import { postsProps } from '../../Graphql/FetchPost';



type load = {
    posts: postsProps[],
    loading: boolean,
    CartHandle: (postId: string) => void,
    postData: any
}


const Shop: React.FC<load> = ({ posts, loading, CartHandle, postData }) => {

    const classes = useStyles();

    return (
        <div className={classes.main_shop}>
            <Header />
            <ShoppingRoom posts={posts} loading={loading} CartHandle={CartHandle} postData={postData} />
        </div>
    )
}

export default Shop
