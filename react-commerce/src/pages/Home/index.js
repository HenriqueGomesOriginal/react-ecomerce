import * as React from 'react';
import { useEffect, useState } from 'react';
import { getProductsList } from '../../services/api'
import {
    makeStyles,
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Grid,
    Box,
    Button
} from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import uuid from "react-uuid";

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    appBar: {
        boxShadow: 'none',
    },
    icons: {
        color: '#ffffff'
    },
    grow: {
        flexGrow: 1,
    },
    buyBox: {
        color: '#fafafa',
        backgroundColor: '#fafafa',
        '&:hover': {
            boxShadow: 'none',
            backgroundColor: '#fafafa',
        }
    },
    buyText: {
        position: 'absolute',
        top: '50%', 
        left: '50%', 
        transform: 'translate(-50%, -50%)',
        color: '#ffffff',
        textShadow: '1px 1px 2px black',
        fontSize: '26px'
    }
}))

export default () => {
    const classes = useStyles();
    const retArr = [];

    // useState const
    const [list, setList] = useState([]);
    const [buyButton, setBuyButton] = useState({ visible: false, id: 0 });
    const [countCart, setCountCart] = useState(0);

    const feedList = async () => {
        let aux = JSON.parse(await getProductsList());
        for (let i = 0; i < aux.length; i++) {
            retArr.push({
                id: aux[i].id,
                title: aux[i].title,
                price: aux[i].price,
                picture: aux[i].picture,
                description: aux[i].description,
                memory: aux[i].memory,
                brand: aux[i].brand,
                chipType: aux[i].chipType,
                quantity: aux[i].quantity
            })
        }
        setList(retArr);
    }

    useEffect(() => {
        feedList();
    }, [])

    const handleClick = () => {
        list.map((item, index) => {
            console.log(item);
        })
    }

    const clickItem = () => {
        setCountCart(countCart + 1);
    }

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
                        <Typography variant="h6">
                            {countCart > 0 ? countCart : ''}
                        </Typography>
                        <IconButton onClick={handleClick}>
                            <ShoppingCartIcon className={classes.icons} />
                        </IconButton>

                    </Toolbar>
                </AppBar>
            </Box>
            <br />
            <Box p={8} display='flex' >
                <Grid container spacing={4}>
                    {
                        list.map((item, index) => (
                            <Grid key={uuid()} item lg={2} md={3} sm={4} xs={11}>
                                <Box onClick={clickItem}
                                    onMouseEnter={() => { setBuyButton({ visible: true, id: index }); }}
                                    onMouseLeave={() => { setBuyButton(false); }}>
                                    <Button className={classes.buyBox}>
                                        <div style={{ position: "relative" }}>
                                            <img
                                                style={{ width: '100%' }}
                                                alt={item.title}
                                                src={item.picture}
                                            />
                                            <Typography variant="h6" className={classes.buyText}>
                                                    {buyButton.visible && buyButton.id == index ? 'Comprar' : ''}
                                            </Typography>
                                        </div>
                                    </Button>
                                    <Box>
                                        <Typography
                                            variant="body2"
                                            gutterBottom
                                            color='textPrimary'
                                            style={{ fontWeight: 600 }}
                                        >{item.title}</Typography>
                                    </Box>
                                </Box>
                            </Grid>
                        ))}
                </Grid>
            </Box>
        </div>
    );
}