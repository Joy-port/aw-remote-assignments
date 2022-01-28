import React, { Component } from "react";

import Header from "./Header";
import MainContent from "./MainContent";

class App extends Component {
  state = {
    selectedAll: true,
    pendingGuest:'',
    guests: [
      {
        name: 'Tear',
        isConfirmed: true,
        isEditing: false,
        id: 1
      },
      {
        name: 'John',
        isConfirmed: false,
        isEditing: false,
        id: 2
      },
      {
        name: 'Joey',
        isConfirmed: true,
        isEditing: false,
        id: 3
      },
    ]
  }
  lastGuestId = 0
  toggleFilter = () => {
    this.setState({
      selectedAll: !this.state.selectedAll
    })
  }
  getGuestId=() => {
    const id = this.lastGuestId
    this.lastGuestId += 1
    return id
  }
  removeGuest = content => 
    this.setState({
      guests: this.state.guests.filter(guest => content !== guest.id)
    })

  toggleGuestProperty = (property, content) => 
    this.setState({
      guests: this.state.guests.map((guest) => {
        if (guest.id === content) {
          return {
            ...guest,
            [property]: !guest[property]
          };
        }
        return guest
      })
    })
  editGuestName = (name, content) => 
    this.setState({
      guests: this.state.guests.map((guest) => {
        if (guest.id === content) {
          return {
            ...guest,
            name
          };
        }
        return guest
      })
    })
  
  toggleConfirmation = content =>
    this.toggleGuestProperty('isConfirmed', content )
  toggleEditing = content =>
    this.toggleGuestProperty('isEditing', content )
  handleNameInput = e => 
    this.setState({ pendingGuest: e.target.value })
  submitNewGuest = e => {
    e.preventDefault();
    const id = this.getGuestId();
    this.setState({
        guests: [
          {
            name: this.state.pendingGuest,
            isConfirmed: false,
            isEditing: false,
            id
          },
          ...this.state.guests
        ],
        pendingGuest: ''
      }
    )
  }

  getTotalInvited = () => this.state.guests.length ;
  getAttending = () => 
    this.state.guests.reduce(
      (total, guest) => guest.isConfirmed ? total + 1 : total , 
    0)
  
  render() {
    const totalInvited = this.getTotalInvited()
    const numAttending = this.getAttending()
    const numUnconfirmed = totalInvited - numAttending
    return (
      <div className="App">
        <Header
          submitNewGuest={this.submitNewGuest}
          handleNameInput={this.handleNameInput}
          pendingGuest={this.state.pendingGuest}
          ></Header>
        <MainContent
          toggleFilter={this.toggleFilter}
          selectedAll={this.state.selectedAll}
          totalInvited={totalInvited}
          numAttending={numAttending}
          numUnconfirmed={numUnconfirmed}
          guests={this.state.guests}
          toggleConfirmation={this.toggleConfirmation}
          toggleEditing={this.toggleEditing}
          editGuestName={this.editGuestName}
          removeGuest={this.removeGuest}
          pendingGuest={this.state.pendingGuest}
        ></MainContent>
      </div>
    )
  }
}

export default App;
