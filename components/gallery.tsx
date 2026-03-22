'use client'

import Image from 'next/image'
import { Heart } from 'lucide-react'
import { useInViewItemIds } from '@/hooks/use-in-view-item-ids'

const galleryItems = [
  {
    id: 1,
    title: 'Nail transformation',
    before: '/before-after-nails-before.jpg',
    after: '/before-after-nails-after.jpg',
    beforeCaption: 'Before — manicure prep at the nail desk',
    afterCaption: 'After — finished polish and care',
  },
  {
    id: 2,
    title: 'Skin glow-up',
    before: '/before-after-skin-before.jpg',
    after: '/before-after-skin-after.jpg',
    beforeCaption: 'Before — everyday hydration at home',
    afterCaption: 'After — professional facial treatment',
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
      <figure className="relative w-full aspect-square rounded-lg overflow-hidden bg-secondary shadow-sm">
        <Image
          src={before}
          alt={`${title}: ${beforeCaption}`}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, 50vw"
        />
        <figcaption className="absolute bottom-0 inset-x-0 bg-black/55 text-white text-sm font-medium px-3 py-2">
          Before
        </figcaption>
      </figure>
      <figure className="relative w-full aspect-square rounded-lg overflow-hidden bg-secondary shadow-sm">
        <Image
          src={after}
          alt={`${title}: ${afterCaption}`}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, 50vw"
        />
        <figcaption className="absolute bottom-0 inset-x-0 bg-black/55 text-white text-sm font-medium px-3 py-2">
          After
        </figcaption>
      </figure>
    </div>
  )
}

export default function Gallery() {
  const { visibleIds, setItemRef } = useInViewItemIds(galleryItems.length)

  return (
    <section id="gallery" className="py-16 md:py-24 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-20">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="text-primary" size={24} />
            <span className="text-primary font-semibold">TRANSFORMATIONS</span>
            <Heart className="text-primary" size={24} />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 text-balance">
            Real Results, Real Beauty
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Side-by-side looks at the kind of results clients achieve at La Beautique.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12">
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
              <div className="mb-4">
                <h3 className="text-2xl font-serif font-bold text-foreground">
                  {item.title}
                </h3>
              </div>
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
