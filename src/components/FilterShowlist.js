import React from "react";
import { connect } from "react-redux"; 

import '../static/css/index.css';
import { filterShow } from '../actions/actions';

const FilterShowlist = ({ filterShow }) => {

  const handleClick = e => {
      filterShow(e.target.id)
  };

  return (
    <div className="filterForm">
        <button onClick={handleClick} id="popular" > Popular </button>
        <button onClick={handleClick} id="on_the_air"> On The Air </button>
        <button onClick={handleClick} id="airing_today"> Airing today </button>
    </div>
  );
};

export default connect(null,  {filterShow})(FilterShowlist);