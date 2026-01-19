
import React from 'react';

import QRCode from 'react-qr-code';

const Hero: React.FC = () => {
  const [isPortfolioOpen, setIsPortfolioOpen] = React.useState(false);
  const [isBusinessCardOpen, setIsBusinessCardOpen] = React.useState(false);

  return (
    <div className="pt-20">
      <h1 className="text-5xl md:text-7xl font-sans mb-6 leading-tight tracking-tight">
        <span className="font-bold">Ilker</span> <span className="font-normal">Karadag</span>
      </h1>
      <p className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 max-w-2xl mb-10 leading-relaxed font-light">
        Researcher in <span className="text-slate-900 dark:text-slate-100 font-medium">Machine Learning</span> & <span className="text-slate-900 dark:text-slate-100 font-medium">Environmental Analysis</span>.
        Advancing bioclimatic design through predictive models and computational simulations.
      </p>

      <div className="flex flex-wrap gap-4 mb-12">
        <a
          href="mailto:ikaradag3@gatech.edu"
          className="px-8 py-3 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 rounded-full font-medium transition-all hover:bg-slate-800 dark:hover:bg-white active:scale-95 shadow-sm"
        >
          Email Me
        </a>
        <button
          onClick={() => setIsPortfolioOpen(true)}
          className="px-8 py-3 border border-slate-300 dark:border-slate-700 rounded-full font-medium transition-all hover:bg-slate-100 dark:hover:bg-slate-900 active:scale-95"
        >
          View Portfolio
        </button>
        <button
          onClick={() => setIsBusinessCardOpen(true)}
          className="px-8 py-3 border border-slate-300 dark:border-slate-700 rounded-full font-medium transition-all hover:bg-slate-100 dark:hover:bg-slate-900 active:scale-95"
        >
          Business Card
        </button>
      </div>

      <div className="flex gap-6 text-slate-400 dark:text-slate-500">
        <a href="https://scholar.google.com/citations?user=pMVv_ewAAAAJ&hl" target="_blank" rel="noopener noreferrer" className="hover:text-accent-light dark:hover:text-accent-dark transition-colors">Scholar</a>
        <a href="https://github.com/karadagi" target="_blank" rel="noopener noreferrer" className="hover:text-accent-light dark:hover:text-accent-dark transition-colors">GitHub</a>
        <a href="https://www.linkedin.com/in/ilkerkaradag/" target="_blank" rel="noopener noreferrer" className="hover:text-accent-light dark:hover:text-accent-dark transition-colors">LinkedIn</a>
        <a href="https://orcid.org/0000-0001-7534-2839" target="_blank" rel="noopener noreferrer" className="hover:text-accent-light dark:hover:text-accent-dark transition-colors">ORCiD</a>
      </div>

      {/* Portfolio Viewer Modal */}
      {isPortfolioOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-8 animate-fadeIn"
          onClick={() => setIsPortfolioOpen(false)}
        >
          <div
            className="relative w-full max-w-6xl h-full md:h-[90vh] bg-white dark:bg-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header / Close Button */}
            <div className="flex justify-between items-center p-4 border-b border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900">
              <h3 className="font-bold text-lg text-slate-900 dark:text-white">Portfolio</h3>
              <button
                onClick={() => setIsPortfolioOpen(false)}
                className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
                aria-label="Close Portfolio"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            {/* PDF Viewer content */}
            <div className="flex-1 bg-slate-100 dark:bg-slate-900 relative">
              <iframe
                src="Portfolio.pdf"
                className="w-full h-full border-none"
                title="Portfolio PDF"
              />
            </div>
          </div>
        </div>
      )}

      {/* Business Card / QR Code Modal */}
      {isBusinessCardOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fadeIn"
          onClick={() => setIsBusinessCardOpen(false)}
        >
          <div
            className="relative bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8 flex flex-col items-center gap-6 max-w-sm w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center">
              <h3 className="font-bold text-2xl text-slate-900 dark:text-white mb-2">Ilker Karadag</h3>
              <p className="text-slate-500 dark:text-slate-400">Scan to visit profile</p>
            </div>

            <div className="bg-white p-4 rounded-xl shadow-inner border border-slate-100">
              <QRCode
                value="https://karadagi.github.io/researcher_profile/"
                size={200}
                style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                viewBox={`0 0 256 256`}
              />
            </div>

            <button
              onClick={() => setIsBusinessCardOpen(false)}
              className="px-6 py-2 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full text-sm font-medium hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
