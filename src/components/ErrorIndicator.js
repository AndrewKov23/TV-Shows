import React from 'react';

import '../static/css/index.css';
import imageNotFound from '../static/no-shows.png';

const ErrorIndicator = () => {
  return (
    <img
    className="no-data-containerImg"
      src={imageNotFound}
      alt="Sorry, here is an error"/>
  )
}

export default ErrorIndicator; 