import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Server, Database, Code, Globe, Wrench } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const skillCategories = [
    {
      icon: Smartphone,
      title: 'Flutter Development',
      color: 'from-blue-500 to-cyan-500',
      skills: ['MVVM Architecture', 'GetX State Management', 'Riverpod', 'Custom Painters', 'Animations', 'Performance Optimization']
    },
    {
      icon: Code,
      title: 'Dart Expertise',
      color: 'from-emerald-500 to-teal-500',
      skills: ['Data Structures & Algorithms', 'Object-Oriented Programming', 'SOLID Principles', 'Efficient Modeling', 'Clean Code', 'Design Patterns']
    },
    {
      icon: Server,
      title: 'Backend Development',
      color: 'from-purple-500 to-indigo-500',
      skills: ['Laravel (PHP)', 'FastAPI (Python)', 'Node.js', 'RESTful APIs', 'Microservices', 'API Design']
    },
    {
      icon: Database,
      title: 'API Integration',
      color: 'from-orange-500 to-red-500',
      skills: ['RESTful Integration', 'Laravel Sanctum', 'Laravel Passport', 'Authentication', 'Data Modeling', 'Response Handling']
    },
    {
      icon: Wrench,
      title: 'Development Tools',
      color: 'from-pink-500 to-rose-500',
      skills: ['GitHub', 'Firebase', 'Postman', 'VSCode', 'SQL Clients', 'CI/CD Pipelines']
    },
    {
      icon: Globe,
      title: 'Platforms',
      color: 'from-violet-500 to-purple-500',
      skills: ['Flutter Web', 'Flutter Desktop', 'iOS Development', 'Android Development', 'Cross-platform', 'Responsive Design']
    }
  ];

  return (
    <section id="skills" className="py-24 bg-dev-bg-light dark:bg-dev-bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dev-text-primary-light dark:text-dev-text-primary-dark mb-6">
            Skills & Expertise
          </h2>
          <p className="text-xl text-dev-text-secondary-light dark:text-dev-text-secondary-dark max-w-3xl mx-auto">
            Comprehensive skillset spanning mobile development, backend engineering, and modern development practices.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <motion.div
                className="h-full p-8 bg-dev-card-light dark:bg-dev-card-dark rounded-2xl border border-dev-border-light dark:border-dev-border-dark hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center mb-4`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-dev-text-primary-light dark:text-dev-text-primary-dark">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: skillIndex * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-center"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-dev-accent-blue to-dev-accent-emerald rounded-full mr-3" />
                      <span className="text-dev-text-secondary-light dark:text-dev-text-secondary-dark">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};