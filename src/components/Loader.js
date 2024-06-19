import React from 'react';
import { Box, CircularProgress } from '@mui/material';

const Loader = () => {
  return (
    <div>
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <CircularProgress />
      </Box>
    </div>
  );
};


export default Loader;