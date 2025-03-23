
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import PageTransition from '../components/layout/PageTransition';
import { CalendarDays, Users, Clock, MapPin } from 'lucide-react';

const Activities = () => {
  // Sample activities data
  const activities = [
    {
      id: 1,
      title: 'Community Awareness Workshop',
      date: 'June 15, 2023',
      location: 'Bharatpur Community Hall',
      participants: '45 community members',
      duration: '3 hours',
      description: 'A workshop focused on raising awareness about LGBTQIA+ rights and inclusion in the local community.',
      image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    },
    {
      id: 2,
      title: 'Animal Welfare Camp',
      date: 'August 22, 2023',
      location: 'Chitwan District',
      participants: '12 volunteers, 80+ animals',
      duration: 'Full day',
      description: 'A veterinary camp providing free checkups, vaccinations, and treatments for street dogs and cats.',
      image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80',
    },
    {
      id: 3,
      title: 'Environmental Conservation Drive',
      date: 'September 8, 2023',
      location: 'Narayani River Bank',
      participants: '35 volunteers',
      duration: '5 hours',
      description: 'A clean-up drive to remove plastic waste and plant trees along the river bank to prevent erosion.',
      image: 'https://images.unsplash.com/photo-1618477460930-d8a8d7e7f7ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    },
    {
      id: 4,
      title: "Women's Empowerment Workshop",
      date: 'October 15, 2023',
      location: 'Karunalaya Center',
      participants: '28 women',
      duration: '2 days',
      description: 'A skill development workshop focusing on financial literacy and entrepreneurship for women from marginalized communities.',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen">
        <Navbar />
        
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto mb-16">
              <div className="text-center mb-12">
                <h1 className="section-title text-4xl md:text-5xl">Our Activities</h1>
                <p className="text-xl text-foreground/80 mt-4">Turning compassion into action through community engagement</p>
              </div>
              
              <div className="prose prose-lg mx-auto text-center">
                <p className="lead text-xl text-foreground/80">
                  At Karunalaya Nepal, we regularly organize a variety of activities to put our mission into practice. 
                  From community workshops and awareness campaigns to direct action for animal welfare and environmental 
                  conservation, we work hands-on to create positive change.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {activities.map((activity) => (
                <div key={activity.id} className="card bg-card hover-lift overflow-hidden">
                  <div className="aspect-w-16 aspect-h-9">
                    <img 
                      src={activity.image} 
                      alt={activity.title} 
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3">{activity.title}</h3>
                    
                    <div className="flex flex-wrap gap-y-2 mb-4">
                      <div className="flex items-center mr-4 text-sm text-muted-foreground">
                        <CalendarDays className="h-4 w-4 mr-1.5" />
                        {activity.date}
                      </div>
                      <div className="flex items-center mr-4 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-1.5" />
                        {activity.location}
                      </div>
                      <div className="flex items-center mr-4 text-sm text-muted-foreground">
                        <Users className="h-4 w-4 mr-1.5" />
                        {activity.participants}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 mr-1.5" />
                        {activity.duration}
                      </div>
                    </div>
                    
                    <p className="text-foreground/80 mb-4">{activity.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <p className="text-lg text-muted-foreground mb-4">
                Want to get involved in our upcoming activities?
              </p>
              <a href="/contact" className="btn btn-primary mx-auto">
                Contact Us to Volunteer
              </a>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Activities;
