import { Outlet } from 'react-router-dom';
import { ScrollProgress } from '@/components/animations';
import { CookieConsent, CookieConsentProvider } from '@/components/cookie';
import { Footer } from './Footer';
import { Navbar } from './Navbar';

export function MainLayout() {
  return (
    <CookieConsentProvider>
      <ScrollProgress />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      {/* Mounted once here so consent works on every route (/, /privacy, /terms). */}
      <CookieConsent />
    </CookieConsentProvider>
  );
}
