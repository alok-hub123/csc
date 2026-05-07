import { useLang } from "../context/LanguageContext";
import PageTransition from "./PageTransition";
import SEO from "./SEO";

export default function EventsPage() {

  const { t, lang } = useLang();

  return (
    <PageTransition className="mt-[116px]">
      <SEO title={t("nav.events")} description={t("events.subtitle")} />

      <section className="h-[90vh] w-full flex items-center justify-center">
        <span className="text-2xl">No events added yet</span>
      </section>
    </PageTransition>
  );
}
