import React from 'react';
// import loadGif from '../assets/load.gif';
import { Box, CircularProgress } from '@mui/material';

const Loader = () => {
  return (
    <div>
      {/* <div className="spinner"></div>
      <img src={loadGif} alt="Loading..." /> */}
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <CircularProgress />
      </Box>
    </div>
  );
};

// const styles = {
//   loader: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     height: '100vh',
//   },
//   loadingStyles : {
//     color: 'black'
//   }
// };

export default Loader;