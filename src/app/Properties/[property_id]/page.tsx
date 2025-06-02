// ── src/app/Properties/[property_id]/page.tsx ──

// 1. Export generateStaticParams() here (Server Component)
export async function generateStaticParams() {
  return [
    { property_id: '001' },
    { property_id: '002' },
    { property_id: '003' },
    { property_id: '004' },
    { property_id: '005' },
    { property_id: '006' },
    { property_id: '007' },
    { property_id: '008' },
    { property_id: '009' },
    { property_id: '0010' },
    { propaerty_id: '0011' },
  ]
}

// 2. Import your hook-using component (which must be a Client Component)
import PropertyDescriptionClient from './PropertyDescriptionClient'

export default function Page({ params }: { params: { property_id: string } }) {
  return <PropertyDescriptionClient params={params} />
}
