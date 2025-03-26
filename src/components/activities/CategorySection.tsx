
import React from 'react';
import ActivityCard from './ActivityCard';
import { Category } from '@/types/activity';

interface CategorySectionProps {
  category: Category;
}

const CategorySection: React.FC<CategorySectionProps> = ({ category }) => {
  return (
    <div className="mb-8">
      <p className="text-lg mb-8 max-w-3xl">{category.description}</p>
      
      <div className="grid grid-cols-1 gap-12">
        {category.activities.map((activity) => (
          <ActivityCard key={activity.id} activity={activity} />
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
