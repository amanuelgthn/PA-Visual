import React from 'react'
import BlogHeader from '../components/Blog/BlogHeader/BlogHeader'
import NewsAndUpdate from '../components/Blog/NewsAndUpdate/NewsAndUpdate'

const Page = () => {
  const articleData = [
    {
      propertyId: '1',
      cardImg:
        'https://prod.rockmedialibrary.com/api/public/content/ff061825fa8e44bf8108de5c786c0062?v=4c4f7c7a',
      postingDate: 'June 7, 2024',
      cardTitle: 'The Top Trends In Luxury Real Estate',
      cardDescription:
        'Discover the latest trends shaping the luxury real estate market, from architectural styles to lifestyle amenities.',
    },
    {
      propertyId: '2',
      cardImg:
        'https://cdn.pixabay.com/photo/2017/07/08/02/16/house-2483336_640.jpg',
      postingDate: 'July 15, 2024',
      cardTitle: 'Sustainable Architecture: Building the Future',
      cardDescription:
        'Explore how sustainable architecture is revolutionizing the construction industry and what it means for the future of urban living.',
    },
    {
      propertyId: '3',
      cardImg: 'https://images.prop24.com/329516730/Crop600x400',
      postingDate: 'August 3, 2024',
      cardTitle: 'The Rise of Smart Homes: Technology in Real Estate',
      cardDescription:
        'A deep dive into how smart home technology is transforming the real estate market and enhancing the living experience.',
    },
    {
      propertyId: '4',
      cardImg:
        'https://png.pngtree.com/thumb_back/fw800/background/20240614/pngtree-modern-luxurious-real-estate-property-house-background-image_15868464.jpg',
      postingDate: 'September 10, 2024',
      cardTitle: 'Modern Interior Design: Trends to Watch',
      cardDescription:
        'An overview of the latest trends in modern interior design, focusing on minimalism, functionality, and aesthetics.',
    },
    {
      propertyId: '5',
      cardImg:
        'https://images.moneycontrol.com/static-mcnews/2021/12/Housing-trends-4-718x435.jpg?impolicy=website&width=770&height=431',
      postingDate: 'October 5, 2024',
      cardTitle: 'The Impact of Urbanization on Real Estate',
      cardDescription:
        'Understanding the effects of rapid urbanization on the real estate market and the challenges it presents to developers and investors.',
    },
  ]
  const newsData = [
    {
      propertyId: '1',
      cardImg:
        'https://www.bhg.com/thmb/dgy0b4w_W0oUJUxc7M4w3H4AyDo=/1866x0/filters:no_upscale():strip_icc()/living-room-gallery-shelves-l-shaped-couch-ELeyNpyyqpZ8hosOG3EG1X-b5a39646574544e8a75f2961332cd89a.jpg', // Replace with actual image URL
      cardTitle: 'Introducing Our Latest Product Release',
      cardDescription:
        "We're excited to announce the launch of our newest product, designed to revolutionize the way you approach your business.",
    },
    {
      propertyId: '2',
      cardImg:
        'https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/campaigns/stayhome/reflecting-on-the-beauty-of-dubai/hero_aerial-view-of-dubai_1097789900294811459_delpixart.jpg?h=1080&w=1620&modified=20200417094003', // Replace with actual image URL
      cardTitle: 'Company Expansion And New Office Opening',
      cardDescription:
        "We're thrilled to announce the opening of our new office location, expanding our reach and better serving our customers.",
    },
    {
      propertyId: '3',
      cardImg:
        'https://cdn.openart.ai/stable_diffusion/62043dbc7e4de5a1b4943bf41692e22f02674adc_2000x2000.webp', // Replace with actual image URL
      cardTitle: 'Industry Trends And Insights For 2024',
      cardDescription:
        'Stay ahead of the curve with our comprehensive analysis of the latest industry trends and insights.',
    },
    {
      propertyId: '4',
      cardImg:
        'https://static.vecteezy.com/system/resources/previews/023/980/747/large_2x/old-wooden-house-on-the-lake-in-the-middle-of-the-forest-photo.jpeg', // Replace with actual image URL
      cardTitle: 'Sustainable Business Practices in 2024',
      cardDescription:
        "Explore how we're implementing sustainable practices to reduce our environmental footprint and promote eco-friendly business models.",
    },
    {
      propertyId: '5',
      cardImg:
        'https://rnb.scene7.com/is/image/roomandboard/dining_living_01?size=2400,2400&scl=1', // Replace with actual image URL
      cardTitle: 'Customer Success Stories',
      cardDescription:
        'Hear from our customers about how our products and services have helped them achieve their goals and drive success in their businesses.',
    },
  ]
  const teamMembers = [
    {
      img: 'https://www.ultimatebeaver.com/wp-content/uploads/2021/04/photo-gallery-img-02.jpg',
      name: 'John Doe',
      position: 'CEO',
      description:
        'John Doe is the visionary leader of Global Property, bringing over 20 years of experience in real estate and property management. His innovative approach has led the company to new heights.',
      languages: ['English', 'Spanish'],
      projects: ['Project 1', 'Project 2'],
    },
    {
      img: 'https://cdn.goodgallery.com/cf0ef39c-1c83-45f8-b905-c091160e555c/r/0480/2fpgxh16/female-professional-portrait-gray-backdrop.jpg',
      name: 'Jane Smith',
      position: 'Head of Architecture',
      description:
        'Jane Smith leads our architecture team with her keen eye for design and sustainable building practices. She has won numerous awards for her groundbreaking architectural concepts.',
      languages: ['English', 'Spanish'],
      projects: ['Project 1', 'Project 2'],
    },
    {
      img: 'https://img.freepik.com/free-photo/smiling-young-male-professional-standing-with-arms-crossed-while-making-eye-contact-against-isolated-background_662251-838.jpg',
      name: 'Mike Johnson',
      position: 'Lead Interior Designer',
      description:
        'Mike Johnson transforms spaces with his unique blend of functionality and aesthetics. His designs have been featured in top interior design magazines worldwide.',
      languages: ['English', 'Spanish'],
      projects: ['Project 1', 'Project 2'],
    },
    {
      img: 'https://powerpackelements.com/wp-content/uploads/2017/11/Team-memeber-13.png',
      name: 'Sarah Brown',
      position: 'AI Expert',
      description:
        'Sarah Brown is at the forefront of integrating AI into property management. Her innovations have streamlined our processes and improved client satisfaction significantly.',
      languages: ['English', 'Spanish'],
      projects: ['Project 1', 'Project 2'],
    },
    {
      img: 'https://www.columbuspm.org/wp-content/uploads/2015/09/team-member-sample.jpg',
      name: 'David Lee',
      position: 'Real Estate Manager',
      description:
        'David Lees deep understanding of market trends and negotiation skills make him an invaluable asset to our real estate operations. He has closed some of our most significant deals.',
      languages: ['English', 'Spanish'],
      projects: ['Project 1', 'Project 2'],
    },
    {
      img: 'https://cbeyondsal.com/wp-content/uploads/2017/02/team_member_02-540x540.jpg',
      name: 'Emily Chen',
      position: 'Partner Relations',
      description:
        'Emily Chen excels at building and maintaining strong relationships with our partners. Her networking skills have expanded our business opportunities exponentially.',
      languages: ['English', 'Spanish'],
      projects: ['Project 1', 'Project 2'],
    },
    {
      img: 'https://www.gestcall.it/wp-content/uploads/2017/04/team1.jpg',
      name: 'Alex Turner',
      position: 'Project Manager',
      description:
        'Alex Turner ensures that all our projects are completed on time and within budget. His attention to detail and leadership skills keep our teams running smoothly.',
      languages: ['English', 'Spanish'],
      projects: ['Project 1', 'Project 2'],
    },
    {
      img: 'https://www.ultimatebeaver.com/wp-content/uploads/2021/04/photo-gallery-img-02.jpg',
      name: 'John Doe',
      position: 'CEO',
      description:
        'John Doe is the visionary leader of Global Property, bringing over 20 years of experience in real estate and property management. His innovative approach has led the company to new heights.',
      languages: ['English', 'Spanish'],
      projects: ['Project 1', 'Project 2'],
    },
  ]

  return (
    <div
      style={{
        background: 'linear-gradient(180deg, #839096 -65.68%, #2A2E30 79.61%)',
        height: '100%', // Adjust the height as needed
        width: '100%', // Adjust the width as needed
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <BlogHeader dataType='articles' cardData={articleData} />
      <NewsAndUpdate
        teamMembers={teamMembers}
        dataDype='news'
        cardData={newsData}
      />
    </div>
  )
}

export default Page
