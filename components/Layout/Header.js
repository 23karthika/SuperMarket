import React,{useState} from 'react'
import {AppBar,Box, Divider, Drawer, IconButton, Toolbar, Typography} from '@mui/material'
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import {Link} from 'react-router-dom'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import '../../styles/HeaderStyles.css'
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
    const [mobileOpen, setMobileOpen] = useState(false)
  
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen)
    }

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{textAlign:'center'}}>
           <Typography color={'goldenrod'} variant='h6' component="div" sx={{flexGrow: 1 }}>
                <LocalGroceryStoreIcon />
                 KKL SuperMarket
            </Typography>
            <Divider />
               <ul className='mobile-navigation-menu'>
                 <li>
                    <Link to={'/'}>Home</Link>
                 </li>
                 <li>
                    <Link to={'/menu'}>Menu</Link>
                 </li>
                 <li>
                    <Link to={'/about'}>About</Link>
                 </li>
                 <li>
                    <Link to={'/contact'}>Contact</Link>
                 </li>
               </ul>
        </Box>
    )
  return (
    <>
      <Box sx={{marginBottom:-5}}>
        <AppBar component={'nav'} sx={{bgcolor:'black'}}>
            <Toolbar sx={{padding:0}}>
            <IconButton color='inherit' aria-label='open drawer' edge="start" sx={{mr: 2, display:{sm: "none"}}} onClick={handleDrawerToggle}>
                <MenuIcon />
            </IconButton>   
            <Typography color={'goldenrod'} variant='h6' component="div" sx={{flexGrow: 1, my:2 }}>
                <LocalGroceryStoreIcon />
                 KKL SuperMarket
            </Typography>
            <Box sx={{display:{xs:'none' , sm:"block"}}}>
               <ul className='navigation-menu'>
                 <li>
                    <Link to={'/'}>Home</Link>
                 </li>
                 <li>
                    <Link to={'/about'}>About</Link>
                 </li>
                 <li>
                    <Link to={'/contact'}>Contact</Link>
                 </li>
                 <li>
                    <Link to={'/login'}><AccountCircleIcon/></Link>
                 </li>
               </ul>
            </Box>
            </Toolbar>
        </AppBar>
        <Box component="nav">
             <Drawer variant='temporary' open={mobileOpen}
              onClose={handleDrawerToggle} sx={{display:{sx:'block',sm:'none'},"& .MuiDrawer-paper": {boxSizing:"border-box", width:"240px"}}}>
                {drawer}
             </Drawer>
        </Box>
        <Box sx={{p: 2}}>
            <Toolbar />
        </Box>

      </Box>
    </>
  )
}

export default Header
