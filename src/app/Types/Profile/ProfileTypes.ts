export interface PersonalInfo {
  name: string
  email: string
  phone: string
  location: string
  languages: string[]
}

export interface Membership {
  plan: string
  joinedOn: string
}

export interface ReviewedProperty {
  title: string
  price: string
  location: string
}

export interface ProfileData {
  profilePic: string
  aboutMe: string
  interests: string[]
  personalInfo: PersonalInfo
  membership: Membership
  reviewedProperties: ReviewedProperty[]
  isPublic: boolean
  testimonial: string
}
