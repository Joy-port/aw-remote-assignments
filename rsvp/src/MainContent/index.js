import React from "react";
import PropTypes from "prop-types";
import GuestList from "./GuestList";
import Counter from "./Counter";
import ConfirmedFilter from "./ConfirmedFilter";

const MainContent = props => 
    <div className="main">
    <div>
        <h2>Invitees</h2>
        <ConfirmedFilter
            toggleFilter={props.toggleFilter}
            selectedAll={props.selectedAll}
        >
        </ConfirmedFilter>
    </div>
    <Counter 
        totalInvited={props.totalInvited}
        numAttending={props.numAttending}
        numUnconfirmed={props.numUnconfirmed}></Counter>
    <GuestList 
        guests={props.guests}
        toggleConfirmation={props.toggleConfirmation}
        toggleEditing={props.toggleEditing}
        editGuestName={props.editGuestName}
        selectedAll={props.selectedAll}
        removeGuest={props.removeGuest}
        pendingGuest={props.pendingGuest}
        ></GuestList>
    </div>

MainContent.propTypes = {
    toggleFilter : PropTypes.func.isRequired,
    selectedAll : PropTypes.bool.isRequired,
    totalInvited : PropTypes.number.isRequired,
    numAttending : PropTypes.number.isRequired, 
    numUnconfirmed : PropTypes.number.isRequired,
    guests : PropTypes.array.isRequired,
    toggleConfirmation : PropTypes.func.isRequired,
    toggleEditing : PropTypes.func.isRequired,
    editGuestName : PropTypes.func.isRequired,
    removeGuest : PropTypes.func.isRequired,
    pendingGuest : PropTypes.string.isRequired,
}
export default MainContent;
