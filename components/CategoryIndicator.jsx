"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import Data from "@/data.json";

const CategoryIndicator = () => {
  const { subject } = useParams();

  const subjectData = Data.filter((sub) => sub.title === subject)[0];

  return (
    <>
      <div
        style={{ backgroundColor: subjectData?.bg }}
        className="mr-6 md:w-14 md:h-14 flex items-center justify-center rounded-lg shadow"
      >
        <Image src={subjectData?.icon} width={40} height={40} alt={subjectData?.title + " logo"}/>
      </div>
      <p className="md:text-[1.75rem] text-lg font-medium text-dark-navy dark:text-white">
        {subject}
      </p>
    </>
  );
};

export default CategoryIndicator;
