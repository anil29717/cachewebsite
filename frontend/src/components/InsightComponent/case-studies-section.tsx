import { motion } from "framer-motion";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { ArrowRight, TrendingUp, Clock, Users } from "lucide-react";

const caseStudies = [
  {
    id: 1,
    title: "Global Banking System Integration",
    client: "Premier Financial Services",
    industry: "Banking",
    challenge: "Legacy system modernization and real-time data synchronization across 150+ branches",
    results: {
      efficiency: "75% faster processing",
      cost: "40% cost reduction",
      uptime: "99.9% system availability"
    },
    image: "/blog/global.jpg",
    duration: "8 months"
  },
  {
    id: 2,
    title: "E-commerce Platform Migration",
    client: "RetailMax Corporation",
    industry: "Retail",
    challenge: "Seamless migration from monolithic to microservices architecture with zero downtime",
    results: {
      efficiency: "3x faster deployment",
      cost: "50% infrastructure savings",
      uptime: "Zero downtime migration"
    },
    image: "/blog/commerce.jpg",
    duration: "6 months"
  },
  {
    id: 3,
    title: "Healthcare Data Integration",
    client: "MedTech Solutions",
    industry: "Healthcare",
    challenge: "Integration of patient data across multiple hospitals and compliance with HIPAA standards",
    results: {
      efficiency: "60% faster patient data retrieval",
      cost: "35% operational cost reduction",
      uptime: "24/7 system availability"
    },
    image: "/blog/healthcare.jpg",
    duration: "10 months"
  }
];

export function CaseStudiesSection() {
  return (
    <section className="py-20 bg-white" id="case-studies">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Success <span className="text-red-600">Stories</span>
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how we've helped leading organizations transform their business through innovative system integration solutions.
          </p>
        </motion.div>

        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 !== 0 ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={`relative ${index % 2 !== 0 ? 'lg:col-start-2' : ''}`}>
                    <ImageWithFallback
                      src={study.image}
                      alt={study.title}
                      className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>
                  </div>
                  
                  <CardContent className={`p-8 lg:p-12 flex flex-col justify-center ${index % 2 !== 0 ? 'lg:col-start-1' : ''}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <Badge variant="outline" className="border-red-600 text-red-600">
                        {study.industry}
                      </Badge>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        {study.duration}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl lg:text-3xl font-bold text-black mb-2 group-hover:text-red-600 transition-colors">
                      {study.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-2">{study.client}</p>
                    
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {study.challenge}
                    </p>
                    
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <TrendingUp className="w-6 h-6 text-red-600 mx-auto mb-2" />
                        <div className="font-semibold text-black text-sm">{study.results.efficiency}</div>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <Users className="w-6 h-6 text-red-600 mx-auto mb-2" />
                        <div className="font-semibold text-black text-sm">{study.results.cost}</div>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <Clock className="w-6 h-6 text-red-600 mx-auto mb-2" />
                        <div className="font-semibold text-black text-sm">{study.results.uptime}</div>
                      </div>
                    </div>
                    
                    {/* <motion.button
                      whileHover={{ x: 10 }}
                      className="flex items-center text-red-600 hover:text-red-700 transition-colors group"
                    >
                      <span className="mr-2">Read Full Case Study</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </motion.button> */}
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
          >
            View All Case Studies
          </motion.button>
        </motion.div> */}
      </div>
    </section>
  );
}