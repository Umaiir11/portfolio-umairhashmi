import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Zap, Award, Rocket } from 'lucide-react';

export const AchievementsSection: React.FC = () => {
  const achievements = [
    {
      icon: CheckCircle,
      title: '15+ Production-Ready Flutter Apps',
      description: 'Successfully delivered and deployed mobile applications across various industries',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      icon: Award,
      title: 'Expert in API-first Architecture',
      description: 'Specialized in Laravel + FastAPI backend integration with Flutter frontend',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Zap,
      title: 'Maintains 60FPS Performance',
      description: 'Optimized applications for smooth performance across all device types',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Rocket,
      title: 'Creator of LayerX Architecture',
      description: 'Open-source Flutter architecture package with 2.0.0+ versions published',
      color: 'from-purple-500 to-indigo-500'
    }
  ];

  const stats = [
    { number: '4+', label: 'Years Experience' },
    { number: '15+', label: 'Apps Delivered' },
    { number: '60', label: 'FPS Performance' },
    { number: '2.0', label: 'LayerX Version' }
  ];

  return (
    <section className="py-24 bg-dev-surface-light dark:bg-dev-surface-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dev-text-primary-light dark:text-dev-text-primary-dark mb-6">
            Achievements & Impact
          </h2>
          <p className="text-xl text-dev-text-secondary-light dark:text-dev-text-secondary-dark max-w-3xl mx-auto">
            Proven track record of delivering high-quality solutions and contributing to the Flutter community.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-dev-card-light dark:bg-dev-card-dark rounded-2xl border border-dev-border-light dark:border-dev-border-dark"
            >
              <motion.div
                className="text-3xl md:text-4xl font-bold text-dev-accent-blue mb-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                viewport={{ once: true }}
              >
                {stat.number}
              </motion.div>
              <div className="text-dev-text-secondary-light dark:text-dev-text-secondary-dark text-sm font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
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
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${achievement.color} flex items-center justify-center flex-shrink-0`}>
                    <achievement.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-dev-text-primary-light dark:text-dev-text-primary-dark mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-dev-text-secondary-light dark:text-dev-text-secondary-dark leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-dev-accent-emerald/10 to-dev-accent-blue/10 rounded-full border border-dev-accent-emerald/30">
            <Award className="w-5 h-5 mr-3 text-dev-accent-emerald" />
            <span className="text-dev-text-primary-light dark:text-dev-text-primary-dark font-semibold">
              Ready to build your next big idea together
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};