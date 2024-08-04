"use client";

import React, { useState } from "react";
import Image from "next/image";
import "@fontsource/montserrat";
import styles from "./ButtonComponent.module.css";
import "./responsive.css";

const ButtonComponent = () => {
  const [planType, setPlanType] = useState("monthly");

  const handleClick = (buttonName) => {
    setPlanType(buttonName);
  };

  const getButtonStyle = (buttonName) => ({
    padding: "10px 20px",
    border: "none",
    backgroundColor: planType === buttonName ? "#ffffff" : "#C98E59",
    color: planType === buttonName ? "#000000" : "#ffffff",
    fontWeight: planType === buttonName ? "bold" : "normal",
    fontSize: "14px",
    fontFamily: "Montserrat, sans-serif",
    cursor: "pointer",
    borderRadius: "10px",
    transition:
      "background-color 0.5s ease, color 0.5s ease, font-weight 0.5s ease",
  });

  const getText = (container) => {
    if (planType === "monthly") {
      switch (container) {
        case "basic":
          return {
            price: "$50",
            period: "per month",
            features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
          };
        case "platinum":
          return {
            price: "$100",
            period: "per month",
            features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
          };
        case "diamond":
          return {
            price: "$200",
            period: "per month",
            features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
          };
        default:
          return { price: "", period: "", features: [] };
      }
    } else {
      switch (container) {
        case "basic":
          return {
            price: "$500",
            period: "per year",
            features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
          };
        case "platinum":
          return {
            price: "$1000",
            period: "per year",
            features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
          };
        case "diamond":
          return {
            price: "$2000",
            period: "per year",
            features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
          };
        default:
          return { price: "", period: "", features: [] };
      }
    }
  };

  return (
    <div
      className="main-container"
      style={{
        backgroundImage: 'url("/subscription-background-image.jpg")',
        position: "relative",
        maxWidth: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "60px 0 60px 0",
      }}
    >
      <section
        className="first-section"
        style={{
          justifyContent: "center",
          alignItems: "center",
          margin: "20px auto",
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <div className="image-container">
          <Image
            src="/security-icon-s.png"
            width={78}
            height={81}
            className="security-icon"
            alt="security-icon"
            style={{ alignItems: "center", justifyContent: "center" }}
          />
        </div>
        <div className={styles.titleContainer}>
          <h1 className={styles.insetShadow}>SUBSCRIBE</h1>
          <p className={styles.subtitle}>
            And a subheading describing your pricing plans, too
          </p>
        </div>
        <div
          className="button-container"
          style={{
            display: "flex",
            gap: "8px",
            position: "relative",
            margin: "20px auto",
            borderRadius: "10px",
            backgroundColor: "#C98E59",
          }}
        >
          <div
            className="inner-buttons"
            style={{
              display: "flex",
              gap: "5px",
              position: "relative",
              margin: "8px 8px 8px 8px",
              borderRadius: "15px",
              height: "52px",
              width: "277px",
            }}
          >
            <button
              className="inner-button"
              style={getButtonStyle("monthly")}
              onClick={() => handleClick("monthly")}
            >
              Monthly plans
            </button>
            <button
              className="inner-button"
              style={getButtonStyle("annual")}
              onClick={() => handleClick("annual")}
            >
              Annual plans
            </button>
          </div>
        </div>
      </section>
      <section
        className="second-section"
        style={{
          justifyContent: "center",
          alignItems: "center",
          margin: "20px auto",
          display: "flex",
          flexDirection: "row",
          maxWidth: "100%",
          position: "relative",
          flexWrap: "wrap",
        }}
      >
        {["basic", "platinum", "diamond"].map((container, index) => {
          const text = getText(container);
          return (
            <div
              key={index}
              className={`${container}-container ${styles.container}`}
              style={{
                margin: "20px",
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
                fontSize: "16px",
                position: "relative",
                backgroundColor: "#FFFFFF",
                border: container === "platinum" ? "1px solid #1F2247" : "none",
                width: "400px",
                height: "400px",
                boxShadow:
                  "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
                borderRadius: "10px",
                fontFamily: "Montserrat, sans-serif",
                fontWeight: "800",
              }}
            >
              <div
                className={`first-box-${index + 1}`}
                style={{
                  border: "none",
                  width: "100%",
                  height: "60px",
                  backgroundColor: index === 1 ? "#1F2247" : "#F2F2F2",
                  padding: "20px",
                  borderRadius: "10px 10px 0 0",
                  color: index === 1 ? "#FFFFFF" : "#000000",
                }}
              >
                {container.toUpperCase()}
                {index === 1 && (
                  <div
                    className="small-box"
                    style={{
                      position: "relative",
                      width: "150px",
                      height: "35px",
                      top: "-58px",
                      left: "60%",
                      backgroundColor: "#C98E59",
                      borderRadius: "10px",
                      display: "flex",
                      flexDirection: "row",
                      padding: "8px",
                      justifyContent: "center",
                      textAlign: "center",
                    }}
                  >
                    <h1 style={{ fontSize: "14px" }}>Most popular</h1>
                    <div className="vector">
                      <Image
                        src="/Vector.png"
                        width={21}
                        height={18}
                        className="vector-icon"
                        alt="vector-icon"
                        style={{ marginLeft: "5px" }}
                      />
                    </div>
                  </div>
                )}
              </div>
              <div
                className={`second-box-${index + 1}`}
                style={{
                  border: "none",
                  width: "100%",
                  height: "240px",
                  textAlign: "left",
                }}
              >
                <div
                  className="title"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    fontFamily: "Montserrat, sans-serif",
                    marginTop: "10px",
                  }}
                >
                  <h1
                    style={{
                      fontSize: "3rem",
                      marginLeft: "45px",
                    }}
                  >
                    {text.price}
                  </h1>
                  <p
                    style={{
                      fontSize: "1rem",
                      padding: "20px 0 0 5px",
                    }}
                  >
                    {text.period}
                  </p>
                </div>
                <ul style={{ padding: "10px 60px 30px 60px", margin: "10px" }}>
                  {text.features.map((feature, i) => (
                    <li key={i} style={{ padding: "10px", color: "#828282" }}>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className={`third-box-${index + 1}`}
                style={{
                  border: "none",
                  width: "100%",
                  height: "100px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  padding: "30px",
                }}
              >
                <button
                  style={{
                    border: "none",
                    padding: "15px 145px",
                    backgroundColor: "#1F2247",
                    color: "#FFFFFF",
                    fontSize: "16px",
                    borderRadius: "10px",
                    cursor: "pointer",
                    transition: "background-color 0.4s ease-in-out",
                    boxShadow:
                      "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.backgroundColor = "#C98E59")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.backgroundColor = "#1F2247")
                  }
                >
                  Select
                </button>
              </div>
            </div>
          );
        })}
      </section>
      <section
        className="third-section"
        style={{
          justifyContent: "center",
          fontSize: "16px",
          display: "flex",
          margin: "40px auto",
          flexDirection: "column",
          backgroundColor: "#FFFFFF",
          maxWidth: "85%",
          borderRadius: "10px",
          boxShadow:
            "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px",
          fontFamily: "Montserrat, sans-serif",
          fontWeight: "800",
          color: "#828282",
          position: "relative",
          flexWrap: "wrap",
        }}
      >
        <div className="text-section" style={{ margin: "40px" }}>
          <div
            className="first-box-third-section"
            style={{
              border: "none",
              backgroundColor: "#FFFFFF",
              borderRadius: "10px 10px 0 0",
              textAlign: "left",
              color: "#C98E59",
            }}
          >
            <h1>What you get?</h1>
          </div>
          <div
            className="second-box-third-section"
            style={{
              border: "none",
              textAlign: "left",
              margin: "25px 0 30px 0",
            }}
          >
            <p style={{ lineHeight: "25px" }}>
              Elevate your real estate journey with our Premium Membership.
              Designed for discerning individuals seeking more than just access,
              this tier offers priority access to exclusive listings and
              personalized consultations with our expert agents. Enjoy
              invitations to member-only events and gain insights that empower
              your investment decisions. With the Premium Membership, you’re not
              just a member; you’re part of an elite community dedicated to
              luxury living and exceptional opportunities.
            </p>

            <div
              className="third-box-third-section"
              style={{ margin: "25px 0 0 15px" }}
            >
              <ul>
                <li style={{ margin: "10px auto" }}>
                  All Basic Benefits plus:
                </li>
                <li style={{ margin: "10px auto" }}>
                  Priority Access: First access to exclusive listings and
                  private showings.
                </li>
                <li style={{ margin: "10px auto" }}>
                  Personalized Consultation: One-on-one consultations with our
                  real estate experts to guide your decisions.
                </li>
                <li style={{ margin: "10px auto" }}>
                  Exclusive Events: Invitations to member-only property
                  showcases and networking events.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ButtonComponent;
