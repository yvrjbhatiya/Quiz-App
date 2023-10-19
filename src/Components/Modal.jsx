import { useGlobalContext } from "../context";
import Confetti from "react-confetti";

const Modal = () => {
  const { closeModal, isModalOpen, correct, questions } = useGlobalContext();
  let score = ((correct / questions.length) * 100).toFixed(0);
  return (
    <>
      {isModalOpen && (
        <div className="absolute top-0 left-0 h-screen w-full flex items-center bg-[rgba(0,0,0,0.89)]">
          {score > 40 && <Confetti />}
          <div className=" text-center bg-white p-8 mx-auto rounded-lg max-w-[600px] w-11/12">
            <h4 className="text-3xl pb-3 text-center font-bold">
              Your score is{" "}
              <span className={score > 40 ? "text-green-600" : "text-red-600"}>
                {score}%
              </span>
            </h4>
            <div className="flex justify-around py-6">
              <p className="text-xl font-medium">
                You got -  {correct}/{questions.length}
              </p>
              {score > 40 ? (
                <p className="text-xl font-medium">Congrats! 😊</p>
              ) : (
                <p className="text-xl font-medium">Bad Luck! 😔</p>
              )}
            </div>

            <button
              className="bg-slate-500 py-2 px-7 text-xl font-semibold rounded-xl text-white mt-4 hover:bg-slate-400"
              onClick={closeModal}
            >
              Play Again
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
