import React from 'react';
import { motion } from 'framer-motion';
import { Package, Brain, Layers, Database, ArrowRight, Sparkles, Star, User, Award } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const highlights = [
    {
      icon: Layers,
      title: 'LayerX Architecture Creator',
      description: 'Revolutionary Flutter architecture that transforms how developers build scalable applications',
      link: 'https://pub.dev/packages/layerx_generator',
      gradient: 'from-blue-600 via-purple-600 to-indigo-600',
      bgGradient: 'from-blue-500/10 via-purple-500/10 to-indigo-500/10',
      iconBg: 'from-blue-500 to-indigo-600',
      stats: '2.0.0 Version'
    },
    {
      icon: Package,
      title: 'Official Pub.dev Package',
      description: 'Published and maintained package trusted by Flutter developers worldwide',
      link: 'https://pub.dev/packages/layerx_generator',
      gradient: 'from-emerald-600 via-teal-600 to-cyan-600',
      bgGradient: 'from-emerald-500/10 via-teal-500/10 to-cyan-500/10',
      iconBg: 'from-emerald-500 to-cyan-600',
      stats: '167+ Downloads'
    },
    {
      icon: Brain,
      title: 'Deep Focus on Dart OOP',
      description: 'Master of SOLID principles, advanced design patterns, and clean architecture implementation',
      gradient: 'from-orange-600 via-red-600 to-pink-600',
      bgGradient: 'from-orange-500/10 via-red-500/10 to-pink-500/10',
      iconBg: 'from-orange-500 to-pink-600',
      stats: '4+ Years'
    },
    {
      icon: Database,
      title: 'Full-stack Development',
      description: 'End-to-end solutions with modern backend technologies and scalable database architectures',
      gradient: 'from-violet-600 via-purple-600 to-fuchsia-600',
      bgGradient: 'from-violet-500/10 via-purple-500/10 to-fuchsia-500/10',
      iconBg: 'from-violet-500 to-fuchsia-600',
      stats: '20+ Apps'
    }
  ];

  return (
    <section id="about" className="py-32 bg-gradient-to-br from-dev-surface-light via-dev-bg-light to-dev-surface-light dark:from-dev-surface-dark dark:via-dev-bg-dark dark:to-dev-surface-dark relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Gradient Orbs */}
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-96 h-96 rounded-full opacity-20 blur-3xl"
            style={{
              background: `radial-gradient(circle, ${
                ['#3b82f6', '#10b981', '#8b5cf6', '#f97316', '#ef4444', '#06b6d4'][i]
              }, transparent)`
            }}
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
            }}
            animate={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              delay: i * 2
            }}
          />
        ))}

        {/* Floating Particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-60"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
            }}
            animate={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: i * 0.5
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Enhanced Badge */}
            <motion.div
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-indigo-500/10 backdrop-blur-xl rounded-full border border-blue-500/20 mb-8 relative overflow-hidden"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.05 }}
            >
              {/* Shimmer Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                initial={{ x: '-100%' }}
                animate={{ x: '200%' }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
              />
              
              <Sparkles className="w-6 h-6 mr-3 text-blue-500" />
              <span className="text-blue-500 font-bold text-lg">Professional Excellence</span>
              <motion.div
                className="ml-3 w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                animate={{ 
                  scale: [1, 1.5, 1], 
                  opacity: [1, 0.5, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>

            <motion.h2
              className="text-4xl md:text-6xl lg:text-7xl font-black mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                About
              </span>
              <br />
              <span className="text-dev-text-primary-light dark:text-dev-text-primary-dark">
                Excellence
              </span>
            </motion.h2>

            <motion.p
              className="text-lg md:text-xl lg:text-2xl text-dev-text-secondary-light dark:text-dev-text-secondary-dark leading-relaxed max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Senior Flutter Developer with 4+ years of experience creating production-ready mobile applications. 
              Creator of LayerX architecture and passionate about clean code, scalable solutions, and performant apps.
            </motion.p>
          </motion.div>
        </div>

        {/* Modern Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <motion.div
                className="relative h-full p-8 lg:p-10 bg-white/80 dark:bg-gray-900/80 backdrop-blur-2xl rounded-3xl border border-gray-200/50 dark:border-gray-700/50 shadow-2xl hover:shadow-4xl transition-all duration-700 overflow-hidden"
                whileHover={{ 
                  y: -12, 
                  scale: 1.02,
                  rotateX: 5,
                  rotateY: 5
                }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Animated Background Gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${highlight.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
                  initial={false}
                />

                {/* Shimmer Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '200%' }}
                  transition={{ duration: 1.5 }}
                />

                {/* Floating Particles */}
                <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`
                      }}
                      animate={{
                        scale: [0, 1, 0],
                        opacity: [0, 1, 0],
                        y: [0, -20, -40]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.2
                      }}
                    />
                  ))}
                </div>

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <motion.div
                      className={`w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-gradient-to-r ${highlight.iconBg} flex items-center justify-center shadow-2xl`}
                      whileHover={{ 
                        rotate: 360, 
                        scale: 1.1,
                        boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
                      }}
                      transition={{ duration: 0.8, type: "spring" }}
                    >
                      <highlight.icon className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
                    </motion.div>

                    {/* Stats Badge */}
                    <motion.div
                      className="px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-full border border-gray-300/50 dark:border-gray-600/50"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <span className="text-sm font-bold text-gray-700 dark:text-gray-300">
                        {highlight.stats}
                      </span>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <motion.h3
                    className="text-2xl lg:text-3xl font-bold text-dev-text-primary-light dark:text-dev-text-primary-dark mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-500"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                  >
                    {highlight.title}
                  </motion.h3>

                  <motion.p
                    className="text-dev-text-secondary-light dark:text-dev-text-secondary-dark leading-relaxed mb-6 text-base lg:text-lg"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                  >
                    {highlight.description}
                  </motion.p>

                  {/* Action Button */}
                  {highlight.link && (
                    <motion.a
                      href={highlight.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group/btn relative overflow-hidden"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                    >
                      <span className="mr-2 relative z-10">Explore Package</span>
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="relative z-10"
                      >
                        <ArrowRight className="w-5 h-5" />
                      </motion.div>
                      
                      {/* Button Shimmer */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 rounded-xl"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: '200%' }}
                        transition={{ duration: 0.8 }}
                      />
                    </motion.a>
                  )}

                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      <Star className="w-6 h-6 text-blue-500" />
                    </motion.div>
                  </div>
                </div>

                {/* Glow Effect */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${highlight.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-all duration-700 -z-10`}
                  initial={false}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <motion.div
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-indigo-500/10 backdrop-blur-xl rounded-full border border-blue-500/20 relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"
              initial={{ x: '-100%' }}
              animate={{ x: '200%' }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
            />
            
            <Star className="w-6 h-6 mr-3 text-blue-500" />
            <span className="text-dev-text-primary-light dark:text-dev-text-primary-dark font-bold text-lg">
              Ready to build your next big idea together
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};