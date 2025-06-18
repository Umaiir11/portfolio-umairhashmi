import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Smartphone, Eye, Filter, Search, Star, TrendingUp } from 'lucide-react';
import { ProjectModal } from './ProjectModal';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    { 
      name: 'Hi-Live', 
      stack: 'Live video streaming, Real-time chat, WebRTC', 
      category: 'Social',
      description: 'Advanced live streaming platform with real-time interactions',
      features: ['Live Video', 'Chat System', 'User Profiles', 'Monetization'],
      complexity: 'High',
      status: 'Live'
    },
    { 
      name: 'Ninja-Car-APP', 
      stack: 'Vehicle tracking, GPS integration, Maps', 
      category: 'Automotive',
      description: 'Comprehensive vehicle tracking and management system',
      features: ['GPS Tracking', 'Route Optimization', 'Fleet Management', 'Analytics'],
      complexity: 'High',
      status: 'Live'
    },
    { 
      name: 'Seaside-Vouchers-User', 
      stack: 'Voucher system, QR codes, Payment gateway', 
      category: 'E-commerce',
      description: 'Digital voucher platform for seamless transactions',
      features: ['QR Scanning', 'Digital Wallet', 'Rewards', 'History'],
      complexity: 'Medium',
      status: 'Live'
    },
    { 
      name: 'CarChieve2.0-APP', 
      stack: 'Vehicle record management, Document storage', 
      category: 'Automotive',
      description: 'Digital vehicle record keeping and maintenance tracking',
      features: ['Document Storage', 'Maintenance Alerts', 'Service History', 'Reports'],
      complexity: 'Medium',
      status: 'Live'
    },
    { 
      name: 'Blue-dreams-Flutter', 
      stack: 'Aesthetic UI, Custom animations, Material Design', 
      category: 'Lifestyle',
      description: 'Beautifully designed lifestyle app with premium UX',
      features: ['Custom UI', 'Animations', 'Dark Mode', 'Personalization'],
      complexity: 'Medium',
      status: 'Live'
    },
    { 
      name: 'GPS-App', 
      stack: 'Location services, Maps integration, Navigation', 
      category: 'Navigation',
      description: 'Advanced GPS navigation with offline capabilities',
      features: ['Offline Maps', 'Turn-by-turn', 'Traffic Updates', 'POI Search'],
      complexity: 'High',
      status: 'Live'
    },
    { 
      name: 'souq_ai_crypto', 
      stack: 'AI Crypto analysis, Trading insights, Real-time data', 
      category: 'FinTech',
      description: 'AI-powered cryptocurrency analysis and trading platform',
      features: ['AI Analysis', 'Real-time Data', 'Portfolio Tracking', 'Alerts'],
      complexity: 'High',
      status: 'Live'
    },
    { 
      name: 'Estatepie-Flutter', 
      stack: 'Real estate listings, Property search, Virtual tours', 
      category: 'Real Estate',
      description: 'Comprehensive real estate platform with advanced search',
      features: ['Property Search', 'Virtual Tours', 'Mortgage Calculator', 'Favorites'],
      complexity: 'High',
      status: 'Live'
    },
    { 
      name: 'Prize-Draw-New', 
      stack: 'Reward system, Gamification, Push notifications', 
      category: 'Gaming',
      description: 'Engaging prize draw system with gamification elements',
      features: ['Lucky Draws', 'Rewards', 'Leaderboards', 'Achievements'],
      complexity: 'Medium',
      status: 'Live'
    },
    { 
      name: 'Jump-APP', 
      stack: 'Quick booking, Service marketplace, Payment integration', 
      category: 'Services',
      description: 'On-demand service booking platform',
      features: ['Quick Booking', 'Service Providers', 'Payments', 'Reviews'],
      complexity: 'High',
      status: 'Live'
    },
    { 
      name: 'PostYako-App', 
      stack: 'Social posting, Media sharing, Content management', 
      category: 'Social',
      description: 'Social media platform for content creators',
      features: ['Media Sharing', 'Content Creation', 'Social Feed', 'Analytics'],
      complexity: 'High',
      status: 'Live'
    },
    { 
      name: 'Tagmuh', 
      stack: 'Multi-version service platform, API integration', 
      category: 'Services',
      description: 'Versatile service platform with multiple versions',
      features: ['Multi-platform', 'Service Management', 'User Profiles', 'Analytics'],
      complexity: 'High',
      status: 'Live'
    },
    { 
      name: 'good-eats', 
      stack: 'Food recipes, Meal planning, Nutrition tracking', 
      category: 'Food',
      description: 'Comprehensive food and nutrition management app',
      features: ['Recipe Database', 'Meal Planning', 'Nutrition Facts', 'Shopping Lists'],
      complexity: 'Medium',
      status: 'Live'
    },
    { 
      name: 'StaffIt', 
      stack: 'Staff management, Attendance tracking, HR tools', 
      category: 'Business',
      description: 'Complete HR and staff management solution',
      features: ['Attendance', 'Payroll', 'Performance', 'Reports'],
      complexity: 'High',
      status: 'Live'
    },
    { 
      name: 'Fazah-app', 
      stack: 'Social support, Community features, Chat system', 
      category: 'Social',
      description: 'Community support platform for social connections',
      features: ['Community Chat', 'Support Groups', 'Events', 'Resources'],
      complexity: 'Medium',
      status: 'Live'
    },
    { 
      name: 'Lifted-Voices', 
      stack: 'Community feedback, User engagement, Surveys', 
      category: 'Community',
      description: 'Platform for community feedback and engagement',
      features: ['Feedback System', 'Surveys', 'Analytics', 'Reporting'],
      complexity: 'Medium',
      status: 'Live'
    },
    { 
      name: 'Seaside-Vouchers-Business', 
      stack: 'Vendor system, Business analytics, Dashboard', 
      category: 'Business',
      description: 'Business dashboard for voucher management',
      features: ['Vendor Dashboard', 'Analytics', 'Revenue Tracking', 'Reports'],
      complexity: 'High',
      status: 'Live'
    },
    { 
      name: 'Unstoppable-App', 
      stack: 'Motivation, Personal notes, Goal tracking', 
      category: 'Productivity',
      description: 'Personal development and motivation tracking app',
      features: ['Goal Setting', 'Progress Tracking', 'Motivational Content', 'Reminders'],
      complexity: 'Medium',
      status: 'Live'
    },
    { 
      name: 'barn-yard', 
      stack: 'Agriculture management, Farm tracking, IoT integration', 
      category: 'Agriculture',
      description: 'Smart agriculture management and monitoring system',
      features: ['Farm Management', 'Crop Monitoring', 'Weather Data', 'Analytics'],
      complexity: 'High',
      status: 'Live'
    }
  ];

  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = projects.filter(project => {
    const matchesCategory = activeCategory === 'All' || project.category === activeCategory;
    const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.stack.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case 'High': return 'text-red-500 bg-red-500/10';
      case 'Medium': return 'text-yellow-500 bg-yellow-500/10';
      case 'Low': return 'text-green-500 bg-green-500/10';
      default: return 'text-blue-500 bg-blue-500/10';
    }
  };

  const getCategoryIcon = (category: string) => {
    const icons: { [key: string]: string } = {
      'Social': '👥',
      'Automotive': '🚗',
      'E-commerce': '🛒',
      'Lifestyle': '✨',
      'Navigation': '🗺️',
      'FinTech': '💰',
      'Real Estate': '🏠',
      'Gaming': '🎮',
      'Services': '⚙️',
      'Food': '🍽️',
      'Business': '💼',
      'Community': '🤝',
      'Productivity': '📈',
      'Agriculture': '🌾'
    };
    return icons[category] || '📱';
  };

  const handleProjectClick = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-24 bg-gradient-to-br from-dev-surface-light via-dev-bg-light to-dev-surface-light dark:from-dev-surface-dark dark:via-dev-bg-dark dark:to-dev-surface-dark relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 2px, transparent 2px),
                             radial-gradient(circle at 75% 75%, #10b981 2px, transparent 2px)`,
            backgroundSize: '100px 100px'
          }}
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%']
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-dev-accent-emerald/10 to-dev-accent-blue/10 rounded-full border border-dev-accent-emerald/30 mb-8"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            <TrendingUp className="w-5 h-5 mr-3 text-dev-accent-emerald" />
            <span className="text-dev-accent-emerald font-bold">Production Applications</span>
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-black mb-8">
            <span className="bg-gradient-to-r from-dev-accent-blue via-dev-accent-emerald to-dev-accent-purple bg-clip-text text-transparent">
              Projects
            </span>
            <br />
            <span className="text-dev-text-primary-light dark:text-dev-text-primary-dark">
              Showcase
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-dev-text-secondary-light dark:text-dev-text-secondary-dark max-w-4xl mx-auto mb-12 leading-relaxed">
            Real Flutter applications built for production environments across various industries.
            Each project showcases clean architecture, optimal performance, and modern UI/UX design.
          </p>
          
          {/* Search and Filter Controls */}
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-12">
            {/* Search Bar */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-dev-text-secondary-light dark:text-dev-text-secondary-dark" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 pr-4 py-3 w-80 bg-dev-card-light dark:bg-dev-card-dark border border-dev-border-light dark:border-dev-border-dark rounded-full text-dev-text-primary-light dark:text-dev-text-primary-dark placeholder-dev-text-secondary-light dark:placeholder-dev-text-secondary-dark focus:outline-none focus:ring-2 focus:ring-dev-accent-blue/50 transition-all duration-300"
              />
            </motion.div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category, index) => (
                <motion.button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center ${
                    activeCategory === category
                      ? 'bg-dev-accent-blue text-white shadow-lg scale-105'
                      : 'bg-dev-card-light dark:bg-dev-card-dark text-dev-text-secondary-light dark:text-dev-text-secondary-dark hover:bg-dev-accent-blue/10 hover:scale-105'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.05 }}
                >
                  <span className="mr-2">{category !== 'All' ? getCategoryIcon(category) : '📱'}</span>
                  {category}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.name}
                layout
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -20 }}
                transition={{ 
                  duration: 0.4, 
                  delay: index * 0.05,
                  type: "spring",
                  stiffness: 100
                }}
                className="group cursor-pointer"
                onClick={() => handleProjectClick(project)}
              >
                <motion.div
                  className="relative h-full p-6 bg-dev-card-light/80 dark:bg-dev-card-dark/80 backdrop-blur-sm rounded-2xl border border-dev-border-light dark:border-dev-border-dark hover:shadow-2xl transition-all duration-500 overflow-hidden"
                  whileHover={{ y: -8, scale: 1.02 }}
                  layoutId={`project-${project.name}`}
                >
                  {/* Background Gradient */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-dev-accent-blue/10 to-dev-accent-emerald/10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500" />
                  
                  {/* Floating Category Icon */}
                  <motion.div
                    className="absolute top-4 right-4 text-2xl"
                    animate={{ 
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      delay: index * 0.2
                    }}
                  >
                    {getCategoryIcon(project.category)}
                  </motion.div>
                  
                  <div className="relative z-10 h-full flex flex-col">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center">
                        <motion.div 
                          className="w-12 h-12 bg-gradient-to-r from-dev-accent-blue to-dev-accent-emerald rounded-xl flex items-center justify-center mr-4 shadow-lg"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <Smartphone className="w-6 h-6 text-white" />
                        </motion.div>
                        <div>
                          <h3 className="font-bold text-lg text-dev-text-primary-light dark:text-dev-text-primary-dark mb-1">
                            {project.name}
                          </h3>
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-dev-accent-blue bg-dev-accent-blue/10 px-2 py-1 rounded-full font-medium">
                              {project.category}
                            </span>
                            <span className={`text-xs px-2 py-1 rounded-full font-medium ${getComplexityColor(project.complexity)}`}>
                              {project.complexity}
                            </span>
                          </div>
                        </div>
                      </div>
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 15 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Eye className="w-5 h-5 text-dev-text-secondary-light dark:text-dev-text-secondary-dark group-hover:text-dev-accent-blue transition-colors" />
                      </motion.div>
                    </div>
                    
                    <p className="text-dev-text-secondary-light dark:text-dev-text-secondary-dark text-sm mb-4 flex-grow">
                      {project.description}
                    </p>

                    <div className="mb-4">
                      <p className="text-xs text-dev-text-secondary-light dark:text-dev-text-secondary-dark mb-2 font-medium">
                        Tech Stack:
                      </p>
                      <p className="text-sm text-dev-text-primary-light dark:text-dev-text-primary-dark">
                        {project.stack}
                      </p>
                    </div>
                    
                    <div className="flex items-center justify-between mt-auto">
                      <span className="text-sm text-dev-text-secondary-light dark:text-dev-text-secondary-dark">
                        Click for details
                      </span>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-dev-accent-emerald rounded-full mr-2 animate-pulse" />
                        <span className="text-sm text-dev-accent-emerald font-medium">
                          {project.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Stats Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              { label: 'Total Projects', value: projects.length, icon: '📱' },
              { label: 'Industries', value: categories.length - 1, icon: '🏢' },
              { label: 'High Complexity', value: projects.filter(p => p.complexity === 'High').length, icon: '⚡' },
              { label: 'Live Apps', value: projects.filter(p => p.status === 'Live').length, icon: '🚀' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="bg-dev-card-light/50 dark:bg-dev-card-dark/50 backdrop-blur-sm p-6 rounded-2xl border border-dev-border-light/50 dark:border-dev-border-dark/50"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.1, type: "spring" }}
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
            <Star className="w-5 h-5 mr-3 text-dev-accent-emerald" />
            <span className="text-dev-text-primary-light dark:text-dev-text-primary-dark font-bold">
              {projects.length}+ Production Apps Delivered with Excellence
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Project Modal */}
      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
};