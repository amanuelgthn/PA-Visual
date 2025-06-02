export async function generateStaticParams() {
  return []
}

// ② This is a Server Component—do NOT put "use client" here.
//    Just import your Client Component and pass along the ID.
import EditUserClient from './EditUserClient'

interface PageProps {
  params: { id: string }
}

export default function Page({ params }: PageProps) {
  return <EditUserClient id={params.id} />
}
