import Link from 'next/link'
import { SITE } from '@/lib/site'

export const metadata = {
  title: `Terms of Service | ${SITE.name}`,
  description: `Terms for using ${SITE.name} services and website.`,
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="max-w-2xl mx-auto px-4 py-16 md:py-24">
        <p className="text-sm text-muted-foreground mb-6">
          <Link href="/" className="text-primary hover:underline">
            ← Back to home
          </Link>
        </p>
        <h1 className="text-3xl md:text-4xl font-serif font-bold mb-6">
          Terms of Service
        </h1>
        <div className="text-muted-foreground space-y-4 text-sm leading-relaxed">
          <p>
            This page is a placeholder for your terms of service. Add your cancellation
            policy, deposits, liability limitations, and any rules for using your website
            or booking system.
          </p>
          <p>
            For questions, contact {SITE.name} at{' '}
            <a href={`tel:${SITE.phoneTel}`} className="text-primary hover:underline">
              {SITE.phoneDisplay}
            </a>
            .
          </p>
        </div>
      </div>
    </main>
  )
}
