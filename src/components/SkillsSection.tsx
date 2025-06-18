import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Smartphone, Server, Database, Code, Globe, Wrench, ChevronRight, Zap, Star, Award } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  const skillCategories = [
    {
      icon: Smartphone,
      title: 'Flutter Development',
      color: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-500/10 to-cyan-500/10',
      borderColor: 'border-blue-500/30',
      skills: [
        { name: 'MVVM Architecture', level: 95, description: 'Clean separation of concerns with GetX' },
        { name: 'GetX State Management', level: 98, description: 'Reactive programming and dependency injection' },
        { name: 'Custom Painters', level: 90, description: 'Complex UI animations and graphics' },
        { name: 'Performance Optimization', level: 95, description: '60FPS smooth animations' },
        { name: 'Responsive Design', level: 92, description: 'Multi-device compatibility' },
        { name: 'Widget Composition', level: 96, description: 'Reusable and maintainable components' }
      ]
    },
    {
      icon: Code,
      title: 'Dart Expertise',
      color: 'from-emerald-500 to-teal-500',
      bgGradient: 'from-emerald-500/10 to-teal-500/10',
      borderColor: 'border-emerald-500/30',
      skills: [
        { name: 'Object-Oriented Programming', level: 98, description: 'SOLID principles and design patterns' },
        { name: 'Data Structures & Algorithms', level: 90, description: 'Efficient problem solving' },
        { name: 'Async Programming', level: 95, description: 'Futures, Streams, and Isolates' },
        { name: 'Clean Code', level: 96, description: 'Readable and maintainable code' },
        { name: 'Testing', level: 88, description: 'Unit, widget, and integration tests' },
        { name: 'Package Development', level: 92, description: 'Creating reusable Dart packages' }
      ]
    },
    {
      icon: Server,
      title: 'Backend Development',
      color: 'from-purple-500 to-indigo-500',
      bgGradient: 'from-purple-500/10 to-indigo-500/10',
      borderColor: 'border-purple-500/30',
      skills: [
        { name: 'Laravel (PHP)', level: 92, description: 'Eloquent ORM and API development' },
        { name: 'FastAPI (Python)', level: 88, description: 'High-performance async APIs' },
        { name: 'RESTful APIs', level: 95, description: 'Scalable API architecture' },
        { name: 'Microservices', level: 85, description: 'Distributed system design' },
        { name: 'Authentication', level: 90, description: 'JWT, OAuth, and security' },
        { name: 'API Documentation', level: 92, description: 'Swagger and comprehensive docs' }
      ]
    },
    {
      icon: Database,
      title: 'Database & Storage',
      color: 'from-orange-500 to-red-500',
      bgGradient: 'from-orange-500/10 to-red-500/10',
      borderColor: 'border-orange-500/30',
      skills: [
        { name: 'MySQL/PostgreSQL', level: 90, description: 'Complex queries and optimization' },
        { name: 'Firebase', level: 95, description: 'Real-time database and cloud functions' },
        { name: 'SQLite', level: 92, description: 'Local storage and offline capabilities' },
        { name: 'Hive', level: 88, description: 'Fast NoSQL database for Flutter' },
        { name: 'Data Modeling', level: 94, description: 'Efficient schema design' },
        { name: 'Caching Strategies', level: 87, description: 'Redis and in-memory caching' }
      ]
    },
    {
      icon: Wrench,
      title: 'Development Tools',
      color: 'from-pink-500 to-rose-500',
      bgGradient: 'from-pink-500/10 to-rose-500/10',
      borderColor: 'border-pink-500/30',
      skills: [
        { name: 'Git & GitHub', level: 95, description: 'Version control and collaboration' },
        { name: 'CI/CD Pipelines', level: 85, description: 'Automated testing and deployment' },
        { name: 'Docker', level: 80, description: 'Containerization and deployment' },
        { name: 'Postman', level: 92, description: 'API testing and documentation' },
        { name: 'VSCode', level: 98, description: 'Advanced IDE configuration' },
        { name: 'Debugging', level: 94, description: 'Performance profiling and optimization' }
      ]
    },
    {
      icon: Globe,
      title: 'Platforms & Deployment',
      color: 'from-violet-500 to-purple-500',
      bgGradient: 'from-violet-500/10 to-purple-500/10',
      borderColor: 'border-violet-500/30',
      skills: [
        { name: 'Cross-platform Development', level: 96, description: 'iOS, Android, Web, Desktop' },
        { name: 'App Store Deployment', level: 90, description: 'Play Store and App Store publishing' },
        { name: 'Web Deployment', level: 88, description: 'Firebase Hosting and Netlify' },
        { name: 'Cloud Services', level: 85, description: 'AWS, Google Cloud, Firebase' },
        { name: 'Performance Monitoring', level: 87, description: 'Crashlytics and analytics' },
        { name: 'Progressive Web Apps', level: 83, description: 'PWA development and optimization' }
      ]
    }
  ];

  const getSkillColor = (level: number) => {
    if (level >= 95) return 'from-emerald-500 to-green-400';
    if (level >= 90) return 'from-blue-500 to-cyan-400';
    if (level >= 85) return 'from-purple-500 to-indigo-400';
    return 'from-orange-500 to-yellow-400';
  };

  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-dev-bg-light via-dev-surface-light to-dev-bg-light dark:from-dev-bg-dark dark:via-dev-surface-dark dark:to-dev-bg-dark relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Orbs */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 rounded-full opacity-5"
            style={{
              background: `radial-gradient(circle, ${['#3b82f6', '#10b981', '#8b5cf6', '#f97316'][i % 4]}, transparent)`
            }}
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              delay: i * 2
            }}
          />
        ))}

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-dev-accent-blue/10 to-dev-accent-emerald/10 rounded-full border border-dev-accent-blue/30 mb-8 backdrop-blur-sm"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            whileHover={{ scale: 1.05 }}
          >
            <Zap className="w-5 h-5 mr-3 text-dev-accent-blue" />
            <span className="text-dev-accent-blue font-bold">Technical Expertise</span>
            <motion.div
              className="ml-3 w-2 h-2 bg-dev-accent-emerald rounded-full"
              animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>

          <motion.h2
            className="text-5xl md:text-7xl font-black mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-dev-accent-blue via-dev-accent-emerald to-dev-accent-purple bg-clip-text text-transparent">
              Skills &
            </span>
            <br />
            <span className="text-dev-text-primary-light dark:text-dev-text-primary-dark">
              Expertise
            </span>
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl text-dev-text-secondary-light dark:text-dev-text-secondary-dark max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Comprehensive skillset spanning mobile development, backend engineering, and modern development practices.
            Specialized in creating production-ready applications with clean architecture.
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
              onMouseEnter={() => setHoveredSkill(categoryIndex)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <motion.div
                className={`relative h-full p-8 bg-dev-card-light/60 dark:bg-dev-card-dark/60 backdrop-blur-xl rounded-3xl border ${category.borderColor} hover:shadow-2xl transition-all duration-500 overflow-hidden`}
                whileHover={{ y: -10, scale: 1.02 }}
                onClick={() => setActiveCategory(activeCategory === categoryIndex ? null : categoryIndex)}
              >
                {/* Shimmer Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"
                  initial={{ x: '-100%' }}
                  animate={hoveredSkill === categoryIndex ? { x: '200%' } : { x: '-100%' }}
                  transition={{ duration: 1.5 }}
                />

                {/* Glass Effect Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.bgGradient} opacity-50`} />
                
                {/* Header */}
                <div className="relative z-10 mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <motion.div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center shadow-lg`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <category.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    
                    <motion.div
                      animate={{ rotate: activeCategory === categoryIndex ? 90 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronRight className="w-6 h-6 text-dev-text-secondary-light dark:text-dev-text-secondary-dark" />
                    </motion.div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-dev-text-primary-light dark:text-dev-text-primary-dark mb-2">
                    {category.title}
                  </h3>
                  
                  <div className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm text-dev-text-secondary-light dark:text-dev-text-secondary-dark font-medium">
                      {category.skills.length} Skills
                    </span>
                  </div>
                </div>
                
                {/* Skills Preview */}
                <div className="relative z-10 space-y-3">
                  {category.skills.slice(0, 3).map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      className="flex items-center justify-between p-3 bg-dev-surface-light/50 dark:bg-dev-surface-dark/50 rounded-xl backdrop-blur-sm"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                      whileHover={{ scale: 1.02, x: 5 }}
                    >
                      <span className="text-dev-text-primary-light dark:text-dev-text-primary-dark font-medium text-sm">
                        {skill.name}
                      </span>
                      <div className="flex items-center space-x-2">
                        <div className="w-12 h-2 bg-dev-surface-light dark:bg-dev-surface-dark rounded-full overflow-hidden">
                          <motion.div
                            className={`h-full bg-gradient-to-r ${getSkillColor(skill.level)} rounded-full`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                          />
                        </div>
                        <span className="text-xs text-dev-text-secondary-light dark:text-dev-text-secondary-dark font-bold">
                          {skill.level}%
                        </span>
                      </div>
                    </motion.div>
                  ))}
                  
                  {category.skills.length > 3 && (
                    <motion.div
                      className="text-center pt-2"
                      whileHover={{ scale: 1.05 }}
                    >
                      <span className="text-sm text-dev-accent-blue font-medium cursor-pointer">
                        +{category.skills.length - 3} more skills
                      </span>
                    </motion.div>
                  )}
                </div>

                {/* Expanded Skills */}
                <AnimatePresence>
                  {activeCategory === categoryIndex && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="relative z-10 mt-6 pt-6 border-t border-dev-border-light/50 dark:border-dev-border-dark/50"
                    >
                      <div className="space-y-4">
                        {category.skills.slice(3).map((skill, skillIndex) => (
                          <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: skillIndex * 0.05 }}
                            className="p-4 bg-dev-surface-light/30 dark:bg-dev-surface-dark/30 rounded-xl backdrop-blur-sm"
                          >
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-dev-text-primary-light dark:text-dev-text-primary-dark font-medium">
                                {skill.name}
                              </span>
                              <span className="text-sm text-dev-accent-blue font-bold">
                                {skill.level}%
                              </span>
                            </div>
                            <p className="text-xs text-dev-text-secondary-light dark:text-dev-text-secondary-dark mb-3">
                              {skill.description}
                            </p>
                            <div className="w-full h-2 bg-dev-surface-light dark:bg-dev-surface-dark rounded-full overflow-hidden">
                              <motion.div
                                className={`h-full bg-gradient-to-r ${getSkillColor(skill.level)} rounded-full`}
                                initial={{ width: 0 }}
                                animate={{ width: `${skill.level}%` }}
                                transition={{ duration: 1, delay: skillIndex * 0.1 }}
                              />
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              { label: 'Technologies', value: '20+', icon: '⚡' },
              { label: 'Years Experience', value: '4+', icon: '🚀' },
              { label: 'Skill Categories', value: '6', icon: '🎯' },
              { label: 'Avg. Proficiency', value: '92%', icon: '⭐' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="bg-dev-card-light/50 dark:bg-dev-card-dark/50 backdrop-blur-sm p-6 rounded-2xl border border-dev-border-light/50 dark:border-dev-border-dark/50"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + index * 0.1, type: "spring" }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="text-2xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-dev-accent-blue mb-2">{stat.value}</div>
                <div className="text-sm text-dev-text-secondary-light dark:text-dev-text-secondary-dark font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-dev-accent-emerald/10 to-dev-accent-blue/10 rounded-full border border-dev-accent-emerald/30 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
          >
            <Award className="w-5 h-5 mr-3 text-dev-accent-emerald" />
            <span className="text-dev-text-primary-light dark:text-dev-text-primary-dark font-bold">
              Continuously learning and evolving with the latest technologies
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};