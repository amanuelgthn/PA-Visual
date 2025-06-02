// 2) Server Component (no "use client")
import EditUserClient from './EditUserClient'
export async function generateStaticParams() {
  // If you have a known list of user IDs, return them here:
  // e.g. return [{ userId: '1' }, { userId: '2' }, …]
  return []
}
export default function Page({ params }: { params: { userId: string } }) {
  return <EditUserClient userId={params.userId} />
}
