import React from 'react';
import Image from 'react-bootstrap/Image';
import { Container, Row, Col } from 'react-bootstrap';
// import SliderAboutUs from '../components/About/';
import {Navbar} from '../components/Navbar/Navbar';


function About() {
  return (
    <div style={{ position: 'relative' }}>
      <div className="navbar-container">
        <Navbar />
      </div>
      <Container fluid className="p-0">
        {/* the image and its content */}
        <Row noGutters>
          <Col>

            <div className="image-container" style={{ position: 'relative', width: '100vw', overflow: 'hidden', height: '100vh' }}>

              <Image src="/image.png" className="img-fluid w-100" style={{ height: '100%', width: '100%', objectFit: 'cover', opacity: 0.8 }} />

              <div
                style={{
                  position: 'absolute',
                  top: '35%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <Image src="/Group.png" fluid />
              </div>

              <div
                className="text-overlay title"
                style={{
                  position: 'absolute',
                  top: '58%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  color: '#A66844',
                  textShadow: '-1px -1px #000000',
                  textAlign: 'center',
                  fontSize: '2.5em',
                  fontWeight: 'bold',
                }}
              >
                ABOUT US
              </div>

              <div
                className="text-overlay"
                style={{
                  position: 'absolute',
                  top: '78%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  color: '#74471F',
                  textAlign: 'center',
                  fontSize: '1.2em',
                  justifyContent: 'center',
                  padding: '0 20px',
                }}
              >
                We are committed to providing exceptional service and expertise in the luxury real estate market. With a focus on innovation and excellence, we have established ourselves as leaders in facilitating the purchase, sale, and investment of high-end properties across Europe and internationally.
              </div>
            </div>
          </Col>
        </Row>

        {/* the OUR HISTORY part */}

        <Row noGutters>
          <Col>
            <div className="card" style={{ backgroundColor: "#8FB1BF", position: 'relative', overflow: 'hidden', minHeight: "800px" }}>
              <div className="card-body">
                <h5 className="card-title"
                  style={{
                    marginLeft: "15%",
                    marginTop: "100px",
                    color: '#FFFFFF',
                    textAlign: 'left',
                    fontSize: '1.8em',
                    textShadow: '1px 1px #000000',
                    justifyContent: 'center'
                  }}>
                  OUR HISTORY
                </h5>

                {/* INNER CARD */}
                <Row style={{ marginTop: '90px', marginBottom: "50px" }}>
                  <Col xs={12} md={4}>
                    <div className="history-card">
                      Founded in [Year], Property Advisor was born out of a passion for luxury real estate and a vision to redefine the way high-end property transactions are conducted. Over the years, we have grown from a small team of dedicated professionals into a renowned company known for our personalized approach and cutting-edge technology.
                    </div>
                  </Col>
                  <Col xs={12} md={4}>
                    <div className="history-card" style={{ marginTop: "50px", marginRight: "100px" }}>
                      Founded in [Year], Property Advisor was born out of a passion for luxury real estate and a vision to redefine the way high-end property transactions are conducted. Over the years, we have grown from a small team of dedicated professionals into a renowned company known for our personalized approach and cutting-edge technology.
                    </div>
                  </Col>
                  <Col xs={12} md={4}>
                    <div className="history-card" style={{ marginTop: "50px", }}>
                      Founded in [Year], Property Advisor was born out of a passion for luxury real estate and a vision to redefine the way high-end property transactions are conducted. Over the years, we have grown from a small team of dedicated professionals into a renowned company known for our personalized approach and cutting-edge technology.
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>



        {/* the OUR TEAM part */}
        <Row noGutters>
          <Col>

            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "30px" }}>
              <h1 style={{ color: "#C98E59", fontSize: "40px" }}>

                OUR TEAM
              </h1>
            </div>
          </Col>
        </Row>

        {/* the OUR TEAM content part */}
        <Row noGutters>
          <Col>
            <div className="card" style={{ position: 'relative', overflow: 'hidden', height: "300px", marginTop: "30px", marginBottom: "170px" }}>
              <div
                style={{
                  backgroundColor: "#C98E59",
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0,
                  opacity: 0.4,
                  zIndex: 0
                }}
              ></div>

              <div className="card-body"
                style={{ position: 'relative', zIndex: 1, display: 'flex', justifyContent: 'space-around', alignItems: 'center', height: '100%', marginTop: "-30px" }}>
                <div style={{ textAlign: 'center', width: '45%' }}>

                  <h5 className="card-title"
                    style={{ color: '#74471F', fontSize: '1.8em' }}
                  >
                    Mission
                  </h5>

                  <p style={{ color: '#000000', fontSize: '1em' }}>
                    To provide our clients with unparalleled service and expertise,<br />
                    ensuring a seamless and rewarding experience in the luxury real estate market.
                  </p>
                </div>

                <div style={{ textAlign: 'center', width: '45%' }}>
                  <h5 className="card-title"
                    style={{ color: '#74471F', fontSize: '1.8em' }}>
                    VISION

                  </h5>
                  <p style={{ color: '#000000', fontSize: '1em' }}>
                    To be the leading luxury real estate advisory firm,<br />
                    known for our innovative solutions, exceptional client service,
                    and commitment to excellence.
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        {/* the Slider content part */}
        <Row noGutters>
          <Col>
            <div style={{ backgroundColor: "#F2F2F2", position: 'relative', zIndex: 1, display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
              <div style={{
                textAlign: 'center',
                marginBottom: "10px",
                padding: "20px",
                width: '100%',
                height: '800px',
              }}>
                <h5
                  style={{
                    color: '#000000',
                    fontSize: '1em',
                    opacity: "0.8",
                    overflow: 'hidden',

                  }}
                >
                  Our team at Global Property is composed of experienced professionals who are experts in their respective fields.<br />
                  We pride ourselves on our collaborative approach, working together to deliver the best results for our clients.<br />
                  Our teams cover architecture, interior design, partners, a team of AI experts, real estate, management, and our CEO.
                </h5>
                <div style={{ overflow: "hidden", marginTop: "50px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {/* <SliderAboutUs /> */}
                </div>
              </div>
            </div>

          </Col>
        </Row>
        {/* the OUR approach part */}
        <Row noGutters>
          <Col>

            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "30px" }}>
              <h1 style={{ color: "#C98E59", fontSize: "40px" }}>

                OUR APPROACH
              </h1>
            </div>
          </Col>
        </Row>
        <Row noGutters>
          <Col>
            <div className="card" style={{ backgroundColor: "#FFFFFF", position: 'relative', overflow: 'hidden', height: "250px", marginTop: "10px", marginBottom: "100px" }}>
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "40px" }}>
                <Image src="/next.png" style={{ width: "20px" }} />
              </div>
              <div className="card-body"

                style={{ position: 'relative', display: 'flex', justifyContent: 'space-around', alignItems: 'center', height: '100%' }}>
                <div style={{ textAlign: 'center', width: '65%' }}>


                <p style={{ color: '#000000', fontSize: '1em', marginBottom: "40" }}>
                  At Global Property, we believe in a personalized approach to real estate. We take the time to understand our clients&apos; needs and preferences,<br />
                  providing tailored solutions that exceed their expectations. Our commitment to innovation drives us to continuously adopt new technologies,<br />
                  such as artificial intelligence, to enhance our services and streamline our processes.

                  To provide our clients with unparalleled service and expertise,<br />
                  ensuring a seamless and rewarding experience in the luxury real estate market.
                </p>

                </div>
              </div>
            </div>
          </Col>
        </Row>
        {/* the question content part */}


        <Row noGutters>
          <Col>

            <div style={{ backgroundColor: "#F2F2F2", height: "300px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>

              <Image src="/logoBlue.png" style={{ width: "300px" }} />

              <h1 style={{ color: "#1F2247", fontSize: "40px", marginBottom: "30px" }}>

                Why Choose Global Property?
              </h1>
            </div>
          </Col>
        </Row>

        ì
        <Row noGutters>
          <Col>
            <div className="card" style={{ position: 'relative', overflow: 'hidden', height: "350px", marginTop: "-20px" }}>
              <div
                style={{
                  backgroundColor: "#F2F2F2",
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0,
                  zIndex: 0
                }}
              ></div>

              <div className="card-body"
                style={{ position: 'relative', zIndex: 1, display: 'flex', justifyContent: 'space-around', alignItems: 'center', height: '100%', marginTop: "-30px" }}>
                <div style={{ textAlign: 'center', width: '45%', display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                  <Image src="/pic1.png" style={{ width: "100px", marginBottom: "20px" }} />

                  <h5 className="card-title"
                    style={{ color: '#1F2247', fontSize: '1.5em', marginBottom: "20px" }}
                  >
                    Expertise in Luxury Real Estate
                  </h5>

                  <p style={{ color: '#000000', fontSize: '1em', opacity: 0.7 }}>
                    Our extensive experience and deep market knowledge set us apart in the luxury real estate sector.

                  </p>
                </div>

                <div style={{ textAlign: 'center', width: '45%', display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                  <Image src="/pic2.png" style={{ width: "100px", marginBottom: "20px" }} />
                  <h5 className="card-title"
                    style={{ color: '#1F2247', fontSize: '1.5em', marginBottom: "30px" }}>
                    Personalized Service

                  </h5>
                  <p style={{ color: '#000000', fontSize: '1em', opacity: 0.7 }}>
                    We tailor our services to meet the unique needs of each client, ensuring a bespoke and satisfying experience.
                  </p>
                </div>

              </div>

            </div>
          </Col>
        </Row>
        <Row noGutters>
          <Col>
            <div className="card" style={{ position: 'relative', overflow: 'hidden', height: "350px", marginTop: "-20px" }}>
              <div
                style={{
                  backgroundColor: "#F2F2F2",
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0,
                  zIndex: 0
                }}
              ></div>

              <div className="card-body"
                style={{ position: 'relative', zIndex: 1, display: 'flex', justifyContent: 'space-around', alignItems: 'center', height: '100%', marginTop: "-30px" }}>
                <div style={{ textAlign: 'center', width: '45%', display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                  <Image src="/pic3.png" style={{ width: "100px", marginBottom: "20px" }} />
                  <h5 className="card-title"
                    style={{ color: '#1F2247', fontSize: '1.5em', marginBottom: "30px" }}
                  >
                    Innovative Solutions
                  </h5>

                  <p style={{ color: '#000000', fontSize: '1em', opacity: 0.7 }}>
                    We leverage the latest technologies, including artificial intelligence, to optimize our operations and deliver superior results.

                  </p>
                </div>

                <div style={{ textAlign: 'center', width: '45%' }}>
                  <Image src="/pic1.png" style={{ width: "100px", marginBottom: "20px" }} />
                  <h5 className="card-title"
                    style={{ color: '#1F2247', fontSize: '1.5em', marginBottom: "30px" }}>
                    Dedicated Team

                  </h5>
                  <p style={{ color: '#000000', fontSize: '1em', opacity: 0.7 }}>
                    Our team of professionals is passionate about real estate and committed to achieving the best outcomes for our clients.
                  </p>
                </div>

              </div>

            </div>
          </Col>
        </Row>

      </Container>

    </div>
  );
}

export default About;
