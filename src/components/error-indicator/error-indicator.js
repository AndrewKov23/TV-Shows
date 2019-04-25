import React from 'react';

import './error-indicator.css';
import imageNotFound from './no-shows.png';

const ErrorIndicator = () => {
  
  return (

      <img
      className="no-data-containerImg"
        src={imageNotFound}
        alt="Sorry, here is an error"/>

  )
}

export default ErrorIndicator; 