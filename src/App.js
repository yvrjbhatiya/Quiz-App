import React, { useState } from "react";
import { useGlobalContext } from "./context";
import Form from "./Components/Form";
import Loading from "./Components/Loading";
import Modal from "./Components/Modal";

const App = () => {
  const {
    waiting,
    loading,
    index,
    questions,
    nextQuestion,
    previousQuestion,
    checkAnswer,
  } = useGlobalContext();

  const [showForm, setShowForm] = useState(false);

  if (waiting || showForm) {
    return <Form onQuizStart={() => setShowForm(false)} />;
  }

  if (loading) {
    return <Loading />;
  }

  const { incorrect_answers, correct_answer, question } = questions[index];
  const answers = [...incorrect_answers];
  if (incorrect_answers.length > 1) {
    let num = Math.floor(Math.random() * 4);
    if (num === 3) {
      answers.push(correct_answer);
    } else {
      answers.push(answers[num]);
      answers[num] = correct_answer;
    }
  } else {
    let num = Math.floor(Math.random() * 2);
    answers.push(answers[num]);
    answers[num] = correct_answer;
  }

  return (
    <>
      <main className="min-h-screen flex items-center justify-center bg-slate-500">
        <Modal />
        <div className="p-3 py-5 md:p-8 bg-white shadow-lg rounded-lg max-w-[800px] w-11/12 min-h-[300px]">
          <div className="text-right pb-2 text-black">
            <div className="bg-gray-100 p-2 rounded-md inline-block">
              Qusetion :{" "}
              <span>
                 {index + 1}/{questions.length}
              </span>
              
            </div>
          </div>

          <div className="mt-12">
            <p
              className="text-center font-medium text-2xl lg:text-3xl leading-loose"
              dangerouslySetInnerHTML={{ __html: question }}
            />
            <div className="grid grid-cols-1 my-5 space-y-2 place-content-center mt-8">
              {answers.map((answer, index) => {
                return (
                  <button
                    onClick={() => checkAnswer(answer === correct_answer)}
                    key={index}
                    className="bg-gray-300 w-3/5 rounded-lg mx-auto text-black font-medium font-mono p-2 hover:bg-slate-400"
                    dangerouslySetInnerHTML={{
                      __html: answer,
                    }}
                  />
                );
              })}
            </div>
          </div>
          <div className="flex justify-between pt-4 mt-8">
            <button
              onClick={previousQuestion}
              className="py-2 px-7 text-medium flex rounded-lg text-white font-semibold  bg-slate-500 hover:bg-slate-400"
            >
              Previous
            </button>
            <button
              onClick={nextQuestion}
              className="py-2 px-7 text-medium flex rounded-lg text-white font-semibold  bg-slate-500 hover:bg-slate-400"
            >
              Next
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default App;
