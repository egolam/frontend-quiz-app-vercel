"use client";
import Image from "next/image";
import Link from "next/link";
const CategoryItem = ({ title, icon, bg }) => {


  return (
    <Link
      href={`/${title}`}
      className="relative flex text-dark-navy dark:text-white font-medium md:text-[1.75rem] text-lg md:rounded-3xl rounded-xl bg-white dark:bg-navy drop-shadow-lg md:p-5 p-3  items-center hover:scale-105 transition-all cursor-pointer active:scale-100"
    >
      <div
        style={{ backgroundColor: bg }}
        className={`md:rounded-lg rounded flex items-center justify-center lg:w-14 lg:h-14`}
      >
        <Image src={icon} width={40} height={40} alt={title + " logo"} />
      </div>
      <p className="ml-8">{title}</p>
    </Link>
  );
};

export default CategoryItem;
