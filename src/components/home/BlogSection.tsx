
import React from 'react';
import { Link } from 'react-router-dom';
import { FileX } from 'lucide-react';

const BlogSection = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="section-subtitle">Latest News</div>
          <h2 className="section-title">From Our Blog</h2>
          <p className="section-description mx-auto">
            Stay updated with our latest projects, achievements, and insights from the field.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center py-8">
          <div className="bg-white/80 p-6 rounded-full mb-6">
            <FileX className="h-12 w-12 text-foreground/40" />
          </div>
          <h3 className="text-xl font-medium mb-2 text-center">Coming Soon</h3>
          <p className="text-foreground/70 text-center max-w-md mb-6">
            We're preparing new articles about our work in animal welfare and environmental conservation in Nepal.
          </p>
        </div>

        <div className="text-center mt-12">
          <Link to="/blog" className="btn btn-primary">View all articles</Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
