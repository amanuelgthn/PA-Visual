export async function generateStaticParams() {
  // If you know actual user IDs at build time, list them here:
  // return [{ id: 'alice' }, { id: 'bob' }, …]
  // For now, return an empty array to satisfy "output: export"
  return []
}

// 2) Import the client component.  Because the client file has "use client", this page.tsx remains a Server Component.
import EditUserClient from './EditUserClient'

export default function Page({ params }: { params: { id: string } }) {
  return <EditUserClient id={params.id} />
}
