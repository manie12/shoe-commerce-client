import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
    container_dix: {
        padding: "7em 8em",
        [theme.breakpoints.down("xs")]: {
            padding: "2em 1em"
        }
    },
    boutique_logo: {
        fontWeight: 900,
        fontSize: '1.7em',
        [theme.breakpoints.down("xs")]: {
            marginBottom: "2em"
        }
    },
    number_one: {
        letterSpacing: "0.1em",
        [theme.breakpoints.down("xs")]: {
            paddingBottom: "1.7em",
            fontSize: "1.3em"
        }
    },
    news_letter: {
        letterSpacing: "0.14em",
        fontWeight: 600,
        [theme.breakpoints.down("xs")]: {
            marginTop: "3em",
            letterSpacing: '.2em',
            fontSize: "1.3em"
        }

    },
    customer: {
        fontWeight: 600,
        marginTop: '3em',
        [theme.breakpoints.down("xs")]: {
            fontSize: "1.3em",
            marginBottom: "1em"
        }

    },
    policy_terms: {
        letterSpacing: "0.1em",
        marginTop: "3em"

    },


}))