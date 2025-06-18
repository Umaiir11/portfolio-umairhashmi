import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Package, ArrowRight, Code, Database, Layers, Cpu, FileText, Settings, Zap, CheckCircle, ExternalLink, Download } from 'lucide-react';

export const LayerXSection: React.FC = () => {
  const [activeLayer, setActiveLayer] = useState<number | null>(null);
  const [showCodeExample, setShowCodeExample] = useState(false);

  const architectureLayers = [
    {
      name: 'View Layer',
      icon: Layers,
      description: 'UI Components & Widgets',
      color: 'from-blue-500 to-cyan-500',
      details: 'Stateless/Stateful widgets, Custom painters, Responsive design with flutter_screenutil',
      files: ['home_view.dart', 'profile_view.dart', 'settings_view.dart'],
      code: `class HomeView extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return GetBuilder<HomeController>(
      builder: (controller) => Scaffold(
        body: controller.isLoading 
          ? LoadingWidget()
          : HomeContent(),
      ),
    );
  }
}`
    },
    {
      name: 'Controller Layer',
      icon: Cpu,
      description: 'Business Logic & State Management',
      color: 'from-emerald-500 to-teal-500',
      details: 'GetX controllers, State management, Business logic separation',
      files: ['home_controller.dart', 'auth_controller.dart', 'profile_controller.dart'],
      code: `class HomeController extends GetxController {
  final HomeService _service = Get.find();
  
  RxBool isLoading = false.obs;
  RxList<User> users = <User>[].obs;
  
  @override
  void onInit() {
    fetchUsers();
    super.onInit();
  }
  
  Future<void> fetchUsers() async {
    isLoading.value = true;
    try {
      final response = await _service.getUsers();
      users.value = response.data;
    } catch (e) {
      Get.snackbar('Error', e.toString());
    } finally {
      isLoading.value = false;
    }
  }
}`
    },
    {
      name: 'Service Layer',
      icon: Code,
      description: 'API Integration & Data Processing',
      color: 'from-purple-500 to-indigo-500',
      details: 'HTTP services, Data transformation, Error handling, Response parsing',
      files: ['home_service.dart', 'auth_service.dart', 'https_service.dart'],
      code: `class HomeService {
  final HttpsService _httpsService = Get.find();
  
  Future<ApiResponse<List<User>>> getUsers() async {
    try {
      final response = await _httpsService.get(
        AppUrls.users,
        headers: {'Authorization': 'Bearer \${token}'}
      );
      
      return ApiResponse<List<User>>.fromJson(
        response.data,
        (json) => (json as List)
          .map((e) => User.fromJson(e))
          .toList()
      );
    } catch (e) {
      throw ServiceException(e.toString());
    }
  }
}`
    },
    {
      name: 'Repository Layer',
      icon: Database,
      description: 'Data Source Management',
      color: 'from-orange-500 to-red-500',
      details: 'Local storage, Remote APIs, Caching strategies, Data synchronization',
      files: ['user_repository.dart', 'auth_repository.dart', 'local_storage.dart'],
      code: `class UserRepository {
  final ApiService _apiService = Get.find();
  final LocalStorage _localStorage = Get.find();
  
  Future<List<User>> getUsers({bool forceRefresh = false}) async {
    if (!forceRefresh) {
      final cached = await _localStorage.getUsers();
      if (cached.isNotEmpty) return cached;
    }
    
    final users = await _apiService.fetchUsers();
    await _localStorage.saveUsers(users);
    return users;
  }
}`
    }
  ];

  const features = [
    {
      icon: Settings,
      title: 'Auto-Generated Structure',
      description: 'Complete MVVM directory structure with GetX integration'
    },
    {
      icon: Zap,
      title: 'Built-in Services',
      description: 'HttpsService, SharedPreferencesHelper, JsonExtractor included'
    },
    {
      icon: FileText,
      title: 'Response Models',
      description: 'Pre-configured API response and body models'
    },
    {
      icon: Code,
      title: 'Clean Architecture',
      description: 'SOLID principles with clear separation of concerns'
    }
  ];

  const stats = [
    { label: 'Downloads', value: '167+', icon: Download },
    { label: 'Pub Points', value: '160', icon: CheckCircle },
    { label: 'Likes', value: '20+', icon: '❤️' },
    { label: 'Version', value: '2.0.0', icon: Package }
  ];

  return (
    <section id="layerx" className="py-24 bg-gradient-to-br from-dev-bg-light via-dev-surface-light to-dev-bg-light dark:from-dev-bg-dark dark:via-dev-surface-dark dark:to-dev-bg-dark overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233b82f6' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header Section */}
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
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
            whileHover={{ scale: 1.05 }}
          >
            <Package className="w-5 h-5 mr-3 text-dev-accent-blue" />
            <span className="text-dev-accent-blue font-bold">Open Source Package</span>
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
              LayerX
            </span>
            <br />
            <span className="text-dev-text-primary-light dark:text-dev-text-primary-dark">
              Architecture
            </span>
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl text-dev-text-secondary-light dark:text-dev-text-secondary-dark max-w-4xl mx-auto mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            A production-optimized Flutter architecture that I created to solve real-world development challenges. 
            Clean, scalable, and maintainable code structure for enterprise applications.
          </motion.p>

          {/* Stats Row */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="bg-dev-card-light/50 dark:bg-dev-card-dark/50 backdrop-blur-sm p-6 rounded-2xl border border-dev-border-light/50 dark:border-dev-border-dark/50"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1, type: "spring" }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="text-3xl font-bold text-dev-accent-blue mb-2">{stat.value}</div>
                <div className="text-sm text-dev-text-secondary-light dark:text-dev-text-secondary-dark font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.a
            href="https://pub.dev/packages/layerx_generator"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-dev-accent-blue to-dev-accent-emerald text-white font-bold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 relative overflow-hidden"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Package className="w-6 h-6 mr-3" />
            <span className="font-mono">layerx_generator: ^2.0.0</span>
            <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
            <ExternalLink className="w-4 h-4 ml-2 opacity-70" />
            
            {/* Shine Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
              initial={{ x: '-100%' }}
              animate={{ x: '200%' }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
            />
          </motion.a>
        </motion.div>

        {/* Architecture Flow Diagram */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Interactive Architecture Layers */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <h3 className="text-3xl font-bold text-dev-text-primary-light dark:text-dev-text-primary-dark mb-8 text-center">
              Architecture Flow
            </h3>
            
            <div className="space-y-6 relative">
              {/* Connection Lines */}
              <svg className="absolute left-6 top-16 w-0.5 h-full z-0" style={{ height: 'calc(100% - 4rem)' }}>
                <motion.line
                  x1="0" y1="0" x2="0" y2="100%"
                  stroke="url(#gradient)"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 1 }}
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="50%" stopColor="#10b981" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                </defs>
              </svg>

              {architectureLayers.map((layer, index) => (
                <motion.div
                  key={layer.name}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="relative z-10"
                >
                  <motion.div
                    className={`group cursor-pointer p-6 bg-dev-card-light/80 dark:bg-dev-card-dark/80 backdrop-blur-sm rounded-2xl border border-dev-border-light dark:border-dev-border-dark shadow-lg hover:shadow-2xl transition-all duration-300 ${
                      activeLayer === index ? 'ring-2 ring-dev-accent-blue shadow-2xl' : ''
                    }`}
                    whileHover={{ scale: 1.02, x: 10 }}
                    onClick={() => setActiveLayer(activeLayer === index ? null : index)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${layer.color} flex items-center justify-center mr-4 shadow-lg`}>
                          <layer.icon className="w-7 h-7 text-white" />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-dev-text-primary-light dark:text-dev-text-primary-dark mb-1">
                            {layer.name}
                          </h4>
                          <p className="text-dev-text-secondary-light dark:text-dev-text-secondary-dark">
                            {layer.description}
                          </p>
                        </div>
                      </div>
                      <motion.div
                        animate={{ rotate: activeLayer === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ArrowRight className="w-5 h-5 text-dev-text-secondary-light dark:text-dev-text-secondary-dark" />
                      </motion.div>
                    </div>
                    
                    <AnimatePresence>
                      {activeLayer === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-6 pt-6 border-t border-dev-border-light dark:border-dev-border-dark"
                        >
                          <p className="text-dev-text-secondary-light dark:text-dev-text-secondary-dark mb-4">
                            {layer.details}
                          </p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {layer.files.map((file) => (
                              <span
                                key={file}
                                className="px-3 py-1 bg-dev-accent-blue/10 text-dev-accent-blue text-xs font-mono rounded-full"
                              >
                                {file}
                              </span>
                            ))}
                          </div>
                          <motion.button
                            onClick={(e) => {
                              e.stopPropagation();
                              setShowCodeExample(!showCodeExample);
                            }}
                            className="text-dev-accent-blue hover:text-dev-accent-emerald font-medium text-sm flex items-center"
                            whileHover={{ x: 5 }}
                          >
                            View Code Example
                            <Code className="w-4 h-4 ml-1" />
                          </motion.button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  {/* Data Flow Arrows */}
                  {index < architectureLayers.length - 1 && (
                    <motion.div
                      className="flex justify-center my-4"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.15 + 0.5 }}
                    >
                      <motion.div
                        className="w-8 h-8 rounded-full bg-gradient-to-r from-dev-accent-blue to-dev-accent-emerald flex items-center justify-center"
                        animate={{ 
                          scale: [1, 1.2, 1],
                          rotate: [0, 180, 360]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity,
                          delay: index * 0.5
                        }}
                      >
                        <ArrowRight className="w-4 h-4 text-white" />
                      </motion.div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Code Example & Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Code Example */}
            <AnimatePresence>
              {(showCodeExample && activeLayer !== null) && (
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.95 }}
                  className="bg-dev-card-light dark:bg-dev-card-dark rounded-2xl border border-dev-border-light dark:border-dev-border-dark p-6 shadow-2xl"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full" />
                        <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                        <div className="w-3 h-3 bg-green-500 rounded-full" />
                      </div>
                      <span className="ml-4 text-sm text-dev-text-secondary-light dark:text-dev-text-secondary-dark font-mono">
                        {architectureLayers[activeLayer].files[0]}
                      </span>
                    </div>
                    <motion.button
                      onClick={() => setShowCodeExample(false)}
                      className="text-dev-text-secondary-light dark:text-dev-text-secondary-dark hover:text-dev-text-primary-light dark:hover:text-dev-text-primary-dark"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      ✕
                    </motion.button>
                  </div>
                  
                  <motion.pre
                    className="text-sm font-mono text-dev-text-primary-light dark:text-dev-text-primary-dark overflow-x-auto bg-dev-bg-light dark:bg-dev-bg-dark p-4 rounded-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <code>{architectureLayers[activeLayer].code}</code>
                  </motion.pre>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Features Grid */}
            <div>
              <h3 className="text-3xl font-bold text-dev-text-primary-light dark:text-dev-text-primary-dark mb-8">
                Key Features
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <motion.div
                      className="p-6 bg-dev-card-light/50 dark:bg-dev-card-dark/50 backdrop-blur-sm rounded-2xl border border-dev-border-light/50 dark:border-dev-border-dark/50 hover:shadow-lg transition-all duration-300"
                      whileHover={{ y: -5, scale: 1.02 }}
                    >
                      <div className="flex items-start">
                        <div className="w-12 h-12 bg-gradient-to-r from-dev-accent-blue to-dev-accent-emerald rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                          <feature.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-dev-text-primary-light dark:text-dev-text-primary-dark mb-2">
                            {feature.title}
                          </h4>
                          <p className="text-dev-text-secondary-light dark:text-dev-text-secondary-dark text-sm">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Installation Command */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-dev-card-light dark:bg-dev-card-dark rounded-2xl border border-dev-border-light dark:border-dev-border-dark p-6"
            >
              <h4 className="font-bold text-dev-text-primary-light dark:text-dev-text-primary-dark mb-4">
                Quick Installation
              </h4>
              <div className="bg-dev-bg-light dark:bg-dev-bg-dark p-4 rounded-lg font-mono text-sm">
                <div className="text-dev-accent-emerald mb-2"># Add to pubspec.yaml</div>
                <div className="text-dev-text-primary-light dark:text-dev-text-primary-dark">
                  dependencies:<br />
                  &nbsp;&nbsp;layerx_generator: ^2.0.0
                </div>
                <div className="text-dev-accent-emerald mt-4 mb-2"># Generate structure</div>
                <div className="text-dev-text-primary-light dark:text-dev-text-primary-dark">
                  dart run layerx_generator --path .
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold text-dev-text-primary-light dark:text-dev-text-primary-dark mb-8">
            Why Choose LayerX?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Clean separation of concerns',
              'Testable and maintainable code',
              'Scalable for enterprise applications',
              'Optimized for Flutter performance'
            ].map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <motion.div
                  className="p-6 bg-gradient-to-br from-dev-accent-blue/5 to-dev-accent-emerald/5 rounded-2xl border border-dev-accent-blue/20 hover:shadow-lg transition-all duration-300"
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-3 h-3 bg-gradient-to-r from-dev-accent-blue to-dev-accent-emerald rounded-full" />
                  </div>
                  <p className="text-dev-text-secondary-light dark:text-dev-text-secondary-dark font-medium">
                    {benefit}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};