import React from 'react';
import loadGif from '../assets/load.gif';

const Loader = () => {
  return (
    <div style={styles.loader}>
      <div className="spinner"></div>
      <img src={loadGif} alt="Loading..." />
      <p style={styles.loadingStyles}>Loading...</p>
    </div>
  );
};

const styles = {
  loader: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100vh',
  },
  loadingStyles : {
    color: 'black'
  }
};

export default Loader;