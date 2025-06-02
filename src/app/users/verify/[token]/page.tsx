export async function generateStaticParams() {
  return []
}

import VerifyTokenClient from './VerifyTokenClient'
import type { FC } from 'react'

type PageProps = {
  params: {
    token: string
  }
}

const Page: FC<PageProps> = ({ params }) => {
  return <VerifyTokenClient token={params.token} />
}

export default Page
