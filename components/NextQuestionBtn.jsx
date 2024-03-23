import { useQuizStore } from "@/stores/quiz";
import { getLength, getQuestion } from "@/utils/manageData";
import { useParams, useRouter } from "next/navigation";

const NextQuestionBtn = () => {
  const {
    setSubmittedAnswer,
    nextQuestion,
    questionIndex,
    addScore,
    submittedAnswer,
  } = useQuizStore();
  const { subject } = useParams();
  const router = useRouter();
  const length = getLength(subject);
  const { answer } = getQuestion(subject, questionIndex);

  function handleNextQuestion() {
    if (submittedAnswer === answer) {
      addScore();
    }

    if (questionIndex === length - 1) {
      router.push(`/${subject}/quizcompleted`);
    } else {
      setSubmittedAnswer("");
      nextQuestion();
    }
  }

  return (
    <button
      className="text-white bg-primary w-full lg:rounded-3xl rounded-xl lg:p-7 md:p-4 p-3 md:text-[1.75rem] text-lg font-medium hover:bg-[#D394FA] hover:scale-105 transition-all cursor-pointer active:scale-100"
      onClick={() => handleNextQuestion()}
    >
      {questionIndex + 1 === length ? "Finish Quiz" : "Next Question"}
    </button>
  );
};

export default NextQuestionBtn;
