"use client";

import Question from "@/components/Question";
import SubmitBtn from "@/components/SubmitBtn";
import { useParams } from "next/navigation";
import { useQuizStore } from "@/stores/quiz";
import { getQuestion, getLength } from "@/utils/manageData";
import Options from "@/components/Options";

const QuizPage = () => {
  const { subject } = useParams();
  const currentQuestionIndex = useQuizStore((state) => state.questionIndex);
  const length = getLength(subject);
  const { question, answer, options } = getQuestion(
    subject,
    currentQuestionIndex
  );

  return (
    <section className="flex lg:flex-row flex-col lg:gap-32 md:gap-8 gap-6">
      <Question length={length} index={currentQuestionIndex}>
        {question}
      </Question>
      <article className="lg:w-[35.25rem] w-full flex flex-col md:gap-6 gap-3">
        <div className="flex flex-col md:gap-6 gap-3">
          {options.map((option, index) => (
            <Options key={option} index={index} answer={answer}>
              {option}
            </Options>
          ))}
        </div>
        <SubmitBtn />
      </article>
    </section>
  );
};

export default QuizPage;
