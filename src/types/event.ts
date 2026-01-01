export type EventType = 'past' | 'upcoming';
export type EventStatus = 'completed' | 'coming-soon';

export interface Event {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  date: string;
  location: string;
  type: EventType;
  route: string;
  logo: string;
  status: EventStatus;
  images?: string[];
  registerLink?: string;
  longDescription?: string;
  organizer: string;
  participants: number;
}
