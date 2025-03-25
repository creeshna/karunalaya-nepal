
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import PageTransition from '../components/layout/PageTransition';
import { 
  CalendarDays, 
  Users, 
  Clock, 
  MapPin, 
  ExternalLink, 
  FileText, 
  Scale,
  PawPrint,
  Leaf
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Activities = () => {
  // Organized activities by category
  const categories = [
    {
      id: 'human-rights',
      title: 'Human Rights',
      icon: Scale,
      iconColor: 'text-red-600',
      description: 'Our human rights initiatives focus on education, awareness, and advocacy to promote and protect fundamental rights for all.',
      activities: [
        {
          id: 3,
          title: 'Human Rights Awareness Program at Bishwa Prakash Secondary School',
          date: 'November 10, 2024',
          location: 'Bishwa Prakash Secondary School, Bharatpur-15 Mangalpur, Chitwan',
          participants: '71 students from grades 9 and 10',
          duration: '1 day workshop',
          description: 'Karunalaya Nepal Team held a Human Rights Education Awareness Program at Bishwa Prakash Secondary School. We discussed what is human rights and the current human rights situation, challenges and ways to solve them with 71 students from grades 9 and 10. It was great to see the students actively participate and share their thoughts. This awareness class collaborated with Amnesty International Nepal.',
          image: '/lovable-uploads/9442832c-6f6d-4223-8a6a-06f81e72050a.png',
        },
        {
          id: 4,
          title: 'Human Rights Education Program with Better Chitwan Organization',
          date: 'March 17, 2024',
          location: 'Better Chitwan Organization, Bharatpur-7, Chitwan',
          participants: '35 school level graduate students',
          duration: 'School Led Leadership (SL2) Campaign',
          description: 'Karunalaya Nepal Team held a Human Rights Education Awareness Program at Better Chitwan Organization as part of their School Led Leadership (SL2) Campaign. We discussed what is human rights and the current human rights situation, challenges and ways to solve them with 35 school level graduate students. It was great to see the students actively participate and share their thoughts. This awareness class collaborated with Amnesty International Nepal.',
          image: '/lovable-uploads/c580fd1f-0181-43d3-8727-7319a5acf1ba.png',
        }
      ]
    },
    {
      id: 'animal-welfare',
      title: 'Animal Welfare',
      icon: PawPrint,
      iconColor: 'text-amber-600',
      description: 'We advocate for the ethical treatment of animals and work to end cruelty and exploitation in all its forms.',
      activities: [
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
          agreementPhoto: '/lovable-uploads/34696669-3b87-4382-93bd-7117ba146d08.png',
          links: [
            { url: 'https://www.linkedin.com/posts/creeshna_banliveexport-voiceforthevoiceless-bethechange-activity-7210120130784075776-yVwY?utm_source=share&utm_medium=member_desktop&rcm=ACoAABm9M4EBgnLyvIDUw2MsLR5umD2gHg6wfCY', label: 'Ban Live Export Campaign' },
            { url: 'https://www.linkedin.com/posts/creeshna_togetheragainstinjustice-stopanimalsacrifice-activity-7250032570690641920-OgYw?utm_source=share&utm_medium=member_desktop&rcm=ACoAABm9M4EBgnLyvIDUw2MsLR5umD2gHg6wfCY', label: 'Stop Animal Sacrifice' }
          ]
        },
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
        }
      ]
    },
    {
      id: 'environmental-conservation',
      title: 'Environmental Conservation',
      icon: Leaf,
      iconColor: 'text-green-600',
      description: 'Our environmental initiatives focus on sustainability, conservation, and raising awareness about ecological challenges.',
      activities: [
        {
          id: 5,
          title: 'School Awareness Program on Plastic Types & Waste Prevention',
          date: 'August 12, 2024',
          location: 'Various schools in Chitwan',
          participants: 'School students and teachers',
          duration: 'Ongoing program',
          description: 'As part of Project CAP (Chitwan Against Plastic), we conducted awareness sessions in local schools about different types of plastic, their environmental impact, and how to prevent plastic waste leakage. These sessions aim to educate the younger generation on responsible waste management practices.',
          image: '/lovable-uploads/db0455b0-c35d-4cf5-b6f2-7ca0e422d2cc.png',
          links: [
            { url: 'https://www.linkedin.com/posts/creasion_internationalyouthday-projectcap-creasion-ugcPost-7228757103954284546-LaPS?utm_source=share&utm_medium=member_desktop&rcm=ACoAABm9M4EBgnLyvIDUw2MsLR5umD2gHg6wfCY', label: 'International Youth Day' }
          ]
        },
        {
          id: 6,
          title: 'Volunteers for Project CAP',
          date: 'September 14, 2024',
          location: 'Chitwan, Nepal',
          participants: 'Local volunteers and conservation experts',
          duration: 'Ongoing campaign',
          description: 'Our volunteers joined Project CAP (Chitwan Against Plastic) to combat plastic pollution in local waterways and communities. Through clean-up drives, awareness campaigns, and policy advocacy, we're working towards a plastic-free Chitwan.',
          image: '/lovable-uploads/34696669-3b87-4382-93bd-7117ba146d08.png',
          links: [
            { url: 'https://www.linkedin.com/posts/creasion_volunteersforchange-projectcap-creasion-ugcPost-7238885359231614976-Y61w?utm_source=share&utm_medium=member_desktop&rcm=ACoAABm9M4EBgnLyvIDUw2MsLR5umD2gHg6wfCY', label: 'Volunteers for Change' }
          ]
        }
      ]
    }
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
            
            {categories.map((category, categoryIndex) => (
              <div key={category.id} className="mb-20">
                <div className="flex items-center gap-3 mb-8">
                  <div className={`rounded-full w-10 h-10 flex items-center justify-center ${category.iconColor} bg-white`}>
                    <category.icon className="h-6 w-6" />
                  </div>
                  <h2 className="text-3xl font-semibold">{category.title}</h2>
                </div>
                
                <p className="text-lg mb-8 max-w-3xl">{category.description}</p>
                
                <div className="grid grid-cols-1 gap-12">
                  {category.activities.map((activity) => (
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
                              <h4 className="text-sm font-medium mb-2">Related Links:</h4>
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
                        </div>
                      </div>

                      {activity.id === 2 && activity.meetingPhotos && (
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
                            {activity.agreementPhoto && (
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
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
            
            <div className="flex justify-center mt-12">
              <Link to="/contact" className="btn btn-primary">
                Get Involved with Our Activities
              </Link>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Activities;
