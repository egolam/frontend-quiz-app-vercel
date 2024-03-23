import { useQuizStore } from "@/stores/quiz";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { RxCrossCircled } from "react-icons/rx";

const Options = ({ children, index, answer }) => {
  const setChosenAnswer = useQuizStore((state) => state.setChosenAnswer);
  const chosenAnswer = useQuizStore((state) => state.chosenAnswer);
  const submittedAnswer = useQuizStore((state) => state.submittedAnswer);

  return (
    <button
      disabled={submittedAnswer}
      onClick={() => setChosenAnswer(children)}
      className={`flex w-full lg:p-5 p-2 md:text-[1.75rem] text-lg lg:max-h-[5.75rem] md:max-h-20 max-h-[3.75rem] border-2 font-medium bg-white dark:bg-navy drop-shadow-lg lg:rounded-3xl rounded-xl items-center enabled:hover:scale-105 transition-all cursor-pointer active:scale-100 group
      
      
      ${chosenAnswer === children ? "border-primary" : "dark:border-navy"} 
      ${submittedAnswer === children && "border-green-correct dark:border-green-correct"} 
      ${submittedAnswer === children && submittedAnswer !== answer && "border-red-incorrect dark:border-red-incorrect"}
      
      
      `}
    >
      <span
        className={`text-grey-navy bg-light-grey md:min-w-14 md:h-14 h-10 min-w-10 flex items-center justify-center rounded-lg mr-6 
        
        ${submittedAnswer === children && "text-white !bg-green-correct"}
        ${submittedAnswer !== answer && submittedAnswer === children && "!bg-red-incorrect text-white"}
        ${!submittedAnswer && "group-hover:text-primary group-hover:bg-[#F6E7FF]"} 
        ${chosenAnswer === children ? "bg-primary text-white group-hover:bg-primary group-hover:text-white": ""} 

        
      
      `}
      >
        {index === 0 ? "A" : index === 1 ? "B" : index === 2 ? "C" : "D"}
      </span>
      <p className="text-dark-navy dark:text-white">{children}</p>
      <span className="ml-auto">
        {submittedAnswer && answer === children  ? <IoIosCheckmarkCircleOutline className="text-green-correct"/> :  submittedAnswer === children && submittedAnswer !== answer && <RxCrossCircled className="text-red-incorrect"/>}
      </span>
    </button>
  );
};

export default Options;
