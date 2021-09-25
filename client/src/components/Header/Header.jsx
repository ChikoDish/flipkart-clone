import React from 'react'
import {AppBar, Toolbar } from '@mui/material'
import {makeStyles} from '@mui/styles';
import SearchBar from './SearchBar';

const useStyles = makeStyles({
    header: {
        backgroundColor: '#2874f0',
        height: 55
    },
    logo:{
        width: 75,
    }
})

const Header = () => {
    const classes = useStyles();
    const logoUrl = `https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fk-plus_3b0baa.png`;
    const subUrl = ``;
    return (
        <div>
            <AppBar className={classes.header}>
                <Toolbar>
                    <img src={logoUrl} className={classes.logo} alt="logo" />
                    <SearchBar>
                        
                    </SearchBar>
                       
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header
