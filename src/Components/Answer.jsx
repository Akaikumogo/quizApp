import { useGlobalContext } from "../context";

const Answers = ({ answers }) => {
  const { next } = useGlobalContext();

  return (
    <div className="w-full h-[35%] border flex gap-3 justify-evenly items-center ">
      {answers.map((answer) => (
        <button
          onClick={() => next(answer.status)}
          className=" w-[20%] px-2 py-3 text-center border bg-green-600"
          key={answer.javob}
        >
          {answer.javob}
        </button>
      ))}
    </div>
  );
};

export default Answers;
