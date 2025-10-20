import React from 'react'
import { Button, Grid, Box, Typography } from '@mui/joy';
import { FlexBox, GridBox } from './CSS/Styled';
import Sidebar from './Components/Sidebar';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <FlexBox>
      <GridBox size="15">
        <Sidebar />
      </GridBox>
      <GridBox size="85">
        <Outlet />
      </GridBox>
    </FlexBox>
  )
}

export default App