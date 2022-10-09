import {
    makeStyles
} from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => {
    return ({
        flex: {
            display: 'flex',
            flexDirection: 'column'
        },
        toolbar: {
            // [theme.breakpoints.down("md")]: {
            //     height: 150
            // }
        },
        appBar: {
            position: 'relative',

        },
        title: {
            marginLeft: theme.spacing(2),
            flex: 1,
        },
        modalRoot: {
            overflow: 'hidden'
        },
        details: {
            display: 'flex',
            width: '100%',
            flexDirection: 'column',
        },
        content: {
            flex: '1 0 auto',
        },
        cover: {
            width: '100%',
            height: 200
        },
        songImg: {
            width: '100%',
            height: '100%'
        },
        controlPanel: {
            display: 'flex',
            flexDirection: 'column',
            width: '100%',

        },
        controls: {
            display: 'flex',
            // alignItems: 'center',
            width: '100%',
            flexDirection: 'column',
            backgroundColor: theme.palette.primary.main,
            padding: 10

        },
        playIcon: {
            fontSize: 40,
            color: 'white',
            // [theme.breakpoints.down("md")]: {
            //     height: 150,
            //     fontSize: 120,

            // }
        },
        songDetails: {
            color: "white",
            padding: 20,
            display: 'flex',
            flexDirection: 'column'
        },
        songDesc: {
            flex: 1,
            padding: 20,
            display: 'flex',
            flexDirection: 'column'
        },
        imgcls: {
            width: 250,
            height: 250,
            margin: 20
        },
        detailCont: {
            display: 'flex',
            overflow: 'hidden',
            height: '100%',
            width: '100%'
        },
        slider:{
            color: "white",
            margin: 10,
            width: "90%",
        }
    })
});