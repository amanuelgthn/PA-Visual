'use client'
import { adminProperties } from '../data'
import PropertyEditorClient from './AdminPropertyDetailClient'

export async function generateStaticParams() {
  return adminProperties.map((p) => ({
    id: p.propertyId,
  }))
}

// 3) The default export is a Server Component that simply renders the client floor.
export default function AdminPropertyPage({
  params,
}: {
  params: { id: string }
}) {
  return <PropertyEditorClient id={params.id} />
}
