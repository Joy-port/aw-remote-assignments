import React from "react";
import PropTypes from "prop-types";

const Counter = props =>
    <table className="counter">
        <tbody>
            <tr>
                <td>Attending:</td>
                <td>{ props.numAttending}</td>
            </tr>
            <tr>
                <td>Unconfirmed:</td>
                <td>{ props.numUnconfirmed }</td>
            </tr>
            <tr>
                <td>Total:</td>
                <td>{ props.totalInvited }</td>
            </tr>
        </tbody>
    </table>

Counter.propTypes ={
    numAttending: PropTypes.number.isRequired,
    numUnconfirmed: PropTypes.number.isRequired,
    totalInvited: PropTypes.number.isRequired,
}

export default Counter ;