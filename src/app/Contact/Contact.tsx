'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import '@fontsource/montserrat';

export default function Contact() {
  const hrStyle = {
    border: '0',
    borderTop: '1px solid #C98E59',
    maxWidth: '30%',
    margin: '30px auto',
    justifyContent: 'center',
  };

  const ContactForm = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
      setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return (
      <div className="Contact-Form">
        <form
          id="form"
          name="Contact-Form"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '30px',
          }}
          method="post"
          action="/submit-form"
        >
          <div>
            <label
              htmlFor="first-name"
              style={{
                display: 'block',
                margin: '0 0 6px 0',
              }}
            >
              First name
            </label>
            <input
              type="text"
              id="first-name"
              name="first-name"
              placeholder="First name"
              className="first-name"
              autoComplete="given-name"
              required
              style={{
                width: '100%',
                padding: '15px',
                border: '2px solid #e8e9eb',
                borderRadius: '10px',
              }}
            />
          </div>
          <div>
            <label
              htmlFor="last-name"
              style={{
                display: 'block',
                margin: '0 0 6px 0',
              }}
            >
              Last name
            </label>
            <input
              type="text"
              id="last-name"
              name="last-name"
              placeholder="Last name"
              className="last-name"
              autoComplete="family-name"
              required
              style={{
                width: '100%',
                padding: '15px',
                border: '2px solid #e8e9eb',
                borderRadius: '10px',
              }}
            />
          </div>
          <div>
            <label
              htmlFor="email"
              style={{
                display: 'block',
                margin: '0 0 6px 0',
              }}
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email address"
              autoComplete="email"
              required
              style={{
                width: '100%',
                padding: '15px',
                border: '2px solid #e8e9eb',
                borderRadius: '10px',
              }}
            />
          </div>
          <div>
            <label
              htmlFor="message"
              style={{
                display: 'block',
                margin: '0 0 6px 0',
              }}
            >
              Your message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              cols={50}
              autoComplete="off"
              aria-label="Your message"
              aria-required="true"
              style={{
                width: '100%',
                padding: '15px',
                border: '2px solid #e8e9eb',
                borderRadius: '10px',
              }}
            ></textarea>
          </div>

          <button
            className="submit-button"
            type="submit"
            style={{
              padding: '10px',
              backgroundColor: '#c98e59',
              color: '#fff',
              border: 'none',
              cursor: 'pointer',
              borderRadius: '10px',
              boxShadow:
                'rgba(17, 17, 26, 0.17) 0px 4px 16px, rgba(17, 17, 26, 0.17) 0px 8px 24px, rgba(17, 17, 26, 0.17) 0px 16px 56px',
              fontWeight: '500',
            }}
          >
            Submit
          </button>
        </form>
      </div>
    );
  };

  return (
    <div>
      <section
        className="Contact-section"
        style={{ height: '100vh', display: 'flex', flexWrap: 'wrap' }}
      >
        <div
          className="image-container"
          style={{
            position: 'relative',
            width: '100%',
            height: '100vh',
            overflow: 'hidden',
            backgroundImage: 'url("/contact-background-image.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            flexWrap: 'wrap',
          }}
        >
          <div
            className="text-overlay"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              textAlign: 'center',
              color: '#ffffff',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <h1
              style={{
                fontFamily: '"Montserrat", sans-serif',
                fontSize: '60px',
                margin: '0 0 60px 0',
                color: '#a66844',
                textShadow: '1px 0px 2px rgba(66, 68, 90, 1)',
              }}
            >
              Contact us
            </h1>

            <p
              style={{
                fontFamily: '"Montserrat", sans-serif',
                fontSize: '25px',
                margin: '0 0 10px 0',
                color: '#000000',
              }}
            >
              Ready to experience the Property Advisor difference?
            </p>
            <p
              style={{
                fontFamily: '"Montserrat", sans-serif',
                fontSize: '25px',
                margin: '0 0 10px 0',
                color: '#000000',
              }}
            >
              Contact us today to learn more about how we can help you
            </p>
            <p
              style={{
                fontFamily: '"Montserrat", sans-serif',
                fontSize: '25px',
                margin: '0 0 10px 0',
                color: '#000000',
              }}
            >
              achieve your real estate goals.
            </p>
          </div>
        </div>
      </section>

      <section
        className="body-contact-section"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '20px',
          paddingBottom: '50px',
          backgroundColor: '#f2f2f2',
          maxWidth: '100%',
        }}
      >
        <div
          className="Contact-Us-section"
          style={{
            color: '#C98E59',
            flex: 1,
            marginRight: '20px',
            backgroundColor: '#f2f2f2',
            fontFamily: '"Montserrat", sans-serif',
            fontSize: '16px',
            marginTop: '30px',
            maxWidth: '70%',
          }}
        >
          <h2 style={{ marginBottom: '20px' }}>Contact us</h2>
          <div
            className="description"
            style={{ color: '#9E9E9E', margin: '0 0 35px 0' }}
          >
            <p>
              Ready to experience the Property Advisor difference? Contact us
              today to learn more about how we can help you achieve your real
              estate goals.
            </p>
          </div>
          <ContactForm />
        </div>

        <div
          className="contact-us-image-container"
          style={{
            maxWidth: '50%',
            marginTop: '60px',
            marginLeft: '20px',
          }}
        >
          <Image
            src="/contact-us-image.jpg"
            width={600}
            height={600}
            style={{
              borderRadius: '60px',
              objectFit: 'cover',
              margin: '20px auto',
              width: '100%',
              height: 'auto',
            }}
            className="contact-us-image"
            alt="Contact Us"
            priority
          />
        </div>
      </section>

      <section className="Follow-us-section">
        <div
          className="follow-us-title"
          style={{
            fontSize: '30px',
            fontWeight: 500,
            textAlign: 'center',
            color: '#a66844',
            paddingBottom: '20px',
            paddingTop: '40px',
            height: 'auto',
            textShadow: '1px 0px 2px rgba(68, 68, 90, 1)',
            display: 'flex',
            flexWrap: 'wrap',
          }}
        >
          <h2>You can follow us</h2>
        </div>
        <div
          className="follow-us-text"
          style={{
            fontSize: '14px',
            fontWeight: 100,
            color: '#000000',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <p>
            Stay connected with us on social media for more luxury real estate
            insights and inspiration.
          </p>
        </div>

        <div>
          <hr style={hrStyle} />
        </div>

        <div
          className="icons"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 'auto',
            width: '100%',
            gap: '20px',
            paddingBottom: '40px',
          }}
        >
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/Facebook.png"
              width={48}
              height={50}
              className="facebook-icon"
              alt="Facebook"
            />
          </a>

          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/LinkedIn.png"
              width={48}
              height={50}
              className="linkedin-icon"
              alt="LinkedIn"
            />
          </a>

          <a href="https://www.x.com" target="_blank" rel="noopener noreferrer">
            <Image
              src="/Twitter.png"
              width={48}
              height={50}
              className="twitter-icon"
              alt="Twitter"
            />
          </a>

          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/Instagram.png"
              width={48}
              height={50}
              className="instagram-icon"
              alt="Instagram"
            />
          </a>
        </div>
      </section>

      <style jsx>{`
        @media (max-width: 769px) {
          .image-container {
            height: auto;
          }
        }

        @media (max-width: 769px) {
          .text-overlay h1 {
            font-size: 35px;
          }
        }

        @media (min-width: 770px) and (max-width: 1024px) {
          .text-overlay p {
            font-size: 30px;
          }
        }

        @media (max-width: 769px) {
          .text-overlay p {
            font-size: 20px;
          }
        }

        @media (max-width: 769px) {
          .body-contact-section {
            flex-direction: column;
          }
        }

        @media (max-width: 769px) {
          .Contact-Us-section {
            width: 100%;
            justify-content: center;
            align-items: center;
            text-align: left;
          }
        }

        @media (min-width: 770px) and (max-width: 1024px) {
          .contact-us-image-container {
            justify-content: center;
            align-items: center;
            margin: 20px 0 10px 0;
            display: flex;
            height: auto;
            position: relative;
          }
        }

        @media (max-width: 769px) {
          .contact-us-image-container {
            display: none;
          }
        }

        @media (max-width: 769px) {
          .Contact-Form form {
            max-width: 100%;
            justify-content: center;
            align-items: left;
            display: flex;
            position: relative;
          }
        }

        @media (max-width: 769px) {
          .Contact-Us-section h2 {
            max-width: 100%;
            justify-content: center;
            text-align: left;
          }
        }

        @media (max-width: 769px) {
          .description {
            max-width: 100%;
            justify-content: center;
            text-align: left;
          }
        }

        @media (max-width: 769px) {
          .Contact-Form label {
            width: 100%;
            justify-content: center;
            text-align: left;
          }
        }

        .Follow-us-section {
          background-color: #f8f6f4;
          justify-content: center;
          align-items: center;
          object-fit: cover;
          max-width: 100%;
          height: auto;
        }

        .follow-us-title,
        .follow-us-text {
          display: flex;
          align-items: center;
          text-align: center;
          justify-content: center;
          font-family: 'Montserrat', sans-serif;
          color: #000000;
          max-width: 100%;
        }

        @media (max-width: 769px) {
          .follow-us-title {
            font-size: 20px;
          }
        }

        @media (max-width: 769px) {
          .follow-us-text p {
            max-width: 100%;
            justify-content: center;
            text-align: center;
            display: flex;
            padding: 0 10px 0 10px;
          }
        }
      `}</style>
    </div>
  );
}
