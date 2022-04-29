import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import LoginIcon from '@mui/icons-material/Login';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
function Header() {
    return ( 
        <>
            <nav className="navbar header_navbar navbar-expand navbar-light bg-light">
              <div className="container-fluid">

                <SwipeableTemporaryDrawer />

                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                  <form className="d-flex w-100">
                    <input className="form-control header_searchInput me-2 w-100" type="search" placeholder="جستجو در پاساژ" aria-label="Search" />
                  </form>

                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="/login"><PersonIcon /></a>
                    </li>
                    <li className="nav-item">
                        
                    </li>   
                  </ul>

                </div>

              </div>
            </nav>
        </>
    );
}

export default Header;



function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState(false);

  const toggleDrawer = () => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState(!state);
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
          <a className="header_navbarLink d-block w-100" href='/login'><LoginIcon className="mx-2"  /> login </a>
          <a className="header_navbarLink d-block w-100" href='/'><HomeIcon  className="mx-2" /> home </a>
      </List>
    </Box>
  );

  return (
    <div>
        <Button onClick={toggleDrawer()}> <MenuIcon /> </Button>
          <SwipeableDrawer
            anchor={'left'}
            open={state}
            onClose={toggleDrawer()}
            onOpen={toggleDrawer()}
          >
            {list()}
        </SwipeableDrawer>

    </div>
  );
}
