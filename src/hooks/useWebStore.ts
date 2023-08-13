import { create } from 'zustand';

import member1 from '../assets/images/tour_guides/6.webp';
import member2 from '../assets/images/tour_guides/3.webp';
import member3 from '../assets/images/tour_guides/5.webp';
import member4 from '../assets/images/tour_guides/4.webp';
import member6 from '../assets/images/tour_guides/1.webp';
import member5 from '../assets/images/tour_guides/2.webp';

import service1 from '../assets/images/services/4.webp';
import service2 from '../assets/images/services/1.webp';
import service3 from '../assets/images/services/3.webp';
import service4 from '../assets/images/services/2.webp';

import activity1 from '../assets/images/activities/1.png';
import activity2 from '../assets/images/activities/2.png';
import activity3 from '../assets/images/activities/3.png';
import activity4 from '../assets/images/activities/4.png';
import activity5 from '../assets/images/activities/5.png';
import activity6 from '../assets/images/activities/6.png';

import tour1 from '../assets/images/tours/1.webp';
import tour2 from '../assets/images/tours/2.webp';
import tour3 from '../assets/images/tours/3.webp';
import tour4 from '../assets/images/tours/4.webp';
import tour5 from '../assets/images/tours/5.webp';
import tour8 from '../assets/images/tours/8.webp';
import tour9 from '../assets/images/tours/9.webp';
import tour10 from '../assets/images/tours/10.webp';

type Address = {
  address: string;
  zipCode: number;
  state: string;
};

type SocialMedia = {
  id: string;
  link: string;
  icon: string;
};

export type TeamMember = {
  id: number;
  name: string;
  image: string;
  role: string;
};

type Testimonial = {
  id: number;
  name: string;
  image: string;
  rating: number;
  message: string;
  role: string;
};

type Service = {
  id: number;
  service: string;
  body: string;
  image: string;
};

type Stat = {
  icon: string;
  qty: string;
  stat: string;
};

type Activity = {
  icon: string;
  activity: string;
  destinations: number;
};

export type Tour = {
  id: number;
  image: string;
  tour: string;
  rating: number;
  place: string;
};

