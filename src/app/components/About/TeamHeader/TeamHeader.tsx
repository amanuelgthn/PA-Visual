'use client'
import React, { useState } from 'react'
import { Flex, Typography } from 'antd'
import './TeamHeader.scss'
import CustomModal from '../CustomModal/CustomModal'
const { Title, Paragraph } = Typography

interface TeamMember {
  image: string
  name: string
  title: string
  description: string
  Languages: string[]
  Projects: string[]
}

const teamMembers: TeamMember[] = [
  {
    image: '/contact/bg.jpg',
    name: 'John Doe',
    title: 'CEO',
    description:
      'John Doe is the visionary leader of Global Property, bringing over 20 years of experience in real estate and property management. His innovative approach has led the company to new heights.',
    Languages: ['English', 'Spanish'],
    Projects: ['Project 1', 'Project 2'],
  },
  {
    image: '/contact/facebook.svg',
    name: 'Jane Smith',
    title: 'Head of Architecture',
    description:
      'Jane Smith leads our architecture team with her keen eye for design and sustainable building practices. She has won numerous awards for her groundbreaking architectural concepts.',
    Languages: ['English', 'Spanish'],
    Projects: ['Project 1', 'Project 2'],
  },
  {
    image: '/contact/form.jpg',
    name: 'Mike Johnson',
    title: 'Lead Interior Designer',
    description:
      'Mike Johnson transforms spaces with his unique blend of functionality and aesthetics. His designs have been featured in top interior design magazines worldwide.',
    Languages: ['English', 'Spanish'],
    Projects: ['Project 1', 'Project 2'],
  },
  {
    image: '/contact/instagram.svg',
    name: 'Sarah Brown',
    title: 'AI Expert',
    description:
      'Sarah Brown is at the forefront of integrating AI into property management. Her innovations have streamlined our processes and improved client satisfaction significantly.',
    Languages: ['English', 'Spanish'],
    Projects: ['Project 1', 'Project 2'],
  },
  {
    image: '/contact/linkedin.svg',
    name: 'David Lee',
    title: 'Real Estate Manager',
    description:
      'David Lees deep understanding of market trends and negotiation skills make him an invaluable asset to our real estate operations. He has closed some of our most significant deals.',
    Languages: ['English', 'Spanish'],
    Projects: ['Project 1', 'Project 2'],
  },
  {
    image: '/contact/linkedin.svg',
    name: 'Emily Chen',
    title: 'Partner Relations',
    description:
      'Emily Chen excels at building and maintaining strong relationships with our partners. Her networking skills have expanded our business opportunities exponentially.',
    Languages: ['English', 'Spanish'],
    Projects: ['Project 1', 'Project 2'],
  },
  {
    image: '/contact/linkedin.svg',
    name: 'Alex Turner',
    title: 'Project Manager',
    description:
      'Alex Turner ensures that all our projects are completed on time and within budget. His attention to detail and leadership skills keep our teams running smoothly.',
    Languages: ['English', 'Spanish'],
    Projects: ['Project 1', 'Project 2'],
  },
]

export const TeamHeader = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [modalVisible, setModalVisible] = useState(false)
  const [selectedMember, setSelectedMember] = useState<
    (typeof teamMembers)[0] | null
  >(null)

  const handleClick = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index)
  }

  const showModal = (member: (typeof teamMembers)[0]) => {
    setSelectedMember(member)
    setModalVisible(true)
  }

  const handleCloseModal = () => {
    setModalVisible(false)
  }

  return (
    <Flex vertical className='team-container'>
      <Flex className='wrapper-team'>
        <Flex className='wrapper-assist-team' vertical>
          <Title level={2} className='team-header'>
            OUR TEAM
          </Title>
          <Paragraph className='team-description'>
            Our team at Global Property is composed of experienced professionals
            who are experts in their respective fields. We pride ourselves on
            our collaborative approach, working together to deliver the best
            results for our clients. Our teams cover architecture, interior
            design, partnerships, AI expertise, real estate, management, and
            executive leadership.
          </Paragraph>

          <div className='carousel'>
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={`carousel-item ${activeIndex === index ? 'active' : ''}`}
                onClick={() => handleClick(index)}
                style={{ backgroundImage: `url(${member.image})` }}
              >
                <div className='carousel-content-container'>
                  {activeIndex === index && (
                    <div className='carousel-content'>
                      <div className='title-container'>
                        <Title level={3}>{member.name}</Title>
                        <p>{member.title}</p>
                      </div>
                      <button
                        className='learn-more-btn'
                        onClick={(e) => {
                          e.stopPropagation()
                          showModal(member)
                        }}
                        aria-label={`Learn more about ${member.name}`}
                      >
                        <span className='plus-icon'></span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <Title level={2} className='approach-header'>
            OUR APPROACH
          </Title>
          <Flex className='icon_down_container'>
            <img className='about_us_icon_down' src='/icons/down.png' alt='' />
            <p>
              At Global Property, we believe in a personalized approach to real
              estate. We take the time to understand our clients needs and
              preferences, providing tailored solutions that exceed their
              expectations. Our commitment to innovation drives us to
              continuously adopt new technologies, such as artificial
              intelligence, to enhance our services and streamline our
              processes.
            </p>
          </Flex>
        </Flex>
      </Flex>

      <CustomModal isOpen={modalVisible} onClose={handleCloseModal}>
        {selectedMember && (
          <>
            <img src={selectedMember.image} alt={selectedMember.name} />
            <div className='open_modal_content'>
              <Title level={3}>{selectedMember.name}</Title>
              <Title level={4}>{selectedMember.title}</Title>
              <div className='paragraph_modal_container'>
                <p>{selectedMember.description}</p>
              </div>

              <div className='open_modal_container_langauges'>
                <div className='open_modal_languages_container'>
                  <Title level={4}>Languages</Title>
                  <ul>
                    {selectedMember.Languages.map((language, index) => (
                      <li key={index}>{language}</li>
                    ))}
                  </ul>
                </div>

                <div className='open_modal_projects_container'>
                  <Title level={4}>Projects</Title>
                  <ul>
                    {selectedMember.Projects.map((project, index) => (
                      <li key={index}>{project}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </>
        )}
      </CustomModal>
    </Flex>
  )
}
