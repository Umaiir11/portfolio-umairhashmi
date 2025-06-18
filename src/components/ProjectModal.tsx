import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, Star, Calendar, Users, Code, Zap, Database, Smartphone } from 'lucide-react';

interface ProjectModalProps {
  project: any;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  const getProjectDetails = (projectName: string) => {
    const projectDetails: { [key: string]: any } = {
      'Hi-Live': {
        fullDescription: 'Advanced live streaming platform with real-time interactions and monetization features.',
        keyFeatures: [
          'Real-time video streaming with WebRTC integration',
          'Live chat system with emoji reactions and gifts',
          'User authentication and profile management',
          'Monetization through virtual gifts and subscriptions',
          'Advanced streaming controls and quality settings',
          'Social features including follow/unfollow system'
        ],
        techStack: ['Flutter', 'Dart', 'WebRTC', 'Firebase', 'GetX', 'Socket.IO'],
        challenges: [
          'Optimized video streaming for low latency',
          'Implemented real-time chat with thousands of concurrent users',
          'Built scalable backend architecture for live streaming'
        ],
        duration: '6 months',
        teamSize: '4 developers',
        role: 'Lead Flutter Developer'
      },
      'Ninja-Car-APP': {
        fullDescription: 'Comprehensive vehicle tracking and fleet management system with GPS integration.',
        keyFeatures: [
          'Real-time GPS tracking with live location updates',
          'Route optimization and navigation assistance',
          'Fleet management dashboard for multiple vehicles',
          'Geofencing alerts and notifications',
          'Fuel consumption tracking and analytics',
          'Maintenance scheduling and reminders'
        ],
        techStack: ['Flutter', 'Google Maps API', 'Firebase', 'Laravel', 'MySQL', 'GetX'],
        challenges: [
          'Implemented efficient location tracking with minimal battery drain',
          'Built complex route optimization algorithms',
          'Created responsive dashboard for fleet managers'
        ],
        duration: '4 months',
        teamSize: '3 developers',
        role: 'Full-Stack Flutter Developer'
      },
      'souq_ai_crypto': {
        fullDescription: 'AI-powered cryptocurrency analysis and trading platform with real-time market data.',
        keyFeatures: [
          'AI-driven market analysis and predictions',
          'Real-time cryptocurrency price tracking',
          'Portfolio management and performance analytics',
          'Advanced charting with technical indicators',
          'Push notifications for price alerts',
          'Social trading features and community insights'
        ],
        techStack: ['Flutter', 'Python', 'FastAPI', 'TensorFlow', 'WebSocket', 'PostgreSQL'],
        challenges: [
          'Integrated complex AI models for market prediction',
          'Built real-time data streaming architecture',
          'Implemented secure trading functionality'
        ],
        duration: '8 months',
        teamSize: '5 developers',
        role: 'Senior Flutter Developer'
      }
    };

    return projectDetails[projectName] || {
      fullDescription: project.description,
      keyFeatures: project.features || [],
      techStack: project.stack.split(', '),
      challenges: ['Built with clean architecture', 'Optimized for performance', 'Implemented modern UI/UX'],
      duration: '3-6 months',
      teamSize: '2-4 developers',
      role: 'Flutter Developer'
    };
  };

  const details = getProjectDetails(project.name);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          
          {/* Modal */}
          <motion.div
            className="relative w-full max-w-4xl max-h-[90vh] bg-dev-card-light dark:bg-dev-card-dark rounded-3xl shadow-2xl overflow-hidden"
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="relative p-8 bg-gradient-to-r from-dev-accent-blue/10 to-dev-accent-emerald/10 border-b border-dev-border-light dark:border-dev-border-dark">
              <motion.button
                onClick={onClose}
                className="absolute top-6 right-6 p-2 rounded-full bg-dev-bg-light/50 dark:bg-dev-bg-dark/50 backdrop-blur-sm hover:bg-dev-bg-light dark:hover:bg-dev-bg-dark transition-colors"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-5 h-5 text-dev-text-secondary-light dark:text-dev-text-secondary-dark" />
              </motion.button>
              
              <div className="flex items-start space-x-6">
                <motion.div
                  className="w-16 h-16 bg-gradient-to-r from-dev-accent-blue to-dev-accent-emerald rounded-2xl flex items-center justify-center shadow-lg"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Smartphone className="w-8 h-8 text-white" />
                </motion.div>
                
                <div className="flex-1">
                  <motion.h2
                    className="text-3xl font-bold text-dev-text-primary-light dark:text-dev-text-primary-dark mb-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    {project.name}
                  </motion.h2>
                  
