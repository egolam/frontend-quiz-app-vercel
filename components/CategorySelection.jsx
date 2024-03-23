import Data from "@/data.json";
import CategoryItem from "./CategoryItem";

const CategorySelection = () => {

  return (
    <article className="lg:w-[35.25rem] w-full">
      <ul className="flex flex-col md:gap-6 gap-3">
        {Data.map((category) => <CategoryItem key={category.title} title={category.title} icon={category.icon} bg={category.bg}/>)}
      </ul>
    </article>
  );
};

export default CategorySelection;
