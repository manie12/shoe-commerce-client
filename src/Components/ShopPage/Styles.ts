import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
    main_shop: {
        padding: "4em",
        [theme.breakpoints.down("xs")]: {
            padding: '1em'
        }
    },


    container_head: {

        height: "8em",
        backgroundColor: '#ffffff'
    },
    container_text_head: {
        fontWeight: "bold",
        textAlign: 'center',
        [theme.breakpoints.down("xs")]: {
            fontSize: "2em"
        }

    },
    container_text_para: {
        color: "#c4c4c4",
        textAlign: "center",
        [theme.breakpoints.down("xs")]: {
            fontSize: "1.5em"
        }
    },

    new_arrivals: {
        textAlign: "center",
        paddingTop: "2em",
        fontSize: "2em",
        fontWeight: 900,
        [theme.breakpoints.down("xs")]: {
            marginTop: "7em",
            marginBottom: "2em"
        }
    },

    image: {
        height: "17em",
        width: "17em",
        objectFit: "contain",
        [theme.breakpoints.down("xs")]: {
            width: "25em",
            height: "17em",
            backgroundImage: "cover",
            objectFit: "cover"
        }
    },
    container_image_grid: {
        position: "relative",


    },
    container_image: {
        position: "absolute",
        top: "16em",
        left: "6em"
    },
    container_image_typo: {
        fontWeight: 900,
        [theme.breakpoints.down("xs")]: {
            fontSize: "1.8em",
            textAlign: "center"
        }
    },
    container_image_dollar: {
        fontWeight: 900,
        color: "#FF4C4C",
        [theme.breakpoints.down("xs")]: {
            fontSize: "1.4em",
            textAlign: "center"
        }
    },
    cart_icon: {
        width: '68%',
        [theme.breakpoints.down("xs")]: {
            textAlign: 'center'
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
    topBar: {
        height: '1em'
    }

}))