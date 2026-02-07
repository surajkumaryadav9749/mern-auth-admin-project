import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const navLinks = [
    { path: "/", label: "Home", end: true },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
    { path: "/service", label: "Services" },
    { path: "/login", label: "Login" },
    { path: "/register", label: "Register" },
  ];

  return (
    <header className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="text-orange-500 text-xl font-semibold">
            <NavLink to="/">DeveloperChauk</NavLink>
          </div>

          {/* Navigation */}
          <nav>
            <ul className="flex items-center gap-8 text-sm">
              {navLinks.map(({ path, label, end }) => (
                <li key={label}>
                  <NavLink
                    to={path}
                    end={end}
                    className={({ isActive }) =>
                      `pb-1 transition-all duration-200 ${
                        isActive
                          ? "text-white border-b-2 border-orange-500"
                          : "text-gray-300 hover:text-white"
                      }`
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
