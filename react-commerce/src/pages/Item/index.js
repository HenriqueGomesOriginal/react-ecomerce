import * as React from 'react';
import { getProductsList } from '../../services/api'
import {
    makeStyles,
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Grid,
    Box,
} from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    appBar: {
        boxShadow: 'none',
    },
    icons: {
        paddingRight: theme.spacing(3),
        color: '#ffffff'
    },
    grow: {
        flexGrow: 1,
    },
}))

export default () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Box display='flex'>
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" />
                        <Typography variant="h6" className={classes.title}>
                            Marketplace
                    </Typography>
                        <div className={classes.grow} />
                        <IconButton onClick={handleClick}>
                            <ShoppingCartIcon className={classes.icons} />
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </Box>
            <br />
        </div>
    );
}