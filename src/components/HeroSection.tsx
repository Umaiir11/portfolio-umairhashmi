import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, MessageCircle, ArrowRight, Code, Smartphone, Server, Sparkles, Zap, Star, Award } from 'lucide-react';
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
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-dev-bg-light via-dev-surface-light to-dev-bg-light dark:from-dev-bg-dark dark:via-dev-surface-dark dark:to-dev-bg-dark overflow-hidden pt-32">
      <FloatingElements />
      
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.3) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 text-center lg:text-left order-2 lg:order-1"
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
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 relative"
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
                  className="absolute -bottom-2 left-0 lg:left-0 h-1 bg-gradient-to-r from-dev-accent-blue to-dev-accent-emerald rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: '60%' }}
                  transition={{ delay: 1, duration: 1, ease: "easeOut" }}
                />
              </motion.h1>
              
              {/* Floating Tech Stack */}
              <div className="absolute -top-8 -right-8 hidden xl:block">
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

            {/* Enhanced Animated Role Tags */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex flex-wrap justify-center lg:justify-start items-center gap-3 sm:gap-4 text-base sm:text-lg md:text-xl mb-6"
            >
              {[
                { icon: Smartphone, text: 'Flutter Expert', colors: ['#10b981', '#3b82f6', '#8b5cf6'] },
                { icon: Server, text: 'Full-Stack Engineer', colors: ['#8b5cf6', '#f97316', '#10b981'] },
                { icon: Zap, text: '60FPS Optimizer', colors: ['#f97316', '#10b981', '#3b82f6'] }
              ].map((role, index) => (
                <motion.div
                  key={role.text}
                  className="flex items-center bg-dev-card-light/60 dark:bg-dev-card-dark/60 backdrop-blur-xl px-3 sm:px-4 py-2 rounded-full border border-dev-border-light/50 dark:border-dev-border-dark/50 group cursor-pointer relative overflow-hidden"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  {/* Shimmer Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '200%' }}
                    transition={{ duration: 0.8 }}
                  />
                  
                  <role.icon className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-dev-accent-blue group-hover:text-dev-accent-emerald transition-colors duration-300" />
                  <motion.span 
                    className="text-dev-text-secondary-light dark:text-dev-text-secondary-dark font-medium text-sm sm:text-base relative z-10"
                    whileHover={{
                      background: `linear-gradient(45deg, ${role.colors.join(', ')})`,
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      color: 'transparent',
                      transition: { duration: 1.5, repeat: Infinity }
                    }}
                  >
                    {role.text}
                  </motion.span>
                </motion.div>
              ))}
            </motion.div>

            {/* Upwork Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.6, type: "spring" }}
              className="relative inline-block mb-6"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full blur-lg"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <div className="relative px-6 py-3 rounded-full bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/30 backdrop-blur-sm">
                <div className="flex items-center space-x-3 text-dev-text-primary-light dark:text-dev-text-primary-dark font-bold">
                  <Award className="w-5 h-5 text-green-500" />
                  <span className="text-sm sm:text-base">Upwork Freelancer</span>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.7 + i * 0.1 }}
                      >
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      </motion.div>
                    ))}
                  </div>
                  <span className="text-green-500 font-bold">5.0</span>
                </div>
              </div>
            </motion.div>

            {/* Enhanced Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="relative"
            >
              <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto lg:mx-0 text-dev-text-secondary-light dark:text-dev-text-secondary-dark leading-relaxed px-4 lg:px-0">
                Engineering{' '}
                <motion.span 
                  className="text-dev-accent-blue font-bold relative cursor-pointer"
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
                  className="text-dev-accent-emerald font-bold cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                >
                  clean architecture
                </motion.span>
                ,{' '}
                <motion.span 
                  className="text-dev-accent-purple font-bold cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                >
                  optimized logic
                </motion.span>
                , and{' '}
                <motion.span 
                  className="text-dev-accent-orange font-bold cursor-pointer"
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
              <div className="relative px-6 sm:px-8 py-4 rounded-full bg-gradient-to-r from-dev-accent-emerald/10 to-dev-accent-blue/10 border border-dev-accent-emerald/30 backdrop-blur-sm">
                <div className="flex items-center space-x-4 sm:space-x-6 text-dev-text-primary-light dark:text-dev-text-primary-dark font-bold">
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl">4+</div>
                    <div className="text-xs opacity-70">Years</div>
                  </div>
                  <div className="w-px h-8 bg-dev-accent-emerald/30" />
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl">20+</div>
                    <div className="text-xs opacity-70">Apps</div>
                  </div>
                  <div className="w-px h-8 bg-dev-accent-emerald/30" />
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl">2.0</div>
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
              className="flex flex-col items-center lg:items-start gap-6 pt-8"
            >
              {/* Primary CTA */}
              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group relative inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-dev-accent-emerald to-dev-accent-blue text-white font-bold rounded-2xl sm:rounded-full shadow-2xl overflow-hidden w-full sm:w-auto max-w-xs sm:max-w-none"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-dev-accent-blue to-dev-accent-emerald opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
                <div className="relative flex items-center justify-center w-full sm:w-auto">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  <span className="text-sm sm:text-base">Hire Me Now</span>
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
              <div className="flex gap-3 sm:gap-4">
                {socialLinks.slice(1).map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`relative p-3 sm:p-4 rounded-2xl sm:rounded-full ${link.bgColor} border border-dev-border-light dark:border-dev-border-dark backdrop-blur-sm transition-all duration-300 ${link.color} group overflow-hidden`}
                    whileHover={{ scale: 1.1, y: -3, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1 + index * 0.1 }}
                  >
                    {/* Shimmer Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '200%' }}
                      transition={{ duration: 0.8 }}
                    />
                    
                    <link.icon className="w-5 h-5 sm:w-6 sm:h-6 relative z-10" />
                    
                    {/* Hover Glow */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl sm:rounded-full opacity-0 group-hover:opacity-100 blur-md"
                      style={{ backgroundColor: link.color.includes('blue') ? '#3b82f6' : '#6b7280' }}
                      initial={false}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Professional Avatar */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, type: "spring", stiffness: 100 }}
            className="relative order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            {/* Floating Background Elements */}
            <div className="absolute inset-0 -z-10">
              {/* Gradient Orbs */}
              <motion.div
                className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-dev-accent-blue/20 to-dev-accent-emerald/20 rounded-full blur-3xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ duration: 8, repeat: Infinity }}
              />
              <motion.div
                className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gradient-to-r from-dev-accent-purple/20 to-dev-accent-orange/20 rounded-full blur-2xl"
                animate={{ 
                  scale: [1.2, 1, 1.2],
                  rotate: [360, 180, 0]
                }}
                transition={{ duration: 6, repeat: Infinity }}
              />
              
              {/* Floating Particles */}
              {Array.from({ length: 8 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-gradient-to-r from-dev-accent-blue to-dev-accent-emerald rounded-full"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.5
                  }}
                />
              ))}
            </div>

            {/* Main Avatar Container */}
            <motion.div
              className="relative group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Glow Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-dev-accent-blue/30 via-dev-accent-emerald/30 to-dev-accent-purple/30 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                animate={{ 
                  scale: [1, 1.05, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              
              {/* Border Animation */}
              <motion.div
                className="absolute inset-0 rounded-3xl bg-gradient-to-r from-dev-accent-blue via-dev-accent-emerald to-dev-accent-purple p-1 -z-10"
                animate={{ 
                  rotate: [0, 360]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-full h-full bg-dev-bg-light dark:bg-dev-bg-dark rounded-3xl" />
              </motion.div>

              {/* Avatar Image */}
              <motion.div
                className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[28rem] lg:h-[28rem] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-dev-surface-light to-dev-card-light dark:from-dev-surface-dark dark:to-dev-card-dark"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <img
                  src="/20250611_1436_Modern Portrait Avatar_remix_01jxf5ekpbfrjb1k012xgkaszq.png"
                  alt="Umair Hashmi - Flutter Developer"
                  className="w-full h-full object-cover object-center"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-dev-bg-light/20 via-transparent to-transparent dark:from-dev-bg-dark/20" />
                
                {/* Shimmer Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '200%' }}
                  transition={{ duration: 1.5 }}
                />
              </motion.div>

              {/* Floating Badge */}
              <motion.div
                className="absolute -bottom-4 -right-4 px-4 py-2 bg-gradient-to-r from-dev-accent-emerald to-dev-accent-blue text-white font-bold rounded-full shadow-lg backdrop-blur-sm border border-white/20"
                initial={{ opacity: 0, scale: 0, rotate: -45 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                  <span className="text-sm">Available</span>
                </div>
              </motion.div>

              {/* Tech Icons Floating Around */}
              <div className="absolute inset-0 pointer-events-none">
                {[
                  { icon: '📱', position: 'top-4 left-4', delay: 1.5 },
                  { icon: '⚡', position: 'top-8 right-8', delay: 1.7 },
                  { icon: '🚀', position: 'bottom-8 left-8', delay: 1.9 },
                  { icon: '💻', position: 'bottom-4 right-16', delay: 2.1 }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className={`absolute ${item.position} text-2xl opacity-0 group-hover:opacity-100`}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ 
                      scale: [0, 1, 0],
                      rotate: [0, 360, 720],
                      y: [0, -10, 0]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      delay: item.delay
                    }}
                  >
                    {item.icon}
                  </motion.div>
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
      </div>
    </section>
  );
};