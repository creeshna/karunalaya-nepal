
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';

const BlogSection = () => {
  const posts = [
    {
      title: 'Protecting Endangered Species in Southeast Asia',
      excerpt: 'Our latest conservation efforts have shown promising results for tiger populations...',
      image: 'https://images.unsplash.com/photo-1549366021-9f761d450615?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      date: 'April 16, 2023',
      author: 'Dr. Michael Chen',
      category: 'Conservation'
    },
    {
      title: 'Clean Water Initiative Reaches 10,000 People',
      excerpt: 'Our project to provide clean drinking water has surpassed its initial goals...',
      image: 'https://images.unsplash.com/photo-1541264714593-54bd99d1e4dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      date: 'March 28, 2023',
      author: 'Sarah Johnson',
      category: 'Human Rights'
    },
    {
      title: 'Reforestation Project in the Amazon Makes Progress',
      excerpt: 'With the help of local communities, we have planted over 50,000 trees...',
      image: 'https://images.unsplash.com/photo-1460237612588-fbf11dfd5a5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80',
      date: 'February 12, 2023',
      author: 'Carlos Mendez',
      category: 'Environmental'
    }
  ];

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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article 
              key={index} 
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover-lift"
            >
              <Link to="/blog" className="block">
                <div className="aspect-w-16 aspect-h-9 w-full relative">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="object-cover w-full h-48"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-brand-100 text-brand-600 px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-foreground/60 mb-2">
                    <div className="flex items-center mr-4">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-medium mb-2 hover:text-brand-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-foreground/80 mb-4">{post.excerpt}</p>
                  <div className="inline-flex items-center group">
                    <span className="text-brand-600 font-medium text-sm">Read more</span>
                    <ArrowRight className="ml-2 h-4 w-4 text-brand-600 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/blog" className="btn btn-primary">View all articles</Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
