import { makeStyles } from '@material-ui/core';
import Image from '../../Image/img1.jpg';
export const useStyles = makeStyles(theme => ({
    main_body: {
        padding: '5em',
        backgroundColor: '#2596BE',
        height: "100vh",
        [theme.breakpoints.down("xs")]: {
            padding: "1em",
            backgroundImage: `url(${Image})`,
            backgroundSize: "contain",
            height: "100vh",
            width: "100vw",
            backgroundBlendMode: "color-burn",
            backgroundColor: "#2596BE",
            backgroundRepeat: "no-repeat"

        }
    },
    appBar: {
        paddingLeft: "4em",
        paddingTop: '2em',
        backgroundColor: "#2596BE",
        [theme.breakpoints.down("xs")]: {
            display: "none"
        }

    },

    body_center: {
        marginBottom: "4em",
        [theme.breakpoints.down("xs")]: {
            marginBottom: "2em"
        }
    },
    body_cent: {
        marginBottom: "4em",
        [theme.breakpoints.down("xs")]: {
            marginBottom: "2em",
            marginTop: "-5em"
        }
    },
    body_center_typo: {
        letterSpacing: '.2em',
        [theme.breakpoints.down("xs")]: {
            letterSpacing: ".3em",
            marginTop: "8em"
        }
    },
    body_Item: {

        marginTop: "10em"

    },
    body_center_casual: {
        lineHeight: "1.7em",
        fontWeight: 900,
        fontSize: "2.4em",
        letterSpacing: ".3em",

        [theme.breakpoints.down("xs")]: {
            lineHeight: "2.5em",
            fontWeight: 700,

            fontSize: "2em",
            letterSpacing: ".1em"

        }
    },
    imageGrid: {
        height: "40em",
        width: "40em",
        mixBlendMode: "color-burn",
        objectFit: "contain",
        position: "absolute",
        top: "-.5em",
        [theme.breakpoints.down("xs")]: {
            display: "none"
        }
    },
    //mobile version

    header: {
        [theme.breakpoints.down("xs")]: {
            display: "none"
        }
    },
    menu: {
        [theme.breakpoints.up("sm")]: {
            display: "none"
        }
    },
    menu_typo: {
        fontWeight: 900,
        fontSize: "1.7em"
    },
    menu_contacts: {
        fontSize: "1.5em"
    },
    button1: {
        width: "90%",
        color: "#FFB4B4",
        backgroundColor: "#fcfcfc",

    },
    button2: {
        width: "90%",
        backgroundColor: "#10A6FB",
        color: "#FFB4B4"
    }

}))