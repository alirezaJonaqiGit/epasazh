import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

//icons
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import DiamondIcon from '@mui/icons-material/Diamond';

export default function SimpleBottomNavigation() {
  const [value, setValue] = useState(0);

  return (
    <Box>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          console.log(event.target.value)
          setValue(newValue);
        }}
      >
        <BottomNavigationAction href="/" active  label="صفحه اصلی" icon={<HomeIcon />} />
        <BottomNavigationAction href="/login"   label="ورود" icon={<LoginIcon />} />
        <BottomNavigationAction href="/anywhere" label="anyWhere" icon={<DiamondIcon />} />
      </BottomNavigation>
    </Box>
  );
}


