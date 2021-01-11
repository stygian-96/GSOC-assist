import React from 'react';
import Navbar from '../../Components/Navbar'
import {Container,Grid, makeStyles, Button} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
        margin: "50px auto 20px auto",
        padding: "40px",
        backgroundColor: "#fafafa",
    },
    LoginButton: {
        color: "#fff",
        background: "#000",
        width: "220px",
        padding: "5px 50px 5px 50px"
    },
    linkForLogin: {
        textDecoration: "none",
        color: "#fff"
    }
}));

const Login = () => {
    const classes = useStyles();

    return(
        <>
            <div>
                <Navbar />
                <Container maxWidth='xs' className={classes.root}>
                    <Grid container
                        justify="center"
                        alignItems="center"
                        direction="column"
                        spacing={3}
                    >
                        <Grid item>
                            <Button variant="contained" className={classes.LoginButton}>
                                <a className={classes.linkForLogin} href="http://localhost:8000/auth/github"> Log In with Github </a>
                            </Button>
                        </Grid>
                    </Grid>
                </Container>
            </div>      
        </>
    )
}

export default Login