import { Link } from 'react-router-dom';
import { ShieldCheck, Activity, PlayCircle, ArrowRight, CheckCircle2, Info, Calendar, Syringe, Dog, Cat, Rabbit, Quote, Star } from 'lucide-react';

export default function Home() {
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
    }
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[700px] flex items-center overflow-hidden bg-surface">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="z-10 py-12">
            <span className="inline-block py-1 px-4 rounded-full bg-primary-fixed text-on-primary-fixed-variant text-sm font-semibold mb-6 tracking-wide">
              CLINICAL EXCELLENCE
            </span>
            <h1 className="text-6xl md:text-7xl font-extrabold text-primary leading-[1.1] tracking-tight mb-8">
              Vaccinating Your Pet: <span className="italic text-secondary">Building Immunity</span>
            </h1>
            <p className="text-xl text-on-surface-variant max-w-lg mb-10 leading-relaxed">
              Understand why, when, and which vaccines are essential to your pet's health. VetCare makes pet health simple and professional.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="px-10 py-4 bg-primary text-on-primary rounded-full text-lg font-bold hover:bg-primary-fixed-dim transition-all shadow-xl shadow-primary/10">
                Contact Us
              </Link>
              <button className="flex items-center gap-2 px-8 py-4 bg-surface-container-low text-primary rounded-full font-bold hover:bg-surface-container-highest transition-all">
                <PlayCircle className="w-6 h-6" />
                Our Process
              </button>
            </div>
          </div>
          <div className="relative h-[500px] w-full hidden lg:block">
            <div className="absolute inset-0 bg-primary-container/5 rounded-xl -rotate-2 scale-105"></div>
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3151_O9H6kbJyKTTUVkHnRTtNGGMJ41wAG1flLJEg8VMYfAf1lPXmWE_DqZfZ4FeXTfDBqO4M1l75zKgzdjSqwM7CWhrq1O_b-BPMIVLnrwmR2C_diHqTW2sl_y8p43BBm4czGUv1IAmvla29o3FueQoOsL77eFzDdH6xO0r147srD9b7eB3p_Pmta1wAiejpSUdQ8UG5gWlbI2XE3gLU2-mW7aJkzuJ6-gu2qEEYF16j-Wu00jdRahKz9IaURTVzvJWvVJUl8mr-" 
              alt="Veterinarian holding a golden retriever" 
              className="absolute inset-0 w-full h-full object-cover rounded-xl shadow-2xl rotate-1" 
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* How we vaccinate Section */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-extrabold text-primary mb-6 tracking-tight">How do we vaccinate?</h2>
              <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed">
                <p>
                  Most pet vaccinations are given as an injection under the skin. This is not painful, though vaccines are kept refrigerated and some animals react to the cold sensation.
                </p>
                <p>
                  The exception is the <span className="font-bold text-primary">kennel cough vaccine</span> in dogs, which is given into the nose by spraying it up the nostril.
                </p>
                <p>
                  Vaccination appointments always include a <span className="italic">physical examination</span> to ensure your pet is healthy, as any other problems may prevent the immune system from responding properly.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-surface-container-lowest p-8 rounded-lg shadow-sm border border-outline-variant/10">
                <Syringe className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-bold text-primary mb-2">Subcutaneous</h3>
                <p className="text-sm text-on-surface-variant">Standard injection for most core vaccines.</p>
              </div>
              <div className="bg-surface-container-lowest p-8 rounded-lg shadow-sm border border-outline-variant/10">
                <Activity className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-bold text-primary mb-2">Intranasal</h3>
                <p className="text-sm text-on-surface-variant">Specialized spray for respiratory protection.</p>
              </div>
              <div className="col-span-2 bg-primary text-on-primary p-8 rounded-lg shadow-md">
                <Info className="w-10 h-10 mb-4 opacity-80" />
                <h3 className="font-bold text-xl mb-2">Professional Care</h3>
                <p className="opacity-90">All vaccinations are administered by qualified veterinary surgeons or RVNs under strict instruction.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* When to vaccinate Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-primary mb-4 tracking-tight">When should we vaccinate?</h2>
            <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">
              Ideally vaccines should be given when a pet is young, before they have had chance to come in to contact with diseases.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-surface-container-low p-8 rounded-xl text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Dog className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-2">Puppies</h3>
              <p className="text-on-surface-variant font-medium mb-4">6-8 weeks old</p>
              <p className="text-sm text-on-surface-variant">Requires a primary course of two vaccines a few weeks apart.</p>
            </div>
            <div className="bg-surface-container-low p-8 rounded-xl text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Cat className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-2">Kittens</h3>
              <p className="text-on-surface-variant font-medium mb-4">9 weeks old</p>
              <p className="text-sm text-on-surface-variant">Primary course provides maximum protection for growing felines.</p>
            </div>
            <div className="bg-surface-container-low p-8 rounded-xl text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Rabbit className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-2">Rabbits</h3>
              <p className="text-on-surface-variant font-medium mb-4">5 weeks old</p>
              <p className="text-sm text-on-surface-variant">Usually only requires a single dose for initial protection.</p>
            </div>
          </div>
          <div className="mt-16 p-8 bg-primary-container/10 rounded-xl border border-primary/20 flex flex-col md:flex-row items-center gap-8">
            <Calendar className="w-12 h-12 text-primary shrink-0" />
            <div>
              <h4 className="text-xl font-bold text-primary mb-2">Annual Boosters are Essential</h4>
              <p className="text-on-surface-variant">
                All pets need a booster injection every year to remain fully protected. Vaccinations only provide immunity for 1-3 years depending on the disease.
              </p>
            </div>
            <Link to="/contact" className="whitespace-nowrap px-8 py-3 bg-primary text-on-primary rounded-full font-bold hover:bg-primary-fixed-dim transition-all">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Species specific vaccines Section */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl font-extrabold text-primary mb-12 tracking-tight text-center">What do we vaccinate against?</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Dogs */}
            <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm border border-outline-variant/10">
              <div className="bg-primary p-6 text-on-primary flex items-center justify-between">
                <h3 className="text-2xl font-bold">Dogs</h3>
                <Dog className="w-8 h-8 opacity-50" />
              </div>
              <div className="p-8 space-y-4">
                {[
                  { name: 'Parvovirus', desc: 'Highly contagious gastrointestinal pathogen.' },
                  { name: 'Distemper', desc: 'Attacks respiratory and neurological systems.' },
                  { name: 'Hepatitis', desc: 'Serious viral infection affecting the liver.' },
                  { name: 'Leptospirosis', desc: 'Bacterial disease spread through water/soil.' }
                ].map((v, i) => (
                  <div key={i} className="flex gap-4">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-primary">{v.name}</p>
                      <p className="text-sm text-on-surface-variant">{v.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Cats */}
            <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm border border-outline-variant/10">
              <div className="bg-primary p-6 text-on-primary flex items-center justify-between">
                <h3 className="text-2xl font-bold">Cats</h3>
                <Cat className="w-8 h-8 opacity-50" />
              </div>
              <div className="p-8 space-y-4">
                {[
                  { name: 'Panleucopenia', desc: 'Severe viral disease affecting white blood cells.' },
                  { name: 'Feline Herpesvirus', desc: 'Major cause of upper respiratory infections.' },
                  { name: 'Feline Calicivirus', desc: 'Common respiratory infection and mouth sores.' }
                ].map((v, i) => (
                  <div key={i} className="flex gap-4">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-primary">{v.name}</p>
                      <p className="text-sm text-on-surface-variant">{v.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Rabbits */}
            <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm border border-outline-variant/10">
              <div className="bg-primary p-6 text-on-primary flex items-center justify-between">
                <h3 className="text-2xl font-bold">Rabbits</h3>
                <Rabbit className="w-8 h-8 opacity-50" />
              </div>
              <div className="p-8 space-y-4">
                {[
                  { name: 'Myxomatosis', desc: 'Severe viral disease spread by insects.' },
                  { name: 'Viral Haemorrhagic Disease', desc: 'Highly contagious and often fatal.' }
                ].map((v, i) => (
                  <div key={i} className="flex gap-4">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-primary">{v.name}</p>
                      <p className="text-sm text-on-surface-variant">{v.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Healthy Pet Club Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="bg-primary rounded-2xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-12 md:p-20 flex flex-col justify-center">
              <span className="text-primary-fixed font-bold uppercase tracking-widest text-sm mb-4 block">Exclusive Membership</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-on-primary mb-6 tracking-tight">The Healthy Pet Club</h2>
              <p className="text-primary-fixed text-lg mb-8 opacity-90 leading-relaxed">
                Join our premier health plan and save on vaccinations, flea and worm treatments, and more. It's the simplest way to keep your pet healthy and happy all year round.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  'Annual vaccinations included',
                  'Flea, worm and tick treatments',
                  'Bi-annual health checks',
                  '20% off selected procedures'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-on-primary">
                    <CheckCircle2 className="w-5 h-5 text-secondary-container" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full md:w-auto px-10 py-4 bg-surface-container-lowest text-primary rounded-full font-bold hover:bg-primary-fixed transition-all shadow-xl">
                Learn More & Join
              </button>
            </div>
            <div className="lg:w-1/2 relative min-h-[400px]">
              <img 
                src="https://picsum.photos/seed/happy-pet/800/800" 
                alt="Happy pet" 
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-transparent lg:hidden"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-primary mb-4 tracking-tight">Voices of Our Community</h2>
            <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">
              Hear from the pet owners who trust us with their companion's health and happiness.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-surface-container-low p-8 rounded-2xl shadow-sm border border-outline-variant/10 relative flex flex-col">
                <div className="absolute -top-4 left-8 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-on-primary shadow-lg">
                  <Quote className="w-5 h-5" />
                </div>
                <div className="flex gap-1 mb-4 mt-2">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-on-surface-variant italic mb-8 leading-relaxed flex-grow">
                  "{t.quote}"
                </p>
                <div className="border-t border-outline-variant/20 pt-6">
                  <h4 className="font-bold text-primary">{t.author}</h4>
                  <p className="text-sm text-secondary font-medium">{t.pet}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-8">
        <div className="max-w-7xl mx-auto bg-primary rounded-lg overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary-container opacity-90"></div>
          <div className="relative z-10 px-8 md:px-20 py-20 text-center flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-on-primary mb-6 tracking-tight max-w-2xl">
              Secure Your Companion's Tomorrow, Today.
            </h2>
            <p className="text-primary-fixed text-xl mb-10 max-w-xl font-light">
              Join 10,000+ local pet owners who trust VetCare for precision healthcare and sanctuary-level service.
            </p>
            <Link to="/contact" className="px-12 py-5 bg-surface-container-lowest text-primary rounded-full text-xl font-bold hover:bg-primary-fixed transition-all shadow-2xl scale-100 hover:scale-105 active:scale-95">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
