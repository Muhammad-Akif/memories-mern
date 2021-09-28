import React, { useState, useEffect } from 'react'
import { AppBar, Typography, Toolbar, Avatar, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import logoText from '../../images/logoText.png';
import useStyles from './styles';
import { useLocation, useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode'

function Navbar() {
    const classes = useStyles();
    const location = useLocation()
    const dispatch = useDispatch();
    const history = useHistory()
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")))

    const logout = () => {
        dispatch({ type: "LOGOUT" })
        history.push("/");
        setUser(null)
    }

    useEffect(() => {
        const token = user?.token;
        if (token) {
            const decodedToken = decode(token)

            if (decodedToken.exp * 1000 < new Date().getTime()) {
                logout();
            }
        }
        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);

    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <Link to="/" className={classes.brandContainer}>
                <img src={logoText} alt="icon" height="45px" />
                <img className={classes.image} src={logo} alt="icon" height="40px" />
            </Link>
            <Toolbar className={classes.toolbar}>
                {user ? (
                    <div className={classes.profile}>
                        <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                        <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
                        <Button className={classes.logout} variant="contained" onClick={logout} color="secondary">logout</Button>
                    </div>

                ) : (
                    <Button variant="contained" component={Link} to="/auth" color="primary">Sign In</Button>
                )}
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;
