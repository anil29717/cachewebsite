import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight, X, Phone, Download, Check, Settings } from 'lucide-react';

interface ItemData {
  name: string;
  description: string;
  image: string;
  benefits: string[];
  approach: string[];
}

const itemData: Record<string, ItemData> = {
  'Infrastructure': {
    name: 'Infrastructure Solutions',
    description: 'Our infrastructure solutions provide robust, scalable, and secure foundation for your business operations. We specialize in designing and implementing enterprise-grade infrastructure that supports your growing technology needs while ensuring optimal performance and reliability.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300',
    benefits: ['99.9% uptime guarantee', 'Scalable architecture', '24/7 monitoring & support', 'Cost optimization'],
    approach: ['Assessment & Planning', 'Implementation & Migration', 'Optimization & Maintenance']
  },
  'Network': {
    name: 'Network Solutions',
    description: 'Advanced networking solutions that ensure seamless connectivity, optimal performance, and secure data transmission across your entire organization. From local area networks to global enterprise connectivity.',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300',
    benefits: ['High-speed connectivity', 'Secure data transmission', 'Network monitoring', 'Global reach capability'],
    approach: ['Network Assessment', 'Design & Implementation', 'Performance Optimization']
  },
  'Cybersecurity': {
    name: 'Cybersecurity Services',
    description: 'Comprehensive cybersecurity solutions that protect your digital assets, ensure compliance, and maintain business continuity. Our multi-layered approach safeguards against evolving cyber threats.',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300',
    benefits: ['Multi-layered protection', 'Compliance management', 'Threat detection', 'Incident response'],
    approach: ['Security Assessment', 'Implementation & Monitoring', 'Continuous Improvement']
  },
  'Cloud': {
    name: 'Cloud Services',
    description: 'Transform your business with our cloud solutions. From migration strategies to cloud-native development, we help you leverage the full potential of cloud computing for enhanced agility and cost efficiency.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300',
    benefits: ['Enhanced agility', 'Cost efficiency', 'Scalable solutions', 'Cloud-native development'],
    approach: ['Cloud Strategy', 'Migration Planning', 'Optimization & Management']
  },
  'Artificial Intelligence': {
    name: 'AI & Machine Learning',
    description: 'Harness the power of artificial intelligence to drive innovation and efficiency. Our AI solutions include machine learning models, automation systems, and intelligent analytics to transform your business processes.',
    image: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300',
    benefits: ['Process automation', 'Intelligent analytics', 'Predictive modeling', 'Innovation acceleration'],
    approach: ['AI Strategy Development', 'Model Training & Implementation', 'Continuous Learning']
  },
  'Consulting': {
    name: 'Technology Consulting',
    description: 'Strategic technology consulting that aligns IT initiatives with business objectives. Our experts provide guidance on digital transformation, technology roadmaps, and optimization strategies.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300',
    benefits: ['Strategic alignment', 'Digital transformation', 'Technology roadmaps', 'Optimization strategies'],
    approach: ['Strategic Planning', 'Implementation Guidance', 'Performance Monitoring']
  },
  'Healthcare': {
    name: 'Healthcare Solutions',
    description: 'Specialized technology solutions for healthcare organizations, including EHR systems, telemedicine platforms, and healthcare analytics that improve patient outcomes and operational efficiency.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300',
    benefits: ['Improved patient outcomes', 'Operational efficiency', 'Compliance management', 'Data analytics'],
    approach: ['Healthcare Assessment', 'System Integration', 'Training & Support']
  },
  'Financial Services': {
    name: 'Financial Technology',
    description: 'Cutting-edge fintech solutions that enhance security, improve customer experience, and ensure regulatory compliance in the financial services sector.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300',
    benefits: ['Enhanced security', 'Better customer experience', 'Regulatory compliance', 'Digital innovation'],
    approach: ['Financial Analysis', 'Solution Development', 'Compliance & Security']
  },
  'Manufacturing': {
    name: 'Manufacturing Solutions',
    description: 'Industry 4.0 solutions that optimize manufacturing processes through IoT, automation, and predictive analytics for improved efficiency and quality control.',
    image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300',
    benefits: ['Process optimization', 'Quality control', 'Predictive analytics', 'Industry 4.0 integration'],
    approach: ['Process Analysis', 'Automation Implementation', 'Continuous Improvement']
  },
  'Retail & E-commerce': {
    name: 'Retail Technology',
    description: 'Comprehensive e-commerce and retail solutions that enhance customer experience, streamline operations, and drive sales growth through innovative technology.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300',
    benefits: ['Enhanced customer experience', 'Streamlined operations', 'Sales growth', 'Omnichannel integration'],
    approach: ['Retail Strategy', 'Platform Development', 'Customer Experience Optimization']
  },
  'Education': {
    name: 'Educational Technology',
    description: 'EdTech solutions that transform learning experiences through digital platforms, virtual classrooms, and educational analytics for improved student outcomes.',
    image: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300',
    benefits: ['Improved student outcomes', 'Digital learning platforms', 'Virtual classrooms', 'Educational analytics'],
    approach: ['Educational Assessment', 'Platform Development', 'Learning Analytics']
  },
  'Government': {
    name: 'Government Solutions',
    description: 'Secure, compliant technology solutions for government agencies that improve citizen services, enhance operational efficiency, and ensure data protection.',
    image: 'https://images.unsplash.com/photo-1529148482759-b35b25c5f217?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300',
    benefits: ['Improved citizen services', 'Operational efficiency', 'Data protection', 'Compliance management'],
    approach: ['Government Assessment', 'Secure Implementation', 'Ongoing Support']
  }
};

