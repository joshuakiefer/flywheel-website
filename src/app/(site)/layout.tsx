import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ScrollToTop />
      <header className="absolute inset-x-0 top-0 z-50">
        <Navigation />
      </header>
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  )
}
