import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, MessageCircle, ArrowRight, Code, Smartphone, Server, Sparkles, Zap } from 'lucide-react';
import { FloatingElements } from './FloatingElements';

export const HeroSection: React.FC = () => {
  const socialLinks = [
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      href: 'https://wa.me/923184431218',
      color: 'text-green-500',
      bgColor: 'bg-green-500/10 hover:bg-green-500/20'
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/Umaiir11',
      color: 'text-dev-text-primary-light dark:text-dev-text-primary-dark',
      bgColor: 'bg-gray-500/10 hover:bg-gray-500/20'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/umair-hashmi/',
      color: 'text-blue-600',
      bgColor: 'bg-blue-500/10 hover:bg-blue-500/20'
    }
  ];

  const techStack = ['Flutter', 'Dart', 'GetX', 'Laravel', 'FastAPI', 'Firebase'];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-dev-bg-light via-dev-surface-light to-dev-bg-light dark:from-dev-bg-dark dark:via-dev-surface-dark dark:to-dev-bg-dark overflow-hidden">
      <FloatingElements />
      
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.3) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Animated Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, type: "spring", stiffness: 100 }}
            className="relative inline-flex items-center"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-dev-accent-blue/20 to-dev-accent-emerald/20 rounded-full blur-xl"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <div className="relative px-6 py-3 rounded-full bg-dev-accent-blue/10 border border-dev-accent-blue/30 text-dev-accent-blue text-sm font-semibold backdrop-blur-sm">
              <div className="flex items-center">
                <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
                LayerX Architecture Creator
                <motion.div
                  className="ml-2 w-2 h-2 bg-dev-accent-emerald rounded-full"
                  animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </div>
            </div>
          </motion.div>

          {/* Name with Gradient Animation */}
          <div className="relative">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-6xl md:text-8xl font-black mb-4 relative"
            >
              <motion.span
                className="bg-gradient-to-r from-dev-text-primary-light via-dev-accent-blue to-dev-accent-emerald dark:from-dev-text-primary-dark dark:via-dev-accent-blue dark:to-dev-accent-emerald bg-clip-text text-transparent"
                animate={{ 
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{ backgroundSize: '200% 200%' }}
              >
                Umair Hashmi
              </motion.span>
              
              {/* Animated Underline */}
              <motion.div
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-dev-accent-blue to-dev-accent-emerald rounded-full"
                initial={{ width: 0 }}
                animate={{ width: '60%' }}
                transition={{ delay: 1, duration: 1, ease: "easeOut" }}
              />
            </motion.h1>
            
            {/* Floating Tech Stack */}
            <div className="absolute -top-8 -right-8 hidden lg:block">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech}
                  className="absolute text-xs font-mono text-dev-accent-blue/40 whitespace-nowrap"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                    rotate: [0, 360]
                  }}
                  transition={{
                    duration: 3,
                    delay: index * 0.5 + 2,
                    repeat: Infinity,
                    repeatDelay: techStack.length * 0.5
                  }}
                  style={{
                    top: `${Math.sin(index * 60 * Math.PI / 180) * 60}px`,
                    left: `${Math.cos(index * 60 * Math.PI / 180) * 60}px`
                  }}
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Animated Role Tags */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-wrap justify-center items-center gap-6 text-lg md:text-xl mb-6"
          >
            {[
              { icon: Smartphone, text: 'Flutter Expert', color: 'text-dev-accent-emerald' },
              { icon: Server, text: 'Full-Stack Engineer', color: 'text-dev-accent-purple' },
              { icon: Zap, text: '60FPS Optimizer', color: 'text-dev-accent-orange' }
            ].map((role, index) => (
              <motion.div
                key={role.text}
                className="flex items-center bg-dev-card-light/50 dark:bg-dev-card-dark/50 backdrop-blur-sm px-4 py-2 rounded-full border border-dev-border-light/50 dark:border-dev-border-dark/50"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <role.icon className={`w-5 h-5 mr-2 ${role.color}`} />
                <span className="text-dev-text-secondary-light dark:text-dev-text-secondary-dark font-medium">
                  {role.text}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="relative"
          >
            <p className="text-xl md:text-2xl max-w-4xl mx-auto text-dev-text-secondary-light dark:text-dev-text-secondary-dark leading-relaxed">
              Engineering{' '}
              <motion.span 
                className="text-dev-accent-blue font-bold relative"
                whileHover={{ scale: 1.1 }}
              >
                future-ready Flutter apps
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-dev-accent-blue/50"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1.5, duration: 0.8 }}
                />
              </motion.span>
              {' '}using{' '}
              <motion.span 
                className="text-dev-accent-emerald font-bold"
                whileHover={{ scale: 1.1 }}
              >
                clean architecture
              </motion.span>
              ,{' '}
              <motion.span 
                className="text-dev-accent-purple font-bold"
                whileHover={{ scale: 1.1 }}
              >
                optimized logic
              </motion.span>
              , and{' '}
              <motion.span 
                className="text-dev-accent-orange font-bold"
                whileHover={{ scale: 1.1 }}
              >
                scalable backend APIs
              </motion.span>
              .
            </p>
          </motion.div>

          {/* Stats Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.6, type: "spring" }}
            className="relative inline-block"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-dev-accent-emerald/20 to-dev-accent-blue/20 rounded-full blur-lg"
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <div className="relative px-8 py-4 rounded-full bg-gradient-to-r from-dev-accent-emerald/10 to-dev-accent-blue/10 border border-dev-accent-emerald/30 backdrop-blur-sm">
              <div className="flex items-center space-x-6 text-dev-text-primary-light dark:text-dev-text-primary-dark font-bold">
                <div className="text-center">
                  <div className="text-2xl">4+</div>
                  <div className="text-xs opacity-70">Years</div>
                </div>
                <div className="w-px h-8 bg-dev-accent-emerald/30" />
                <div className="text-center">
                  <div className="text-2xl">20+</div>
                  <div className="text-xs opacity-70">Apps</div>
                </div>
                <div className="w-px h-8 bg-dev-accent-emerald/30" />
                <div className="text-center">
                  <div className="text-2xl">2.0</div>
                  <div className="text-xs opacity-70">LayerX</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Enhanced CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
          >
            {/* Primary CTA */}
            <motion.a
              href="https://wa.me/923184431218"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-dev-accent-emerald to-dev-accent-blue text-white font-bold rounded-full shadow-2xl overflow-hidden"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-dev-accent-blue to-dev-accent-emerald opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />
              <div className="relative flex items-center">
                <MessageCircle className="w-5 h-5 mr-2" />
                Hire Me Now
                <motion.div
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </div>
              
              {/* Shine Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                initial={{ x: '-100%' }}
                animate={{ x: '200%' }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              />
            </motion.a>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.slice(1).map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`relative p-4 rounded-full ${link.bgColor} border border-dev-border-light dark:border-dev-border-dark backdrop-blur-sm transition-all duration-300 ${link.color} group`}
                  whileHover={{ scale: 1.1, y: -3, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 + index * 0.1 }}
                >
                  <link.icon className="w-6 h-6 relative z-10" />
                  
                  {/* Hover Glow */}
                  <motion.div
                    className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 blur-md"
                    style={{ backgroundColor: link.color.includes('blue') ? '#3b82f6' : '#6b7280' }}
                    initial={false}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <motion.div
          className="relative"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-dev-text-secondary-light dark:border-dev-text-secondary-dark rounded-full flex justify-center relative overflow-hidden">
            <motion.div
              className="w-1 h-3 bg-gradient-to-b from-dev-accent-blue to-dev-accent-emerald rounded-full mt-2"
              animate={{ 
                y: [0, 12, 0],
                opacity: [1, 0.3, 1]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
          <motion.div
            className="absolute inset-0 border-2 border-dev-accent-blue/50 rounded-full"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.5, 0, 0.5]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};