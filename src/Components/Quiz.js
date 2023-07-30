import React, { useState, useEffect } from 'react';
import Yellow from './images/topBlobQuiz.svg';
import Blue from './images/bottomBlobQuiz.svg';
import "./styles.css";

function Quiz(props) {
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple")
        .then(res => res.json())
        .then(data => setQuestions(data.results))
}, []);

    return(
        <section display={props.display} style={props.style} className="quiz">
            <img className="topBlob" src={Yellow} alt="yellow-blob" />
            <ul className="List">
            {questions.map((item, index) => {
                const allAnswers = item.incorrect_answers.concat(item.correct_answer);
                const randomAnswers = allAnswers
                    .map(value => ({ value, sort: Math.random() }))
                    .sort((a, b) => a.sort - b.sort)
                    .map(({ value }) => value);
                
                return (
                        <li className="question" key={index}>
                            <h3 className="question--title">{item.question.replace(/&quot;/g, '"').replace(/&rsquo;/g, "'").replace(/&#039;/g, "'")}</h3>
                            <ul className="question--answers">
                                {randomAnswers.map((answer, index) => {
                                    return (
                                        <li key={index}>
                                            <button className="question--answers-choice">{answer.replace(/&#039;/g, "'").replace(/&rsquo;/g, "'").replace(/&amp;/g, "&")}</button>
                                        </li>
                                    )
                                })}
                            </ul>
                        </li>
                )
            })}
            </ul>
            <button type="submit"></button>
            <img className="bottomBlob" src={Blue} alt="blue-blob" />
        </section>
    )
}

export default Quiz;