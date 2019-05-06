import React from 'react';
import Select from 'react-select';
import { connect } from "react-redux";
import { sortShow } from '../actions/actions'

const SortForm = ({ sortShow }) => {

const handleClickSort = (world) => {
    sortShow(world.value)
    console.log(world.title)
};

return(
    <div className="select-class">
    <label htmlFor="Sort">Sort</label>
    <Select
        className='ironSelect'
        name="Sort"
        onChange={handleClickSort}
        options={[
            {
            value: "first_air_date.desc",
            label: "The newest"
            }, {
            value: "first_air_date.asc",
            label: "The oldest"
            }, {
            value: "vote_average.desc",
            label: "Most voted"
            }, {
            value: "vote_average.asc",
            label: "Less voted"
            }, {
            value: "popularity.asc",
            label: "Less popular"
            }
        ]}/>
    </div>
)
}

export default connect(null, {sortShow})(SortForm);