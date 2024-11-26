import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import DehazeIcon from '@mui/icons-material/Dehaze';
import Link from 'next/link';
const BaseMenu=()=> {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className='' >
        
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{color:'white'}}
      >
         <DehazeIcon/>
      </Button>
      <div > 
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
       
      >
        <MenuItem onClick={handleClose}><Link href='/'>Homepage</Link> </MenuItem>
        <MenuItem onClick={handleClose}><Link href="/Facts">Facts</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link href="/Tours/Tour">Tours</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link href="/About">About</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link href="/contactus/ContactUs">Contact</Link></MenuItem>
      </Menu>
    </div>
    </div>
  );
}
export default BaseMenu