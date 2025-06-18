import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Github, Linkedin, Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Create mailto link with form data
      const subject = encodeURIComponent(formData.subject);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      const mailtoLink = `mailto:iam.umairimran@gmail.com?subject=${subject}&body=${body}`;
      
      // Open default email client
      window.location.href = mailtoLink;
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Email send error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 bg-gradient-to-br from-dev-bg-light via-dev-surface-light to-dev-bg-light dark:from-dev-bg-dark dark:via-dev-surface-dark dark:to-dev-bg-dark relative overflow-hidden">
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
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
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
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
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
            
            <Mail className="w-6 h-6 mr-3 text-blue-500" />
            <span className="text-blue-500 font-bold text-lg">Let's Connect</span>
          </motion.div>

          <motion.h2
            className="text-5xl md:text-7xl font-black mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Let's Build
            </span>
            <br />
            <span className="text-dev-text-primary-light dark:text-dev-text-primary-dark">
              Something Amazing
            </span>
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl text-dev-text-secondary-light dark:text-dev-text-secondary-dark max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Ready to turn your ideas into reality? I'm here to help you build scalable, 
            performant Flutter applications with clean architecture and modern best practices.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl lg:text-4xl font-bold text-dev-text-primary-light dark:text-dev-text-primary-dark mb-6">
                Get In Touch
              </h3>
              <p className="text-lg lg:text-xl text-dev-text-secondary-light dark:text-dev-text-secondary-dark leading-relaxed">
                Whether you need a Flutter expert for your next project, want to discuss LayerX architecture, 
                or explore full-stack development opportunities, I'm always excited to connect with fellow developers and innovators.
              </p>
            </div>

            <div className="space-y-6">
              <motion.div 
                className="flex items-center p-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg"
                whileHover={{ scale: 1.02, x: 5 }}
              >
                <Phone className="w-6 h-6 text-emerald-500 mr-4" />
                <span className="text-dev-text-secondary-light dark:text-dev-text-secondary-dark font-medium">
                  +92 318 4431218
                </span>
              </motion.div>
              <motion.div 
                className="flex items-center p-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg"
                whileHover={{ scale: 1.02, x: 5 }}
              >
                <Mail className="w-6 h-6 text-blue-500 mr-4" />
                <span className="text-dev-text-secondary-light dark:text-dev-text-secondary-dark font-medium">
                  iam.umairimran@gmail.com
                </span>
              </motion.div>
              <motion.div 
                className="flex items-center p-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg"
                whileHover={{ scale: 1.02, x: 5 }}
              >
                <MapPin className="w-6 h-6 text-purple-500 mr-4" />
                <span className="text-dev-text-secondary-light dark:text-dev-text-secondary-dark font-medium">
                  Remote & On-site Projects
                </span>
              </motion.div>
            </div>

            {/* Primary CTA */}
            <motion.a
              href={`https://wa.me/923184431218?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-600 to-blue-600 text-white font-bold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 relative overflow-hidden"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <MessageCircle className="w-6 h-6 mr-3" />
              <span className="text-lg">Start a Conversation</span>
              
              {/* Shine Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                initial={{ x: '-100%' }}
                animate={{ x: '200%' }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
              />
            </motion.a>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="text-xl lg:text-2xl font-bold text-dev-text-primary-light dark:text-dev-text-primary-dark">
                Connect With Me
              </h4>
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
                    className="p-6 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-3xl border border-gray-200/50 dark:border-gray-700/50 shadow-2xl hover:shadow-4xl transition-all duration-500 overflow-hidden relative"
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    {/* Shimmer Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '200%' }}
                      transition={{ duration: 1 }}
                    />
                    
                    <div className="relative z-10">
                      <div className="flex items-start space-x-4">
                        <div className={`${link.color} flex-shrink-0`}>
                          <link.icon className="w-8 h-8" />
                        </div>
                        <div>
                          <h4 className="font-bold text-lg text-dev-text-primary-light dark:text-dev-text-primary-dark mb-1">
                            {link.label}
                          </h4>
                          <p className="text-dev-text-secondary-light dark:text-dev-text-secondary-dark">
                            {link.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-3xl border border-gray-200/50 dark:border-gray-700/50 p-8 lg:p-10 shadow-2xl relative overflow-hidden"
          >
            {/* Background Effects */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5"
              initial={false}
            />
            
            <div className="relative z-10">
              <h3 className="text-2xl lg:text-3xl font-bold text-dev-text-primary-light dark:text-dev-text-primary-dark mb-8">
                Send Me a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <label htmlFor="name" className="block text-sm font-medium text-dev-text-primary-light dark:text-dev-text-primary-dark mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-dev-text-primary-light dark:text-dev-text-primary-dark placeholder-dev-text-secondary-light dark:placeholder-dev-text-secondary-dark focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300"
                      placeholder="Your name"
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <label htmlFor="email" className="block text-sm font-medium text-dev-text-primary-light dark:text-dev-text-primary-dark mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-dev-text-primary-light dark:text-dev-text-primary-dark placeholder-dev-text-secondary-light dark:placeholder-dev-text-secondary-dark focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </motion.div>
                </div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <label htmlFor="subject" className="block text-sm font-medium text-dev-text-primary-light dark:text-dev-text-primary-dark mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-dev-text-primary-light dark:text-dev-text-primary-dark placeholder-dev-text-secondary-light dark:placeholder-dev-text-secondary-dark focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300"
                    placeholder="Project inquiry, collaboration, etc."
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <label htmlFor="message" className="block text-sm font-medium text-dev-text-primary-light dark:text-dev-text-primary-dark mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-dev-text-primary-light dark:text-dev-text-primary-dark placeholder-dev-text-secondary-light dark:placeholder-dev-text-secondary-dark focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project, requirements, timeline, etc."
                  />
                </motion.div>
                
                {/* Submit Status */}
                {submitStatus !== 'idle' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex items-center p-4 rounded-xl ${
                      submitStatus === 'success' 
                        ? 'bg-green-500/10 text-green-500 border border-green-500/20' 
                        : 'bg-red-500/10 text-red-500 border border-red-500/20'
                    }`}
                  >
                    {submitStatus === 'success' ? (
                      <CheckCircle className="w-5 h-5 mr-2" />
                    ) : (
                      <AlertCircle className="w-5 h-5 mr-2" />
                    )}
                    <span className="text-sm">
                      {submitStatus === 'success' 
                        ? 'Email client opened! Please send the email from your default email app.' 
                        : 'Failed to open email client. Please contact me directly.'}
                    </span>
                  </motion.div>
                )}
                
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02, y: isSubmitting ? 0 : -2 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  {isSubmitting ? (
                    <motion.div
                      className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full mr-2"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                  ) : (
                    <Send className="w-5 h-5 mr-2" />
                  )}
                  {isSubmitting ? 'Opening Email...' : 'Send Message'}
                  
                  {/* Shine Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                    initial={{ x: '-100%' }}
                    animate={{ x: '200%' }}
                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                  />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-20 pt-8 border-t border-gray-200/50 dark:border-gray-700/50"
        >
          <p className="text-dev-text-secondary-light dark:text-dev-text-secondary-dark text-lg">
            © 2025 Umair Hashmi. Built with React, TypeScript & Framer Motion.
          </p>
          <p className="text-dev-text-secondary-light dark:text-dev-text-secondary-dark mt-2">
            Crafting exceptional digital experiences, one line of code at a time.
          </p>
        </motion.div>
      </div>
    </section>
  );
};