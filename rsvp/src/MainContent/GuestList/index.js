import React from "react";
import PropTypes from "prop-types";
import Guest from "./Guest";
import PendingGuest from "./PendingGuest";

const GuestList = props => 
    <ul>
        <PendingGuest name={props.pendingGuest}></PendingGuest>
        { props.guests
            .filter(guest =>  props.selectedAll || guest.isConfirmed )
            .map((guest) => 
                <Guest 
                    name={guest.name}
                    key={guest.id}
                    isConfirmed={guest.isConfirmed}
                    isEditing={guest.isEditing}
                    handleConfirmation={() => props.toggleConfirmation(guest.id)}
                    handleEditing={() => props.toggleEditing(guest.id)}
                    editGuestName={text => props.editGuestName(text, guest.id)}
                    removeGuest={() => props.removeGuest(guest.id)}

                ></Guest>
            )
        }
    </ul>

GuestList.propTypes = {
    guests: PropTypes.array.isRequired,
    toggleConfirmation: PropTypes.func.isRequired,
    toggleEditing: PropTypes.func.isRequired,
    editGuestName: PropTypes.func.isRequired,
    selectedAll: PropTypes.bool.isRequired,
    removeGuest: PropTypes.func.isRequired,
    pendingGuest: PropTypes.string.isRequired,
}

export default GuestList;