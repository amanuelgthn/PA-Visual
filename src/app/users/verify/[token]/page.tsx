export async function generateStaticParams() {
  return []
}

import VerifyTokenClient from './VerifyTokenClient'

interface PageProps {
  params: { token: string }
}

export default function Page({ params }: PageProps) {
  return <VerifyTokenClient token={params.token} />
}
