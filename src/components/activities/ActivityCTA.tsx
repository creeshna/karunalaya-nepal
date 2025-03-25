
import React from 'react';
import { Link } from 'react-router-dom';

const ActivityCTA: React.FC = () => {
  return (
    <div className="flex justify-center mt-12">
      <Link to="/contact" className="btn btn-primary">
        Get Involved with Our Activities
      </Link>
    </div>
  );
};

export default ActivityCTA;
