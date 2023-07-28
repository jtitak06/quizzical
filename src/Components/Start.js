import React from 'react';
import Yellow from './images/yellowBlobStart.svg';
import Blue from './images/blueBlobStart.svg';

function Start(props) {

    return(
        <section style={props.style} display={props.display} className="start">
            <img className="topBlob" src={Yellow} alt="yellow-blob" />
            <h1 className="start--title">Quizzical</h1>
            <button onClick={props.toggle} className="start--button">Start Quiz</button>
            <img className="bottomBlob" src={Blue} alt="blue-blob" />
        </section>  
    )
}

export default Start