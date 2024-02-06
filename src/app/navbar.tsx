"use client";

import * as React from 'react'; 
import Appbar from '@mui/material/AppBar'; 
import Box from '@mui/material/Box'; 
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link'; 
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import './globals.css';

import AboutMe from './about/page'; 

export default function Navbar() {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null); 

    const pages = ['About Me', 'Projects'];

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    }; 

    const handleCloseNavMenu = () => {
        setAnchorElNav(null); 
    }; 

    return (
        <Appbar position="static">
            <Toolbar>
                <IconButton 
                    size="large" 
                    edge="start"
                    color="inherit"
                    aria-label='Menu'
                    sx={{ mr: 2 }}
                >
                <MenuIcon/> 
                </IconButton>
                <Box sx={{
                    flexGrow: 1, 
                    display: {
                        sx: 'flex', 
                        md: 'none'
                    }
                }}>
                <Menu 
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                        vertical: 'bottom', 
                        horizontal: 'left'
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top', 
                        horizontal: 'left'
                    }}
                    open={Boolean(anchorElNav)} 
                    onClose={handleCloseNavMenu}
                    sx = {{
                        display: {
                            xs: 'block', 
                            md: 'none' 
                        }, 
                    }}
                    > 
                </Menu>
                </Box> 
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    <Button
                        key={'About us'}
                        onClick={handleCloseNavMenu}
                        sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                        About Me
                    </Button>
                    <Button
                        href='/about'
                        onClick={() => {
                            console.info("hello")}}
                        sx={{ my: 2, color: 'white', display: 'block'}}
                    >
                        Projects
                    </Button>
                </Box>
        </Toolbar>
    </Appbar>
    )
}