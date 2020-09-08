//pass props for each player data to display
//map here. import to App
//name, country, searches,id

import React from 'react';

function Players(props){

return(
<div>
{props.players.map(players =>(
<div key ={players.id} className ="player-card">
<h2>Name: {players.name}</h2>
<h3>Country: {players.country}</h3>
<h4>Search Rank: {players.searches}</h4>
</div>

))}
</div>

)

}

export default Players;