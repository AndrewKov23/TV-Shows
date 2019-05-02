import React from "react";

import '../static/css/index.css';
import { connect } from "react-redux"; 
import { searchShow } from "../actions/actions";

const Search = ({ searchShow }) => {
let input
    return (
        <div className="searchForm">
          <form
            onChange=
            {e => { 
              e.preventDefault()
                if (!input.value.trim()) {
                  return
                }
                searchShow(input.value)
              }}
            onSubmit={e => {
                e.preventDefault()
                if (!input.value.trim()) {
                  return
                }
                searchShow(input.value)
                input.value = ''
              }}
            >
              <input ref={node => (input = node)} />
              <button type="submit">Search Show</button>
          </form>
       </div>
    );
  }

export default connect(null, { searchShow })(Search);