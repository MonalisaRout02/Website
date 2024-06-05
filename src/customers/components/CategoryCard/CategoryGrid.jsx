import categoriesData from './CategoriesData';
import CategoryCard from './CategoryCard';


const CategoryGrid = ({ sectionName1 }) => {

  return (
    <div>
    <h2 className="text-3xl text-black text-center py-10">{sectionName1}</h2>
    <div className="category-grid py-5 justify-center h-full flex flex-col items-center">
      
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 justify-center">
        {categoriesData.map((category) => (
          <div key={category.id} className="w-full">
            <CategoryCard category={category} />
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default CategoryGrid;

