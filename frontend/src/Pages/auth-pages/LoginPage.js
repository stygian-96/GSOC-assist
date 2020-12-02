import React from 'react'
import Navbar from '../../Components/Navbar'
import {Container,Grid, TextField,makeStyles, Button} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
        margin: "50px auto 20px auto",
        padding: "40px",
        backgroundColor: "#fafafa",
    },
    LoginButton: {
        width: "220px",
        padding: "5px 50px 5px 50px"
    }
}));

const Login = () => {
    const classes = useStyles();

    return (
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
                        <TextField
                            id="outlined-email-input"
                            label="Email"
                            type="email"
                            autoComplete="current-email"
                            variant="outlined"
                            size="small"
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            id="outlined-password-input"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            variant="outlined"
                            size="small"
                        />
                    </Grid>
                    <Grid item>
                        <Button variant="contained" color="primary" className={classes.LoginButton}>
                            Log In
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Login