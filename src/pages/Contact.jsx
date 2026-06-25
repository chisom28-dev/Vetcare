import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Clock, Send } from 'lucide-react';
import Email from '../components/Email'
const contactDetails = [
  { title: 'Phone', value: '+44 7770 037061', icon: Phone },
  { title: 'Email', value: 'infovetcare88@gmail.com', icon: Mail },
  { title: 'Address', value: 'Cameron Court, Glasgow G72 2RU', icon: MapPin },
  { title: 'Hours', value: 'Mon - Sat, 8:00 AM - 7:00 PM', icon: Clock },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 }
  }
};

const cardVariants = {
  hidden: { y: 20, opacity: 0, scale: 0.9 },
  visible: { 
    y: 0, 
    opacity: 1, 
    scale: 1,
    transition: { type: "spring", stiffness: 260, damping: 20 }
  }
};

const formVariants = {
  hidden: { x: 50, opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1, 
    transition: { type: "spring", stiffness: 100, damping: 15, delay: 0.5 } 
  }
};
const FormSubmit = async () => {
  try {
    const response = await fetch("https://formspree.io/f/mdapqejl", (
      method="POST",
      header={
        "Content-Type": "application/json",
      }))
    
  } catch (error) {
    
  }
}
export default function Contact() {
  return (
    <main className="pt-20 overflow-hidden">
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Side: Text & Info Cards */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.span 
              variants={cardVariants}
              className="inline-block py-1 px-4 rounded-full bg-primary-fixed text-on-primary-fixed-variant text-sm font-semibold mb-6 tracking-wide"
            >
              CONTACT VETCARE
            </motion.span>
            
            <motion.h1 
              variants={cardVariants}
              className="text-5xl md:text-6xl font-extrabold text-primary leading-tight tracking-tight mb-6"
            >
              Let's Support Your <br />
              <motion.span 
                className="text-secondary inline-block"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                Pet's Health Journey.
              </motion.span>
            </motion.h1>

            <motion.p variants={cardVariants} className="text-lg text-on-surface-variant leading-relaxed mb-10 max-w-xl">
              Reach out for appointment support, vaccine schedule guidance, or urgent care direction from our clinical team.
            </motion.p>

            <motion.div 
              className="grid sm:grid-cols-2 gap-4"
              variants={containerVariants}
            >
              {contactDetails.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.article 
                    key={item.title} 
                    variants={cardVariants}
                    whileHover={{ 
                      scale: 1.03, 
                      backgroundColor: "rgba(var(--primary-rgb), 0.05)",
                      transition: { duration: 0.2 } 
                    }}
                    className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/10 cursor-default"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h2 className="text-xs font-black text-primary mb-1 uppercase tracking-widest">{item.title}</h2>
                    <p className="text-on-surface-variant font-medium text-sm leading-snug">{item.value}</p>
                  </motion.article>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right Side: Animated Form */}
          <Email />

        </div>
      </section>
    </main>
  );
}