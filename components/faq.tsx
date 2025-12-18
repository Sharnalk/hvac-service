import { faqItems } from "@/lib/data"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQ() {
  return (
    <section className="relative bg-slate-900 py-24 lg:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-cyan-400 text-sm font-medium uppercase tracking-wider">FAQ</span>
          <h2 className="mt-4 text-3xl lg:text-4xl font-bold text-white tracking-tight">Questions fréquentes</h2>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="space-y-3">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-slate-800 rounded-xl px-6 bg-slate-950/50 data-[state=open]:border-slate-700"
            >
              <AccordionTrigger className="text-white hover:text-cyan-400 text-left py-5 text-sm font-medium">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-slate-400 text-sm leading-relaxed pb-5">{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
