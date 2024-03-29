import {
    fade,
    makeStyles
} from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => ({
    toolbar: {
        // [theme.breakpoints.down('md')]: {
        //     marginTop: 10
        // }
    },

    account: {

        // [theme.breakpoints.down('md')]: {
        //     height: 100,
        //     width: 100
        // }
    },


    appBar: {

        // [theme.breakpoints.down('md')]: {
        //     height: 150,
        // }

    },
    logo: {
        width: 50,
        marginTop: 10,
        marginRight: 20,
        // [theme.breakpoints.down('md')]: {
        //     width: 100,
        //     // marginLeft:-20
        // },
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        // display: 'none',
        // [theme.breakpoints.up('sm')]: {
        //   display: 'block',
        // },
    },
    search: {

        position: 'relative',
        borderRadius: theme.shape.borderRadius,

        marginRight: theme.spacing(2),
        marginLeft: 0,
        // [theme.breakpoints.up('sm')]: {
        //     marginLeft: theme.spacing(3),
        // },
        // [theme.breakpoints.down('md')]: {
        //     marginRight: -20,

        // },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    searchIconImg: {
        // [theme.breakpoints.down('md')]: {

        //     fontSize: 50
        // }
    },
    inputRoot: {
        color: 'inherit',
        width:'100%',
     },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        // [theme.breakpoints.up('md')]: {
        //     width: '80ch',
        // },
        // [theme.breakpoints.down('md')]: {
        //     width: '100%',
        //     fontSize: 50,
        //     height: 90
        // },
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },

    },
    sectionDesktop: {
        display: 'none',
        // [theme.breakpoints.up('md')]: {
        //     display: 'flex',
        // },
    },
    sectionMobile: {
        display: 'flex',
        // [theme.breakpoints.up('md')]: {
        //     display: 'none',
        // },
    },
}));