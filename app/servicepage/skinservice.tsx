"use client";

export default function SkinServicesSection() {
  const services = [
    {
      title: "Skin Lightening",
      desc: "Skin lightening is another form that can be availed atthe clinic to address hyperpigmentation .",
      img: "https://kimayaclinique.com/images/Group%2031756.webp",
    },
    {
      title: "Vampire Facial",
      desc: "The Vampire Facial is a treatment that involves using the patient’s own blood to rejuvenate the skin.",
      img: "https://kimayaclinique.com/images/Group%2031757.webp",
    },
    {
      title: "Dermaplaning",
      desc: "Dermaplaning is a form of exfoliation that removes dead skin cells and vellus hair to reveal smoothe.",
      img: "https://kimayaclinique.com/images/Group%2031758.webp",
    },
    {
      title: "Derma Stamp",
      desc: "Kimaya Clinique also offers Derma Stamp, aminimally invasive treatment that uses a device tocreate",
      img: "https://kimayaclinique.com/images/Group%2031759.webp",
    },
     {
      title: "PRP Skin",
      desc: "Also offered at the clinic are PRP-Skin treatments,which use platelet-rich plasma to rejuvenate the.",
      img: "https://kimayaclinique.com/images/Group%2031760.webp",
    },
     {
      title: "Collagen Induction Therapy",
      desc: "Another effective treatment is Collagen Induction Therapy, also known as micro needling, which uses",
      img: "https://kimayaclinique.com/images/Group%2031761.webp",
    },
  ];

  return (
    <section className="bg-white py-20 px-12">

      {/* Header */}
      <div className="flex items-center justify-between mb-12">

        {/* Title */}
        <div>
          <h2 className="text-[40px] font-serif text-black mb-2">
            Skin
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
