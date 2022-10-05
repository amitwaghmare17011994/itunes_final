import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => {
    return ({
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
            width: 800,
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
            flexDirection:'column',
            backgroundColor: theme.palette.primary.main,
            padding:10
            
        },
        playIcon: {
            height: 38,
            width: 38,
            color: 'white'
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
            display: 'flex', maxHeight: '93vh', height: '93vh',
            overflow: 'hidden'
        }
    })
});
