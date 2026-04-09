import { ShieldCheck, Heart, Users, Award } from 'lucide-react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { useRef, useEffect } from 'react';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const scaleOnHover = {
  rest: { scale: 1, transition: { duration: 0.3 } },
  hover: { scale: 1.05, transition: { duration: 0.3 } }
};

const floatAnimation = {
  initial: { y: 0 },
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }
  }
};

export default function About() {
  const teamRef = useRef(null);
  const isInView = useInView(teamRef, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <main className="pt-32 pb-20 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-8">
        {/* Hero Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24"
        >
          <motion.div variants={fadeInUp}>
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-block py-1 px-4 rounded-full bg-primary-fixed text-on-primary-fixed-variant text-sm font-semibold mb-6 tracking-wide"
            >
              OUR STORY
            </motion.span>
            <motion.h1 
              variants={fadeInUp}
              className="text-5xl md:text-6xl font-extrabold text-primary leading-tight mb-8 tracking-tight"
            >
              Safeguarding <span className="italic">Animal Health</span> & Welfare.
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl text-on-surface-variant leading-relaxed mb-8">
              At the heart of VetCare is a commitment to keeping animals healthy, happy, and safe. From livestock to beloved pets, every animal deserves proper protection against diseases and compassionate treatment for health conditions.
            </motion.p>
            <motion.p variants={fadeInUp} className="text-lg text-on-surface-variant leading-relaxed">
              We specialize in two vital areas of modern veterinary medicine: the rigorous production of life-saving vaccines and the expert management of complex skin conditions like dermatitis.
            </motion.p>
          </motion.div>
          
          <motion.div 
            variants={fadeInUp}
            className="relative"
          >
            <motion.div 
              initial={{ rotate: 2, scale: 0.9, opacity: 0 }}
              whileInView={{ rotate: 2, scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, type: "spring" }}
              viewport={{ once: true }}
              className="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl"
            >
              <motion.img 
                src="https://picsum.photos/seed/vet-team/800/1000" 
                alt="Our Team" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: -50, rotate: -2 }}
              whileInView={{ opacity: 1, x: 0, rotate: -2 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
              className="absolute -bottom-8 -left-8 p-8 bg-surface-container-lowest rounded-lg shadow-xl max-w-[280px]"
            >
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.6, type: "spring" }}
                className="text-4xl font-black text-primary mb-2"
              >
                15+
              </motion.div>
              <p className="text-sm font-bold text-on-surface-variant uppercase tracking-widest">Years of Excellence</p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Detailed Sections */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24"
        >
          <motion.div 
            variants={fadeInUp}
            whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
            transition={{ duration: 0.3 }}
            className="bg-surface-container-lowest p-10 rounded-2xl shadow-sm border border-outline-variant/10"
          >
            <h2 className="text-3xl font-bold text-primary mb-6">Vaccine Production Excellence</h2>
            <p className="text-on-surface-variant leading-relaxed mb-6">
              Vaccines are one of the most powerful tools in preventive veterinary medicine. They protect animals from infectious diseases that could otherwise spread rapidly and cause severe illness or death.
            </p>
            <p className="text-on-surface-variant leading-relaxed">
              Our vaccine development process follows rigorous scientific and ethical standards to ensure the highest levels of safety and effectiveness. We are committed to a holistic approach, combining innovative production with clinical precision to safeguard animals on farms and in homes alike.
            </p>
          </motion.div>
          <motion.div 
            variants={fadeInUp}
            whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
            transition={{ duration: 0.3 }}
            className="bg-surface-container-lowest p-10 rounded-2xl shadow-sm border border-outline-variant/10"
          >
            <h2 className="text-3xl font-bold text-primary mb-6">Managing Dermatitis in Pets</h2>
            <p className="text-on-surface-variant leading-relaxed mb-6">
              Skin conditions are more than just a surface issue; they are a significant quality-of-life challenge for many pets. Dermatitis can cause chronic discomfort, leading to distress for both the animal and the owner.
            </p>
            <p className="text-on-surface-variant leading-relaxed">
              We provide compassionate care for animals suffering from chronic skin conditions. By utilizing advanced diagnostics and personalized treatment plans, we manage inflammation and restore the natural barrier of the skin, helping your pet live a more comfortable and itch-free life.
            </p>
          </motion.div>
        </motion.div>

        {/* Values Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="bg-surface-container-low rounded-xl p-12 mb-24"
        >
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl font-extrabold text-primary mb-4 tracking-tight"
            >
              Our Core Values
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="text-on-surface-variant max-w-2xl mx-auto"
            >
              These principles guide everything we do, from the way we greet you at the door to the precision of our surgical procedures.
            </motion.p>
          </div>
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { icon: Heart, title: "Compassion", desc: "We treat every pet with the same gentleness and love we give our own." },
              { icon: ShieldCheck, title: "Integrity", desc: "Honest communication and transparent care are the foundations of our practice." },
              { icon: Award, title: "Excellence", desc: "We stay at the forefront of veterinary medicine to provide the best possible outcomes." },
              { icon: Users, title: "Community", desc: "We are proud to serve our local pet owners and support animal welfare initiatives." }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ 
                    y: -8,
                    boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
                    transition: { duration: 0.2 }
                  }}
                  className="bg-surface-container-lowest p-8 rounded-lg shadow-sm"
                >
                  <motion.div 
                    whileHover={{ rotate: [0, -10, 10, -10, 0], transition: { duration: 0.5 } }}
                    className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center text-primary mb-6"
                  >
                    <Icon className="w-6 h-6" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Team Section */}
        <motion.div ref={teamRef}>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={controls}
            className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
          >
            <div>
              <h2 className="text-4xl font-extrabold text-primary mb-4 tracking-tight">Meet Our Specialists</h2>
              <p className="text-on-surface-variant max-w-xl">
                Our team brings together decades of experience in diverse fields of veterinary medicine.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate={controls}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              { name: 'Dr. Sarah Mitchell', role: 'Chief Veterinarian', img: 'https://picsum.photos/seed/vet1/400/500' },
              { name: 'Dr. James Wilson', role: 'Surgical Specialist', img: 'https://picsum.photos/seed/vet2/400/500' },
              { name: 'Dr. Elena Rodriguez', role: 'Internal Medicine', img: 'https://picsum.photos/seed/vet3/400/500' },
            ].map((member, i) => (
              <motion.div 
                key={i} 
                variants={fadeInUp}
                className="group"
              >
                <motion.div 
                  variants={scaleOnHover}
                  initial="rest"
                  whileHover="hover"
                  className="aspect-[3/4] rounded-xl overflow-hidden mb-4 relative"
                >
                  <motion.img 
                    src={member.img} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"
                  />
                </motion.div>
                <h4 className="text-xl font-bold text-primary">{member.name}</h4>
                <p className="text-on-surface-variant font-medium">{member.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}