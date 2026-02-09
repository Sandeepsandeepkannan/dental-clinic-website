"use client";

export default function HairServicesSection() {
  const services = [
    {
      title: "Light Therapy",
      desc: "And finally, we also provide Light Therapy, utilizing low-level laser light to enhance hair growth.",
      img: "https://kimayaclinique.com/image/Group%2031752.webp",
    },
    {
      title: "Tricell",
      desc: "Another highly popular choice is Tricell, which combines PRP and growth factors to offer a more comprehensive solution.",
      img: "https://kimayaclinique.com/images/Group%2031753.webp",
    },
    {
      title: "GFC",
      desc: "We also provide GFC [Growth Factor Concentrate], a non-surgical option that harnesses growth factors.",
      img: "https://kimayaclinique.com/images/Group%2031754.webp",
    },
    {
      title: "PRP Therapy",
      desc: "PRP therapy helps stimulate hair growth using your own platelets for natural treatment.",
      img: "https://kimayaclinique.com/images/Group%2031754.webp",
    },
  ];

  return (
    <section className="bg-white py-20 px-12">

      {/* Header */}
      <div className="flex items-center justify-between mb-12">

        {/* Title */}
        <div>
          <h2 className="text-[40px] font-serif text-black mb-2">
            Hair
          </h2>

          <div className="w-16 h-[3px] bg-yellow-500"></div>
        </div>

        {/* Dropdown */}
        <select
          className="border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none"
        >
          <option>Select service</option>
          <option>Light Therapy</option>
          <option>Tricell</option>
          <option>GFC</option>
          <option>PRP Therapy</option>
        </select>

      </div>


      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

        {services.map((item, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
          >

            {/* Image Box */}
            <div className="mb-6">

              <div className="h-[180px] rounded-xl overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

            </div>


            {/* Content */}
            <h3 className="text-xl font-serif text-black mb-3">
              {item.title}
            </h3>

            <p className="text-gray-600 leading-relaxed text-sm">
              {item.desc}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}
