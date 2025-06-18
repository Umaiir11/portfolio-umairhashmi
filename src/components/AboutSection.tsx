import React from 'react';
import { motion } from 'framer-motion';
import { Package, Brain, Layers, Database } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const highlights = [
    {
      icon: Layers,
      title: 'LayerX Architecture Creator',
      description: 'A Flutter architecture optimized for production apps'
    },
    {
      icon: Package,
      title: 'Official Pub.dev Package',
      description: 'layerx_generator: ^2.0.0',
      link: 'https://pub.dev/packages/layerx_generator'
    },
    {
      icon: Brain,
      title: 'Deep Focus on Dart OOP',
      description: 'SOLID principles, MVVM + GetX, API body/response modeling'
    },
    {
      icon: Database,
      title: 'Full-stack Development',
      description: 'Firebase, Laravel, FastAPI, MySQL/PostgreSQL'
    }
  ];

  return (
    <section id="about" className="py-24 bg-dev-surface-light dark:bg-dev-surface-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dev-text-primary-light dark:text-dev-text-primary-dark mb-6">
            About Me
          </h2>
          <p className="text-xl text-dev-text-secondary-light dark:text-dev-text-secondary-dark max-w-3xl mx-auto">
            Senior Flutter Developer with 4+ years of experience creating production-ready mobile applications. 
            Creator of LayerX architecture and passionate about clean code, scalable solutions, and performant apps.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <motion.div
                className="p-8 bg-dev-card-light dark:bg-dev-card-dark rounded-2xl border border-dev-border-light dark:border-dev-border-dark hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-dev-accent-blue to-dev-accent-emerald rounded-xl flex items-center justify-center">
                      <highlight.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-dev-text-primary-light dark:text-dev-text-primary-dark mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-dev-text-secondary-light dark:text-dev-text-secondary-dark leading-relaxed">
                      {highlight.description}
                    </p>
                    {highlight.link && (
                      <motion.a
                        href={highlight.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center mt-3 text-dev-accent-blue hover:text-dev-accent-emerald font-medium"
                        whileHover={{ x: 5 }}
                      >
                        View Package →
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};