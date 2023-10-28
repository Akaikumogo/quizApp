import { useGlobalContext } from "../context";
import Answer from "./Answer";
import Quiz from "./Quiz";

const MainQuiz = () => {
  const { quiz, quizNumber } = useGlobalContext();
  return (
    <div className="w-full h-full ">
      <Quiz quiz={quiz[quizNumber]?.savol} />
      <Answer answers={quiz[quizNumber]?.javob} />
    </div>
  );
};

export default MainQuiz;
