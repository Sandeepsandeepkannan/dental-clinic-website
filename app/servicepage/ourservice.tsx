"use client";

export default function OurServicesHero() {
  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center"
      style={{
        backgroundImage:  "url(https://kimayaclinique.com/image/ser-ban.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      

      {/* Center Content */}
      <div className="relative z-10 text-center text-white max-w-3xl px-6">

        

        {/* Line */}
        <div className="w-40 h-[1px] bg-white mx-auto mb-6"></div>

      

      </div>


      {/* Chat Box */}
      <div className="absolute bottom-10 right-10 bg-white text-black px-5 py-3 rounded-xl shadow-lg z-20">

        

      </div>


      {/* Logo Circle */}
      

    </section>
  );
}
