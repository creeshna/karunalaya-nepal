
import { LucideIcon } from 'lucide-react';

export interface Link {
  url: string;
  label: string;
}

export interface Activity {
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
}

export interface Category {
  id: string;
  title: string;
  icon: LucideIcon;
  iconColor: string;
  description: string;
  activities: Activity[];
}
