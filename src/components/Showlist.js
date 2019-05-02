import React from 'react';
// import ShowlistRender from '../containers/ShowlistRender';

const Showlist = ({showsLists, pagination}) => {
  return(
    <React.Fragment>
      {pagination}
      <table className="table-shows">
        <thead>
          <tr>
            <th>№</th>
            <th>Poster</th>
            <th>Show name</th>
            <th>Realese Date</th>
            <th>Overview</th>
          </tr>
        </thead>
        <tbody>
          {showsLists}
        </tbody>
      </table>
      {pagination}
    </React.Fragment>
  )
} 

export default Showlist;