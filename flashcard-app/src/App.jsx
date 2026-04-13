import { useState } from "react";
import "./App.css";

function App() {
  const questions = [
  {
    qn: "What is the difference between '==' and '==='?",
    ans: "== compares value only (type coercion), while === compares both value and data type."
  },
  {
    qn: "What does 'box-sizing: border-box' do?",
    ans: "It includes padding and borders in the element's total width and height, making layout sizing much easier."
  },
  {
    qn: "What is a JavaScript Closure?",
    ans: "A function that 'remembers' its outer variables even after the outer function has finished executing."
  },
  {
    qn: "What is the purpose of React's 'useEffect' hook?",
    ans: "It allows you to perform side effects in functional components, such as data fetching or manual DOM updates."
  },
  {
    qn: "What is the difference between 'let' and 'var'?",
    ans: "let is block-scoped and cannot be redeclared, while var is function-scoped and can be hoisted/redeclared."
  },
  {
    qn: "What is a 'Promise' in JavaScript?",
    ans: "An object representing the eventual completion (or failure) of an asynchronous operation and its resulting value."
  },
  {
    qn: "What is 'Lifting State Up' in React?",
    ans: "Moving shared state to the closest common ancestor of components that need to access it."
  },
  {
    qn: "What is the Document Object Model (DOM)?",
    ans: "A programming interface that represents web pages as a tree structure, allowing scripts to change the content and style."
  },
  {
    qn: "What is the difference between 'Flexbox' and 'CSS Grid'?",
    ans: "Flexbox is designed for one-dimensional layouts (rows OR columns), while Grid is for two-dimensional layouts (rows AND columns)."
  },
  {
    qn: "What does the 'Alt' attribute in an <img> tag do?",
    ans: "It provides alternative text for screen readers and displays if the image fails to load, improving accessibility."
  }
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
            style={{
              width: `${Math.floor(((question + 1) / questions.length) * 100)}%`,
            }}
          ></div>
          <span 
            className="progress-counter"
            style={{ color: "#1e293b" }}
          >
            {question < questions.length
              ? `${question + 1} / ${questions.length}`
              : "Build Complete 🚀"}
          </span>
        </div>
        {question === questions.length ? (
          <div className="question-card">
            <div className="question-section">
              Congratulation 🎉
              <br />
              You've reviewed all {questions.length} cards.
            </div>
            <div className="button-section success">
              <button
                id="next-btn"
                className="btn active"
                onClick={() => {
                  setQuestion(0);
                }}
              >
                Reset
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="question-card">
              <div className="question-section">
                {question < questions.length ? questions[question].qn : "End"}
              </div>
              <div className="button-section">
                <button
                  id="prev-btn"
                  className={question > 0 ? "btn active" : "btn"}
                  onClick={() => {
                    setQuestion(question - 1);
                    setShow(false);
                  }}
                  disabled={question > 0 ? false : true}
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
                    setQuestion(question + 1);
                    setShow(false);
                  }}
                  disabled={question < questions.length ? false : true}
                >
                  Next
                </button>
              </div>
            </div>
            <div className="scene">
              <div className={show ? "answer-card show" : "answer-card"}>
                <div className="answer-section front">
                  {question < questions.length ? "?" : ""}
                </div>
                <div className="answer-section back">
                  {question < questions.length ? questions[question].ans : ""}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
