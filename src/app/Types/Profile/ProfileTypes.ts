export interface PersonalInfo {
  name: string
  email: string
  phone: string
  location: string
  languages: string[]
}

export interface Comment {
  property: string
  comment: string
  rating: number
}

export interface Membership {
  plan: string
  joinedOn: string
  nextBillingDate: string
}

export interface ReviewedProperty {
  imageUrl: string
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
  comments: Comment[]
}
