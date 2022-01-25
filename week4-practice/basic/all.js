{/* data */}
const data = [
    {
        name: "Guil",
        score: 50
    },
    {
        name: "Treasure",
        score: 85
    },
    {
        name: "Ashley",
        score: 95
    },
    {
        name: "James",
        score: 80
    }
];

{/* testing */}
const Header = (props) => (
    <header>
        <h1>{props.title}</h1>
        <p>Players: {props.totalPlayers}</p>
    </header>
);

{/* component */}
const Player = (props) => {
    return (
        <div className="player">
            <button onClick={() =>props.removePlayer(props.id)}>X</button>
            <span className="player-name">
                {props.name}
            </span>
            <Counter/>
        </div>
    )
}

{/* class */}

class Counter extends React.Component {
    constructor() {
        super () 
        this.state ={
            score: 0
        }
    }
    incrementScore = () => {
        this.setState( prevState => ({
                score: prevState.score + 1
        })
        )
    }
    decrementScore = () => {
        this.setState( prevState => {
            return {
                score: prevState.score - 1
            }
        })
    }
    render() {
        return (
            <div className="counter">
                <button className="counter-action decrement" onClick={this.decrementScore}>-</button>
                <span className="counter-score">{this.state.score}</span>
                <button className="counter-action increment" onClick={this.incrementScore}>+</button>
            </div>
        )
    }
}



{/* const Counter = (props) => {
    return (
        <div className="counter">
            <button className="counter-action decrement">-</button>
            <span className="counter-score">{props.playerScore}</span>
            <button className="counter-action increment">+</button>
        </div>
    ) 
} */}

class App extends React.Component{
    state = {
        players:[
            {
                name: "Guil",
                id: 1
            },
            {
                name: "Treasure",
                id: 2
            },
            {
                name: "Ashley",
                id: 3
            },
            {
                name: "James",
                id: 4
            }
        ] 
    }
    removePlayer = (id) => {
        this.setState(prevState => {
            return {
                players: prevState.players.filter(player => player.id !== id)
            }
        })
    }
    render() {
        return (
            <div className="scoreboard">
                <Header title="scoreboard" totalPlayers={this.state.players.length}></Header>
                {this.state.players.map(player =>
                    <Player name={player.name} id={player.id} key={player.id.toString()} removePlayer={this.removePlayer}></Player>)}
            </div>
        ) ;
    }
}

{/* all put in side together */}
{/* const App = (props) => {
    return (
        <div className="scoreboard">
            <Header title="scoreboard" totalPlayers={props.initialPlayers.length}></Header>
            {props.initialPlayers.map(player =>
                <Player name={player.name} score={player.score} key={player.name}></Player>)}
        </div>
    ) ;
} */}


ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)