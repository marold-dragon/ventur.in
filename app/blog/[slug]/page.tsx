import Link from 'next/link'
import { notFound } from 'next/navigation'
import { prisma } from '@/lib/prisma'
import { ArrowLeft } from '@/components/icons'
import type { Metadata } from 'next'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const article = await prisma.article.findUnique({ where: { slug } })
  if (!article) return { title: 'Artikel Tidak Ditemukan | Venturin' }
  return {
    title: `${article.title} | Venturin Blog`,
    description: article.content.slice(0, 160).trim(),
  }
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = await prisma.article.findUnique({
    where: { slug, published: true },
  })

  if (!article) notFound()

  const date = new Date(article.createdAt).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <main className="lg:py-20 md:py-15 py-12.5">
      <div className="container max-w-3xl!">
        {/* Back */}
        <Link
          href="/blog"
          className="mb-10 inline-flex items-center gap-2 text-sm text-default-500 transition-colors hover:text-default-900"
        >
          <ArrowLeft className="size-2.5" />
          Kembali ke Blog
        </Link>

        {/* Header */}
        <div className="mb-10 space-y-4 border-b border-default-200 pb-10">
          <p className="text-xs font-medium uppercase tracking-widest text-primary">{date}</p>
          <h1 className="text-4xl font-semibold leading-tight md:text-5xl">{article.title}</h1>
        </div>

        {/* Content */}
        <article
          className="prose prose-lg max-w-none
            prose-headings:font-semibold prose-headings:text-default-950
            prose-p:text-default-700 prose-p:leading-relaxed
            prose-a:text-primary prose-a:no-underline hover:prose-a:underline
            prose-strong:text-default-950
            prose-code:rounded prose-code:bg-default-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:text-primary
            prose-pre:bg-default-950 prose-pre:text-white
            prose-blockquote:border-primary prose-blockquote:text-default-600
            prose-hr:border-default-200
            prose-img:rounded-xl"
        >
          {article.content.split('\n').map((paragraph, i) =>
            paragraph.trim() ? <p key={i}>{paragraph}</p> : <br key={i} />
          )}
        </article>

        {/* Footer nav */}
        <div className="mt-12 border-t border-default-200 pt-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white shadow-primary-soft transition-all duration-300 hover:bg-primary-hover hover:scale-105 active:scale-95"
          >
            <ArrowLeft className="size-2.5" />
            Lihat Semua Artikel
          </Link>
        </div>
      </div>
    </main>
  )
}
