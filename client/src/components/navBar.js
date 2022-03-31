import React from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import { AppBar } from "@material-ui/core";
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: "flex",
        flexDirection: "flex-start"
    },
    navElement: {
        display: "flex",
    },
    toolBarContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%"
    },
    menu: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    link: {
        textDecoration: "none",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "10%"
    }
}));

export default function NavBar() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Toolbar>
                    <div className={classes.toolBarContainer}>
                        <div className={classes.menu}>
                            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="h6" className={classes.title}>
                                Student Management
                            </Typography>
                        </div>
                        <div className={classes.link}>
                            <NavLink to="/" style={{ textDecoration: 'none', fontWeight: 'bold' }}> HOME </NavLink>
                            <NavLink to="/course-page" style={{ textDecoration: 'none', fontWeight: 'bold' }}> COURSE </NavLink>
                        </div>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}