
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';

const BlogSection = () => {
  const posts = [
    {
      title: 'Stray Dog Population Management in Nepal',
      excerpt: 'Karunalaya Nepal has been working to address the growing stray dog population in Chitwan...',
      image: 'https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      date: 'November 18, 2023',
      author: 'Karunalaya Nepal Team',
      category: 'Animal Welfare'
    },
    {
      title: 'Addressing Wildlife-Human Conflict in Buffer Zones',
      excerpt: 'Our team is working with communities living in buffer zones around Chitwan National Park...',
      image: 'https://images.unsplash.com/photo-1598894177254-1b160e310169?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      date: 'October 5, 2023',
      author: 'Karunalaya Nepal Team',
      category: 'Conservation'
    },
    {
      title: 'Plastic Pollution Crisis in Nepal\'s Rivers',
      excerpt: 'Karunalaya Nepal is leading cleanup efforts in local waterways and implementing education programs...',
      image: 'https://images.unsplash.com/photo-1621451537084-482c73073a0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80',
      date: 'September 12, 2023',
      author: 'Karunalaya Nepal Team',
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
