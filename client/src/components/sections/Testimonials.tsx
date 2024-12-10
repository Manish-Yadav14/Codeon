import { motion } from "framer-motion"

const testimonials = [
  {
    quote: "CodeCraft helped me bridge the gap between theory and practical development. The real-world challenges are incredibly valuable.",
    author: "Sarah Chen",
    role: "Software Engineer at Google",
  },
  {
    quote: "The guided learning approach and interactive testing made it easy to learn system design concepts that I struggled with before.",
    author: "Michael Rodriguez",
    role: "Full Stack Developer",
  },
  {
    quote: "Perfect platform for learning how to build real systems. The bite-sized challenges are exactly what I needed.",
    author: "Emma Thompson",
    role: "Junior Developer",
  },
]

export function Testimonials() {
  return (
    <section className="bg-muted py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <h2 className="text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Loved by Developers
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-lg bg-background p-8 shadow-sm"
              >
                <blockquote className="space-y-4">
                  <p className="text-lg">{testimonial.quote}</p>
                  <footer>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </footer>
                </blockquote>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}