import React, { Component } from 'react';
import { connect } from 'react-redux';

import ShowlistItem from '../components/ShowlistItem';
import Showlist from '../components/Showlist';
import Pagination from './Pagination'

class ShowlistRender extends Component {
  
  render() {
    let pagination = (
      <Pagination page={this.props.currentPage} 
                  totalPages={this.props.totalPages} 
                  className="pagination" />
    );

    const { articles, currentPage } = this.props;
    let showsLists = articles.map((show, i) => {
      const number = (currentPage - 1) * 20 + i + 1;
      return <ShowlistItem
        key={show.name}
        number={number}
        name={show.name}
        poster={
          <img
          src={
            show.poster_path === null
              ? 'https://megaserial.club/uploads/poster_none.png'
              : `https://image.tmdb.org/t/p/w185_and_h278_bestv2${show.poster_path}`
          }
          alt="Poster of show"
          className="posterOfShow"
        />
        }
        year={show.first_air_date}
        overview= {
          show.overview.length === 0
          ? 'No overview for this show. Maybe it will be later    \'¯\\_(ツ)_/¯'
          : show.overview}
        
      />
    });
    // console.log('showsLists ', showsLists);
    return(
      <Showlist showsLists={showsLists} pagination={pagination} />
    )
  }
}

function mapStateToProps(state) {
    return {
        articles: state.articles,
        state: state,
        currentPage: state.currentPage,
        totalPages: state.totalPages,
    };
}

const ShowlistConstainer = connect( mapStateToProps, null )(ShowlistRender)

export default ShowlistConstainer;