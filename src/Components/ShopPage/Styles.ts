import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
    container_head: {
        height: "8em",
        backgroundColor: '#ffffff'
    },
    container_text_head: {
        fontWeight: "bold",
        textAlign: 'center'
    },
    container_text_para: {
        color: "#c4c4c4",
        textAlign: "center"
    },
    new_arrivals: {
        textAlign: "center",
        paddingTop: "2em",
        fontSize: "2em",
        fontWeight: 900
    },
    image: {
        height: "17em",
        width: "17em"
    },
    container_image_grid: {
        position: "relative"
    },
    container_image: {
        position: "absolute",
        top: "16em",
        left: "6em"
    }
}))