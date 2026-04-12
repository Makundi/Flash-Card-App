import { useState } from "react";
import "./App.css";

function App() {
  const questions = [
    {
      qn: "What is Java script?",
      ans: "Js is cool",
    },
    {
      qn: "Explain React Hooks",
      ans: "Hooks are amazing",
    },
    {
      qn: "What is Big O notation",
      ans: "Big O is cool",
    },
    {
      qn: "What is nano Tech used for",
      ans: "Making advanced weapons",
    },
  ];
  const [question, setQuestion] = useState(0);
  const [show, setShow] = useState(false);

  return (
    <>
      <h1>Flash Cards</h1>
      <div className="card">
        <div className="container">
          <div
            className="progress-bar"
            style={{ width: `${Math.floor((question / questions.length) * 100)}%` }}
          >
            <span>{Math.floor(((question) / questions.length) * 100) + '%'}</span>
          </div>
        </div>
        <div className="question-card">
          <div className="question-section">{question < questions.length ? questions[question].qn : "End"}</div>
          <div className="button-section">
            <button 
              id="prev-btn" 
              className={question > 0 ? "btn active" : "btn"}
              onClick={() => {
                setQuestion(question-1)
                setShow(false)
              }}
              disabled = {question > 0 ? false : true}
            >
              Previous
            </button>
            <button
              id="show-hide-btn"
              className="show-hide"
              onClick={() => setShow(!show)}
              disabled={question < questions.length ? false : true}
            >
              {show ? "Hide Answer" : "Show Answer"}
            </button>
            <button
              id="next-btn"
              className={question < questions.length ? "btn active" : "btn"}
              onClick={() => {
                setQuestion(question+1)
                setShow(false)
              }}
              disabled={question < questions.length ? false : true}
            >
              Next
            </button>
          </div>
        </div>
        <div className="scene">
          <div className={show ? "answer-card show" : "answer-card"}>
            <div className="answer-section front">{question < questions.length ? "?" : "End"}</div>
            <div className="answer-section back">{question < questions.length ? questions[question].ans : ""}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
