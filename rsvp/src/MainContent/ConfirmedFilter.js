import React from "react";
import PropTypes from "prop-types";

const ConfirmedFilter = props => 
    <label>
        <input 
            type="checkbox"
            onChange={props.toggleFilter}
            checked={!props.selectedAll}
            /> Hide those who haven't responded
    </label>

ConfirmedFilter.propTypes = {
    toggleFilter : PropTypes.func.isRequired,
    selectedAll : PropTypes.bool.isRequired,
}

export default ConfirmedFilter ;