const useWebInfo = create(() => ({
  contact_: '+256 7080 83734' as string,
  email_: 'tssafariandtours@tourism.com' as string,
  address_: {
    address: 'Katabi Stage',
    zipCode: 10101,
    state: 'Entebbe',
  } as Address,
  socialMedia_: [
    {
      id: 'facebook',
      link: 'https://www.facebook.com/tssafariandtours',
      icon: 'icon-social-facebook',
    },
    {
      id: 'twitter',
      link: 'https://www.telegram.com/@tssafariandtours',
      icon: 'icon-social-twitter',
    },
    {
      id: 'instagram',
      link: 'https://www.instagram.com/tssafariandtours',
      icon: 'icon-social-instagram',
    },
    {
      id: 'linkedin',
      link: 'https://www.linkedin.com/tssafariandtours',
      icon: 'icon-social-linkedin',
    },
  ] as SocialMedia[],
  teamMembers_: [
    {
      id: 1,
      name: 'William Scott',
      image: member6,
      role: 'Tour Supervisor',
    },
    {
      id: 2,
      name: 'Jennie Bennett',
      image: member5,
      role: 'Travel Agent',
    },
    {
      id: 3,
      name: 'James Hardy',
      image: member4,
      role: 'Travel Agent',
    },
    {
      id: 4,
      name: 'Yen Wilson',
      image: member3,
      role: 'Travel Agent',
    },
    {
      id: 5,
      name: 'Theresa Bailey',
      image: member2,
      role: 'Travel Agent',
    },
    {
      id: 5,
      name: 'Raymond Davis',
      image: member1,
      role: 'Travel Agent',
    },
  ] as TeamMember[],
  testimonials_: [
    {
      id: 1,
      name: 'Kenneth Anthony',
      image: member1,
      rating: 4,
      message:
        'Thus security stop happy move attention position enough economic exist action prove likely they front lay join describe nation investment sense us travel into movement forget.',
      role: 'Traveler',
    },
    {
      id: 2,
      name: 'Jennifer Morgan',
      image: member2,
      rating: 4.5,
      message:
        'Popular station best piece color top fight rise prove society like consider myself stock tax role laugh machine also window soldier glass word recent throughout firm.',
      role: 'Traveler',
    },
    {
      id: 3,
      name: 'Katrina Kirk',
      image: member3,
      rating: 4,
      message:
        'Any dark customer as increase call change edge thus out send heart read control become seven glass conference somebody type loss example cell lose share opportunity.',
      role: 'Traveler',
    },
    {
      id: 4,
      name: 'Travis Carroll',
      image: member4,
      rating: 3.5,
      message:
        'Forward fill difficult remain join situation few none listen between art cold community people finish street goal listen sea nice manage region night director production join represent.',
      role: 'Traveler',
    },
    {
      id: 5,
      name: 'Jessica Simpson',
      image: member5,
      rating: 5,
      message:
        'Role put professor everybody record strong west trade claim to small reduce whether purpose better question season forward major sister remain represent rich.',
      role: 'Traveler',
    },
    {
      id: 6,
      name: 'Jeffrey Mendoza',
      image: member6,
      rating: 4,
      message:
        'Party significant edge stand personal officer type environment us conference then talk be quickly site thousand it notice site resource themselves represent or arrive weight.',
      role: 'Traveler',
    },
  ] as Testimonial[],
  services_: [
    {
      id: 1,
      service: 'Handpicked Hotels',
      body: "So why wait? Start planning your dream vacation today! Simply browse through our website to see all of the amazing tours we offer, and don't hesitate to contact us with any questions. We can't wait to help you plan the trip of a lifetime.",
      image: service2,
    },
    {
      id: 2,
      service: 'Hotel Dishes',
      body: "So why wait? Start planning your dream vacation today! Simply browse through our website to see all of the amazing tours we offer, and don't hesitate to contact us with any questions. We can't wait to help you plan the trip of a lifetime.",
      image: service4,
    },
    {
      id: 3,
      service: 'River Rafting',
      body: "Our experienced travel agents will work with you to create a customized itinerary that meets all of your travel needs and preferences. And with our wide range of tour options, you're sure to find something that fits your budget and interests.",
      image: service3,
    },
    {
      id: 4,
      service: 'Travel Insurance',
      body: "Our experienced travel agents will work with you to create a customized itinerary that meets all of your travel needs and preferences. And with our wide range of tour options, you're sure to find something that fits your budget and interests.",
      image: service1,
    },
  ] as Service[],
  stats_: [
    {
      icon: 'icon-people',
      qty: '500K+',
      stat: 'Satisfied Clients',
    },
    {
      icon: 'icon-magic-wand',
      qty: '250K+',
      stat: 'Awards Achieve',
    },
    {
      icon: 'icon-user-follow',
      qty: '15K+',
      stat: 'Active Members',
    },
    {
      icon: 'icon-map',
      qty: '10K+',
      stat: 'Tour Destination',
    },
  ] as Stat[],
  activities_: [
    {
      icon: activity1,
      activity: 'Adventure',
      destinations: 15,
    },
    {
      icon: activity2,
      activity: 'Trekking',
      destinations: 13,
    },
    {
      icon: activity3,
      activity: 'Camp Fire',
      destinations: 7,
    },
    {
      icon: activity4,
      activity: 'Off Road',
      destinations: 15,
    },
    {
      icon: activity5,
      activity: 'Camping',
      destinations: 13,
    },
    {
      icon: activity6,
      activity: 'Exploring',
      destinations: 25,
    },
  ] as Activity[],
  tours_: [
    {
      id: 1,
      image: tour1,
      tour: 'Kidepo Valley Park',
      rating: 5,
      place: 'Rakai',
    },
    {
      id: 2,
      image: tour2,
      tour: 'Bwindi National Museum',
      rating: 4.5,
      place: 'Mbarara',
    },
    {
      id: 3,
      image: tour3,
      tour: 'Lake Victoria',
      rating: 5,
      place: 'Entebbe',
    },
    {
      id: 5,
      image: tour5,
      tour: 'Kazinga Channel',
      rating: 4.5,
      place: 'Mbarara',
    },
    {
      id: 4,
      image: tour4,
      tour: 'Kampala View Balcony',
      rating: 3.7,
      place: 'Kampala',
    },
    {
      id: 8,
      image: tour8,
      tour: 'Ease African Rift Valley',
      rating: 2,
      place: 'Busiro',
    },
    {
      id: 9,
      image: tour9,
      tour: 'Beach English Breakfast',
      rating: 3.5,
      place: 'Kampala',
    },
    {
      id: 10,
      image: tour10,
      tour: 'Seychelles Island',
      rating: 4,
      place: 'Kenya Coast',
    },
  ] as Tour[],
}));

export default useWebInfo;
