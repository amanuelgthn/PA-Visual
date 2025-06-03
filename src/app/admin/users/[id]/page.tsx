export async function generateStaticParams() {
  return [
    // e.g. fetch from your database instead of hard-coding
    { id: '1' },
    { id: '2' },
  ]
}

import EditUserClient from './EditUserClient'

interface PageProps {
  params: { id: string }
}

export default function Page({ params }: PageProps) {
  return <EditUserClient id={params.id} />
}
