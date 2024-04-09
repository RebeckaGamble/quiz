import React from "react";

function GameCard({
  question,
  answers,
  onAnswerClick,
  chosenAnswer,
  correctAns,
}) {
  const handleAnswerClick = (answer) => {
    if (!chosenAnswer) {
      onAnswerClick(answer);
      //console.log("user ans", answer, "correct ans:", correctAns)
    }
  };

  return (
    <div className="sm:p-4 bg-slate-50">
      <h2 id="question" className="text-xl font-semibold text-black py-4">
        {question}
      </h2>
      <ul className="">
        {answers &&
          answers.map((answer, index) => (
            <li key={index}>
              <button
                onClick={() => handleAnswerClick(answer)}
                className={`bg-white mb-4 text-[18px] text-slate-700 py-1 font-medium w-full border border-slate-400 rounded-sm ${
                  chosenAnswer === answer
                    ? chosenAnswer === correctAns
                      ? "bg-green-700 text-white" //border-green-500 text-green-500
                      : "bg-red-700 text-white" //border-red-500 text-red-500
                    : ""
                }`}
              >
                {answer}
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default GameCard;
