import React from 'react';
import { useHistory } from 'react-router-dom';
import { Grid, Typography, AppBar, Toolbar, Button, Badge } from '@material-ui/core';
import { useStyles } from './Styles';
import { AddShoppingCart, } from '@material-ui/icons';
import CircularProgress from '@material-ui/core/CircularProgress';
import { postsProps } from '../../Graphql/FetchPost';

type load = {
    posts: postsProps[],
    loading: boolean,
    CartHandle: (postId: string) => void,
    postData: any
}

const ShopingRoom: React.FC<load> = ({ posts, loading, CartHandle, postData }) => {

    // const [singlePost, setSinglePost] = useState<string>();
    const history = useHistory();
    const classes = useStyles();

    const handleClickCart = () => {
        history.push("/cart")
    }
    //fetching single post
    // const handlePost = (postId: string) => {
    //     setSinglePost(postId)
    // }





    if (!posts) {
        return <p>page aempty</p>

    }
    if (loading) {
        return <p><CircularProgress /></p>
    }
    console.log(posts)
    return (
        <div>
            <Grid container item spacing={1} className={classes.container_image_grid}>

                {
                    posts.map((post) => (

                        <Grid container item sm={4} xs={12}>
                            <Grid item sm={12} xs={12} >
                                <img className={classes.image} src={post?.image} alt="altimg" />
                            </Grid>
                            <Grid item sm={6} xs={6} ><Typography className={classes.container_image_typo}>{post?.productname}</Typography></Grid>
                            <Grid item sm={6} xs={6}><Typography className={classes.container_image_dollar} >{post?.prices}</Typography></Grid>
                            <Grid item sm={12} xs={12}    >
                                <Button onClick={() => CartHandle(post.id!)} className={classes.cart_icon} variant="contained" color="default">
                                    ADD TO CART
                                </Button>   </Grid>
                        </Grid>


                    ))
                }


            </Grid>

            <AppBar className={classes.appBar} position="fixed" color="primary">
                <Toolbar>
                    <Badge badgeContent={1} color="error">
                        <AddShoppingCart onClick={handleClickCart} fontSize="large" />

                    </Badge>
                </Toolbar>
            </AppBar>

        </div >
    )
}

export default ShopingRoom