const capabilitiesItems = ['Infrastructure', 'Network', 'Cybersecurity', 'Cloud', 'Artificial Intelligence', 'Consulting'];
const industriesItems = ['Healthcare', 'Financial Services', 'Manufacturing', 'Retail & E-commerce', 'Education', 'Government'];

export default function CacheSolutionsSection() {
  const [capabilitiesOpen, setCapabilitiesOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<ItemData | null>(null);
  const [definitionOpen, setDefinitionOpen] = useState(false);

  const toggleCapabilities = () => {
    setCapabilitiesOpen(!capabilitiesOpen);
    if (industriesOpen) setIndustriesOpen(false);
  };

  const toggleIndustries = () => {
    setIndustriesOpen(!industriesOpen);
    if (capabilitiesOpen) setCapabilitiesOpen(false);
  };

  const selectItem = (itemName: string) => {
    const data = itemData[itemName];
    if (data) {
      setSelectedItem(data);
      setCapabilitiesOpen(false);
      setIndustriesOpen(false);
    }
  };

  const showDefinition = () => {
    if (selectedItem) {
      setDefinitionOpen(true);
    }
  };

  const closeDefinition = () => {
    setDefinitionOpen(false);
  };

  const dropdownVariants = {
    hidden: { 
      opacity: 0, 
      y: -10,
      transition: { duration: 0.2 }
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.2, ease: "easeOut" }
    }
  };

  const tileVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.9, 
      y: 20,
      transition: { duration: 0.3 }
    },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  const definitionVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.95, 
      y: 30,
      transition: { duration: 0.4 }
    },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  return (
    <section className="bg-black min-h-[80vh] flex flex-col lg:flex-row">
      {/* Left Half - Content */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-4 sm:px-8 lg:px-16 py-8 lg:py-0">
        <div className="w-full max-w-lg">
          {/* Section Heading */}
          <div className="mb-12">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-4">
              Let Cache Solve your Problems
            </h1>
            <p className="text-white/80 mt-6 text-lg">
              while you maximize your growth
            </p>
          </div>

          {/* Choose your interest text */}
          <div className="mb-6">
            <p className="text-white/90 text-lg">
              Choose your interest
            </p>
          </div>

          {/* Dropdown Controls */}
          <div className="flex flex-row gap-4 mb-8">
              
              {/* Capabilities Dropdown */}
              <div className="relative flex-1">
                <button 
                  className="w-full bg-transparent border border-white/30 rounded-lg px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                  onClick={toggleCapabilities}
                  data-testid="button-capabilities"
                >
                  <span className="text-white font-medium">Capabilities</span>
                  <motion.div
                    animate={{ rotate: capabilitiesOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="h-5 w-5 text-white/70" />
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {capabilitiesOpen && (
                    <motion.div 
                      className="absolute top-full left-0 right-0 mt-2 bg-black border border-white/30 rounded-lg shadow-lg z-10"
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      data-testid="menu-capabilities"
                    >
                      <div className="p-2">
                        {capabilitiesItems.map((item) => (
                          <button 
                            key={item}
                            className="w-full text-left px-4 py-3 text-white hover:bg-white/10 rounded-md transition-colors duration-150"
                            onClick={() => selectItem(item)}
                            data-testid={`item-${item.toLowerCase().replace(/\s+/g, '-')}`}
                          >
                            {item}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Industries Dropdown */}
              <div className="relative flex-1">
                <button 
                  className="w-full bg-transparent border border-white/30 rounded-lg px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                  onClick={toggleIndustries}
                  data-testid="button-industries"
                >
                  <span className="text-white font-medium">Industries</span>
                  <motion.div
                    animate={{ rotate: industriesOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="h-5 w-5 text-white/70" />
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {industriesOpen && (
                    <motion.div 
                      className="absolute top-full left-0 right-0 mt-2 bg-black border border-white/30 rounded-lg shadow-lg z-10"
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      data-testid="menu-industries"
                    >
                      <div className="p-2">
                        {industriesItems.map((item) => (
                          <button 
                            key={item}
                            className="w-full text-left px-4 py-3 text-white hover:bg-white/10 rounded-md transition-colors duration-150"
                            onClick={() => selectItem(item)}
                            data-testid={`item-${item.toLowerCase().replace(/\s+/g, '-').replace('&', 'and')}`}
                          >
                            {item}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
          </div>
        </div>
      </div>

      {/* Right Half - Visualization */}
      <div className="w-full lg:w-1/2 relative min-h-[50vh] lg:h-[80vh] overflow-hidden" style={{
        filter: definitionOpen ? 'blur(8px)' : 'none'
      }}>
              {/* Custom Sunset/Mountains Illustration */}
              <div className="absolute inset-0 bg-gradient-to-b from-red-500 to-red-700">
                {/* Sun */}
                <div 
                  className="absolute w-48 h-48 rounded-full"
                  style={{
                    background: 'radial-gradient(circle, #fbbf24 0%, #f59e0b 40%, #ea580c 80%)',
                    top: '25%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                  }}
                />
                
                {/* Horizontal stripes on the sun */}
                <div className="absolute" style={{ top: '30%', left: '50%', transform: 'translateX(-50%)', width: '200px' }}>
                  <div className="h-0.5 bg-red-600/50 mb-3"></div>
                  <div className="h-0.5 bg-red-600/50 mb-3"></div>
                  <div className="h-0.5 bg-red-600/50 mb-3"></div>
                  <div className="h-0.5 bg-red-600/50 mb-3"></div>
                  <div className="h-0.5 bg-red-600/50"></div>
                </div>
                
                {/* Back Mountains */}
                <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 400 300" preserveAspectRatio="none">
                  <path 
                    d="M0,300 L0,170 L50,130 L100,150 L150,110 L200,130 L250,90 L300,120 L350,100 L400,110 L400,300 Z" 
                    fill="#6b7280"
                    opacity="0.9"
                  />
                </svg>
                
                {/* Front Mountains */}
                <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 400 300" preserveAspectRatio="none">
                  <path 
                    d="M0,300 L0,210 L30,170 L70,190 L110,150 L150,170 L190,130 L230,160 L270,120 L310,140 L350,110 L400,130 L400,300 Z" 
                    fill="#4b5563"
                  />
                </svg>
                
                {/* Foreground Mountains */}
                <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 400 300" preserveAspectRatio="none">
                  <path 
                    d="M0,300 L0,240 L40,190 L90,210 L140,170 L190,190 L240,150 L290,170 L340,140 L400,160 L400,300 Z" 
                    fill="#374151"
                  />
                </svg>
              </div>

              {/* Tile Card */}
              <AnimatePresence>
                {selectedItem && (
                  <motion.div 
                    className="absolute bottom-4 left-4 right-4 lg:bottom-6 lg:left-6 lg:right-6 bg-black/20 backdrop-blur-md rounded-xl p-4 lg:p-6 shadow-xl border border-white/30"
                    variants={tileVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    style={{
                      filter: definitionOpen ? 'blur(4px)' : 'none'
                    }}
                    data-testid="card-tile"
                  >
                    <div className="flex flex-col items-center gap-4 text-center">
                      <img 
                        src={selectedItem.image}
                        alt={`${selectedItem.name} visualization`}
                        className="w-56 h-56 sm:w-64 sm:h-64 lg:w-70 lg:h-70 rounded-lg object-cover border border-gray-200 cursor-pointer hover:opacity-80 transition-opacity"
                        onClick={showDefinition}
                        data-testid="img-tile"
                      />
                      <div className="flex-1">
                        <h3 className="text-lg sm:text-xl font-semibold text-white mb-2" data-testid="text-tile-title">
                          {selectedItem.name}
                        </h3>
                        <p className="text-white/80 text-sm" data-testid="text-tile-description">
                          Click on the image to learn more about our {selectedItem.name.toLowerCase()} and capabilities.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
      </div>

      {/* Definition Modal */}
      <AnimatePresence>
        {definitionOpen && selectedItem && (
          <motion.div 
            className="fixed inset-0 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            data-testid="overlay-definition"
          >
            <div 
              className="absolute inset-0 backdrop-blur-sm bg-primary/10"
              onClick={closeDefinition}
            />
            <div className="relative z-10 flex items-center justify-center min-h-screen p-4 sm:p-6">
              <motion.div 
                className="bg-white rounded-2xl shadow-2xl border border-gray-300 max-w-3xl w-full max-h-[90vh] sm:max-h-[80vh] overflow-hidden"
                variants={definitionVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                data-testid="card-definition"
              >
                <div className="overflow-y-auto max-h-full">
                  {/* Card Header */}
                  <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200">
                    <div className="flex items-center gap-4 sm:gap-6">
                      <img 
                        src={selectedItem.image}
                        alt={`${selectedItem.name} icon`}
                        className="w-16 h-16 sm:w-24 sm:h-24 rounded-lg object-cover border border-gray-300"
                        data-testid="img-definition"
                      />
                      <h2 className="text-lg sm:text-2xl font-bold text-black" data-testid="text-definition-title">
                        {selectedItem.name}
                      </h2>
                    </div>
                    <button 
                      className="text-gray-500 hover:text-black transition-colors duration-200 p-2"
                      onClick={closeDefinition}
                      data-testid="button-close-definition"
                    >
                      <X className="h-6 w-6" />
                    </button>
                  </div>

                  {/* Card Content */}
                  <div className="p-4 sm:p-6">
                    <div className="max-w-none">
                      <p className="text-black text-base sm:text-lg leading-relaxed mb-6" data-testid="text-definition-description">
                        {selectedItem.description}
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                        <div>
                          <h4 className="font-semibold text-black mb-3">Key Benefits</h4>
                          <ul className="space-y-2 text-gray-700">
                            {selectedItem.benefits.map((benefit, index) => (
                              <li key={index} className="flex items-start gap-2" data-testid={`text-benefit-${index}`}>
                                <Check className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                                <span>{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-black mb-3">Our Approach</h4>
                          <ul className="space-y-2 text-gray-700">
                            {selectedItem.approach.map((step, index) => (
                              <li key={index} className="flex items-start gap-2" data-testid={`text-approach-${index}`}>
                                <Settings className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                                <span>{step}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
