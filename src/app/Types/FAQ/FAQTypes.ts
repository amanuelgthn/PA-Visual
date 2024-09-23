import { StaticImageData } from 'next/image'

export type FAQCategory = 'General' | 'Account' | 'Billing' | 'Technical'

export type FAQContent = {
  Question: string
  Answer: string
  Visibility: boolean
  Visited: number
}

export type FAQData = {
  category: string
  content: FAQContent[]
  icon: StaticImageData
}

export interface PopularFAQProps {
  topQuestions: {
    content: FAQContent
    category: FAQCategory
    originalIndex: number
  }
  toggleVisibility: boolean
}

export interface SearchBarProps {
  searchTerm: string
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>
}

export interface CategoryListProps {
  FAQs: Record<FAQCategory, FAQData>
  setSelectedCategory: React.Dispatch<React.SetStateAction<FAQCategory | null>>
}

export interface FAQItemProps {
  filteredFAQs: { category: FAQCategory; content: FAQContent }[]
  toggleVisibility: (faqCategory: FAQCategory, originalIndex: number) => void
}
