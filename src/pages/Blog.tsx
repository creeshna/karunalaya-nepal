
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import PageTransition from '../components/layout/PageTransition';
import { Calendar, User, Search, ArrowRight } from 'lucide-react';

const Blog = () => {
  const categories = [
    "All",
    "Conservation",
    "Human Rights",
    "Environmental",
    "Animal Welfare",
    "Sustainable Development"
  ];

  const posts = [
    {
      title: 'Protecting Endangered Species in Southeast Asia',
      excerpt: 'Our latest conservation efforts have shown promising results for tiger populations in the region. Learn about the challenges and successes of our ongoing work.',
      image: 'https://images.unsplash.com/photo-1549366021-9f761d450615?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      date: 'April 16, 2023',
      author: 'Dr. Michael Chen',
      category: 'Conservation',
      featured: true
    },
    {
      title: 'Clean Water Initiative Reaches 10,000 People',
      excerpt: 'Our project to provide clean drinking water has surpassed its initial goals, now serving over 10,000 people in rural communities.',
      image: 'https://images.unsplash.com/photo-1541264714593-54bd99d1e4dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      date: 'March 28, 2023',
      author: 'Sarah Johnson',
      category: 'Human Rights'
    },
    {
      title: 'Reforestation Project in the Amazon Makes Progress',
      excerpt: 'With the help of local communities, we have planted over 50,000 trees in deforested areas of the Amazon rainforest over the past year.',
      image: 'https://images.unsplash.com/photo-1460237612588-fbf11dfd5a5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80',
      date: 'February 12, 2023',
      author: 'Carlos Mendez',
      category: 'Environmental'
    },
    {
      title: 'New Legislation to Protect Wildlife Corridors',
      excerpt: 'Recent policy changes will establish protected wildlife corridors, allowing safe migration for numerous species threatened by habitat fragmentation.',
      image: 'https://images.unsplash.com/photo-1551708919-ee123f932fb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80',
      date: 'January 30, 2023',
      author: 'Emma Williams',
      category: 'Conservation'
    },
    {
      title: 'Sustainable Farming Practices in Developing Regions',
      excerpt: 'Our agricultural programs are helping farmers implement sustainable practices that increase yields while protecting the environment.',
      image: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
      date: 'January 15, 2023',
      author: 'Robert Kim',
      category: 'Sustainable Development'
    },
    {
      title: 'Animal Rescue Center Celebrates 5 Years',
      excerpt: 'Our wildlife rehabilitation center has successfully treated and released over 1,000 animals back into their natural habitats.',
      image: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1218&q=80',
      date: 'December 8, 2022',
      author: 'Aisha Patel',
      category: 'Animal Welfare'
    },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen">
        <Navbar />
        
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="section-subtitle">Stay Informed</div>
              <h1 className="section-title text-4xl md:text-5xl">Our Blog</h1>
              <p className="section-description mx-auto">
                Explore the latest news, insights, and stories from our work around the world.
              </p>
            </div>
            
            {/* Search and Filter */}
            <div className="max-w-4xl mx-auto mb-10">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-grow">
                  <input
                    type="text"
                    placeholder="Search articles..."
                    className="w-full py-2 pl-10 pr-4 border border-border rounded-lg"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground/60 h-5 w-5" />
                </div>
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {categories.map((category, index) => (
                    <button
                      key={index}
                      className={`px-4 py-2 rounded-lg text-sm whitespace-nowrap ${
                        index === 0
                          ? 'bg-brand-500 text-white'
                          : 'bg-secondary text-foreground/70 hover:bg-secondary/80'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Featured Post */}
            {posts.filter(post => post.featured).map((post, index) => (
              <div key={index} className="glass mb-12 rounded-2xl overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                  <div className="lg:col-span-3 order-2 lg:order-1 p-8">
                    <span className="bg-brand-100 text-brand-600 px-3 py-1 rounded-full text-xs font-medium inline-block mb-4">
                      {post.category}
                    </span>
                    <h2 className="text-3xl font-medium mb-4">{post.title}</h2>
                    <div className="flex items-center text-sm text-foreground/60 mb-4">
                      <div className="flex items-center mr-4">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        <span>{post.author}</span>
                      </div>
                    </div>
                    <p className="text-foreground/80 mb-6">{post.excerpt}</p>
                    <a href="#" className="inline-flex items-center group">
                      <span className="text-brand-600 font-medium">Read full article</span>
                      <ArrowRight className="ml-2 h-4 w-4 text-brand-600 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                  <div className="lg:col-span-2 order-1 lg:order-2">
                    <div className="aspect-w-3 aspect-h-2 h-full">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Regular Posts */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.filter(post => !post.featured).map((post, index) => (
                <article 
                  key={index} 
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover-lift"
                >
                  <a href="#" className="block">
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
                  </a>
                </article>
              ))}
            </div>
            
            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <nav className="flex items-center space-x-2">
                <a href="#" className="p-2 border border-border rounded-lg text-foreground/70 hover:bg-secondary">
                  Previous
                </a>
                <a href="#" className="p-2 w-10 h-10 flex items-center justify-center bg-brand-500 text-white rounded-lg">
                  1
                </a>
                <a href="#" className="p-2 w-10 h-10 flex items-center justify-center border border-border rounded-lg text-foreground/70 hover:bg-secondary">
                  2
                </a>
                <a href="#" className="p-2 w-10 h-10 flex items-center justify-center border border-border rounded-lg text-foreground/70 hover:bg-secondary">
                  3
                </a>
                <span className="text-foreground/40">...</span>
                <a href="#" className="p-2 border border-border rounded-lg text-foreground/70 hover:bg-secondary">
                  Next
                </a>
              </nav>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Blog;
