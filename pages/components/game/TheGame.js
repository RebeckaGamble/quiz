import React, { useState } from "react";
import { useQuiz } from "@/store";
import GameCard from "./GameCard";

function TheGame() {
  const { questions, addQuestion } = useQuiz();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [chosenAnswer, setChosenAnswer] = useState(null);
  const [nextError, setNextError] = useState(false); //show error when trying to go to next question without a choosen answer
  const [disableNext, setDisableNext] = useState(false); //disable next btn, needs answer to go to next quest

  //add right/wrong count
  const [rightAnswers, setRightAnswers] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);

  //handle the click event when Next-button is clicked
  const handleNextQuestion = () => {
    //if no answer
    if (chosenAnswer === null) {
      setNextError(true); //show error
      setDisableNext(true); // Disable the Next button
      return; // Exit the function early if no answer is chosen
    }
    //if answer
    if (currentQuestionIndex < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      console.log(currentQuestionIndex);
      setChosenAnswer(null); // Reset chosen answer for the next question
    }
  };

  //handle the click event when an answer is clicked
  const handleAnswerClick = (answer) => {
    setChosenAnswer(answer);

    setNextError(false); // Clear the error message
    setDisableNext(false); // Enable the Next button

    const currentQuestion = questions[currentQuestionIndex];
    //count the right and wrong answers
    if (answer === currentQuestion.correctAns) {
      setRightAnswers(rightAnswers + 1);
    } else {
      setWrongAnswers(wrongAnswers + 1);
    }
  };

  //restart the game
  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setChosenAnswer(null);
    setRightAnswers(0);
    setWrongAnswers(0);
  };

  // Retrieve the current question based on the current index
  const currentQuestionNumber = currentQuestionIndex + 1;

  return (
    <div className="flex flex-col py-10 sm:pt-10 sm:pb-20 mx-auto w-screen md:w-[800px] md:px-10 md:shadow-2xl md:border-8 rounded-sm md:border-slate-400">
      <h1 className="font-bold text-2xl text-center py-8">Quiz</h1>
      <div className=" md:border-4 md:border-black md:shadow-xl">
        <div className="relative py-4 mx-auto flex flex-col min-w-[320px] w-full max-w-[700px] bg-blue-800 items-center justify-center md:border-4 md:border-white">
          {/* Pass current question data to the TestQuizCard component */}
          {currentQuestionIndex < questions.length && (
            <>
              <div className="text-white mb-4">
                Question {currentQuestionNumber} / {questions.length}
              </div>
              <div className="w-[80%]">
                <GameCard
                  question={questions[currentQuestionIndex].question}
                  answers={questions[currentQuestionIndex].answers}
                  correctAns={questions[currentQuestionIndex].correctAns}
                  chosenAnswer={chosenAnswer}
                  onAnswerClick={handleAnswerClick}
                />
              </div>
              <div className="w-full justify-center mt-4 mx-auto flex">
                <button
                  onClick={handleNextQuestion}
                  disabled={disableNext} // Disable based on state
                  className="text-[#001e4d] bg-white font-semibold px-4 py-1 rounded-md"
                >
                  Next
                </button>
              </div>
              {nextError && (
                <p className="text-red-500 my-2 px-2 bg-white">
                  Choose an answer first!
                </p>
              )}
            </>
          )}
          {/* when finished quiz, show */}
          {currentQuestionIndex === questions.length && (
            <div className="text-white flex flex-col gap-1">
              <h4 className="text-2xl font-semibold py-6">Quiz completed!</h4>
              <p className="font-semibold text-xl">
                Total Questions: {questions.length}
              </p>
              <p>
                Right Answers:{" "}
                <span className="text-green-500 text-xl">
                  {rightAnswers}
                </span>{" "}
              </p>
              <p>
                Wrong Answers:{" "}
                <span className="text-red-500 text-xl">
                  {wrongAnswers}
                </span>{" "}
              </p>
              <div className="w-full py-6">
                <button
                  onClick={restartQuiz}
                  className="px-3 py-1 border border-slate-700 rounded-md bg-white text-blue-800 font-semibold tracking-wider my-2 hover:scale-105 hover:text-white hover:bg-green-600 hover:uppercase"
                >
                  Play again
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TheGame;
