'use server'

import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

export async function createFeature(formData: FormData) {
  const title = formData.get('title') as string
  const description = formData.get('description') as string
  const icon = formData.get('icon') as string

  await prisma.feature.create({
    data: { title, description, icon: icon || null },
  })

  revalidatePath('/dashboard/content')
  revalidatePath('/')
}

export async function updateFeature(formData: FormData) {
  const id = formData.get('id') as string
  const title = formData.get('title') as string
  const description = formData.get('description') as string
  const icon = formData.get('icon') as string

  await prisma.feature.update({
    where: { id },
    data: { title, description, icon: icon || null },
  })

  revalidatePath('/dashboard/content')
  revalidatePath('/')
}

export async function deleteFeature(formData: FormData) {
  const id = formData.get('id') as string
  await prisma.feature.delete({ where: { id } })
  revalidatePath('/dashboard/content')
  revalidatePath('/')
}

export async function toggleFeature(formData: FormData) {
  const id = formData.get('id') as string
  const current = formData.get('isActive') === 'true'
  await prisma.feature.update({
    where: { id },
    data: { isActive: !current },
  })
  revalidatePath('/dashboard/content')
  revalidatePath('/')
}
