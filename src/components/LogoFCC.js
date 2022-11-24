import React from 'react';
import fccLogo from '../img/freecodecamp-logo.png';
import '../styles/LogoFCC.css';

const LogoFCC = () => {
  return (
    <div className="fcc-logo-container">
        <img 
          className="fcc-logo"
          src={fccLogo}
          alt="Logo FreeCodeCamp"
        />
      </div>
  );
};

export default LogoFCC;