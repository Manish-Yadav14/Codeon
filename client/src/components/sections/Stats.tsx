import { motion } from "framer-motion"

const stats = [
  { number: "1000+", label: "Challenges" },
  { number: "50K+", label: "Active Users" },
  { number: "100K+", label: "Solutions Submitted" },
  { number: "4.8/5", label: "User Rating" },
]

export function Stats() {
  return (
    <section className="container py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 gap-8 md:grid-cols-4"
      >
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center space-y-2 text-center"
          >
            <div className="text-4xl font-bold text-primary">{stat.number}</div>
            <div className="text-sm text-muted-foreground">{stat.label}</div>
          </div>
        ))}
      </motion.div>
    </section>
  )
}