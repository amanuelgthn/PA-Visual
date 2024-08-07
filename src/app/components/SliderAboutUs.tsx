'use client';
import React, { useState } from 'react';
import Image from 'react-bootstrap/Image';
import './styles/AboutUs.css';
import { Button, Modal } from 'react-bootstrap';

interface CeoDetails {
  id: number;
  name: string;
  title: string;
  imgSrc: string;
  text: string;
  languages: string;
  projects: string;
}

const ceoDetailsList: CeoDetails[] = [
  {
    id: 1,
    name: 'CEO Name',
    title: 'Chief Executive Officer',
    imgSrc: '/Ceo2.png',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    languages: 'English / Spanish',
    projects: 'Marriot luxury hotel',
  },
  {
    id: 2,
    name: 'CEO Name',
    title: 'Chief Financial Officer',
    imgSrc: '/Ceo.png',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    languages: 'English / Spanish',
    projects: 'Marriot luxury hotel',
  },
  {
    id: 3,
    name: 'CEO Name',
    title: 'Chief Operating Officer',
    imgSrc: '/Ceo4.png',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    languages: 'English / Spanish',
    projects: 'Marriot luxury hotel',
  },
  {
    id: 4,
    name: 'CEO Name',
    title: 'Chief Technology Officer',
    imgSrc: '/Ceo3.png',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    languages: 'English / Spanish',
    projects: 'Marriot luxury hotel',
  },
  {
    id: 5,
    name: 'CEO Name',
    title: 'Chief Marketing Officer',
    imgSrc: '/Ceo5.png',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    languages: 'English / Spanish',
    projects: 'Marriot luxury hotel',
  },
  {
    id: 6,
    name: 'CEO Name',
    title: 'Chief Marketing Officer',
    imgSrc: '/Ceo5.png',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    languages: 'English / Spanish',
    projects: 'Marriot luxury hotel',
  },
  {
    id: 7,
    name: 'CEO Name',
    title: 'Chief Marketing Officer',
    imgSrc: '/Ceo5.png',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    languages: 'English / Spanish',
    projects: 'Marriot luxury hotel',
  },
  {
    id: 8,
    name: 'CEO Name',
    title: 'Chief Marketing Officer',
    imgSrc: '/Ceo5.png',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    languages: 'English / Spanish',
    projects: 'Marriot luxury hotel',
  },
];

function SliderAboutUs() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [selectedCeo, setSelectedCeo] = useState<CeoDetails | null>(null);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % ceoDetailsList.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? ceoDetailsList.length - 1 : prevIndex - 1
    );
  };
  const handleShowModal = (ceo: CeoDetails) => {
    setSelectedCeo(ceo);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedCeo(null);
  };

  const visibleItems = ceoDetailsList.slice(currentIndex, currentIndex + 5);
  if (visibleItems.length < 5) {
    visibleItems.push(...ceoDetailsList.slice(0, 5 - visibleItems.length));
  }

  return (
    <>
      <div className="AboutUs-container">
        <Image
          src="/preslider.png"
          className="arrow prev"
          onClick={handlePrev}
        />
        {visibleItems.map((ceo, index) => (
          <div className="AboutUs-item" key={index}>
            <div className="ceo-card">
              <Image src={ceo.imgSrc} className="ceo-image" />
              <div className="ceo-info">
                <h4>{ceo.name}</h4>
                <p>{ceo.title}</p>
              </div>
              <Button
                className="ceo-button"
                onClick={() => handleShowModal(ceo)}
              >
                Discover
              </Button>
            </div>
          </div>
        ))}
        <Image
          src="/nextslider.png"
          className="arrow next"
          onClick={handleNext}
        />

        {selectedCeo && (
          <>
            <div
              className="modalAbout-overlay"
              onClick={handleCloseModal}
            ></div>

            <Modal
              show={showModal}
              onHide={handleCloseModal}
              className="modalAbout-dialog"
            >
              <div style={{ position: 'relative' }}>
                <Image
                  src="/closeButton.png"
                  onClick={handleCloseModal}
                  style={{
                    width: '30px',
                    height: '30px',
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    cursor: 'pointer',
                    zIndex: 1000,
                  }}
                />
                <Modal.Header style={{ paddingTop: '20px' }}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      width: '1200px',
                    }}
                  >
                    <Image
                      src={selectedCeo.imgSrc}
                      style={{
                        width: '400px',
                        height: '500px',
                        marginRight: '30px',
                        marginLeft: '20px',
                      }}
                    />
                    <div
                      style={{
                        maxWidth: '1000px',
                        display: 'flex',
                        flexDirection: 'column',
                        height: '450px',
                      }}
                    >
                      <div style={{ marginBottom: '20px' }}>
                        <p
                          style={{
                            marginBottom: '10px',
                          }}
                        >
                          <strong>{selectedCeo.name}</strong>
                        </p>
                        <p>{selectedCeo.title}</p>
                      </div>
                      <div
                        style={{
                          flex: 1,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          textAlign: 'justify',
                          width: '600px',
                        }}
                      >
                        <p>
                          <strong></strong> {selectedCeo.text}
                        </p>
                      </div>
                      <div
                        style={{
                          marginTop: '20px',
                          display: 'flex',
                        }}
                      >
                        <div
                          style={{
                            marginBottom: '10px',
                            flex: 1,
                          }}
                        >
                          <p>
                            <strong>Languages:</strong>
                          </p>
                          <p>{selectedCeo.languages}</p>
                        </div>
                        <div style={{ flex: 1 }}>
                          <p>
                            <strong>Projects:</strong>
                          </p>
                          <p>{selectedCeo.projects}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Modal.Header>
              </div>
            </Modal>
          </>
        )}
      </div>
    </>
  );
}

export default SliderAboutUs;
