const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 text-gray-400 px-10 py-14">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h2 className="text-white text-xl font-bold mb-3">DeveloperChauk</h2>
          <p className="text-sm">
            A service-based IT platform connecting clients with skilled
            developers for real-world projects.
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-semibold mb-3">Services</h3>
          <ul className="space-y-2 text-sm">
            <li>Web Development</li>
            <li>Mobile App Development</li>
            <li>Backend APIs</li>
            <li>UI / UX Design</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>Careers</li>
            <li>Contact</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* For Users */}
        <div>
          <h3 className="text-white font-semibold mb-3">For You</h3>
          <ul className="space-y-2 text-sm">
            <li>Hire Developers</li>
            <li>Join as Developer</li>
            <li>Post a Project</li>
            <li>Support</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-5 text-center text-sm">
        © {new Date().getFullYear()} DeveloperChauk. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
