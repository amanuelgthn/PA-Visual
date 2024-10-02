'use client'
import UserForms from '@/app/admin/components/UserForms/UserForms'
import { UsersManagmentTableTypes } from '@/app/admin/components/UserManagmentTable/UsersManagmentTable'
import { Spin } from 'antd'
import React, { useState, useEffect, useMemo } from 'react'

type ParamsType = {
  userId: string
}

const EditUser = ({ params }: { params: ParamsType }) => {
  const users: UsersManagmentTableTypes[] = useMemo(
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
  const [initialData, setInitialData] = useState<
    UsersManagmentTableTypes | undefined
  >(undefined)

  useEffect(() => {
    const user = users.find((user) => user.userId === params.userId)
    if (user) {
      setInitialData(user)
    }
  }, [params.userId, users])
  return (
    <div>
      {initialData ? (
        <UserForms initialData={initialData} />
      ) : (
        <div>
          <Spin />
        </div>
      )}
    </div>
  )
}

export default EditUser
