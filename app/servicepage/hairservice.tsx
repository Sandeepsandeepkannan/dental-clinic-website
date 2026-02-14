import Image from "next/image";
import { ChevronRight, Sparkles, ShieldCheck } from "lucide-react";

/* ---------- Static Data Outside ---------- */

const SERVICES = [
  {
    title: "Invisalign®",
    desc: "Achieve a perfect smile with clear, removable aligners. We provide digitally guided smile correction for maximum comfort and precision.",
    img: "/service1.png",
    delay: "0ms",
  },
  {
    title: "Dental Implants",
    desc: "Permanent and natural-looking solutions for missing teeth using advanced titanium posts and custom-crafted porcelain crowns.",
    img: "/service2.png",
    delay: "100ms",
  },
  {
    title: "Root Canal (RCT)",
    desc: "Pain-free advanced endodontic therapy to save your natural teeth using laser-assisted precision and microscopic technology.",
    img: "/service3.png",
    delay: "200ms",
  },
  {
    title: "Smile Makeover",
    desc: "A comprehensive cosmetic transformation combining veneers, whitening, and contouring to create your ideal aesthetic smile.",
    img: "/service4.png",
    delay: "300ms",
  },
];

export default function DentalServicesSection() {
  return (
    <section className="bg-slate-50 py-24 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">

          <div className="space-y-4 animate-in fade-in slide-in-from-left-8 duration-1000">
            <div className="flex items-center gap-2 text-blue-700 font-bold tracking-[0.2em] text-xs uppercase">
              <Sparkles size={16} aria-hidden="true" />
              <span>Oral Care Experts</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-serif text-slate-900">
              Dental <span className="text-blue-700 italic">Specialties</span>
            </h2>

            <div className="w-24 h-1 bg-blue-700 rounded-full"></div>
          </div>

          <div className="w-full md:w-auto animate-in fade-in duration-1000 delay-300">
            <select
              aria-label="Filter dental services"
              className="w-full md:w-64 bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-700 shadow-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-700 outline-none transition-all cursor-pointer font-medium"
            >
              <option>Filter by Service</option>
              {SERVICES.map((s) => (
                <option key={s.title}>{s.title}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {SERVICES.map((item) => (
            <div
              key={item.title}
              style={{ animationDelay: item.delay }}
              className="group bg-white rounded-[2rem] p-5 border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 animate-in fade-in slide-in-from-bottom-8 fill-mode-both"
            >

              {/* Image */}
              <div className="relative h-48 rounded-2xl overflow-hidden mb-6">

                <Image
                  src={item.img}
                  alt={`${item.title} dental treatment`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-blue-900/5 group-hover:bg-transparent transition-colors" />

                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  <ShieldCheck
                    className="text-blue-700"
                    size={18}
                    aria-hidden="true"
                  />
                </div>
              </div>

              {/* Text */}
              <div className="px-2">

                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">
                  {item.title}
                </h3>

                <p className="text-slate-500 leading-relaxed text-sm mb-6 line-clamp-3">
                  {item.desc}
                </p>

                <div className="flex items-center text-xs font-bold uppercase tracking-widest text-slate-400 group-hover:text-blue-700 transition-colors">
                  <span>Learn More</span>
                  <ChevronRight
                    size={14}
                    className="ml-1 transform group-hover:translate-x-1 transition-transform"
                    aria-hidden="true"
                  />
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-20 text-center animate-in fade-in duration-1000 delay-500">
          <p className="text-slate-400 text-sm font-light">
            Our specialized team in{" "}
            <span className="text-slate-900 font-medium">Chennai</span>{" "}
            utilizes clinical excellence to ensure high-precision dental restoration.
          </p>
        </div>

      </div>
    </section>
  );
}
