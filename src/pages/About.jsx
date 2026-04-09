import { ShieldCheck, Heart, Users, Award } from 'lucide-react';

export default function About() {
  return (
    <main className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-8">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <span className="inline-block py-1 px-4 rounded-full bg-primary-fixed text-on-primary-fixed-variant text-sm font-semibold mb-6 tracking-wide">
              OUR STORY
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-primary leading-tight mb-8 tracking-tight">
              Safeguarding <span className="italic">Animal Health</span> & Welfare.
            </h1>
            <p className="text-xl text-on-surface-variant leading-relaxed mb-8">
              At the heart of VetCare is a commitment to keeping animals healthy, happy, and safe. From livestock to beloved pets, every animal deserves proper protection against diseases and compassionate treatment for health conditions.
            </p>
            <p className="text-lg text-on-surface-variant leading-relaxed">
              We specialize in two vital areas of modern veterinary medicine: the rigorous production of life-saving vaccines and the expert management of complex skin conditions like dermatitis.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl rotate-2">
              <img 
                src="https://picsum.photos/seed/vet-team/800/1000" 
                alt="Our Team" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 p-8 bg-surface-container-lowest rounded-lg shadow-xl max-w-[280px] -rotate-2">
              <div className="text-4xl font-black text-primary mb-2">15+</div>
              <p className="text-sm font-bold text-on-surface-variant uppercase tracking-widest">Years of Excellence</p>
            </div>
          </div>
        </div>

        {/* Detailed Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          <div className="bg-surface-container-lowest p-10 rounded-2xl shadow-sm border border-outline-variant/10">
            <h2 className="text-3xl font-bold text-primary mb-6">Vaccine Production Excellence</h2>
            <p className="text-on-surface-variant leading-relaxed mb-6">
              Vaccines are one of the most powerful tools in preventive veterinary medicine. They protect animals from infectious diseases that could otherwise spread rapidly and cause severe illness or death.
            </p>
            <p className="text-on-surface-variant leading-relaxed">
              Our vaccine development process follows rigorous scientific and ethical standards to ensure the highest levels of safety and effectiveness. We are committed to a holistic approach, combining innovative production with clinical precision to safeguard animals on farms and in homes alike.
            </p>
          </div>
          <div className="bg-surface-container-lowest p-10 rounded-2xl shadow-sm border border-outline-variant/10">
            <h2 className="text-3xl font-bold text-primary mb-6">Managing Dermatitis in Pets</h2>
            <p className="text-on-surface-variant leading-relaxed mb-6">
              Skin conditions are more than just a surface issue; they are a significant quality-of-life challenge for many pets. Dermatitis can cause chronic discomfort, leading to distress for both the animal and the owner.
            </p>
            <p className="text-on-surface-variant leading-relaxed">
              We provide compassionate care for animals suffering from chronic skin conditions. By utilizing advanced diagnostics and personalized treatment plans, we manage inflammation and restore the natural barrier of the skin, helping your pet live a more comfortable and itch-free life.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-surface-container-low rounded-xl p-12 mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-primary mb-4 tracking-tight">Our Core Values</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">
              These principles guide everything we do, from the way we greet you at the door to the precision of our surgical procedures.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-surface-container-lowest p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center text-primary mb-6">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Compassion</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                We treat every pet with the same gentleness and love we give our own.
              </p>
            </div>
            <div className="bg-surface-container-lowest p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center text-primary mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Integrity</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Honest communication and transparent care are the foundations of our practice.
              </p>
            </div>
            <div className="bg-surface-container-lowest p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center text-primary mb-6">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Excellence</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                We stay at the forefront of veterinary medicine to provide the best possible outcomes.
              </p>
            </div>
            <div className="bg-surface-container-lowest p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center text-primary mb-6">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Community</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                We are proud to serve our local pet owners and support animal welfare initiatives.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-4xl font-extrabold text-primary mb-4 tracking-tight">Meet Our Specialists</h2>
              <p className="text-on-surface-variant max-w-xl">
                Our team brings together decades of experience in diverse fields of veterinary medicine.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Dr. Sarah Mitchell', role: 'Chief Veterinarian', img: 'https://picsum.photos/seed/vet1/400/500' },
              { name: 'Dr. James Wilson', role: 'Surgical Specialist', img: 'https://picsum.photos/seed/vet2/400/500' },
              { name: 'Dr. Elena Rodriguez', role: 'Internal Medicine', img: 'https://picsum.photos/seed/vet3/400/500' },
            ].map((member, i) => (
              <div key={i} className="group">
                <div className="aspect-[3/4] rounded-xl overflow-hidden mb-4 relative">
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h4 className="text-xl font-bold text-primary">{member.name}</h4>
                <p className="text-on-surface-variant font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
