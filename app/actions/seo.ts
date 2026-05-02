'use server'

import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

export async function updateSeo(formData: FormData) {
  const page = formData.get('page') as string
  const metaTitle = formData.get('metaTitle') as string
  const metaDescription = formData.get('metaDescription') as string
  const keywords = formData.get('keywords') as string

  await prisma.seoMetadata.upsert({
    where: { page },
    update: { metaTitle, metaDescription, keywords },
    create: { page, metaTitle, metaDescription, keywords },
  })

  revalidatePath('/')
  revalidatePath('/dashboard/seo')
}
