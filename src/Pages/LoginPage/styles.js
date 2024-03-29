import {
    makeStyles
} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    inputField: {
        // [theme.breakpoints.down("md")]: {
        //     fontSize: '140px !important'
        // }
    },
     
    img: {
        width: 106,
        // [theme.breakpoints.down("md")]: {
        //     width: 300,

        // }

    },
    container: {
        display: 'flex',
        alignItems: 'start',
        height: '100vh',
        backgroundColor: 'white',
     },
    banner: {
        flex: 3,
        height: '100%'
    },
    paper: {
        marginTop: theme.spacing(20),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingRight: 10,
        paddingLeft: 10,
        flex: 1
        // height:'100%'

    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),

    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        // [theme.breakpoints.down("md")]: {
        //     fontSize: 50
        // }
    },
    error: {
        color: 'red',
        // [theme.breakpoints.down("md")]: {
        //     fontSize: 40
        // }
    }
}));