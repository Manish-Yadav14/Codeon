import { Button } from "../ui/button"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <div className="container relative min-h-screen">
      <div className="flex min-h-screen flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}  
          transition={{ duration: 0.5 }}
          className="max-w-3xl space-y-4"
        >
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Learn System Building Through
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Real-World Challenges
            </span>
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            Bridge the gap between algorithmic problems and practical development with bite-sized,
            beginner-friendly system building challenges.
          </p>
          <div className="space-x-4">
            <Button size="lg">Start Learning</Button>
            <Button variant="outline" size="lg">
              View Challenges
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}