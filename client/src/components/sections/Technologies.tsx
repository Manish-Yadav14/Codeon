import { motion } from "framer-motion"
import { Code2, Database, Terminal, Cog } from "lucide-react"

const technologies = [
  {
    icon: <Code2 className="h-8 w-8" />,
    name: "Web APIs",
    description: "RESTful services, authentication, and data handling",
  },
  {
    icon: <Database className="h-8 w-8" />,
    name: "Databases",
    description: "SQL, NoSQL, and caching implementations",
  },
  {
    icon: <Terminal className="h-8 w-8" />,
    name: "CLI Tools",
    description: "Command-line utilities and script automation",
  },
  {
    icon: <Cog className="h-8 w-8" />,
    name: "System Design",
    description: "Architecture patterns and best practices",
  },
]

export function Technologies() {
  return (
    <section className="bg-slate-50 pt-24 dark:bg-slate-900">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Master Modern Technologies
            </h2>
            <p className="mx-auto mt-4 max-w-[700px] text-gray-500 dark:text-gray-400">
              Learn essential skills through hands-on practice with real-world technologies
              and industry-standard tools.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center rounded-lg border bg-white p-8 text-center shadow-sm transition-all hover:shadow-md dark:bg-slate-800"
              >
                <div className="mb-4 rounded-full bg-primary/10 p-3 text-primary">
                  {tech.icon}
                </div>
                <h3 className="mb-2 text-xl font-bold">{tech.name}</h3>
                <p className="text-sm text-muted-foreground">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}