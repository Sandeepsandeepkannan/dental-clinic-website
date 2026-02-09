"use client";

export default function OurServicesHero() {
  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: "url(https://kimayaclinique.com/image/ser-ban.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Center Content */}
      <div className="relative z-10 text-center text-white max-w-3xl px-6">

        <h1 className="text-5xl md:text-6xl font-serif mb-6">
        
        </h1>

        {/* Line */}
        <div className="w-40 h-[1px] bg-white mx-auto mb-6"></div>

        <p className="text-lg leading-relaxed text-gray-200">
        
        </p>

      </div>

      {/* Chat Box */}
      

    </section>
  );
}
