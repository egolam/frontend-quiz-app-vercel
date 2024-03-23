"use client";
import CategoryIndicator from "@/components/CategoryIndicator";
import { useQuizStore } from "@/stores/quiz";
import { getLength } from "@/utils/manageData";
import { useParams, useRouter } from "next/navigation";

const QuizCompleted = () => {
  const { score,reset } = useQuizStore();
  const { subject } = useParams();
  const length = getLength(subject);
  const router = useRouter()

  function handlePlayAgain(){
    reset();
    router.push("/")
  }

  return (
    <section className="flex lg:flex-row flex-col lg:gap-32 gap-8 justify-between">
      <h2 className="md:text-[4rem] text-[2.5rem] text-dark-navy dark:text-white font-light flex flex-col">
        Quiz Completed <span className="font-medium md:-mt-6">You scored...</span>
      </h2>
      <div className="flex flex-col gap-6">
        <div className="lg:w-[35.25rem] w-full flex flex-col items-center bg-white dark:bg-navy lg:rounded-3xl rounded-xl drop-shadow-lg md:py-12 py-8">
          <div className="flex items-center">
            <CategoryIndicator />
          </div>

          <p className="md:text-[9rem] text-[5.5rem] font-medium text-dark-navy dark:text-white">{score}</p>
          <p className="md:text-2xl text-lg text-grey-navy dark:text-light-bluish">out of {length}</p>
        </div>

        <button onClick={() => handlePlayAgain()} className="text-white bg-primary w-full lg:rounded-3xl rounded-xl lg:p-7 p-4 md:text-[1.75rem] text-lg font-medium hover:bg-[#D394FA] hover:scale-105 transition-all cursor-pointer active:scale-100">
          Play Again
        </button>
      </div>
    </section>
  );
};

export default QuizCompleted;
