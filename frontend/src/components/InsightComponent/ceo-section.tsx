import { motion } from "framer-motion";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Card } from "../ui/card";

export function CEOSection() {
  return (
    <section className="py-20 bg-white" id="ceo">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Leadership <span className="text-red-600">Vision</span>
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="/team/prathna.png"
                alt="CEO Portrait"
                className="w-full h-[500px] object-cover"
              />
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-3xl font-bold text-black mb-2">
                Prarthana Gupta
              </h3>
              <p className="text-red-600 text-lg mb-6">CEO & Founder, Cache Technologies</p>

              <div className="space-y-4 text-gray-700">
                <p>
                  Prarthana Gupta serves as the Chairperson and Managing Director of Cache Technologies and its group of companies. Established in 1991, Cache Technologies specializes in hardware solutions and support services, forging exclusive partnerships with leading OEMs in the industry.
                </p>

                {/* <p>
    Under Prarthana Gupta's leadership, Cache Technologies has grown impressively, with revenues rising from INR 68 Cr. in FY2012 to INR 480 Cr. in FY2023. This growth has been driven by substantial server and storage deals, expansion into new solution areas, managed services, and effective deep selling strategies.
  </p> */}

                <p>
                  Prarthana Gupta is recognized as a pioneering female entrepreneur in the IT solutions and services sector, known for her dedication, long hours of hard work, and unwavering integrity. Her approachable demeanor, combined with a serious and successful business approach, has earned her national recognition and established her as a trustworthy and efficient industry leader.
                </p>

                <blockquote className="border-l-4 border-red-600 pl-4 italic text-gray-600">
                  "I believe in leading with integrity, dedication, and a vision that drives both growth and trust. Every achievement is a step toward building a stronger technology ecosystem."
                </blockquote>
              </div>

            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-3xl font-bold text-red-600">200+</div>
                <div className="text-sm text-gray-600">Projects Delivered</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-3xl font-bold text-red-600">34+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}