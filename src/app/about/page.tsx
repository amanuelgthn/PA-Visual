import React from 'react';
import Image from 'react-bootstrap/Image';
import { Container, Row, Col } from 'react-bootstrap';

function About() {
  return (
    <div style={{ position: 'relative' }}>
      <Container fluid className="p-0">
        {/* the image and its content */}
        <Row noGutters>
          <Col>
          <div className="image-container" style={{ position: 'relative', overflow: 'hidden' }}>
              <Image src="/image.png"  className="img-fluid w-100" style={{ height: '100vh', objectFit: 'cover' }} />
             
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
                  top: '55%',
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
                  top: '70%',
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
            <div className="card" style={{ backgroundColor: "#8FB1BF", position: 'relative', overflow: 'hidden', height: "800px" }}>
              <div className="card-body">
                <h5 className="card-title"
                  style={{
                    marginLeft:"180px",
                    marginTop:"100px",
                    color: '#FFFFFF',
                    textAlign: 'left',
                    fontSize: '1.8em',
                    textShadow: '1px 1px #000000',
                    justifyContent: 'center'
                  }}>
                  OUR HISTORY
                </h5>
                {/* INNER CARD */}
              <Row style={{ marginTop: '100px' }}>
                  <Col xs={12} md={4}>
                    <div style={{
                      background: 'linear-gradient(60deg, rgba(255,255,255,1), rgba(171,196,206,1))',
                      border: '1px solid #FFFFFF',
                      borderRadius:"20px",
                      opacity: '30',
                      height: '100px',
                      width:"1000px",
                      margin: '10px',
                      marginLeft:"180px",
                      textAlign:"center",
                      fontSize: '1em',
                        padding: '10px'

                    }}>
                    Founded in [Year], Property Advisor was born out of a passion for luxury real estate and a vision to redefine the way high-end property transactions are conducted. Over the years, we have grown from a small team of dedicated professionals into a renowned company known for our personalized approach and cutting-edge technology.
                    </div>
                  </Col>
                  <Col xs={12} md={4}>
                    <div style={{
                      background: 'linear-gradient(60deg, rgba(255,255,255,1), rgba(171,196,206,1))',
                      border: '1px solid #FFFFFF',
                      borderRadius:"20px",
                      opacity: '30',
                      height: '100px',
                      width:"1000px",
                      margin: '10px',
                      marginLeft:"250px",
                      marginTop:"50px",
                      textAlign:"center",
                      fontSize: '1em',
                        padding: '10px'

                    }}>
                    Founded in [Year], Property Advisor was born out of a passion for luxury real estate and a vision to redefine the way high-end property transactions are conducted. Over the years, we have grown from a small team of dedicated professionals into a renowned company known for our personalized approach and cutting-edge technology.
                    </div>
                  </Col>
                  <Col xs={12} md={4}>
                    <div style={{
                      background: 'linear-gradient(60deg, rgba(255,255,255,1), rgba(171,196,206,1))',
                      border: '1px solid #FFFFFF',
                      borderRadius:"20px",
                      opacity: '30',
                      height: '100px',
                      width:"1000px",
                      margin: '10px',
                      marginLeft:"180px",
                      marginTop:"50px",
                      textAlign:"center",
                      fontSize: '1em',
                        padding: '10px'

                    }}>
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

        <div style={{display: "flex", justifyContent: "center", alignItems: "center", marginTop:"30px"}}>
          <h1 style={{color: "#C98E59",fontSize:"40px"}}>
       
          OUR TEAM
        </h1>
        </div>
        </Col>
        </Row>

      {/* the OUR TEAM content part */}
        <Row noGutters>
  <Col>
    <div className="card" style={{ position: 'relative', overflow: 'hidden', height: "300px", marginTop: "30px", marginBottom:"170px" }}>
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
      style={{ position: 'relative', zIndex: 1, display: 'flex', justifyContent: 'space-around', alignItems: 'center', height: '100%' ,marginTop:"-30px"}}>
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
    <div className="card" style={{ position: 'relative', overflow: 'hidden', height: "600px", marginTop: "30px" }}>
      <div 
        style={{
          backgroundColor: "#F2F2F2",
          position: 'absolute', 
          top: 0, 
          right: 0, 
          bottom: 0, 
          left: 0, 
          opacity: 0.4,
          zIndex: 0
        }}
      ></div>

     <div className="card-body" style={{ position: 'relative', zIndex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
     <div style={{ textAlign: 'center', width: '80%' }}>

        <p style={{ color: '#000000', fontSize: '1em'}}>
        Our team at Global Property is composed of experienced professionals who are experts in their respective fields.<br />
         We pride ourselves on our collaborative approach, working together to deliver the best results for our clients.<br />
        Our teams cover architecture, interior design, partners, a team of AI experts, real estate, management, and our CEO.
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
