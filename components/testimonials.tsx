import { testimonials } from "@/lib/data"
import { Star } from "lucide-react"

export function Testimonials() {
  return (
    <section className="relative bg-slate-950 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-cyan-400 text-sm font-medium uppercase tracking-wider">Témoignages</span>
          <h2 className="mt-4 text-3xl lg:text-4xl font-bold text-white tracking-tight">Ce que disent nos clients</h2>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="p-6 rounded-xl bg-slate-900/50 border border-slate-800">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-cyan-400 text-cyan-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-slate-300 text-sm leading-relaxed mb-6">&ldquo;{testimonial.content}&rdquo;</p>

              {/* Author */}
              <div className="border-t border-slate-800 pt-4">
                <p className="text-white font-medium text-sm">{testimonial.name}</p>
                <p className="text-slate-500 text-xs">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
