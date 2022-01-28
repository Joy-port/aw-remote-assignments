import React, {Component} from 'react';
import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';

class App extends Component{
    state = {
        players:[
            {
                name: "Guil",
                score: 0,
                id: 1
            },
            {
                name: "Treasure",
                score: 0,
                id: 2
            },
            {
                name: "Ashley",
                score: 0,
                id: 3
            },
            {
                name: "James",
                score: 0,
                id: 4
            }
        ] 
    }
    prevPlayerId = 4 ;
    removePlayer = (id) => {
        this.setState(prevState => {
            return {
                players: prevState.players.filter(player => player.id !== id)
            }
        })
    }
    handleScoreChange = (index, delta) => {
        this.setState( prevState => {
            const updatePlayers = [...prevState.players];
            const updatePlayer = {...updatePlayers[index]}
            
            updatePlayer.score += delta ;
            updatePlayers[index] = updatePlayer ;
            console.log(index, delta)

            return {
                players: updatePlayers
            }
        })
    }

    handleAddPlayer = (name) => {
        this.setState(prevState => {
            return {
                players: [
                    ...prevState.players,
                    {
                        name,
                        score: 0,
                        id: this.prevPlayerId += 1
                    }
                ]
            }
        })
    }
    handleAddPlayer2 = (name) => {
        let newPlayer ={
            name,
            score: 0,
            id: this.prevPlayerId += 1
        }
        this.setState(prevState => ({
            players: prevState.player.concat(newPlayer)
        }))
    }
    render() {
        return (
            <div className="scoreboard">
                <Header 
                    title="scoreboard"
                    players={this.state.players}
                    ></Header>

                {this.state.players.map((player, index) =>
                    <Player name={player.name} 
                        id={player.id} 
                        score={player.score} 
                        index={index}
                        key={player.id.toString()} 
                        changeScore={this.handleScoreChange}
                        removePlayer={this.removePlayer}>
                    </Player>
                )}
                <AddPlayerForm addPlayer={this.handleAddPlayer}></AddPlayerForm>
            </div>
        );
    }
}

export default App;
