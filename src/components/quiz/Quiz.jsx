import React, { useState, useEffect } from "react";
import './Quiz.css';
import Questions from "../questions/Questions";

const Quiz = (props) => {
    const QA = [
        {
            "ID" : 1,
            "question" : "Kako se se zvali Monikini i Rosovi roditelji?",
            "answers" : [
                {
                    "answerNo" : 1,
                    "answer" : "Džek i Džudi",
                    "correct" : true
                },
                {
                    "answerNo" : 2,
                    "answer" : "Džek i Džil",
                    "correct" : false
                },
                {
                    "answerNo" : 3,
                    "answer" : "Mark i Margaret",
                    "correct" : false
                },
                {
                    "answerNo" : 4,
                    "answer" : "Geri i Meri",
                    "correct" : false
                }
            ]
        },
        {
            "ID" : 2,
            "question" : "Koji je lik izgovario posljednju rečenicu u seriji?",
            "answers" : [
                {
                    "answerNo" : 1,
                    "answer" : "Ganter",
                    "correct" : false
                },
                {
                    "answerNo" : 2,
                    "answer" : "Fibi",
                    "correct" : false
                },
                {
                    "answerNo" : 3,
                    "answer" : "Čendler",
                    "correct" : true
                },
                {
                    "answerNo" : 4,
                    "answer" : "Rejčl",
                    "correct" : false
                }
            ]
        },
        {
            "ID" : 3,
            "question" : "Kako se zvala Džoijeva agentica?",
            "answers" : [
                {
                    "answerNo" : 1,
                    "answer" : "Andrea",
                    "correct" : false
                },
                {
                    "answerNo" : 2,
                    "answer" : "Estel",
                    "correct" : true
                },
                {
                    "answerNo" : 3,
                    "answer" : "Marta",
                    "correct" : false
                },
                {
                    "answerNo" : 4,
                    "answer" : "Kerol",
                    "correct" : false
                }
            ]
        },
        {
            "ID" : 4,
            "question" : "Koga je Fibi opljačkala kao mala?",
            "answers" : [
                {
                    "answerNo" : 1,
                    "answer" : "Čendlera",
                    "correct" : false
                },
                {
                    "answerNo" : 2,
                    "answer" : "Rosa",
                    "correct" : true
                },
                {
                    "answerNo" : 3,
                    "answer" : "Moniku",
                    "correct" : false
                },
                {
                    "answerNo" : 4,
                    "answer" : "Rejčl",
                    "correct" : false
                }
            ]
        },
        {
            "ID" : 5,
            "question" : "Ros je bio alergičan na...",
            "answers" : [
                {
                    "answerNo" : 1,
                    "answer" : "Limun",
                    "correct" : false
                },
                {
                    "answerNo" : 2,
                    "answer" : "Jabuke",
                    "correct" : false
                },
                {
                    "answerNo" : 3,
                    "answer" : "Kivi",
                    "correct" : true
                },
                {
                    "answerNo" : 4,
                    "answer" : "Banane",
                    "correct" : false
                }
            ]
        },
        {
            "ID" : 6,
            "question" : "Kako se zvala Fibina sestra bliznakinja?",
            "answers" : [
                {
                    "answerNo" : 1,
                    "answer" : "Skarlet",
                    "correct" : false
                },
                {
                    "answerNo" : 2,
                    "answer" : "Marta",
                    "correct" : false
                },
                {
                    "answerNo" : 3,
                    "answer" : "Rita",
                    "correct" : false
                },
                {
                    "answerNo" : 4,
                    "answer" : "Ursula",
                    "correct" : true
                }
            ]
        },
        {
            "ID" : 7,
            "question" : "U kojem gradu se odvijala radnja \"Prijatelja\"?",
            "answers" : [
                {
                    "answerNo" : 1,
                    "answer" : "Los Anđeles",
                    "correct" : false
                },
                {
                    "answerNo" : 2,
                    "answer" : "Njujork",
                    "correct" : true
                },
                {
                    "answerNo" : 3,
                    "answer" : "Majami",
                    "correct" : false
                },
                {
                    "answerNo" : 4,
                    "answer" : "Čikago",
                    "correct" : false
                }
            ]
        },
        {
            "ID" : 8,
            "question" : "Koliko se puta Ros oženio... i razveo?",
            "answers" : [
                {
                    "answerNo" : 1,
                    "answer" : "Jednom",
                    "correct" : false
                },
                {
                    "answerNo" : 2,
                    "answer" : "Četiri puta",
                    "correct" : false
                },
                {
                    "answerNo" : 3,
                    "answer" : "Dva puta",
                    "correct" : false
                },
                {
                    "answerNo" : 4,
                    "answer" : "Tri puta",
                    "correct" : true
                }
            ]
        },
        {
            "ID" : 9,
            "question" : "Koliko je sestara imao Džoi?",
            "answers" : [
                {
                    "answerNo" : 1,
                    "answer" : "3 sestre",
                    "correct" : false
                },
                {
                    "answerNo" : 2,
                    "answer" : "7 sestara",
                    "correct" : true
                },
                {
                    "answerNo" : 3,
                    "answer" : "5 sestara",
                    "correct" : false
                },
                {
                    "answerNo" : 4,
                    "answer" : "9 sestara",
                    "correct" : false
                }
            ]
        },
        {
            "ID" : 10,
            "question" : "Koje godine je izašao film \"Prijatelji: Ponovo zajedno\"?",
            "answers" : [
                {
                    "answerNo" : 1,
                    "answer" : "2021.",
                    "correct" : true
                },
                {
                    "answerNo" : 2,
                    "answer" : "2022.",
                    "correct" : false
                },
                {
                    "answerNo" : 3,
                    "answer" : "2019.",
                    "correct" : false
                },
                {
                    "answerNo" : 4,
                    "answer" : "Nije izašao",
                    "correct" : false
                }
            ]
        }
    ]

    const [correctCounter, setCorrectCounter] = useState(0);
    const [incorrectCounter, setIncorrectCounter] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(1);

    useEffect(()=>{
        let myInterval = setInterval(() => {
                if(seconds<59){
                    setSeconds(prevState => prevState + 1)     
                }
                else{
                    setMinutes(prevState => prevState + 1)
                    setSeconds(0)
                }
            }, 1000)
        return () => {
            clearInterval(myInterval);
          };
    });


    const currentQ = (value) => {
        if(value.ID===currentQuestion){
            return value
        }
    }

    const Checking = (aCorrect,qID) => {

        if(aCorrect){
            setCorrectCounter(prevState => prevState + 1)
        }
        else{
            setIncorrectCounter(prevState => prevState + 1)
        }
        
        setTimeout(() => {
            document.getElementById(qID+"true").classList.remove("true");
            setCurrentQuestion(prevState => prevState + 1)
        }, 300)
    }

    
    useEffect(()=>{
            
        document.getElementById("correct").innerHTML = `Broj tačnih odgovora: ${correctCounter}`
        document.getElementById("incorrect").innerHTML = `Broj netačnih odgovora: ${incorrectCounter}`
        document.getElementById("timer").innerHTML = `${
            minutes === 0 ? seconds + "s" : minutes + "m " + seconds + "s"
        }`
            
        if(currentQuestion===11) {
            setTimeout(() => props.ending(correctCounter, incorrectCounter, minutes, seconds), 0)
            //props.ending(correctCounter, incorrectCounter, minutes, seconds)
        }
    })


        return (
            <div className="quiz">
                
                <div className="top" id="correct"></div>
                <div className="top" id="incorrect"></div>
                <div className="top" id="timer"></div>
                
                {QA.filter(currentQ).map((q, index)=>(
                        <div key={index}>
                            <Questions q={q} check={Checking} />
                        </div>    
                    )
                )}

            </div>
        )

    
}


export default Quiz;