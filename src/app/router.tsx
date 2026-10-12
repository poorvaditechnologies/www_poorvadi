import { createBrowserRouter } from 'react-router-dom';
import { MainLayout } from '@/components/layout';
import { HomePage } from '@/pages/HomePage';
import { NotFoundPage, PrivacyPage, TermsPage } from './lazyPages';

// Add new pages here. Each page lives in src/pages and is composed of sections.
export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/privacy', element: <PrivacyPage /> },
      { path: '/terms', element: <TermsPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);
