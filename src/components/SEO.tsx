import { Helmet } from 'react-helmet-async';
import { useLang } from '../context/LanguageContext';

interface SEOProps {
  title: string;
  description: string;
}

export default function SEO({ title, description }: SEOProps) {
  const { lang } = useLang();
  
  return (
    <Helmet>
      <title>{title} | Jan Seva Kendra</title>
      <meta name="description" content={description} />
      <html lang={lang} />
    </Helmet>
  );
}
