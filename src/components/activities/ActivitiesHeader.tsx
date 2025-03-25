
import React from 'react';

const ActivitiesHeader: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto mb-16">
      <div className="text-center mb-12">
        <h1 className="section-title text-4xl md:text-5xl">Our Activities</h1>
        <p className="text-xl text-foreground/80 mt-4">Advocating for rights, welfare, and sustainability</p>
      </div>
      
      <div className="prose prose-lg mx-auto text-center">
        <p className="lead text-xl text-foreground/80">
          At Karunalaya Nepal, we actively implement programs and activities aligned with our 
          mission areas. Our initiatives focus on creating awareness, driving policy changes, 
          and empowering communities for a more compassionate and sustainable world.
        </p>
      </div>
    </div>
  );
};

export default ActivitiesHeader;
