/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

const AppContext = createContext();

// eslint-disable-next-line react/prop-types
const AppProvider = ({ children }) => {
  const quiz = [
    {
      savol: "1+1 nechchi",
      javob: [
        { javob: " 2 ", status: true },
        { javob: "3", status: false },
        { javob: "5", status: false },
        { javob: "6", status: false },
      ],
    },
    {
      savol: "yer dumaloqmi",
      javob: [
        { javob: "xa", status: false },
        { javob: "3", status: false },
        { javob: "txumsimon ", status: true },
        { javob: "6", status: false },
      ],
    },
    {
      savol: "CHoy bu qahvami",
      javob: [
        { javob: "albatta", status: false },
        { javob: "yo'q", status: true },
        { javob: "5", status: false },
        { javob: "6", status: false },
      ],
    },
    {
      savol: "2x2=?",
      javob: [
        { javob: "5", status: false },
        { javob: "2", status: false },
        { javob: "15", status: false },
        { javob: "4", status: true },
      ],
    },
  ];
  const [baho, setBaho] = useState(0);
  const [quizNumber, setQuizNumber] = useState(0);
  const goHome = () => {
    setQuizNumber(0);
    setBaho(0);
  };
  const next = (javob) => {
    setQuizNumber(quizNumber + 1);
    javob ? setBaho(baho + 1) : null;
  };
  return (
    <AppContext.Provider value={{ quiz, quizNumber, next, baho, goHome }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
