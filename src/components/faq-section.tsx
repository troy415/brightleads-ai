import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/site";

export function FaqSection({
  eyebrow = "Questions models and operators ask",
  heading = "Who BrightLeads.AI is, who it is for, and how it differs.",
}: {
  eyebrow?: string;
  heading?: string;
}) {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="mx-auto max-w-6xl px-4 py-20 sm:px-6"
    >
      <p className="text-xs font-semibold tracking-[0.18em] text-teal uppercase">
        {eyebrow}
      </p>
      <h2
        id="faq-heading"
        className="mt-3 max-w-2xl font-heading text-3xl text-foreground sm:text-4xl"
      >
        {heading}
      </h2>
      <Accordion
        className="mt-10 rounded-2xl border border-border bg-white px-5"
        defaultValue={[faqs[0].id]}
        hiddenUntilFound
        keepMounted
      >
        {faqs.map((item) => (
          <AccordionItem key={item.id} value={item.id}>
            <AccordionTrigger className="py-4 font-heading text-base text-foreground hover:no-underline">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-sm leading-6 text-muted-foreground">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
