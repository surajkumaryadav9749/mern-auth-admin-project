import React from "react";

const PlatformStats = () => {
  return (
    <section className="bg-gray-800 py-16 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-4xl font-bold text-orange-400">200+</h3>
            <p className="text-gray-300 mt-2">Developers</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-orange-400">500+</h3>
            <p className="text-gray-300 mt-2">Projects Completed</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-orange-400">100+</h3>
            <p className="text-gray-300 mt-2">Clients</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformStats;
