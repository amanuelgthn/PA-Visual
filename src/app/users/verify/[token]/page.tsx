export async function generateStaticParams() {
  return [
    // e.g. fetch from your database instead of hard-coding
    { token: '1' },
    { token: '2' },
  ]
}

import VerifyTokenClient from './VerifyTokenClient'

interface PageProps {
  params: { token: string }
}

export default function Page({ params }: PageProps) {
  return <VerifyTokenClient token={params.token} />
}
