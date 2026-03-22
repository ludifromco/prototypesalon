'use client'

import { useEffect, useRef, useState } from 'react'

const defaultObserverOptions: IntersectionObserverInit = { threshold: 0.1 }

/**
 * Tracks which elements with `data-id` have entered the viewport at least once.
 */
export function useInViewItemIds(itemCount: number) {
  const [visibleIds, setVisibleIds] = useState<Set<number>>(() => new Set())
  const refs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        const raw = entry.target.getAttribute('data-id')
        const id = raw ? Number.parseInt(raw, 10) : Number.NaN
        if (!Number.isNaN(id)) {
          setVisibleIds((prev) => new Set(prev).add(id))
        }
      })
    }, defaultObserverOptions)

    refs.current.forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [itemCount])

  const setItemRef = (index: number) => (el: HTMLDivElement | null) => {
    refs.current[index] = el
  }

  return { visibleIds, setItemRef }
}
