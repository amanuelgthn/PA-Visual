export async function generateStaticParams() {
  return [
    // e.g. fetch from your database instead of hard-coding
    { userId: '1' },
    { userId: '2' },
  ]
}

import EditUserClient from './EditUserClient'
export default function Page({ params }: { params: { userId: string } }) {
  return <EditUserClient userId={params.userId} />
}
