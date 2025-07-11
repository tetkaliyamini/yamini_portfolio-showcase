import { motion } from 'framer-motion';
import profileImage from '../assets/images/profile.jpg';

export default function Hero() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-48 h-48 md:w-64 md:h-64 relative rounded-full overflow-hidden border-4 border-blue-500 shadow-xl"
          >
            <img
              src={profileImage}
              alt="Yamini Tetakali"
              className="object-cover w-full h-full"
            />
          </motion.div>
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center md:text-left"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Hi, I'm <span className="text-blue-500">Yamini</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-300 mb-8">
              AI & ML Enthusiast
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl">
I'm Yamini Tetakali, a final-year B.Tech student specializing in AI & ML.
I have 3+ years of internship experience in Python, ML, NLP, and full-stack development.
I've built real-time sentiment analyzers, AI chatbots, Telegram bots, and ML models for healthcare.
Skilled in tools like TensorFlow, MongoDB, Flask, FastAPI, and LangChain.
I'm passionate about solving real-world problems with intelligent systems.
Currently seeking internship or entry-level roles in AI/ML and backend development.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}