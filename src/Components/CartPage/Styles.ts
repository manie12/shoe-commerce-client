import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
    image_div: {
        padding: "4em 8em ",
        [theme.breakpoints.down("xs")]: {
            padding: '1em'
        }
    },
    image_container: {
        padding: "3em 1em",
        [theme.breakpoints.down("xs")]: {
            padding: "0em 0em 2em 0em "
        }
    },
    container_shopping: {
        fontWeight: 900,
        fontSize: "2em",
        paddingLeft: '9em',
        color: "#FF4C4C",
        [theme.breakpoints.down('xs')]: {
            fontWeight: 700,
            fontSize: "1.5em",
            paddingLeft: "1em",
        }
    },
    container_image: {
        objectFit: 'cover',
        height: '15em',
        width: "23em",
        [theme.breakpoints.down("xs")]: {
            height: '100%',
            width: "100%"
        }
    },
    product_name: {
        fontWeight: 600,
        [theme.breakpoints.down("xs")]: {
            fontSize: "2em"
        }

    },
    product_prices: {
        color: "#FF4C4C",
        [theme.breakpoints.down("xs")]: {
            fontSize: "1.3em"
        }
    },

    appBar: {
        top: 'auto',
        bottom: 0,
        backgroundColor: '#2596BE',
    },
    checkout: {
        margin: "0em auto",
        fontWeight: 700,
        fontSize: '2em'
    },
    total: {
        fontWeight: 900,
        letterSpacing: "0.2em",
        paddingRight: '2em',
        [theme.breakpoints.down("xs")]: {
            fontSize: "1.4em"
        }

    },
    total_button: {
        [theme.breakpoints.down("xs")]: {
            fontSize: "1.2em"
        }
    },
    total_container: {
        [theme.breakpoints.down("xs")]: {
            paddingTop: "2em"
        }
    },


}))