import React from "react";
import PropTypes from "prop-types";
import GuestName from "./GuestName";

const Guest = props =>
    <li key={props.id}>
        <GuestName 
            isEditing={props.isEditing}
            handleNameEdits={ e => props.editGuestName(e.target.value)}>
            {props.name}
        </GuestName>
        <label>
            <input 
            type="checkbox" 
            checked ={props.isConfirmed} 
            onChange = {props.handleConfirmation}
            /> Confirmed
        </label>
        <button
            onClick={props.handleEditing} >{props.isEditing? 'save' : 'edit'}</button>
        <button
            onClick={props.removeGuest}>remove</button>
    </li>

Guest.propTypes = {
    name: PropTypes.string.isRequired,
    key: PropTypes.number.isRequired,
    isConfirmed: PropTypes.bool.isRequired,
    isEditing: PropTypes.bool.isRequired,
    handleConfirmation: PropTypes.func.isRequired,
    handleEditing: PropTypes.func.isRequired,
    editGuestName: PropTypes.func.isRequired,
    removeGuest: PropTypes.func.isRequired
}

export default Guest ;