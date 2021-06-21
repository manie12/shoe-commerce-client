import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
    paypal: {
        width: "100%",
        height: "100%",
        textAlign: 'center',
        marginTop: '20em',
        [theme.breakpoints.down("xs")]: {
            marginTop: "8em",

        }
    }


}))