                  <div className="flex flex-wrap gap-3 mb-4">
                    <motion.span
                      className="px-3 py-1 bg-dev-accent-blue/20 text-dev-accent-blue rounded-full text-sm font-medium"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {project.category}
                    </motion.span>
                    <motion.span
                      className="px-3 py-1 bg-dev-accent-emerald/20 text-dev-accent-emerald rounded-full text-sm font-medium"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      {project.status}
                    </motion.span>
                    <motion.span
                      className="px-3 py-1 bg-dev-accent-purple/20 text-dev-accent-purple rounded-full text-sm font-medium"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      {project.complexity} Complexity
                    </motion.span>
                  </div>
                  
                  <motion.p
                    className="text-dev-text-secondary-light dark:text-dev-text-secondary-dark text-lg"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    {details.fullDescription}
                  </motion.p>
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div className="p-8 overflow-y-auto max-h-[60vh]">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Key Features */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <h3 className="text-xl font-bold text-dev-text-primary-light dark:text-dev-text-primary-dark mb-4 flex items-center">
                    <Star className="w-5 h-5 mr-2 text-dev-accent-emerald" />
                    Key Features
                  </h3>
                  <div className="space-y-3">
                    {details.keyFeatures.map((feature: string, index: number) => (
                      <motion.div
                        key={index}
                        className="flex items-start space-x-3 p-3 bg-dev-surface-light dark:bg-dev-surface-dark rounded-xl"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 + index * 0.1 }}
                      >
                        <div className="w-2 h-2 bg-dev-accent-blue rounded-full mt-2 flex-shrink-0" />
                        <span className="text-dev-text-secondary-light dark:text-dev-text-secondary-dark text-sm">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
                
                {/* Tech Stack */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <h3 className="text-xl font-bold text-dev-text-primary-light dark:text-dev-text-primary-dark mb-4 flex items-center">
                    <Code className="w-5 h-5 mr-2 text-dev-accent-blue" />
                    Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {details.techStack.map((tech: string, index: number) => (
                      <motion.span
                        key={index}
                        className="px-3 py-2 bg-gradient-to-r from-dev-accent-blue/10 to-dev-accent-emerald/10 text-dev-text-primary-light dark:text-dev-text-primary-dark rounded-lg text-sm font-medium border border-dev-accent-blue/20"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.9 + index * 0.05 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  
                  {/* Project Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <motion.div
                      className="p-4 bg-dev-surface-light dark:bg-dev-surface-dark rounded-xl"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.1 }}
                    >
                      <div className="flex items-center mb-2">
                        <Calendar className="w-4 h-4 mr-2 text-dev-accent-emerald" />
                        <span className="text-sm text-dev-text-secondary-light dark:text-dev-text-secondary-dark">Duration</span>
                      </div>
                      <span className="font-semibold text-dev-text-primary-light dark:text-dev-text-primary-dark">
                        {details.duration}
                      </span>
                    </motion.div>
                    
                    <motion.div
                      className="p-4 bg-dev-surface-light dark:bg-dev-surface-dark rounded-xl"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.2 }}
                    >
                      <div className="flex items-center mb-2">
                        <Users className="w-4 h-4 mr-2 text-dev-accent-blue" />
                        <span className="text-sm text-dev-text-secondary-light dark:text-dev-text-secondary-dark">Team Size</span>
                      </div>
                      <span className="font-semibold text-dev-text-primary-light dark:text-dev-text-primary-dark">
                        {details.teamSize}
                      </span>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
              
              {/* Challenges & Solutions */}
              <motion.div
                className="mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 }}
              >
                <h3 className="text-xl font-bold text-dev-text-primary-light dark:text-dev-text-primary-dark mb-4 flex items-center">
                  <Zap className="w-5 h-5 mr-2 text-dev-accent-orange" />
                  Key Challenges & Solutions
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {details.challenges.map((challenge: string, index: number) => (
                    <motion.div
                      key={index}
                      className="p-4 bg-gradient-to-br from-dev-accent-orange/5 to-dev-accent-purple/5 rounded-xl border border-dev-accent-orange/20"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.4 + index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-dev-accent-orange rounded-full mt-2 flex-shrink-0" />
                        <span className="text-dev-text-secondary-light dark:text-dev-text-secondary-dark text-sm">
                          {challenge}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              {/* Role */}
              <motion.div
                className="mt-8 p-6 bg-gradient-to-r from-dev-accent-blue/5 to-dev-accent-emerald/5 rounded-2xl border border-dev-accent-blue/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 }}
              >
                <div className="flex items-center">
                  <Database className="w-6 h-6 mr-3 text-dev-accent-blue" />
                  <div>
                    <h4 className="font-bold text-dev-text-primary-light dark:text-dev-text-primary-dark">
                      My Role: {details.role}
                    </h4>
                    <p className="text-dev-text-secondary-light dark:text-dev-text-secondary-dark text-sm mt-1">
                      Led development using LayerX architecture, ensuring clean code and optimal performance
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};