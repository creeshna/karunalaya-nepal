
import React from 'react';
import { LucideIcon } from 'lucide-react';
import ActivityCard from './ActivityCard';
import { Category } from '@/types/activity';

interface CategorySectionProps {
  category: Category;
}

const CategorySection: React.FC<CategorySectionProps> = ({ category }) => {
  const IconComponent = category.icon;

  return (
    <div className="mb-20">
      <div className="flex items-center gap-3 mb-8">
        <div className={`rounded-full w-10 h-10 flex items-center justify-center ${category.iconColor} bg-white`}>
          <IconComponent className="h-6 w-6" />
        </div>
        <h2 className="text-3xl font-semibold">{category.title}</h2>
      </div>
      
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
