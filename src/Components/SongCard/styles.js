import { makeStyles, useTheme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    img:{
        zIndex: 1,
        height: "inherit"
    },
    root: {
        display: 'flex',
        [theme.breakpoints.down('md')]: {

        // marginTop:40
    },
        cursor:'pointer',
     },
    details: {
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
         position: "relative",
        //  [theme.breakpoints.down('md')]: {

        // minHeight:900
        //  }
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: '100%',
        // height: 1800,
        minHeight:400
      },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
        justifyContent:'center',
    },
    playIcon: {
        
        // [theme.breakpoints.down('md')]: {
           
        //     fontSize: 100     
        // },
    },
}));