import React, {Component} from "react"
import wimbledonChampions from "wimbledon-champions";
import Player from "../Player"

const Navbar = () => {

    const champions = wimbledonChampions();

    const players = champions.map((champion) =>
        new Player(champion)
    )

    const getPlayer = (gender) =>{
        const selectPlayer = [];
        console.log("gender", gender)

        for (var i = 0; i < players.length; i++) {
            const player = players[i]
            console.log("player ", player.gender)
            if (player.gender === gender)
                selectPlayer.push(player)
        }

        return selectPlayer
    }

    return (
        <div>
            <h1>Prosta aplikacja jednostronowa</h1>
            <ul className="header">
                <li><a href="/">Home</a></li>
                <li><a href="/gentelmens">GENTELMENS</a></li>
                <li><a href="/ladies">LADIES</a></li>
            </ul>
            <div className="content">
            </div>
        </div>
    )
};
export default Navbar