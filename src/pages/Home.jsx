import { Link } from 'react-router-dom';
import { ShieldCheck, Activity, PlayCircle, ArrowRight, CheckCircle2, Info, Calendar, Syringe, Dog, Cat, Rabbit, Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, useInView, useAnimation, AnimatePresence } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';


// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const cardHover = {
  rest: { y: 0, boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)" },
  hover: { 
    y: -12, 
    boxShadow: "0 25px 30px -12px rgb(0 0 0 / 0.25)",
    transition: { duration: 0.3, type: "spring", stiffness: 300 }
  }
};

const floatInfinite = {
  initial: { y: 0 },
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }
  }
};

// Carousel variants
const carouselVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeInOut" }
  },
  exit: (direction) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0,
    transition: { duration: 0.5, ease: "easeInOut" }
  })
};

export default function Home() {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: false, margin: "-100px" });
  const heroControls = useAnimation();

  useEffect(() => {
    if (isHeroInView) {
      heroControls.start("visible");
    }
  }, [isHeroInView, heroControls]);

  // Hero carousel images and state (inside component)
  const heroImages = [
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC3151_O9H6kbJyKTTUVkHnRTtNGGMJ41wAG1flLJEg8VMYfAf1lPXmWE_DqZfZ4FeXTfDBqO4M1l75zKgzdjSqwM7CWhrq1O_b-BPMIVLnrwmR2C_diHqTW2sl_y8p43BBm4czGUv1IAmvla29o3FueQoOsL77eFzDdH6xO0r147srD9b7eB3p_Pmta1wAiejpSUdQ8UG5gWlbI2XE3gLU2-mW7aJkzuJ6-gu2qEEYF16j-Wu00jdRahKz9IaURTVzvJWvVJUl8mr-",
      alt: "Veterinarian holding a golden retriever"
    },
    {
      src: "https://picsum.photos/seed/vet-clinic-1/800/1000",
      alt: "Vet examining a cat"
    },
    {
      src: "https://picsum.photos/seed/vet-clinic-2/800/1000",
      alt: "Happy dog with vet"
    },
    {
      src: "https://picsum.photos/seed/vet-clinic-3/800/1000",
      alt: "Rabbit checkup"
    }
  ];

  const [heroIndex, setHeroIndex] = useState(0);
  const [heroDirection, setHeroDirection] = useState(0);
  const [isHeroHovered, setIsHeroHovered] = useState(false);

  // Autoplay for hero carousel
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHeroHovered) {
        setHeroDirection(1);
        setHeroIndex((prev) => (prev + 1) % heroImages.length);
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [isHeroHovered, heroImages.length]);

  const heroPaginate = (newDirection) => {
    setHeroDirection(newDirection);
    if (newDirection === 1) {
      setHeroIndex((prev) => (prev + 1) % heroImages.length);
    } else {
      setHeroIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
    }
  };

  const heroGoTo = (index) => {
    setHeroDirection(index > heroIndex ? 1 : -1);
    setHeroIndex(index);
  };

  const testimonials = [
    {
      quote: "The team at VetCare is exceptional. They handled my golden retriever, Max, with such gentleness during his annual vaccinations. Truly a sanctuary-level experience.",
      author: "Sarah Jenkins",
      pet: "Max (Golden Retriever)",
      rating: 5
    },
    {
      quote: "I was worried about my cat Luna's dermatitis, but the specialists here provided a clear treatment plan that worked wonders. She's finally itch-free and happy!",
      author: "Michael Chen",
      pet: "Luna (Siamese)",
      rating: 5
    },
    {
      quote: "Professional, clean, and compassionate. The Healthy Pet Club has made managing my rabbit's health so much easier and more affordable. Highly recommend!",
      author: "Emily Watson",
      pet: "Oliver (Holland Lop)",
      rating: 5
    },
    {
      quote: "The care my senior dog received was beyond compare. VetCare's team is knowledgeable and genuinely compassionate.",
      author: "David Thompson",
      pet: "Bailey (Labrador)",
      rating: 5
    },
    {
      quote: "From emergency visits to routine checkups, VetCare has been our trusted partner for over a decade. Highly recommended!",
      author: "Priya Sharma",
      pet: "Milo (Maine Coon)",
      rating: 5
    }
  ];

  // Carousel state
  const [[page, direction], setPage] = useState([0, 0]);
  const testimonialsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

  const paginate = (newDirection) => {
    const newPage = page + newDirection;
    if (newPage >= 0 && newPage < totalPages) {
      setPage([newPage, newDirection]);
    }
  };

  const goToPage = (index) => {
    const newDirection = index > page ? 1 : -1;
    setPage([index, newDirection]);
  };

  const visibleTestimonials = testimonials.slice(
    page * testimonialsPerPage,
    page * testimonialsPerPage + testimonialsPerPage
  );

  return (
    <main className="pt-20 overflow-x-hidden">
      {/* Hero Section */}
      <motion.section 
        ref={heroRef}
        initial="hidden"
        animate={heroControls}
        className="relative min-h-[700px] flex items-center overflow-hidden bg-surface"
      >
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={fadeInLeft} className="z-10 py-12">
            <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
              className="inline-block py-1 px-4 rounded-full bg-primary-fixed text-on-primary-fixed-variant text-sm font-semibold mb-6 tracking-wide"
            >
              CLINICAL EXCELLENCE
            </motion.span>
            <motion.h1 
              variants={fadeInUp}
              className="text-6xl md:text-7xl font-extrabold text-primary leading-[1.1] tracking-tight mb-8"
            >
              Vaccinating Your Pet: <motion.span 
                initial={{ opacity: 0, rotate: -5 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="italic text-secondary inline-block"
              >
                Building Immunity
              </motion.span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl text-on-surface-variant max-w-lg mb-10 leading-relaxed">
              Understand why, when, and which vaccines are essential to your pet's health. VetCare makes pet health simple and professional.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/contact" className="px-10 py-4 bg-primary text-on-primary rounded-full text-lg font-bold hover:bg-primary-fixed-dim transition-all shadow-xl shadow-primary/10 inline-block">
                  Contact Us
                </Link>
              </motion.div>
              <motion.button 
                whileHover={{ scale: 1.05, gap: "12px" }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-8 py-4 bg-surface-container-low text-primary rounded-full font-bold hover:bg-surface-container-highest transition-all"
              >
                <PlayCircle className="w-6 h-6" />
                Our Process
                <motion.span
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.span>
              </motion.button>
            </motion.div>
          </motion.div>
          
          <motion.div 
  variants={fadeInRight}
  className="relative h-[500px] w-full hidden lg:block"
  onMouseEnter={() => setIsHeroHovered(true)}
  onMouseLeave={() => setIsHeroHovered(false)}
>
  <motion.div 
    initial={{ rotate: -2, scale: 0.8, opacity: 0 }}
    animate={{ rotate: -2, scale: 1, opacity: 1 }}
    transition={{ duration: 0.9, type: "spring", bounce: 0.3 }}
    className="absolute inset-0 bg-primary-container/5 rounded-xl"
  />
  
  <div className="absolute inset-0 rounded-xl overflow-hidden shadow-2xl">
    <AnimatePresence mode="wait" custom={heroDirection} initial={false}>
      <motion.img
        key={heroIndex}
        src={heroImages[heroIndex].src}
        alt={heroImages[heroIndex].alt}
        className="absolute inset-0 w-full h-full object-cover"
        referrerPolicy="no-referrer"
        custom={heroDirection}
        variants={{
          enter: (direction) => ({
            x: direction > 0 ? 300 : -300,
            opacity: 0,
            rotate: direction > 0 ? 3 : -3
          }),
          center: {
            x: 0,
            opacity: 1,
            rotate: 1,
            transition: { duration: 0.6, ease: "easeInOut" }
          },
          exit: (direction) => ({
            x: direction > 0 ? -300 : 300,
            opacity: 0,
            rotate: direction > 0 ? -3 : 3,
            transition: { duration: 0.6, ease: "easeInOut" }
          })
        }}
        initial="enter"
        animate="center"
        exit="exit"
        whileHover={{ scale: 1.05, rotate: 0 }}
      />
    </AnimatePresence>
  </div>

  {/* Navigation Dots */}
  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
    {heroImages.map((_, idx) => (
      <motion.button
        key={idx}
        onClick={() => heroGoTo(idx)}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        className={`w-2.5 h-2.5 rounded-full transition-all ${
          idx === heroIndex 
            ? 'bg-primary scale-125 shadow-lg' 
            : 'bg-white/60 hover:bg-white/80'
        }`}
        aria-label={`Go to slide ${idx + 1}`}
      />
    ))}
  </div>

  {/* Optional navigation arrows (uncomment if desired) */}
  {/* <motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    onClick={() => heroPaginate(-1)}
    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm text-white flex items-center justify-center hover:bg-white/30 transition-all z-20"
  >
    <ChevronLeft className="w-5 h-5" />
  </motion.button>
  <motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    onClick={() => heroPaginate(1)}
    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm text-white flex items-center justify-center hover:bg-white/30 transition-all z-20"
  >
    <ChevronRight className="w-5 h-5" />
  </motion.button> */}

  {/* Floating decorative elements remain */}
  <motion.div
    variants={floatInfinite}
    initial="initial"
    animate="animate"
    className="absolute -top-4 -right-4 w-20 h-20 bg-secondary/20 rounded-full blur-2xl z-10"
  />
  <motion.div
    variants={floatInfinite}
    initial="initial"
    animate="animate"
    transition={{ delay: 1.5 }}
    className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary/20 rounded-full blur-3xl z-10"
  />
      </motion.div>
        </div>
      </motion.section>

      {/* How we vaccinate Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-24 bg-surface-container-low"
      >
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeInLeft}>
              <h2 className="text-4xl font-extrabold text-primary mb-6 tracking-tight">How do we vaccinate?</h2>
              <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed">
                <motion.p variants={fadeInUp}>
                  Most pet vaccinations are given as an injection under the skin. This is not painful, though vaccines are kept refrigerated and some animals react to the cold sensation.
                </motion.p>
                <motion.p variants={fadeInUp}>
                  The exception is the <span className="font-bold text-primary">kennel cough vaccine</span> in dogs, which is given into the nose by spraying it up the nostril.
                </motion.p>
                <motion.p variants={fadeInUp}>
                  Vaccination appointments always include a <span className="italic">physical examination</span> to ensure your pet is healthy, as any other problems may prevent the immune system from responding properly.
                </motion.p>
              </div>
            </motion.div>
            <motion.div variants={fadeInRight} className="grid grid-cols-2 gap-4">
              <motion.div 
                variants={fadeInUp}
                whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
                className="bg-surface-container-lowest p-8 rounded-lg shadow-sm border border-outline-variant/10"
              >
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, -10, 0], transition: { duration: 0.4 } }}
                >
                  <Syringe className="w-10 h-10 text-primary mb-4" />
                </motion.div>
                <h3 className="font-bold text-primary mb-2">Subcutaneous</h3>
                <p className="text-sm text-on-surface-variant">Standard injection for most core vaccines.</p>
              </motion.div>
              <motion.div 
                variants={fadeInUp}
                whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
                className="bg-surface-container-lowest p-8 rounded-lg shadow-sm border border-outline-variant/10"
              >
                <motion.div
                  whileHover={{ rotate: [0, 10, -10, 10, 0], transition: { duration: 0.4 } }}
                >
                  <Activity className="w-10 h-10 text-primary mb-4" />
                </motion.div>
                <h3 className="font-bold text-primary mb-2">Intranasal</h3>
                <p className="text-sm text-on-surface-variant">Specialized spray for respiratory protection.</p>
              </motion.div>
              <motion.div 
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                className="col-span-2 bg-primary text-on-primary p-8 rounded-lg shadow-md"
              >
                <Info className="w-10 h-10 mb-4 opacity-80" />
                <h3 className="font-bold text-xl mb-2">Professional Care</h3>
                <p className="opacity-90">All vaccinations are administered by qualified veterinary surgeons or RVNs under strict instruction.</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* When to vaccinate Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer}
        className="py-24"
      >
        <div className="max-w-7xl mx-auto px-8">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-primary mb-4 tracking-tight">When should we vaccinate?</h2>
            <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">
              Ideally vaccines should be given when a pet is young, before they have had chance to come in to contact with diseases.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Dog, title: "Puppies", age: "6-8 weeks old", desc: "Requires a primary course of two vaccines a few weeks apart." },
              { icon: Cat, title: "Kittens", age: "9 weeks old", desc: "Primary course provides maximum protection for growing felines." },
              { icon: Rabbit, title: "Rabbits", age: "5 weeks old", desc: "Usually only requires a single dose for initial protection." }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  variants={{...fadeInUp, ...cardHover}}
                  whileHover="hover"
                  initial="rest"
                  animate="rest"
                  className="bg-surface-container-low p-8 rounded-xl text-center"
                >
                  <motion.div 
                    className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6"
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(var(--primary-rgb), 0.2)" }}
                  >
                    <Icon className="w-8 h-8 text-primary" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-primary mb-2">{item.title}</h3>
                  <p className="text-on-surface-variant font-medium mb-4">{item.age}</p>
                  <p className="text-sm text-on-surface-variant">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
          <motion.div 
            variants={fadeInUp}
            whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
            className="mt-16 p-8 bg-primary-container/10 rounded-xl border border-primary/20 flex flex-col md:flex-row items-center gap-8"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, repeatDelay: 5, duration: 1 }}
            >
              <Calendar className="w-12 h-12 text-primary shrink-0" />
            </motion.div>
            <div>
              <h4 className="text-xl font-bold text-primary mb-2">Annual Boosters are Essential</h4>
              <p className="text-on-surface-variant">
                All pets need a booster injection every year to remain fully protected. Vaccinations only provide immunity for 1-3 years depending on the disease.
              </p>
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/contact" className="whitespace-nowrap px-8 py-3 bg-primary text-on-primary rounded-full font-bold hover:bg-primary-fixed-dim transition-all inline-block">
                Contact Us
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Species specific vaccines Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer}
        className="py-24 bg-surface-container-low"
      >
        <div className="max-w-7xl mx-auto px-8">
          <motion.h2 variants={fadeInUp} className="text-4xl font-extrabold text-primary mb-12 tracking-tight text-center">
            What do we vaccinate against?
          </motion.h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Dogs */}
            <motion.div 
              variants={fadeInUp}
              whileHover={{ y: -12 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm border border-outline-variant/10"
            >
              <div className="bg-primary p-6 text-on-primary flex items-center justify-between">
                <h3 className="text-2xl font-bold">Dogs</h3>
                <motion.div
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ repeat: Infinity, repeatDelay: 3, duration: 1 }}
                >
                  <Dog className="w-8 h-8 opacity-50" />
                </motion.div>
              </div>
              <div className="p-8 space-y-4">
                {[
                  { name: 'Parvovirus', desc: 'Highly contagious gastrointestinal pathogen.' },
                  { name: 'Distemper', desc: 'Attacks respiratory and neurological systems.' },
                  { name: 'Hepatitis', desc: 'Serious viral infection affecting the liver.' },
                  { name: 'Leptospirosis', desc: 'Bacterial disease spread through water/soil.' }
                ].map((v, i) => (
                  <motion.div 
                    key={i} 
                    className="flex gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, color: "#10b981" }}
                    >
                      <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-1" />
                    </motion.div>
                    <div>
                      <p className="font-bold text-primary">{v.name}</p>
                      <p className="text-sm text-on-surface-variant">{v.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            {/* Cats */}
            <motion.div 
              variants={fadeInUp}
              whileHover={{ y: -12 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm border border-outline-variant/10"
            >
              <div className="bg-primary p-6 text-on-primary flex items-center justify-between">
                <h3 className="text-2xl font-bold">Cats</h3>
                <motion.div
                  animate={{ rotate: [0, -15, 15, 0] }}
                  transition={{ repeat: Infinity, repeatDelay: 4, duration: 1 }}
                >
                  <Cat className="w-8 h-8 opacity-50" />
                </motion.div>
              </div>
              <div className="p-8 space-y-4">
                {[
                  { name: 'Panleucopenia', desc: 'Severe viral disease affecting white blood cells.' },
                  { name: 'Feline Herpesvirus', desc: 'Major cause of upper respiratory infections.' },
                  { name: 'Feline Calicivirus', desc: 'Common respiratory infection and mouth sores.' }
                ].map((v, i) => (
                  <motion.div 
                    key={i} 
                    className="flex gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, color: "#10b981" }}
                    >
                      <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-1" />
                    </motion.div>
                    <div>
                      <p className="font-bold text-primary">{v.name}</p>
                      <p className="text-sm text-on-surface-variant">{v.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            {/* Rabbits */}
            <motion.div 
              variants={fadeInUp}
              whileHover={{ y: -12 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm border border-outline-variant/10"
            >
              <div className="bg-primary p-6 text-on-primary flex items-center justify-between">
                <h3 className="text-2xl font-bold">Rabbits</h3>
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ repeat: Infinity, repeatDelay: 3.5, duration: 1 }}
                >
                  <Rabbit className="w-8 h-8 opacity-50" />
                </motion.div>
              </div>
              <div className="p-8 space-y-4">
                {[
                  { name: 'Myxomatosis', desc: 'Severe viral disease spread by insects.' },
                  { name: 'Viral Haemorrhagic Disease', desc: 'Highly contagious and often fatal.' }
                ].map((v, i) => (
                  <motion.div 
                    key={i} 
                    className="flex gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, color: "#10b981" }}
                    >
                      <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-1" />
                    </motion.div>
                    <div>
                      <p className="font-bold text-primary">{v.name}</p>
                      <p className="text-sm text-on-surface-variant">{v.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Healthy Pet Club Section */}
      <motion.section 
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8 }}
        className="py-24"
      >
        <div className="max-w-7xl mx-auto px-8">
          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="bg-primary rounded-2xl overflow-hidden shadow-2xl flex flex-col lg:flex-row"
          >
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="lg:w-1/2 p-12 md:p-20 flex flex-col justify-center"
            >
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-primary-fixed font-bold uppercase tracking-widest text-sm mb-4 block"
              >
                Exclusive Membership
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-4xl md:text-5xl font-extrabold text-on-primary mb-6 tracking-tight"
              >
                The Healthy Pet Club
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-primary-fixed text-lg mb-8 opacity-90 leading-relaxed"
              >
                Join our premier health plan and save on vaccinations, flea and worm treatments, and more. It's the simplest way to keep your pet healthy and happy all year round.
              </motion.p>
              <motion.ul 
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-4 mb-10"
              >
                {[
                  'Annual vaccinations included',
                  'Flea, worm and tick treatments',
                  'Bi-annual health checks',
                  '20% off selected procedures'
                ].map((item, i) => (
                  <motion.li key={i} variants={fadeInUp} className="flex items-center gap-3 text-on-primary">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <CheckCircle2 className="w-5 h-5 text-secondary-container" />
                    </motion.div>
                    <span className="font-medium">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.2)" }}
                whileTap={{ scale: 0.95 }}
                className="w-full md:w-auto px-10 py-4 bg-surface-container-lowest text-primary rounded-full font-bold hover:bg-primary-fixed transition-all shadow-xl"
              >
                Learn More & Join
              </motion.button>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="lg:w-1/2 relative min-h-[400px]"
            >
              <motion.img 
                src="https://picsum.photos/seed/happy-pet/800/800" 
                alt="Happy pet" 
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-transparent lg:hidden"></div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Testimonials Carousel Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
        className="py-24 bg-surface"
      >
        <div className="max-w-7xl mx-auto px-8">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-primary mb-4 tracking-tight">Voices of Our Community</h2>
            <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">
              Hear from the pet owners who trust us with their companion's health and happiness.
            </p>
          </motion.div>

          {/* Carousel Container */}
          <div className="relative">
            <div className="overflow-hidden">
              <AnimatePresence mode="wait" custom={direction} initial={false}>
                <motion.div
                  key={page}
                  custom={direction}
                  variants={carouselVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                  {visibleTestimonials.map((t, i) => (
                    <motion.div 
                      key={i}
                      whileHover={{ y: -12 }}
                      className="bg-surface-container-low p-8 rounded-2xl shadow-sm border border-outline-variant/10 relative flex flex-col"
                    >
                      <motion.div 
                        initial={{ rotate: -10, scale: 0 }}
                        whileInView={{ rotate: 0, scale: 1 }}
                        transition={{ delay: i * 0.1, type: "spring" }}
                        className="absolute -top-4 left-8 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-on-primary shadow-lg"
                      >
                        <Quote className="w-5 h-5" />
                      </motion.div>
                      <div className="flex gap-1 mb-4 mt-2">
                        {[...Array(t.rating)].map((_, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 + idx * 0.1 }}
                          >
                            <Star className="w-4 h-4 fill-secondary text-secondary" />
                          </motion.div>
                        ))}
                      </div>
                      <motion.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-on-surface-variant italic mb-8 leading-relaxed flex-grow"
                      >
                        "{t.quote}"
                      </motion.p>
                      <div className="border-t border-outline-variant/20 pt-6">
                        <h4 className="font-bold text-primary">{t.author}</h4>
                        <p className="text-sm text-secondary font-medium">{t.pet}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Arrows */}
            {totalPages > 1 && (
              <>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => paginate(-1)}
                  className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 rounded-full bg-primary text-on-primary shadow-lg flex items-center justify-center transition-opacity ${page === 0 ? 'opacity-30 cursor-not-allowed' : 'opacity-100 hover:bg-primary-fixed-dim'}`}
                  disabled={page === 0}
                >
                  <ChevronLeft className="w-6 h-6" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => paginate(1)}
                  className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 rounded-full bg-primary text-on-primary shadow-lg flex items-center justify-center transition-opacity ${page === totalPages - 1 ? 'opacity-30 cursor-not-allowed' : 'opacity-100 hover:bg-primary-fixed-dim'}`}
                  disabled={page === totalPages - 1}
                >
                  <ChevronRight className="w-6 h-6" />
                </motion.button>
              </>
            )}
          </div>

          {/* Pagination Dots */}
          {totalPages > 1 && (
            <div className="flex justify-center gap-3 mt-10">
              {Array.from({ length: totalPages }).map((_, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => goToPage(idx)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-3 h-3 rounded-full transition-all ${idx === page ? 'bg-primary scale-125' : 'bg-primary/30'}`}
                  aria-label={`Go to page ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="py-24 px-8"
      >
        <div className="max-w-7xl mx-auto bg-primary rounded-lg overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary-container opacity-90"></div>
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="relative z-10 px-8 md:px-20 py-20 text-center flex flex-col items-center"
          >
            <motion.h2 
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="text-4xl md:text-5xl font-extrabold text-on-primary mb-6 tracking-tight max-w-2xl"
            >
              Secure Your Companion's Tomorrow, Today.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-primary-fixed text-xl mb-10 max-w-xl font-light"
            >
              Join 10,000+ local pet owners who trust VetCare for precision healthcare and sanctuary-level service.
            </motion.p>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              animate={{ 
                boxShadow: ["0px 0px 0px rgba(255,255,255,0)", "0px 0px 20px rgba(255,255,255,0.5)", "0px 0px 0px rgba(255,255,255,0)"]
              }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <Link to="/contact" className="px-12 py-5 bg-surface-container-lowest text-primary rounded-full text-xl font-bold hover:bg-primary-fixed transition-all shadow-2xl inline-block">
                Contact Us
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}