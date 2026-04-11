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
  const [progress, setProgress] = useState(1);
  const [question, setQuestion] = useState(0);
  const [show, setShow] = useState(false);

  const handleNextPrevButtons = (action) => {
    if (question >= questions.length || question < 0) {
      return;
    }
    if (action === "next") {
      setProgress(progress + 1);
      setQuestion(question + 1);
    }
    else {
      setProgress(progress - 1);
      setQuestion(question - 1);
    }
  };

  return (
    <>
      <h1>Flash Cards</h1>
      <div class="card">
        <div class="container">
          <div
            class="progress-bar"
            style={{ width: Math.floor(((progress) / questions.length) * 100) + "%" }}
          >
            {Math.floor(((progress) / questions.length) * 100) + '%'}
          </div>
        </div>
        <div class="question-card">
          <div class="question-section">{questions[question].qn}</div>
          <div class="button-section">
            <button 
              id="prev-btn" 
              class={progress > 1 ? "btn active" : "btn"}
              onClick={() => handleNextPrevButtons('prev')}
              disabled = {progress > 1 ? false : true}
            >
              Previous
            </button>
            <button
              id="show-hide-btn"
              class="show-hide"
              onClick={() => setShow(!show)}
            >
              {show ? "Hide Answer" : "Show Answer"}
            </button>
            <button
              id="next-btn"
              class={progress < questions.length ? "btn active" : "btn"}
              onClick={() => handleNextPrevButtons("next")}
              disabled={progress < questions.length ? false : true}
            >
              Next
            </button>
          </div>
        </div>
        <div class="scene">
          <div class={show ? "answer-card show" : "answer-card"}>
            <div class="answer-section front">?</div>
            <div class="answer-section back">{questions[question].ans}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
