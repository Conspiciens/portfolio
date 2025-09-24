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
import { usePathname } from 'next/navigation';

import './globals.css';

export default function Navbar() {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [tabImg, setTabImage] = React.useState("sunset_starship.jpg"); 
    const [btnColor, setBtnColor] = React.useState("black"); 

    const pages = ['About Me', 'Projects'];

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    }; 

    const handleCloseNavMenu = () => {
        setAnchorElNav(null); 
    }; 

    return (
        <Appbar position="absolute" elevation={0} sx={{ 
                background: 'transparent', 
                backgroundImage: 'none',
                backgroundSize: 'cover',
                backgroundPosition: 'center 12.3%',
                boxShadow: 'none',
            }}>
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
                    <Link href='/' passHref>
                        <Button 
                            sx={{ my: 2, color: btnColor, display: 'block' }}
                            >
                            Home
                        </Button>
                    </Link> 
                    <Link href='/about' passHref>
                        <Button
                            key={'About us'}
                            sx={{ my: 2, color: btnColor, display: 'block' }}
                        >
                        About Me
                        </Button>
                    </Link>
                    <Link href='/projects' passHref>
                        <Button
                            sx={{ my: 2, color: btnColor, display: 'block'}}
                        >
                            Projects
                        </Button>
                    </Link>
                </Box>
            </Toolbar>
        </Appbar>
    )
}