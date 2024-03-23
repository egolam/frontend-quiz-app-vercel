const Question = ({ length, index, children }) => {
  const progress =  ((index + 1) / length) * 100
  return (
    <article className="lg:w-[29rem] w-full flex flex-col md:gap-6 gap-3">
      <p className="md:text-xl text-sm italic text-grey-navy dark:text-light-bluish">
        Question {index + 1} of {length}
      </p>
      <p className="md:text-4xl text-xl text-dark-navy dark:text-white font-medium">{children}</p>
      <div className="w-full mt-auto rounded-3xl bg-white dark:bg-navy h-4 relative flex items-center border-2 dark:border-grey-navy">
        <div style={{width: `${progress}%`}} className="h-1/2 bg-primary w-[5%] z-20 m-1 rounded-lg transition-all"></div>
      </div>
    </article>
  );
};
export default Question;
