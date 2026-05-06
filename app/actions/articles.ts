'use server'

import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function createArticle(formData: FormData) {
  const title = formData.get('title') as string
  const slug = formData.get('slug') as string
  const content = formData.get('content') as string
  const published = formData.get('published') === 'true'

  try {
    await prisma.article.create({
      data: { title, slug, content, published },
    })
  } catch {
    redirect('/dashboard/articles/new?error=Slug sudah digunakan atau data tidak valid')
  }

  revalidatePath('/dashboard/articles')
  redirect('/dashboard/articles')
}

export async function updateArticle(formData: FormData) {
  const id = formData.get('id') as string
  const title = formData.get('title') as string
  const slug = formData.get('slug') as string
  const content = formData.get('content') as string
  const published = formData.get('published') === 'true'

  try {
    await prisma.article.update({
      where: { id },
      data: { title, slug, content, published },
    })
  } catch {
    redirect(`/dashboard/articles/${id}/edit?error=Gagal menyimpan perubahan`)
  }

  revalidatePath('/dashboard/articles')
  redirect('/dashboard/articles')
}

export async function deleteArticle(formData: FormData) {
  const id = formData.get('id') as string
  await prisma.article.delete({ where: { id } })
  revalidatePath('/dashboard/articles')
}

export async function togglePublished(formData: FormData) {
  const id = formData.get('id') as string
  const current = formData.get('published') === 'true'
  await prisma.article.update({
    where: { id },
    data: { published: !current },
  })
  revalidatePath('/dashboard/articles')
}
