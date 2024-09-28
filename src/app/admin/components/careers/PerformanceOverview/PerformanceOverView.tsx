import React, { useEffect, useRef, useState } from 'react'
import { HiArrowTrendingDown, HiArrowTrendingUp } from 'react-icons/hi2'
import { IoIosAddCircleOutline } from 'react-icons/io'
import { FaChevronDown } from 'react-icons/fa'
import Link from 'next/link'
import './PerformanceOverView.scss'

type PerformanceData = {
  label: string
  value: string | number
  percentageChange: number
  changeDirection: string
}

type PerformanceOverViewProps = {
  data: PerformanceData[]
  pageType: 'dashboard' | 'property'
}

const PerformanceOverView = ({ data, pageType }: PerformanceOverViewProps) => {
  const [openMenu, setOpenMenu] = useState<boolean>(false)
  const [selectedYear, setSelectedYear] = useState<number>(
    new Date().getFullYear(),
  )
  const dropdownRef = useRef<HTMLDivElement>(null)

  const toggleMenu = () => {
    setOpenMenu(!openMenu)
  }

  // Handle outside click to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpenMenu(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [dropdownRef])

  const handleYearSelect = (year: number) => {
    setSelectedYear(year)
    setOpenMenu(false)
    // You can add logic here to fetch or update data based on the selected year
  }

  const renderPerformanceItem = (item: PerformanceData, index: number) => (
    <div key={index} className='total'>
      <h4 className='totalsTitle'>{item.label}</h4>
      <div className='valueWrapper'>
        <h3 className='value'>{item.value}</h3>
        {item.changeDirection === 'up' ? (
          <span className='up'>
            <HiArrowTrendingUp size={20} color='rgba(31, 215, 60, 1)' />
            {item.percentageChange}%
          </span>
        ) : (
          <span className='down'>
            <HiArrowTrendingDown size={20} color='rgba(235, 5, 5, 1)' />
            {item.percentageChange}%
          </span>
        )}
      </div>
    </div>
  )

  return (
    <>
      <section className='globalStyles'>
        <section className='summaryTitle'>
          <h1 className='jobsSummary'>Jobs Summary</h1>
          <div className='yearDropdown' ref={dropdownRef}>
            <button className='yearSummary' onClick={toggleMenu}>
              {selectedYear} <FaChevronDown />
            </button>
            {openMenu && (
              <div className='dropdownMenu'>
                {[2024, 2023, 2022].map((year) => (
                  <button
                    key={year}
                    className='menuItem'
                    onClick={() => handleYearSelect(year)}
                  >
                    {year}
                  </button>
                ))}
              </div>
            )}
          </div>
        </section>

        <div className='totalsWrapper'>
          {pageType === 'dashboard' && (
            <>
              {data?.map(renderPerformanceItem)}
              {/* Include "Add New Job" section */}
              <Link href='/admin/jobs/add'>
                <div className='add-new-job'>
                  <IoIosAddCircleOutline
                    size={50}
                    color='rgba(226, 121, 27, 1)'
                  />
                  <h4>Add new job</h4>
                </div>
              </Link>
            </>
          )}
        </div>
      </section>
    </>
  )
}

export default PerformanceOverView
