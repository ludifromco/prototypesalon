import Link from 'next/link'
import { SITE } from '@/lib/site'

export const metadata = {
  title: `Privacy Policy | ${SITE.name}`,
  description: `How ${SITE.name} handles your information.`,
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="max-w-2xl mx-auto px-4 py-16 md:py-24">
        <p className="text-sm text-muted-foreground mb-6">
          <Link href="/" className="text-primary hover:underline">
            ← Back to home
          </Link>
        </p>
        <h1 className="text-3xl md:text-4xl font-serif font-bold mb-6">
          Privacy Policy
        </h1>
        <div className="text-muted-foreground space-y-4 text-sm leading-relaxed">
          <p>
            This page is a placeholder for your salon&apos;s privacy policy. Replace this
            content with details about what data you collect (for example, contact forms,
            booking tools, analytics), how you use it, and how visitors can reach you with
            privacy questions.
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
