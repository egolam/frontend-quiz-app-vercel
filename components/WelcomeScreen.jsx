const WelcomeScreen = () => {
  return (
    <article className="leading-none flex flex-col lg:gap-12 gap-4">
      <h1 className="md:text-[4rem] text-[2.5rem] font-light text-dark-navy dark:text-white lg:w-[29rem]">
        Welcome to the <span className="font-medium">Frontend Quiz!</span>
      </h1>
      <p className="md:text-xl italic text-grey-navy dark:text-light-bluish">Pick a subject to get started.</p>
    </article>
  );
};

export default WelcomeScreen;
