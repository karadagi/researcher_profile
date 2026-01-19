
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const lastUpdated = "May 2024";

  return (
    <footer className="max-w-[1100px] mx-auto px-6 md:px-12 py-20 mt-20 border-t border-slate-200 dark:border-slate-800">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">
            &copy; {currentYear} Jordan Smith. Built with React & Tailwind.
          </p>
          <p className="text-[10px] uppercase tracking-widest text-slate-400">
            Last updated: {lastUpdated}
          </p>
        </div>

        <div className="flex gap-8 text-sm font-medium">
          <a href="mailto:ikaradag3@gatech.edu" className="text-slate-500 hover:text-accent-light dark:hover:text-accent-dark transition-colors">Contact</a>
          <a href="#" className="text-slate-500 hover:text-accent-light dark:hover:text-accent-dark transition-colors">Privacy</a>
          <a href="#" className="text-slate-500 hover:text-accent-light dark:hover:text-accent-dark transition-colors">RSS</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
