import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import './styles/quizInstructions.css'


function QuizInstructions() {
  return (
    <Fragment>
        <Helmet><title>Quiz Instructions - Quiz Game</title></Helmet>
        <div  className='instructions-container'>
            <h1>How to play the game</h1>
            <p>Ensure you read this guide from start to finish</p>
            <ul>
                <li>The game has a duration of 10 minutes and ends as soon as your time elapses</li>
                <li>Each game consists of 15 questions.</li>
                <li>Every question contains 4 options</li>
                <ul>
                    <li>Select the option which best answers the question by clicking (or selecting) it.</li>
                </ul>
            </ul>
        </div>
        <div className="links-header-container">
            
            <span className='left'><Link to="/">No, take me back</Link></span>
            <span className='right'><Link to="/play/play">Okay, let's do this!</Link></span>
        </div>

    </Fragment>
    
  )
}

export default QuizInstructions
