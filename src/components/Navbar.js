import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import '../assets/scss/Navbar.css'


function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

 
  return (
    <>
      <AppBar position="static"
      className="navBg"
      >
      <Container maxWidth="xl">
        <Toolbar >
          {/* PC View */}
          <Box sx={{ flexGrow: 2, display: { xs: 'none', md: 'flex' } }}>
          <Typography
            variant="h3"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
            className="logo"
          >
            <Link to='/'> 
            <h2>
                <span>R</span>OO
                <span>S</span>TUDIO
            </h2>
            </Link>
          
          </Typography>
          </Box>
          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
            <div className="navLink">
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Link to='/' >Home</Link>
              </Button>
            </div>
            <div className="navLink">
                <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                    <Link to='/gallery' >Gallery</Link>
              </Button>
            </div>
            <div className="navLink">
                <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
                >
                    <Link to='/products' >Products</Link>
                </Button>
            </div>
            <div className="navLink">
                <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
                >
                    <Link to='/aboutus' >About Us</Link>
                </Button>
            </div>
            <div className="navLink">
                <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
                >
                    <Link to='/contactus' >Contact US</Link>
                </Button>
            </div>
          </Box>  
          {/* mobile view */}

          <Box sx={{ flexGrow: 2, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              className='menu'
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
                <div className="navLink">
                    <MenuItem  onClick={handleCloseNavMenu}>   
                        <Button
                        onClick={handleCloseNavMenu}
                        sx={{ my: 0, color: 'white', display: 'block' }}
                        >
                            <Link to='/' >Home</Link>
                        </Button>
                    </MenuItem>
                </div>
                <div className="navLink">
                    <MenuItem  onClick={handleCloseNavMenu}>
                        <Button
                        onClick={handleCloseNavMenu}
                        sx={{ my: 0, color: 'white', display: 'block' }}
                        >
                            <Link to='/gallery' >Gallery</Link>
                        </Button>
                    </MenuItem>
                </div>
                <div className="navLink">
                    <MenuItem  onClick={handleCloseNavMenu}>
                        <Button
                        onClick={handleCloseNavMenu}
                        sx={{ my: 0, color: 'white', display: 'block' }}
                        >
                            <Link to='/products' >Products</Link>
                        </Button>
                    </MenuItem>
                </div>
                <div className="navLink">
                    <MenuItem  onClick={handleCloseNavMenu}>
                        <Button
                        onClick={handleCloseNavMenu}
                        sx={{ my: 0, color: 'white', display: 'block' }}
                        >
                        <Link to='/aboutus' >About Us</Link>
                        </Button>
                    </MenuItem>
                </div>
                <div className="navLink">
                    <MenuItem  onClick={handleCloseNavMenu}>
                        <Button
                        onClick={handleCloseNavMenu}
                        sx={{ my: 0, color: 'white', display: 'block' }}
                        >
                        <Link to='/contactus' >Contact Us</Link>
                        </Button>
                    </MenuItem>
                </div>  
                
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
            <div className="logo2">

              <Link to='/'> 
                <h2>
                    <span>R</span>OO
                    <span>S</span>TUDIO
                </h2>
              </Link>
            </div>
          </Box>
         
             
        </Toolbar>
      </Container>
    </AppBar>
    </>
  )
}

export default Navbar
