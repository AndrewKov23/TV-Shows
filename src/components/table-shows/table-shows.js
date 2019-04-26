import React, { Component } from 'react';
import { connect } from 'react-redux';

import './table-shows.css';
import { filterShow } from '../../actions/actions';
import ErrorIndicator from '../error-indicator';
import Spinner from '../spinner';
import Pagination from '../pagination';

import ShowList from '../showlist';

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
        <ShowList/>
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

// const Shows = ({ articles, currentPage, totalPages }) => {
//   const pagination = (
//     <Pagination page={currentPage} totalPages={totalPages} className="pagination" />
//   );

// // const numberId = (page - 1) * onPage + i + 1
//   return (
//     <React.Fragment>
//       {pagination}
//       <table className="table-shows">
//         <thead>
//           <tr>
//             <th>№</th>
//             <th>Poster</th>
//             <th>Show name</th>
//             <th>Realese Date</th>
//             <th>Overview</th>
//           </tr>
//         </thead>
//         <tbody>
//           {articles.map((el, index) => (
//             <tr key={el.id}>
//               <td>{index + 1}</td>
//               <td>
//                 <img
//                   src={
//                     el.poster_path === null
//                       ? 'https://megaserial.club/uploads/poster_none.png'
//                       : `https://image.tmdb.org/t/p/w185_and_h278_bestv2${el.poster_path}`
//                   }
//                   alt="Poster of show"
//                   className="posterOfShow"
//                 />
//               </td>
//               <td>
//                 <strong>{el.name}</strong>
//               </td>
//               <td>{el.first_air_date}</td>
//               <td>
//                 {el.overview.length === 0
//                   ? 'No overview for this show. Maybe it will be later    ¯\\_(ツ)_/¯'
//                   : el.overview}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       {pagination}
//     </React.Fragment>
//   );
// };
