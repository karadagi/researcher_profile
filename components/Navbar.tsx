
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isCompact, setIsCompact] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsCompact(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Research', id: 'research' },
    { label: 'Selected Works', id: 'selected-works' },
    { label: 'Teaching', id: 'teaching' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isCompact
        ? 'py-3 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800'
        : 'py-6 bg-transparent'
        }`}
    >
      <div className="max-w-[1100px] mx-auto px-6 md:px-12 flex items-center justify-between">
        <a
          href="#hero"
          className="hover:opacity-70 transition-opacity"
        >
          <span className="text-xl font-bold font-serif tracking-tight text-slate-900 dark:text-slate-100">
            IK.
          </span>
        </a>

        <div className="flex items-center gap-6 md:gap-10">
          <ul className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`relative py-1 transition-colors duration-200 ${activeSection === item.id
                    ? 'text-accent-light dark:text-accent-dark'
                    : 'text-slate-500 hover:text-slate-900 dark:hover:text-slate-200'
                    }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-accent-light dark:bg-accent-dark rounded-full" />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
