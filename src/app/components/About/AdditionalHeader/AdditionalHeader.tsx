'use client'

import React, { useEffect, useState, useRef } from 'react'
import './AdditionalHeader.scss'

export const AdditionalHeader = () => {
  const originalMission = 'MISSION'
  const originalVision = 'VISION'
  const duration = 3000 // 3 seconds
  const shuffleInterval = 100

  const [missionText, setMissionText] = useState(
    '_'.repeat(originalMission.length),
  )
  const [visionText, setVisionText] = useState(
    '_'.repeat(originalVision.length),
  )
  const [startMissionShuffle, setStartMissionShuffle] = useState(false)
  const [startVisionShuffle, setStartVisionShuffle] = useState(false)

  const containerRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartMissionShuffle(true)
          setStartVisionShuffle(true)
        }
      },
      { threshold: 0.5 },
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (startMissionShuffle) {
      const characters = 'abcdefghijklmnopqrstuvwxyz'
      let missionIndex = 0
      let missionElapsed = 0

      const shuffleMission = () => {
        setMissionText((prevText) =>
          prevText
            .split('')
            .map((char, index) =>
              index < missionIndex
                ? originalMission[index]
                : characters.charAt(
                    Math.floor(Math.random() * characters.length),
                  ),
            )
            .join(''),
        )
      }

      const missionIntervalId = setInterval(() => {
        missionElapsed += shuffleInterval
        if (
          missionElapsed >=
          (duration / originalMission.length) * (missionIndex + 1)
        ) {
          missionIndex++
        }
        if (missionIndex > originalMission.length) {
          clearInterval(missionIntervalId)
          setMissionText(originalMission)
        } else {
          shuffleMission()
        }
      }, shuffleInterval)

      return () => clearInterval(missionIntervalId)
    }
  }, [startMissionShuffle])

  useEffect(() => {
    if (startVisionShuffle) {
      const characters = 'abcdefghijklmnopqrstuvwxyz'
      let visionIndex = 0
      let visionElapsed = 0

      const shuffleVision = () => {
        setVisionText((prevText) =>
          prevText
            .split('')
            .map((char, index) =>
              index < visionIndex
                ? originalVision[index]
                : characters.charAt(
                    Math.floor(Math.random() * characters.length),
                  ),
            )
            .join(''),
        )
      }

      const visionIntervalId = setInterval(() => {
        visionElapsed += shuffleInterval
        if (
          visionElapsed >=
          (duration / originalVision.length) * (visionIndex + 1)
        ) {
          visionIndex++
        }
        if (visionIndex > originalVision.length) {
          clearInterval(visionIntervalId)
          setVisionText(originalVision)
        } else {
          shuffleVision()
        }
      }, shuffleInterval)

      return () => clearInterval(visionIntervalId)
    }
  }, [startVisionShuffle])

  return (
    <div className='additional_wrapper' ref={containerRef}>
      <div className='text-shuffle mission-text'>
        {missionText}
        <p>
          To empower investors by providing them with high-quality investment
          opportunities in luxury properties, supported by thorough analysis and
          guarantees.
          <br />
          <br />
          We aim to enhance investments by analyzing the market with artificial
          intelligence, allowing us to gain unique and exclusive insights into
          the best available opportunities.
        </p>
      </div>
      <div className='text-shuffle vision-text'>
        {visionText}
        <p>
          To be the leading platform for real estate investments globally,
          recognized for our innovative approach and customer-centric services.
          <br />
          <br />
          We are committed to providing a comprehensive and global service,
          ensuring that our clients receive holistic support at every step of
          their investment process. This includes everything from property
          identification to transaction closure, guaranteeing that every client
          has access to exceptional and personalized support, no matter where
          they are in the world.
        </p>
      </div>
    </div>
  )
}
