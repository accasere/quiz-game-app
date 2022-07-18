import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet'
import "./styles/play.css"
import Questions from "./Questions"

function Play() {

    const numberOfQuestions = 15;

    const [questions, setQuestions] = useState([])
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [isFinished, setIsFinished] = useState(false);
    
    useEffect(() => {
        fetch('http://localhost:4000/questions')
        .then(response => response.json())
        .then(json => {
            setQuestions(json) 
        })
        }, []);

          

       
    return (
        <>
            <Helmet><title>Quiz Page!</title></Helmet>
            <Questions questions={questions}/>
           
        
        </>
        
        
        
    )
}

export default Play;