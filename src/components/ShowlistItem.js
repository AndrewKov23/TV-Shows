import React from 'react';
import { connect } from 'react-redux';

const ShowlistItem = ({ key, number, name, poster, 
    year, overview }) => {
    return (
        <tr key={key}>
            <td>{number}</td>
            <td>{poster}</td>
            <td>{name}</td>
            <td>{year}</td>
            <td>{overview}</td>
        </tr>
    );
};

function mapStateToProps(state) {
    return {
        articles: state.articles,
        state: state,
        currentPage: state.currentPage,
        totalPages: state.totalPages,
    };
}

export default connect( mapStateToProps, null )(ShowlistItem);