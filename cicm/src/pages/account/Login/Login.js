import { Card, CardContent, Grid, Typography, TextField , Button, Checkbox, FormControlLabel} from '@mui/material';
import React, { useState } from 'react';
import "./Login.css";
import { useCookies } from 'react-cookie';
import LoginRequest from 'api/LoginRequest';

const FormCard = (props) => {

    const [credentials, setCredentials] = useState({username: "", password: ""});

    const [cookies, setCookies] = useCookies([]);


    const handleCredentialsChange = (event) => {
        const {name, value} = event.target;
        setCredentials({
            ...credentials,
            [name]: value,
        });
    }
    

    return (
        <Card className="Card">
            <CardContent>
                <Typography className="Title">
                    Log In
                </Typography>
                <Grid container alignItems="center" direction="column" className="Container">
                        <Grid item>
                            <TextField
                                className="Field"
                                id="name-input"
                                name="username"
                                label="username"
                                type="text"
                                value={credentials.username}
                                onChange={handleCredentialsChange}
                            />
                        </Grid>
                        <Grid item>
                            <TextField  
                                className="Field"
                                id="password-input"
                                name="password"
                                label="password"
                                type="password"
                                value={credentials.password}
                                onChange={handleCredentialsChange}
                            />
                        </Grid>
                        <div className="buttonCheckContainer">
                            <FormControlLabel
                                className="buttonCheck"
                                control={
                                    <Checkbox 
                                    name="remember" 
                                    />
                                }
                                label="Remember me"
                            />
                            <Button className="Button" onClick={() => LoginRequest({...credentials}, setCookies)}> Log In </Button>
                        </div>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default FormCard;
