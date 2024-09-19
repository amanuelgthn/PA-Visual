'use client'
import { Flex, Typography } from 'antd'
import React, { useState } from 'react'
import CustomModal from '../../About/CustomModal/CustomModal'
const { Title } = Typography
import './TeamsCarousel.scss'

export type TeamsMemberTypes = {
  img: string
  name: string
  position: string
  description: string
  languages: string[]
  projects: string[]
}

type TeamsCarouselTypes = {
  teamMembers: TeamsMemberTypes[]
}

const TeamsCarousel = ({ teamMembers }: TeamsCarouselTypes) => {
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
          <div className='carousel'>
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={`carousel-item ${activeIndex === index ? 'active' : ''}`}
                onClick={() => handleClick(index)}
                style={{ backgroundImage: `url(${member.img})` }}
              >
                <div className='carousel-content-container'>
                  {activeIndex === index && (
                    <div className='carousel-content'>
                      <div className='title-container'>
                        <Title level={3}>{member.name}</Title>
                        <p>{member.position}</p>
                      </div>
                      <button
                        className='learn-more-btn'
                        onClick={(e) => {
                          e.stopPropagation()
                          showModal(member)
                        }}
                      >
                        <span className='plus-icon'></span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Flex>
      </Flex>

      <CustomModal isOpen={modalVisible} onClose={handleCloseModal}>
        {selectedMember && (
          <div className='modal-content-wrapper'>
            <img src={selectedMember.img} alt={selectedMember.name} />
            <div className='open_modal_content'>
              <Title level={3}>{selectedMember.name}</Title>
              <Title level={4}>{selectedMember.position}</Title>
              <div className='paragraph_modal_container'>
                <p>{selectedMember.description}</p>
              </div>

              <div className='open_modal_container_langauges'>
                <div className='open_modal_languages_container'>
                  <Title level={4}>Languages</Title>
                  <ul>
                    {selectedMember.languages.map((language, index) => (
                      <li key={index}>{language}</li>
                    ))}
                  </ul>
                </div>

                <div className='open_modal_projects_container'>
                  <Title level={4}>Projects</Title>
                  <ul>
                    {selectedMember.projects.map((project, index) => (
                      <li key={index}>{project}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </CustomModal>
    </Flex>
  )
}

export default TeamsCarousel
