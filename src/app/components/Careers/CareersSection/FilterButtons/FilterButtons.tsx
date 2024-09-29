import React from 'react'
import { Dropdown, Menu } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import styles from './FilterButtons.module.scss'

type FilterButtonsProps = {
  jobCategories: string[]
  jobFunctions: string[]
  workLocations: string[]
  postingDates: string[]
  uniqueLocations: string[]
  onFilterClick: (filterType: string, value: string) => void
  onClearFilters: () => void
  filteredPositionsCount: number
}

const FilterButtons: React.FC<FilterButtonsProps> = ({
  jobCategories,
  jobFunctions,
  workLocations,
  postingDates,
  uniqueLocations,
  onFilterClick,
  onClearFilters,
  filteredPositionsCount,
}) => {
  const createMenu = (items: string[], filterType: string) => (
    <Menu>
      {items.map((item) => (
        <Menu.Item key={item} onClick={() => onFilterClick(filterType, item)}>
          {item}
        </Menu.Item>
      ))}
    </Menu>
  )

  return (
    <section className={styles.buttonsSection}>
      <div className={styles.buttonGroup}>
        <button className={styles.buttonOpenJobs} onClick={onClearFilters}>
          {filteredPositionsCount} OPEN JOBS
        </button>
        <Dropdown
          overlay={createMenu(uniqueLocations, 'Location')}
          trigger={['click']}
        >
          <button className={styles.button}>
            LOCATIONS <DownOutlined />
          </button>
        </Dropdown>
        <Dropdown
          overlay={createMenu(workLocations, 'WorkLocation')}
          trigger={['click']}
        >
          <button className={styles.button}>
            WORK LOCATIONS <DownOutlined />
          </button>
        </Dropdown>
        <Dropdown
          overlay={createMenu(jobFunctions, 'JobFunction')}
          trigger={['click']}
        >
          <button className={styles.button}>
            JOB FUNCTIONS <DownOutlined />
          </button>
        </Dropdown>
        <Dropdown
          overlay={createMenu(jobCategories, 'Category')}
          trigger={['click']}
        >
          <button className={styles.button}>
            CATEGORIES <DownOutlined />
          </button>
        </Dropdown>
        <Dropdown
          overlay={createMenu(postingDates, 'PostingDate')}
          trigger={['click']}
        >
          <button className={styles.button}>
            POSTING DATES <DownOutlined />
          </button>
        </Dropdown>
      </div>
      <div className={styles.clearGroup}>
        <button className={styles.clearFilters} onClick={onClearFilters}>
          CLEAR FILTERS
        </button>
      </div>
    </section>
  )
}

export default FilterButtons
