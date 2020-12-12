import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    AppBar: {
        backgroundColor: "#003864"
    },
    menuButton: {
        marginRight: theme.spacing(2),
        padding: "10px 0px 10px 0px"
    },
    title: {
        flexGrow: 1,
    },
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
}));

const Navbar = ()  =>  {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.AppBar}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        GSOC-Assist
                    </Typography>
                    <div>
                        <Button aria-controls="simple-menu" aria-haspopup="true" color="inherit">
                            Year
                        </Button>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}


export default Navbar