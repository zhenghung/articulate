import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Route, Link } from "react-router-dom"
import '../CSSFiles/HomePage.css';

// NEED TO FIX THE HEIGHT

function HomePage() {

    return (
        <div>
            <h1>Articulate</h1>
            <div id="Rules">
                <h2 id="RuleTitle">Rules</h2>
                <div>
                    <div id="Description">
                        Describe the generated word(s) for your teammates to guess. You cannot spell or rhyme the word, nor can you say the word (obviously). Each teammate will take turns being the describer and guesser. Each word guessed correctly moves your board piece by 1 position. Move your board piece to the end position to win. The color of the box where your board piece is on determines the category of word generated.
                    </div>
                    <div className="Squares" style={{backgroundColor: "cyan"}}></div>
                    <div className="ColorDescription">Object (e.g., pen, paper, etc.)</div>
                    <div className="Squares" style={{backgroundColor: "orange"}}></div>
                    <div className="ColorDescription">Action (e.g., drinking, driving, etc.)</div>
                    <div className="Squares" style={{backgroundColor: "green"}}></div>
                    <div className="ColorDescription">Nature (e.g., tulip, rose, etc.)</div>
                    <div className="Squares" style={{backgroundColor: "blue"}}></div>
                    <div className="ColorDescription">World (e.g., The Louvre, Senegal, etc.)</div>
                    <div className="Squares" style={{backgroundColor: "yellow"}}></div>
                    <div className="ColorDescription">Person (e.g., Peter Griffin, Cain, etc.)</div>
                    <div className="Squares" style={{backgroundColor: "red"}}></div>
                    <div className="ColorDescription">Random (e.g., Chapter, Wedge, etc.)</div>
                    <div className="Squares" style={{backgroundColor: "white"}}></div>
                    <div className="ColorDescription">Everything (All categories)</div>
                </div>    
            </div>   
            <div id="HomeBtnsDiv">
                <button className="HomeBtns">Create Room</button>
                <button className="HomeBtns">Join Room</button> 
            </div>
        </div>
    );

}

export default HomePage