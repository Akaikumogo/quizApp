import { useGlobalContext } from "../context";

const Natija = () => {
  const { baho, quiz, goHome } = useGlobalContext();
  const foiz = (baho / quiz.length) * 100;

  const textColor =
    foiz === 25
      ? "text-red-600"
      : foiz === 50
      ? "text-orange-600"
      : foiz === 75
      ? "text-green-600"
      : foiz === 100
      ? "text-blue-600"
      : "text-black-600";

  return (
    <div className="w-full h-full flex flex-col font-bold  items-center justify-evenly">
      <h1 className={`${textColor} text-[42px]`}>
        Siz {quiz.length} dan {baho} tasini topdingiz.
        {foiz}% ballga ega bo'ldingiz
      </h1>
      <button onClick={() => goHome()} className=" py-3 px-6 border rounded-md">
        Boshshidan boshlash
      </button>
    </div>
  );
};

export default Natija;
