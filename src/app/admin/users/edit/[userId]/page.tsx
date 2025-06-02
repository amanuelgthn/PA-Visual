import EditUserClient from './EditUserClient'

export async function generateStaticParams() {
  return []
}
export default function Page({ params }: { params: { userId: string } }) {
  return <EditUserClient userId={params.userId} />
}
