import React from 'react';
import axios from 'axios';
import './App.css';
import Players from './Players';

class App extends React.Component {
  // set original state 
  state = {
    players: []
  };

  componentDidMount() {
    //axios call
    //set new state
    axios
      .get('http://localhost:5000/api/players')
      .then(res => {
        this.setState({
          players: res.data
        });
        console.log("axios RES",res.data);
      })
      .catch(err => console.log("axios err",err));
  }




  render() {
    console.log("Rendering");

    return (
      <div className="App">
        <h1>Women's World Cup Search Ranks</h1>
        
      
        <div className="players">
        {/*return player card with state set*/}
        <Players players={this.state.players}/>
        </div>
      </div>
    );
  }
}

export default App;