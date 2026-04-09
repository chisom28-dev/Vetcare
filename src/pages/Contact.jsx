import { Mail, MapPin, Phone, Clock } from 'lucide-react';

const contactDetails = [
  {
    title: 'Phone',
    value: '+44 7438 857206',
    icon: Phone,
  },
  {
    title: 'Email',
    value: 'care@vetcareclinic.com',
    icon: Mail,
  },
  {
    title: 'Address',
    value: 'Cameron Court, Cameron St Hilington Glasgow Scotland G72 2RU United Kingdom',
    icon: MapPin,
  },
  {
    title: 'Hours',
    value: 'Mon - Sat, 8:00 AM - 7:00 PM',
    icon: Clock,
  },
];

export default function Contact() {
  return (
    <main className="pt-20">
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <span className="inline-block py-1 px-4 rounded-full bg-primary-fixed text-on-primary-fixed-variant text-sm font-semibold mb-6 tracking-wide">
              CONTACT VETCARE
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-primary leading-tight tracking-tight mb-6">
              Let&apos;s Support Your Pet&apos;s Health Journey.
            </h1>
            <p className="text-lg text-on-surface-variant leading-relaxed mb-10 max-w-xl">
              Reach out for appointment support, vaccine schedule guidance, or urgent care direction from our clinical team.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {contactDetails.map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.title} className="bg-surface-container-low p-5 rounded-lg">
                    <div className="w-11 h-11 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h2 className="text-sm font-bold text-primary mb-1 uppercase tracking-wide">{item.title}</h2>
                    <p className="text-on-surface-variant">{item.value}</p>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="bg-surface-container-low p-8 md:p-10 rounded-lg shadow-sm">
            <h2 className="text-2xl font-extrabold text-primary mb-2">Send a Message</h2>
            <p className="text-on-surface-variant mb-8">
              Share your question and we&apos;ll get back to you as quickly as possible.
            </p>
            <form className="space-y-5">
              <div>
                <label htmlFor="fullName" className="block text-sm font-semibold text-primary mb-2">Full Name</label>
                <input
                  id="fullName"
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-md border border-outline-variant bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </div>
              <div>
                <label htmlFor="emailAddress" className="block text-sm font-semibold text-primary mb-2">Email Address</label>
                <input
                  id="emailAddress"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-md border border-outline-variant bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-primary mb-2">Message</label>
                <textarea
                  id="message"
                  rows="5"
                  placeholder="How can we help?"
                  className="w-full px-4 py-3 rounded-md border border-outline-variant bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </div>
              <button
                type="submit"
                className="w-full px-8 py-3 bg-primary text-on-primary rounded-full font-bold hover:bg-primary-fixed-dim transition-all"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
