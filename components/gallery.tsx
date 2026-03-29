'use client'

import Image from 'next/image'
import { Heart } from 'lucide-react'
import { useInViewItemIds } from '@/hooks/use-in-view-item-ids'

const galleryItems = [
  {
    id: 1,
    title: 'Hair',
    before:
      'https://images.unsplash.com/photo-1596703262919-862b0d71c4c3?auto=format&fit=crop&w=800&q=80',
    after:
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
    beforeCaption: 'Before — everyday style',
    afterCaption: 'After — cut & finish',
  },
  {
    id: 2,
    title: 'Skin',
    before:
      'https://images.unsplash.com/photo-1556228578-dd6d01c5c7d7?auto=format&fit=crop&w=800&q=80',
    after:
      'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80',
    beforeCaption: 'Before — at-home routine',
    afterCaption: 'After — facial glow',
  },
  {
    id: 3,
    title: 'Lashes',
    before:
      'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?auto=format&fit=crop&w=800&q=80',
    after:
      'https://images.unsplash.com/photo-1512201078372-9c6b2a0d528f?auto=format&fit=crop&w=800&q=80',
    beforeCaption: 'Before — natural lash line',
    afterCaption: 'After — fuller lashes',
  },
]

function BeforeAfterPair({
  before,
  after,
  title,
  beforeCaption,
  afterCaption,
}: {
  before: string
  after: string
  title: string
  beforeCaption: string
  afterCaption: string
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
      <figure className="relative w-full aspect-square rounded-xl overflow-hidden bg-secondary shadow-sm border border-border/60">
        <Image
          src={before}
          alt={`${title}: ${beforeCaption}`}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, 50vw"
        />
        <figcaption className="absolute bottom-0 inset-x-0 bg-black/60 text-white text-sm font-medium px-3 py-2.5">
          Before
        </figcaption>
      </figure>
      <figure className="relative w-full aspect-square rounded-xl overflow-hidden bg-secondary shadow-sm border border-border/60">
        <Image
          src={after}
          alt={`${title}: ${afterCaption}`}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, 50vw"
        />
        <figcaption className="absolute bottom-0 inset-x-0 bg-black/60 text-white text-sm font-medium px-3 py-2.5">
          After
        </figcaption>
      </figure>
    </div>
  )
}

export default function Gallery() {
  const { visibleIds, setItemRef } = useInViewItemIds(galleryItems.length)

  return (
    <section id="before-after" className="py-20 md:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-20 max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-5">
            <Heart className="text-accent" size={22} aria-hidden />
            <span className="text-accent font-semibold text-sm tracking-wide">
              BEFORE &amp; AFTER
            </span>
            <Heart className="text-accent" size={22} aria-hidden />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-6 text-balance">
            Transformations you can see
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Real results from real clients
          </p>
        </div>

        <div className="grid grid-cols-1 gap-14 md:gap-16">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              ref={setItemRef(index)}
              data-id={item.id}
              className={`transition-all duration-700 ${
                visibleIds.has(item.id)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <h3 className="text-2xl font-serif font-semibold text-foreground mb-5">
                {item.title}
              </h3>
              <BeforeAfterPair
                before={item.before}
                after={item.after}
                title={item.title}
                beforeCaption={item.beforeCaption}
                afterCaption={item.afterCaption}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
