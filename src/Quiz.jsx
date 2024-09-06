import React, { useState } from 'react';

const quizData = [

  {
    question: "Who is the father of Computers? ",
    answers: [" Dennis Ritchie", "Bjarne Stroustrup", "Charles Babbage", "James Gosling"], 
   
    correctAnswer: "Charles Babbage"
  },

  {
    question: "Which of the following is not a characteristic of a computer?",
    answers: ["Versatility","Accuracy","I.Q.","Diligence"], 
    correctAnswer: "I.Q."
  },


  {
    question: "What is the capital of France?",
    answers: ["Berlin", "Madrid", "Paris", "Lisbon"],
    correctAnswer: "Paris"
  },
  {
    question: "Who wrote 'To Kill a Mockingbird'?",
    answers: ["Harper Lee", "Mark Twain", "Ernest Hemingway", "F. Scott Fitzgerald"],
    correctAnswer: "Harper Lee"
  },
  {
    question: "What is the smallest planet in our solar system?",
    answers: ["Earth", "Mars", "Mercury", "Venus"],
    correctAnswer: "Mercury"
  },
  // Add more questions as needed
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [score, setScore] = useState(null);

  const handleAnswerSelect = (answer) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestion]: answer,
    });
  };

  const handleNext = () => {
    setCurrentQuestion((prev) => Math.min(prev + 1, quizData.length - 1));
  };

  const handlePrevious = () => {
    setCurrentQuestion((prev) => Math.max(prev - 1, 0));
  };

  const handleSubmit = () => {
    let calculatedScore = 0;
    quizData.forEach((question, index) => {
      if (question.correctAnswer === selectedAnswers[index]) {
        calculatedScore += 1;
      }
    });
    setScore(calculatedScore);
  };

  if (score !== null) {
    return (
      <div>
        <h2>Your Score: {score}/{quizData.length}</h2>
        <button onClick={() => window.location.reload()}>Restart Quiz</button>
      </div>
    );
  }

  return (
    <div>
      <h2>Question {currentQuestion + 1}</h2>
      <p>{quizData[currentQuestion].question}</p>
      <div>
        {quizData[currentQuestion].answers.map((answer, index) => (
          <button
            key={index}
            onClick={() => handleAnswerSelect(answer)}
            style={{
              backgroundColor:
                selectedAnswers[currentQuestion] === answer ? '#d3d3d3' : ' #5B7C99',
              
                
            }}
          >
            {answer}
          </button>
        ))}
      </div>
      <div>
        <button onClick={handlePrevious} disabled={currentQuestion === 0}>
          Prev
        </button>
        {currentQuestion < quizData.length - 1 ? (
          <button onClick={handleNext}>
            Next
          </button>
        ) : (
          <button onClick={handleSubmit}>
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default Quiz;
