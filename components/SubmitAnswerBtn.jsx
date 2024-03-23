import { useQuizStore } from "@/stores/quiz";
import { useState } from "react";
import { RxCrossCircled } from "react-icons/rx";

const SubmitAnswerBtn = () => {
  const [warning, setWarning] = useState("");
  const { setChosenAnswer, setSubmittedAnswer, chosenAnswer } = useQuizStore();

  function handleSetAnswer() {
    if (chosenAnswer.length === 0) {
      setWarning(
        <div className="flex items-center gap-4 mx-auto text-red-incorrect dark:text-light-grey md:text-2xl text-lg">
          <RxCrossCircled className="dark:text-red-incorrect"/>
          <p>Please select an answer</p>
        </div>
      );
    } else {
      setChosenAnswer("");
      setWarning("");
      setSubmittedAnswer(chosenAnswer); 
    }
  }

  return (
    <>
      <button
        onClick={() => handleSetAnswer()}
        className="text-white bg-primary w-full lg:rounded-3xl rounded-xl lg:p-7 md:p-4 p-3 md:text-[1.75rem] text-lg font-medium hover:bg-[#D394FA] hover:scale-105 transition-all cursor-pointer active:scale-100"
      >
        Submit Answer
      </button>
      {!chosenAnswer && warning}
    </>
  );
};

export default SubmitAnswerBtn;
