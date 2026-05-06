import { useEffect } from 'react';
import { useLang } from '../context/LanguageContext';

interface SEOProps {
  title: string;
  description: string;
}

export default function SEO({ title, description }: SEOProps) {
  const { lang } = useLang();

  useEffect(() => {
    // Update document title
    document.title = `${title} | KIOSK- Digital Gramin Service Center`;

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }

    // Update html lang attribute
    document.documentElement.lang = lang;
  }, [title, description, lang]);

  return null;
}
