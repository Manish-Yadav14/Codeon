import { Code2, FileText, Trophy, Lightbulb } from "lucide-react"
import { motion } from "framer-motion"

const features = [
  {
    icon: <Code2 className="h-10 w-10" />,
    title: "Real-World Tasks",
    description:
      "Practice with tangible problems that mirror real development scenarios, completable in 30-60 minutes.",
  },
  {
    icon: <FileText className="h-10 w-10" />,
    title: "Small Utilities",
    description:
      "Build practical utilities like word counters, file organizers, and image resizers.",
  },
  {
    icon: <Trophy className="h-10 w-10" />,
    title: "Interactive Testing",
    description:
      "Validate your code with real-time feedback on correctness and performance.",
  },
  {
    icon: <Lightbulb className="h-10 w-10" />,
    title: "Guided Learning",
    description:
      "Access tiered hints and solutions to help you learn and improve your skills.",
  },
]

export function Features() {
  return (
    <section className="container">

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
      >
        {features.map((feature, index) => (
          <div
            key={index}
            className="rounded-lg border bg-card p-8 text-card-foreground shadow-sm transition-all hover:shadow-md"
          >
            <div className="mb-4 text-primary">{feature.icon}</div>
            <h3 className="mb-2 text-xl font-bold">{feature.title}</h3>
            <p className="text-sm text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </motion.div>
    </section>
  )
}