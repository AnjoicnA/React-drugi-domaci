import React from "react";
import './Questions.css'

const Questions = (props) => {

    const onClick = (aCorrect, qID) => {
        document.getElementById(qID+"true").classList.add("true");
        props.check(aCorrect,qID)
    }

    return (
        <>
            <div className="questionTop">{props.q.ID + ". " + props.q.question}</div>
            <ol className="answers">
                {props.q.answers.map((a, index)=>(
                        <li id={a.correct?props.q.ID+"true":null} key={'A'+ index} onClick={() => onClick(a.correct, props.q.ID)}>{a.answer}</li>
                    )
                )}
            </ol>
        </>
    )
}


export default Questions;