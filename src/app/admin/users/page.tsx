'use client'

import React, { useEffect, useMemo, useState } from 'react'
import PerformanceOverView from '../components/PerformanceOverview/PerformanceOverView'
import YearPickerComponent from '../components/YearPicker/YearPicker'
import dayjs from 'dayjs'
import { type DatePickerProps } from 'antd'
import UsersManagmentTable, {
  UsersManagmentTableTypes,
} from '../components/UserManagmentTable/UsersManagmentTable'
import DonutChart from '../components/DonutChart/DonutChart'
import UsersActivityChart from '../components/UsersActivityChart/UsersActivityChart'

const UsersManagement: React.FC = () => {
  const [year, setYear] = useState<number>(dayjs().year())
  const [userDataState, setUserDataState] = useState<
    UsersManagmentTableTypes[]
  >([])
  const usersstatistic = [
    {
      label: 'Total Users',
      value: '245',
      percentageChange: 25,
      changeDirection: 'up',
    },
    {
      label: 'Recently Added Users',
      value: 500,
      percentageChange: 25,
      changeDirection: 'up',
    },
    {
      label: 'Active Users',
      value: 200,
      percentageChange: 25,
      changeDirection: 'down',
    },
  ]
  const sampleUsers = useMemo<UsersManagmentTableTypes[]>(
    () => [
      {
        userId: '1',
        userFirstName: 'John',
        userLastName: 'Doe',
        userName: 'johndoe',
        userRole: 'Admin',
        userAgency: 'Agency A',
        userLicenseNumber: '123456',
        userCountry: 'USA',
        userCity: 'New York',
        userEmail: 'john.doe@example.com',
        userPhoneNumber: '123-456-7890',
        userStatus: 'Active',
        userCreatedAt: '2024-01-01 10:15:30',
        userProfileImage: 'https://randomuser.me/api/portraits/men/1.jpg',
      },
      {
        userId: '2',
        userFirstName: 'Jane',
        userLastName: 'Smith',
        userName: 'janesmith',
        userRole: 'User',
        userAgency: 'Agency B',
        userLicenseNumber: '654321',
        userCountry: 'Canada',
        userCity: 'Toronto',
        userEmail: 'jane.smith@example.com',
        userPhoneNumber: '098-765-4321',
        userStatus: 'Inactive',
        userCreatedAt: '2024-02-15 14:30:45',
        userProfileImage: 'https://randomuser.me/api/portraits/women/2.jpg',
      },
      {
        userId: '3',
        userFirstName: 'Mike',
        userLastName: 'Johnson',
        userName: 'mikejohnson',
        userRole: 'Agent',
        userAgency: 'Agency C',
        userLicenseNumber: '789012',
        userCountry: 'UK',
        userCity: 'London',
        userEmail: 'mike.johnson@example.com',
        userPhoneNumber: '456-789-0123',
        userStatus: 'Active',
        userCreatedAt: '2024-03-10 09:45:00',
        userProfileImage: 'https://randomuser.me/api/portraits/men/3.jpg',
      },
      {
        userId: '4',
        userFirstName: 'Emily',
        userLastName: 'Davis',
        userName: 'emilydavis',
        userRole: 'Manager',
        userAgency: 'Agency D',
        userLicenseNumber: '345678',
        userCountry: 'Australia',
        userCity: 'Sydney',
        userEmail: 'emily.davis@example.com',
        userPhoneNumber: '321-654-9870',
        userStatus: 'Inactive',
        userCreatedAt: '2024-04-20 16:20:15',
        userProfileImage: 'https://randomuser.me/api/portraits/women/4.jpg',
      },
      {
        userId: '5',
        userFirstName: 'Chris',
        userLastName: 'Brown',
        userName: 'chrisbrown',
        userRole: 'User',
        userAgency: 'Agency E',
        userLicenseNumber: '567890',
        userCountry: 'Germany',
        userCity: 'Berlin',
        userEmail: 'chris.brown@example.com',
        userPhoneNumber: '789-012-3456',
        userStatus: 'Active',
        userCreatedAt: '2023-05-25 11:10:05',
        userProfileImage: 'https://randomuser.me/api/portraits/men/5.jpg',
      },
      {
        userId: '6',
        userFirstName: 'Sophia',
        userLastName: 'White',
        userName: 'sophiawhite',
        userRole: 'Agent',
        userAgency: 'Agency F',
        userLicenseNumber: '890123',
        userCountry: 'France',
        userCity: 'Paris',
        userEmail: 'sophia.white@example.com',
        userPhoneNumber: '654-321-0987',
        userStatus: 'Inactive',
        userCreatedAt: '2023-06-30 13:25:40',
        userProfileImage: 'https://randomuser.me/api/portraits/women/6.jpg',
      },
      {
        userId: '7',
        userFirstName: 'David',
        userLastName: 'Wilson',
        userName: 'davidwilson',
        userRole: 'Manager',
        userAgency: 'Agency G',
        userLicenseNumber: '901234',
        userCountry: 'Italy',
        userCity: 'Rome',
        userEmail: 'david.wilson@example.com',
        userPhoneNumber: '321-098-7654',
        userStatus: 'Active',
        userCreatedAt: '2023-07-15 08:50:25',
        userProfileImage: 'https://randomuser.me/api/portraits/men/7.jpg',
      },
      {
        userId: '8',
        userFirstName: 'Laura',
        userLastName: 'White',
        userName: 'laurawhite',
        userRole: 'Admin',
        userAgency: 'Agency H',
        userLicenseNumber: '234567',
        userCountry: 'Spain',
        userCity: 'Madrid',
        userEmail: 'laura.white@example.com',
        userPhoneNumber: '987-654-3210',
        userStatus: 'Inactive',
        userCreatedAt: '2022-08-20 17:35:55',
        userProfileImage: 'https://randomuser.me/api/portraits/women/8.jpg',
      },
      {
        userId: '9',
        userFirstName: 'Mark',
        userLastName: 'Taylor',
        userName: 'marktaylor',
        userRole: 'User',
        userAgency: 'Agency I',
        userLicenseNumber: '345678',
        userCountry: 'Netherlands',
        userCity: 'Amsterdam',
        userEmail: 'mark.taylor@example.com',
        userPhoneNumber: '876-543-2109',
        userStatus: 'Active',
        userCreatedAt: '2022-09-10 12:40:35',
        userProfileImage: 'https://randomuser.me/api/portraits/men/9.jpg',
      },
      {
        userId: '10',
        userFirstName: 'Anna',
        userLastName: 'Thompson',
        userName: 'annathompson',
        userRole: 'Agent',
        userAgency: 'Agency J',
        userLicenseNumber: '456789',
        userCountry: 'Sweden',
        userCity: 'Stockholm',
        userEmail: 'anna.thompson@example.com',
        userPhoneNumber: '765-432-1098',
        userStatus: 'Inactive',
        userCreatedAt: '2022-10-05 15:55:20',
        userProfileImage: 'https://randomuser.me/api/portraits/women/10.jpg',
      },
    ],
    [],
  )

  const onChange: DatePickerProps['onChange'] = (date) => {
    setYear(dayjs(date).year())
  }

  const deleteUser = (userId: string) => {
    const updatedUsers = userDataState.filter((user) => user.userId !== userId)
    setUserDataState(updatedUsers)
  }

  const dataSets = {
    weekly: {
      labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
      data: [
        {
          year: 2023,
          values: [
            [100, 200, 150, 300],
            [120, 220, 180, 320],
          ],
        },
        {
          year: 2024,
          values: [
            [110, 210, 160, 310],
            [130, 230, 190, 330],
          ],
        },
      ],
      totalData: {
        users: 10,
        revenue: 244,
        propertySold: 2430,
        propertyReviewed: 12340,
      },
    },
    monthly: {
      labels: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
      data: [
        {
          year: 2023,
          values: [
            [0, 20, 40, 60, 80, 100],
            [100, 200, 150, 300, 250, 350, 400, 450, 500, 550, 600, 650],
          ],
        },
        {
          year: 2024,
          values: [
            [
              1100, 2100, 1600, 3100, 2600, 3600, 4100, 4600, 5100, 5600, 6100,
              6600,
            ],
            [
              1300, 2300, 1900, 3300, 2800, 3800, 4300, 4800, 5300, 5800, 6300,
              6800,
            ],
          ],
        },
      ],
      totalData: {
        users: 100,
        revenue: 542,
        propertySold: 240,
        propertyReviewed: 130,
      },
    },
    annually: {
      labels: ['2020', '2021', '2022', '2023', '2024'],
      data: [
        {
          year: 2023,
          values: [
            [10000, 20000, 15000, 30000],
            [12000, 22000, 18000, 32000],
          ],
        },
        {
          year: 2024,
          values: [
            [11000, 21000, 16000, 31000],
            [13000, 23000, 19000, 33000],
          ],
        },
      ],
      totalData: {
        users: 234,
        revenue: 323,
        propertySold: 20432,
        propertyReviewed: 10423,
      },
    },
  }

  useEffect(() => {
    if (year) {
      const fillteredUsersData = sampleUsers.filter((user) => {
        return dayjs(user.userCreatedAt).year() === year
      })
      setUserDataState(fillteredUsersData)
    }
  }, [sampleUsers, year])
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        padding: '20px',
        boxSizing: 'border-box',
      }}
    >
      <YearPickerComponent title='Users Summary' onChange={onChange} />
      <PerformanceOverView data={usersstatistic} pageType='users-management' />
      <UsersManagmentTable users={userDataState} onDelete={deleteUser} />{' '}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <UsersActivityChart dataSets={dataSets} />
        <DonutChart
          style={{ width: '519px', height: '437px' }}
          chartTitle='Users Overview'
          percentage={68}
          investorsInCountry='UK'
          propertiesInEU={20}
          propertiesInUS={1.34}
        />
      </div>
    </div>
  )
}

export default UsersManagement
