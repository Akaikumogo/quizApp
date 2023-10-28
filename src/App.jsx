import MainQuiz from "./Components/MainQuiz";
import Natija from "./Components/Natija";
import { useGlobalContext } from "./context";

const App = () => {
  const { quizNumber, quiz } = useGlobalContext();
  return (
    <div className="w-full text-white font-bold  h-screen bg-slate-950">
      <div className="w-[85%] h-full border mx-auto">
        {quiz.length === quizNumber ? <Natija /> : <MainQuiz />}
      </div>
    </div>
  );
};

export default App;
