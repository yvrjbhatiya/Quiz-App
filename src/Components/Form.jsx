import { useGlobalContext } from "../context";

const Form = () => {
  const { quiz, handleSubmit, handleChange, error } = useGlobalContext();
  return (
    <div className="justify-center flex items-center min-h-screen bg-slate-500 ">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-5 md:p-8 max-w-[500px] space-y-8 shadow rounded-lg w-11/12 "
      >
        <h2 className="text-slate-500 text-center font-semibold text-4xl">QUIZ APP</h2>
        <hr className="bg-slate-500" />
        <div className="flex flex-col space-y-2">
          <label className="text-gray-600 font-medium text-xl" htmlFor="amount">
            Number of Questions
          </label>
          <input
            type="number"
            id="amount"
            name="amount"
            className="bg-gray-200 font-mono p-2 rounded-md outline-0 focus:bg-gray-300"
            value={quiz.amount}
            onChange={handleChange}
            min={5}
            max={10}
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="text-gray-600 font-medium text-xl" htmlFor="category">
            Select Category
          </label>
          <select
            id="category"
            name="category"
            className="bg-gray-200 font-mono p-2 rounded-md outline-0 focus:bg-gray-300"
            value={quiz.category}
            onChange={handleChange}
           
          >
            <option value="sports">Sports</option>
            <option value="history">History</option>
            <option value="science">Science</option>
          </select>
        </div>
        {error && (
          <p className="text-red-600">
            Can't Generate Questions, Please Try Different Options
          </p>
        )}
        <button
          type="submit"
          className="text-white font-semibold text-2xl bg-slate-500 hover:bg-slate-400 rounde-md w-full p-2"
        >
          Start
        </button>
      </form>
    </div>
  );
};

export default Form;
