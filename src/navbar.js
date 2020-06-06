import React from 'react';
//import List from '@material-ui/core/List';
//import ListItem from '@material-ui/core/ListItem';
//import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > * + *':{
            marginLeft: theme.spacing(2)
        },
    },
}));

function NavBar() {

    const classes = useStyles();
    const preventDefault = (event) => event.preventDefault();

    return (
        <Typography className={classes.root}>

            <Link href="#" onClick={preventDefault}>
                Home
            </Link>

            <Link href="./App" color="inherit">
                Home
            </Link>

            <Link href="https://www.enye.tech/" target="_blank" rel="noopener" color="inherit">
                
                Enye
            </Link>
        </Typography>
    )
}

export default NavBar;
