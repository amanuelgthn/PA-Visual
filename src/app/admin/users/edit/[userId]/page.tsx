export async function generateStaticParams() {
  return []
}

import EditUserClient from './EditUserClient'
export default function Page({ params }: { params: { userId: string } }) {
  return <EditUserClient userId={params.userId} />
}
