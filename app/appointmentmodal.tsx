"use client";

export default function AppointmentModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  if (!open) return null;

  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-black/60 flex items-center justify-center z-[999]">

      {/* Modal */}
      <div className="bg-white text-black w-full max-w-xl rounded-lg shadow-xl relative">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl font-bold text-gray-500 hover:text-red-500"
        >
          ×
        </button>

        {/* Content */}
        <div className="px-8 pb-8 pt-8">

          {/* Title */}
          <h2 className="text-4xl font-serif font-bold mb-6 text-center">
            Book an Appointment
          </h2>

          {/* Form */}
          <form className="space-y-5">

            {/* Full Name */}
            <div>
              <label className="font-semibold">
                Full Name <span className="text-red-500">*</span>
              </label>

              <input
                type="text"
                placeholder="Enter Full Name"
                className="w-full border-2 rounded-md px-4 py-3 mt-1"
              />
            </div>

            {/* Phone + Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              <div>
                <label className="font-semibold">
                  Phone Number <span className="text-red-500">*</span>
                </label>

                <input
                  type="tel"
                  placeholder="Enter Phone Number"
                  className="w-full border-2 rounded-md px-4 py-3 mt-1"
                />
              </div>

              <div>
                <label className="font-semibold">
                  Email <span className="text-red-500">*</span>
                </label>

                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border-2 rounded-md px-4 py-3 mt-1"
                />
              </div>

            </div>

            {/* Postal Code */}
            <div>
              <label className="font-semibold">
                Postal Code <span className="text-red-500">*</span>
              </label>

              <input
                type="text"
                placeholder="Postal Code"
                className="w-full border-2 rounded-md px-4 py-3 mt-1"
              />
            </div>

            {/* Disclaimer */}
            <p className="text-sm text-gray-600 leading-relaxed">
              <span className="text-red-500">*</span> By submitting this form,
              you agree to be contacted.
            </p>

            {/* Submit */}
            <div className="pt-4 text-center">
              <button
                type="submit"
                className="bg-gray-800 text-white px-12 py-3 rounded-lg shadow-lg hover:bg-black"
              >
                Submit
              </button>
            </div>

          </form>

        </div>
      </div>
    </div>
  );
}
