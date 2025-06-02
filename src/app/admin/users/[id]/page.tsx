export async function generateStaticParams() {
  return []
}

import EditUserClient from './EditUserClient'

interface PageProps {
  params: { id: string }
}

export default function Page({ params }: PageProps) {
  return <EditUserClient id={params.id} />
}
