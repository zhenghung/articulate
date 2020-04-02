import React from 'react';
import '../../CSSFiles/PlayerListContainer.css';

function PlayerListContainer({gameState, setGameState, playerTeam, setPlayerTeam, socketId, broadcastGameState}) {

    /** Removes player from current team and add them to the selected team*/
    function chooseTeam(newTeam) {
        if (newTeam !== playerTeam) {
            setGameState(prevGameState => {
                let myPlayerObj = {};
                const {teams} = prevGameState;
                teams[playerTeam].forEach((player, index, object) => {
                    if (player.socketId === socketId) {
                        myPlayerObj = player;
                        object.splice(index, 1);
                    }
                });
                teams[newTeam].push(myPlayerObj);
                setPlayerTeam(newTeam);
                const newGameState = {...prevGameState, teams};
                broadcastGameState(newGameState);
                return newGameState;
            });
        }
    }

    /** Display a button to choose the team and lists its current members*/
    function renderTeam(i) {
        return (
            <div key={i} id={`team${i}`}
                 className={gameState.teams.length === 2 ?
                     'PlayerList-SectionDynamicStyle1' :
                     'PlayerList-SectionDynamicStyle2'}>
                <button type="button" className="PlayerList-TeamBtn"
                        onClick={() => chooseTeam(i)}>Team {i}</button>
                <div className={gameState.teams.length === 2 ?
                    'PlayerList-SubSectionDynamicStyle1' :
                    'PlayerList-SubSectionDynamicStyle2'}>
                    {gameState.teams[i].map((player, index) => {
                        return <p key={index}>{player.playerName}</p>;
                    })}
                </div>
            </div>
        );
    }

    return (
        <React.Fragment>
            <div className="PlayerList-PlayerList">
                {gameState.teams.map((team, index) => renderTeam(index))}
            </div>
        </React.Fragment>
    );
}

export default PlayerListContainer;