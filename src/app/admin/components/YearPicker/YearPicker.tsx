import React from 'react'
import { DatePicker } from 'antd'
import type { DatePickerProps } from 'antd'
import dayjs from 'dayjs'
import './YearPicker.scss'

type YearPickerComponentProps = {
  onChange: DatePickerProps['onChange']
  defaultValue?: dayjs.Dayjs
  disabledDate?: (current: dayjs.Dayjs) => boolean
  className?: string
  popupClassName?: string
  title?: string
}

const YearPickerComponent: React.FC<YearPickerComponentProps> = ({
  onChange,
  title,
  defaultValue = dayjs(),
  disabledDate = (current) => current.year() > dayjs().year(),
  className = 'custom-date-picker',
  popupClassName = 'custom-date-picker-popup',
}) => {
  return (
    <div className='title-date-picker'>
      <h3>{title}</h3>
      <DatePicker
        onChange={onChange}
        picker='year'
        mode='year'
        size='small'
        defaultValue={defaultValue}
        className={className}
        disabledDate={disabledDate}
        popupClassName={popupClassName}
      />
    </div>
  )
}

export default YearPickerComponent
