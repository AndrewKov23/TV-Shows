import React from 'react';

import '../static/css/index.css';
import Search from "./Search";
import Filter from "./FilterShowlist";
import SortForm from "./SortForm";

const Header = () => {     
    return (
      <header className="header-container">
      <h1 className="header-caption">TV-shows</h1>
        <div className="filter-container">
          <div className="btn-container">
            <Filter />
          </div>
            <Search />
            <SortForm />
        </div>
      </header>
    );
}

export default Header;        