import { ProfileData } from '@/app/Types/Profile/ProfileTypes'

export const defaultProfileData: ProfileData = {
  profilePic: '/profile/profileCover.jpg',
  aboutMe: 'With over 10 years of experience in real estate...',
  interests: [
    'Luxury Properties',
    'Market Analysis',
    'Urban Development',
    'Property Investment',
  ],
  personalInfo: {
    name: 'John Doe',
    email: 'johndoe@example.com',
    phone: '+1 (555) 23-4567',
    location: 'Spain, Europe',
    languages: ['Spanish', 'English', 'French'],
  },
  membership: {
    plan: 'Premium',
    joinedOn: 'August 15, 2024',
    nextBillingDate: 'September 15, 2024',
  },
  reviewedProperties: [
    {
      imageUrl: '/profile/LuxuryCondo.jpg',
      title: 'Luxury Condo',
      price: '$1,200,000',
      location: 'New York, NY',
    },
    {
      imageUrl: '/profile/BeachfrontVilla.jpg',
      title: 'Beachfront Villa',
      price: '$3,500,000',
      location: 'Miami, FL',
    },
    {
      imageUrl: '/profile/DowntownOffice.jpg',
      title: 'Downtown Office Space',
      price: '$5,000/month',
      location: 'Chicago, IL',
    },
  ],
  isPublic: true,
  testimonial:
    'I cant express how thrilled I am with the exceptional service I received from Global Property.',
  comments: [
    {
      property: 'Luxury Condo',
      rating: 5,
      comment:
        'Absolutely love this villa! The views are breathtaking, and the amenities are top-notch. Highly recommend!',
    },
    {
      property: 'Beachfront Villa',
      rating: 4,
      comment:
        'I attended an open house here, and it was stunning! The layout is perfect for entertaining guests.',
    },
    {
      property: 'Downtown Office Space',
      rating: 4,
      comment:
        'Beautiful property, but I wish there were more outdoor seating options. Overall, a fantastic experience!',
    },
    {
      property: 'Office Space',
      rating: 3,
      comment:
        'Thanks for sharing! Im in the market for a luxury home, and these tips are invaluable.',
    },
  ],
}
