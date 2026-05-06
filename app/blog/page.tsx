import Link from 'next/link'
import { prisma } from '@/lib/prisma'
import { ArrowRight } from '@/components/icons'

export const metadata = {
  title: 'Blog | Venturin',
  description: 'Artikel, insight, dan update terbaru dari tim Venturin.',
}

export default async function BlogPage() {
  const articles = await prisma.article.findMany({
    where: { published: true },
    orderBy: { createdAt: 'desc' },
  })

  return (
    <main className="lg:py-20 md:py-15 py-12.5">
      <div className="container">
        {/* Header */}
        <div className="mb-12 space-y-4">
          <div className="inline-flex py-1.5 px-2.5 rounded items-center justify-center gap-2 inset-shadow">
            <span className="font-semibold text-xs/none uppercase tracking-widest">Blog</span>
          </div>
          <h1 className="text-[52px] leading-tight">Insights & Updates</h1>
          <p className="max-w-xl text-default-600">
            Artikel, studi kasus, dan pemikiran dari tim Venturin tentang desain, teknologi, dan bisnis digital.
          </p>
        </div>

        {articles.length === 0 ? (
          <div className="rounded-2xl border border-default-200 bg-default-100 p-20 text-center">
            <p className="text-default-500">Belum ada artikel yang dipublikasikan.</p>
          </div>
        ) : (
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => {
              const excerpt = article.content.slice(0, 140).trim() + (article.content.length > 140 ? '...' : '')
              const date = new Date(article.createdAt).toLocaleDateString('id-ID', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })
              return (
                <Link
                  key={article.id}
                  href={`/blog/${article.slug}`}
                  className="group flex flex-col rounded-2xl border border-default-200 bg-white p-5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="mb-4 flex-1 space-y-3">
                    <p className="text-xs font-medium uppercase tracking-widest text-primary">{date}</p>
                    <h2 className="text-[22px] leading-snug group-hover:text-primary transition-colors duration-200">
                      {article.title}
                    </h2>
                    <p className="text-sm text-default-600 leading-relaxed">{excerpt}</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-medium text-primary mt-4 pt-4 border-t border-default-100">
                    Baca selengkapnya
                    <ArrowRight className="size-3 transition-transform duration-200 group-hover:translate-x-1" />
                  </div>
                </Link>
              )
            })}
          </div>
        )}
      </div>
    </main>
  )
}
