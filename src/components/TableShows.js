import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../static/css/index.css';
import { filterShow } from '../actions/actions';
import ErrorIndicator from './ErrorIndicator';
import Spinner from './Spinner';
import ShowlistConstainer from '../containers/ShowlistRender';

class TableShows extends Component {
  componentDidMount() {
    this.props.filterShow('popular');
  }

  render() {
    
    if (this.props.state.loading) {
      return <Spinner />;
    }
    const data =
      this.props.articles.length === 0 ? (
        <ErrorIndicator />
      ) : (
        <ShowlistConstainer/>
      );

    return <div className="table-container">{data}</div>;
  }
}

function mapStateToProps(state) {
  return {
    articles: state.articles,
    state: state,
  };
}

export default connect(
  mapStateToProps,
  { filterShow },
)(TableShows);