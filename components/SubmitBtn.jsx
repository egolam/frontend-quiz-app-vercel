import SubmitAnswerBtn from "./SubmitAnswerBtn";
import NextQuestionBtn from "./NextQuestionBtn";
import { useQuizStore } from "@/stores/quiz";

const SubmitBtn = () => {
  const submittedAnswer = useQuizStore((state) => state.submittedAnswer);

  return <>{submittedAnswer ? <NextQuestionBtn /> : <SubmitAnswerBtn />}</>;
};

export default SubmitBtn;
