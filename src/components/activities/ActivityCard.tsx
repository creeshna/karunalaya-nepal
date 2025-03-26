
import React from 'react';
import { CalendarDays, Users, Clock, MapPin, ExternalLink } from 'lucide-react';
import { Link } from '@/types/activity';

interface ActivityCardProps {
  activity: {
    id: number;
    title: string;
    date: string;
    location: string;
    participants: string;
    duration: string;
    description: string;
    image: string;
    meetingPhotos?: string[];
    agreementPhoto?: string;
    links?: Link[];
  };
}

const ActivityCard: React.FC<ActivityCardProps> = ({ activity }) => {
  return (
    <div className="bg-white shadow-sm hover-lift overflow-hidden rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="aspect-w-16 aspect-h-9">
          <img 
            src={activity.image} 
            alt={activity.title} 
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-semibold mb-3 text-foreground">{activity.title}</h3>
          
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
          
          {activity.links && activity.links.length > 0 && (
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
  );
};

export default ActivityCard;
