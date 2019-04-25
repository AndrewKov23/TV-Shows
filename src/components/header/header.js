import React, {Component} from 'react';

import './header.css'
import Search from "../search";
import Filter from "../filter-showlist";
import SortForm from "../sort-form";

class Header extends Component {
  componentDidMount() {
  }
         
  render() {
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
}

export default Header;        