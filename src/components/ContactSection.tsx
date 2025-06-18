import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const socialLinks = [
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      href: 'https://wa.me/923184431218',
      color: 'text-green-500',
      description: 'Direct message for quick response'
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/Umaiir11',
      color: 'text-dev-text-primary-light dark:text-dev-text-primary-dark',
      description: 'View my open source contributions'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/umair-hashmi/',
      color: 'text-blue-600',
      description: 'Professional networking and updates'
    }
  ];

  const whatsappMessage = encodeURIComponent(
    "👋 Hey, this is Umair Hashmi – Flutter & Full-Stack Developer. How can I help you build your next big idea?"
  );

  return (
    <section id="contact" className="py-24 bg-dev-bg-light dark:bg-dev-bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dev-text-primary-light dark:text-dev-text-primary-dark mb-6">
            Let's Build Something Amazing
          </h2>
          <p className="text-xl text-dev-text-secondary-light dark:text-dev-text-secondary-dark max-w-3xl mx-auto">
            Ready to turn your ideas into reality? I'm here to help you build scalable, 
            performant Flutter applications with clean architecture and modern best practices.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-dev-text-primary-light dark:text-dev-text-primary-dark mb-4">
                Get In Touch
              </h3>
              <p className="text-dev-text-secondary-light dark:text-dev-text-secondary-dark leading-relaxed">
                Whether you need a Flutter expert for your next project, want to discuss LayerX architecture, 
                or explore full-stack development opportunities, I'm always excited to connect with fellow developers and innovators.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-dev-accent-emerald mr-3" />
                <span className="text-dev-text-secondary-light dark:text-dev-text-secondary-dark">
                  +92 318 4431218
                </span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-dev-accent-blue mr-3" />
                <span className="text-dev-text-secondary-light dark:text-dev-text-secondary-dark">
                  Available via WhatsApp & LinkedIn
                </span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-dev-accent-purple mr-3" />
                <span className="text-dev-text-secondary-light dark:text-dev-text-secondary-dark">
                  Remote & On-site Projects
                </span>
              </div>
            </div>

            {/* Primary CTA */}
            <motion.a
              href={`https://wa.me/923184431218?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-dev-accent-emerald to-dev-accent-blue text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Start a Conversation
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-dev-text-primary-light dark:text-dev-text-primary-dark mb-6">
              Connect With Me
            </h3>
            
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="p-6 bg-dev-card-light dark:bg-dev-card-dark rounded-2xl border border-dev-border-light dark:border-dev-border-dark hover:shadow-lg transition-all duration-300"
                  whileHover={{ y: -3, scale: 1.02 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`${link.color} flex-shrink-0`}>
                      <link.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-dev-text-primary-light dark:text-dev-text-primary-dark mb-1">
                        {link.label}
                      </h4>
                      <p className="text-sm text-dev-text-secondary-light dark:text-dev-text-secondary-dark">
                        {link.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16 pt-8 border-t border-dev-border-light dark:border-dev-border-dark"
        >
          <p className="text-dev-text-secondary-light dark:text-dev-text-secondary-dark">
            © 2025 Umair Hashmi. Built with React, TypeScript & Framer Motion.
          </p>
          <p className="text-sm text-dev-text-secondary-light dark:text-dev-text-secondary-dark mt-2">
            Crafting exceptional digital experiences, one line of code at a time.
          </p>
        </motion.div>
      </div>
    </section>
  );
};