"use client";

export default function AppointmentModal({ close }: { close: () => void }) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">

      {/* Box */}
      <div className="bg-white w-[450px] rounded-xl p-8 relative">

        {/* Close Button */}
        <button
          onClick={close}
          className="absolute top-3 right-4 text-2xl text-gray-600"
        >
          ×
        </button>

        {/* Title */}
        <h2 className="text-3xl font-serif mb-6 text-center">
          Book an Appointment
        </h2>

        {/* Form */}
        <form className="space-y-4">

          <div>
            <label className="font-medium">Full Name *</label>
            <input
              type="text"
              placeholder="Enter Full Name"
              className="w-full border p-2 rounded mt-1"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">

            <div>
              <label className="font-medium">Phone *</label>
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full border p-2 rounded mt-1"
              />
            </div>

            <div>
              <label className="font-medium">Email *</label>
              <input
                type="email"
                placeholder="Email"
                className="w-full border p-2 rounded mt-1"
              />
            </div>

          </div>

          <div>
            <label className="font-medium">Postal Code *</label>
            <input
              type="text"
              placeholder="Postal Code"
              className="w-full border p-2 rounded mt-1"
            />
          </div>

          {/* Note */}
          <p className="text-xs text-gray-500 leading-relaxed">
            By submitting this form, you consent to be contacted via call,
            SMS, WhatsApp, or email.
          </p>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-gray-800 text-white py-3 rounded mt-3 hover:bg-black"
          >
            Submit
          </button>

        </form>

      </div>
    </div>
  );
}
