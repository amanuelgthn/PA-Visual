export async function generateStaticParams() {
  return [
    // e.g. fetch from your database instead of hard-coding
    { id: '1' },
    { id: '2' },
  ]
}

import EditUserClient from './EditUserClient'
export default function Page({ params }: { params: { userId: string } }) {
  return <EditUserClient userId={params.userId} />
}
