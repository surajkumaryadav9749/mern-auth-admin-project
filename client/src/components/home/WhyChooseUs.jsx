import React from "react";

const WhyChooseUs = () => {
  return (
    <section className="bg-gray-900 py-16 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose Our Platform
        </h2>

        <div className="grid md:grid-cols-4 gap-6 text-center">
          <div className="bg-gray-800 p-6 rounded">
            <h3 className="text-lg font-semibold mb-2">Verified Developers</h3>
            <p className="text-gray-300 text-sm">
              Only skilled and verified professionals.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded">
            <h3 className="text-lg font-semibold mb-2">
              Secure Authentication
            </h3>
            <p className="text-gray-300 text-sm">
              JWT based login & role security.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded">
            <h3 className="text-lg font-semibold mb-2">Role Based Access</h3>
            <p className="text-gray-300 text-sm">
              Separate dashboards for clients & developers.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded">
            <h3 className="text-lg font-semibold mb-2">Fast Matching</h3>
            <p className="text-gray-300 text-sm">Get connected quickly.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
