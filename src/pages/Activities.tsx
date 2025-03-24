
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import PageTransition from '../components/layout/PageTransition';
import { CalendarDays, Users, Clock, MapPin, ExternalLink, FileText } from 'lucide-react';

const Activities = () => {
  // Updated activities data with corrected date
  const activities = [
    {
      id: 1,
      title: 'Elephant Ban Protest Program',
      date: 'December 6, 2024',
      location: 'Nepal Tourism Board, Kathmandu',
      participants: 'Global coalition of activists',
      duration: 'Ongoing campaign',
      description: 'A global campaign to ban the use of elephants in tourism and entertainment industries, advocating for elephant welfare and ethical tourism practices. Our team participated in international protests to raise awareness about elephant exploitation.',
      image: '/lovable-uploads/bce5f043-1654-4c65-bfd6-96b05193f177.png',
      links: [
        { url: 'https://www.hina.hr/galerija/11800295', label: 'HINA Coverage' },
        { url: 'https://www.lusa.pt/foto?from=%2ffotos%3fimageid%3d44033406&imageid=44033422', label: 'LUSA Photos' },
        { url: 'https://news.nate.com/view/20241206n33052', label: 'News Coverage' }
      ]
    },
    {
      id: 2,
      title: 'Elephant Polo Ban Agreement',
      date: 'December 16, 2024',
      location: 'Chitwan, Nepal',
      participants: 'Karunalaya Nepal, Animal Rights Groups, Elephant Cooperative',
      duration: 'Historic agreement achieved',
      description: 'A landmark agreement to end elephant polo in Sauraha, Chitwan. In a historic meeting, representatives from Karunalaya Nepal, Chitwan Animal Save, and Animal Rights Club met with Elephant Polo organizers and United Elephant Cooperative members to permanently end this practice. The agreement, signed by organizer Mr. Ram Kumar Aryal, Chitwan Animal Save organizer Mr. Kalyan Shrestha, Animal Rights Club founder Mr. Surajan Shrestha, and Karunalaya team members Ishwari Prasad Neure and Sudha Timalshena, marks a significant victory for elephant welfare in Nepal.',
      image: '/lovable-uploads/9442832c-6f6d-4223-8a6a-06f81e72050a.png',
      meetingPhotos: [
        '/lovable-uploads/c580fd1f-0181-43d3-8727-7319a5acf1ba.png',
        '/lovable-uploads/db0455b0-c35d-4cf5-b6f2-7ca0e422d2cc.png'
      ],
      agreementPhoto: '/lovable-uploads/34696669-3b87-4382-93bd-7117ba146d08.png'
    },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto mb-16">
              <div className="text-center mb-12">
                <h1 className="section-title text-4xl md:text-5xl">Our Activities</h1>
                <p className="text-xl text-foreground/80 mt-4">Advocating for animal rights and ethical treatment</p>
              </div>
              
              <div className="prose prose-lg mx-auto text-center">
                <p className="lead text-xl text-foreground/80">
                  At Karunalaya Nepal, we actively campaign against animal exploitation and advocate for 
                  ethical treatment of animals. Our initiatives focus on creating awareness and driving 
                  policy changes to protect animal rights.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-12 mb-16">
              {activities.map((activity) => (
                <div key={activity.id} className="card bg-card hover-lift overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="aspect-w-16 aspect-h-9">
                      <img 
                        src={activity.image} 
                        alt={activity.title} 
                        className="object-cover w-full h-full rounded-lg"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-semibold mb-3">{activity.title}</h3>
                      
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
                      
                      {activity.links && (
                        <div className="mt-4">
                          <h4 className="text-sm font-medium mb-2">Media Coverage:</h4>
                          <div className="flex flex-wrap gap-2">
                            {activity.links.map((link, index) => (
                              <a 
                                key={index}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-3 py-1 bg-secondary rounded-full text-xs font-medium text-brand-600 hover:bg-brand-100 transition-colors"
                              >
                                {link.label}
                                <ExternalLink className="ml-1 h-3 w-3" />
                              </a>
                            ))}
                          </div>
                        </div>
                      )}

                      {activity.id === 2 && (
                        <div className="mt-4">
                          <div className="flex items-center text-brand-600 mb-2">
                            <FileText className="h-4 w-4 mr-1.5" />
                            <span className="font-medium">Agreement Details</span>
                          </div>
                          <p className="text-sm text-foreground/80 mb-4">
                            Following extensive discussions, all parties signed an agreement to permanently end elephant polo activities in Chitwan. This historic agreement recognizes the welfare concerns associated with using elephants for entertainment and marks a significant step forward for animal rights in Nepal.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  {activity.id === 2 && (
                    <div className="p-6 pt-0">
                      <h4 className="font-medium mb-3">Meeting Documentation</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {activity.meetingPhotos.map((photo, index) => (
                          <div key={index} className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden">
                            <img 
                              src={photo} 
                              alt={`Meeting photo ${index + 1}`} 
                              className="object-cover w-full h-full"
                            />
                          </div>
                        ))}
                        <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden">
                          <img 
                            src={activity.agreementPhoto} 
                            alt="Agreement document" 
                            className="object-cover w-full h-full"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                            <span className="text-white p-3 text-sm">Signed Agreement Document</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
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
