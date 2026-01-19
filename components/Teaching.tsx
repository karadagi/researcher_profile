
import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { COURSES } from '../constants';

const Teaching: React.FC = () => {
  const [expandedCourse, setExpandedCourse] = useState<string | null>(null);

  return (
    <div>
      <h2 className="text-lg uppercase tracking-widest font-bold text-slate-900 dark:text-white mb-6">
        04 / Teaching
      </h2>

      <div className="grid gap-12">
        <div className="space-y-6">
          <div
            className="group p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 transition-all hover:shadow-md"
          >
            <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-6">
              <div>
                <h4 className="text-2xl font-serif font-bold mb-1">Surrogate Modeling for Urban Regeneration (SMUR)</h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
                  Georgia Tech — Spring 2025
                </p>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => setExpandedCourse('smur-poster')}
                  className="px-4 py-2 text-xs font-bold uppercase tracking-wider border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                >
                  Poster
                </button>
                <a
                  href="https://vip-smur.github.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-xs font-bold uppercase tracking-wider border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                >
                  Visit Course Site
                </a>
              </div>
            </div>

            <p className="text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
              A Vertically Integrated Project (VIP) exploring the use of machine learning surrogates to accelerate urban design regeneration processes.
              Students learn to build predictive models that analyze environmental performance in real-time.
            </p>
          </div>
        </div>
      </div>

      {/* Poster Modal */}
      {expandedCourse === 'smur-poster' && createPortal(
        <div
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/80 p-4 animate-fadeIn"
          onClick={() => setExpandedCourse(null)}
        >
          <div
            className="relative max-w-6xl w-auto h-auto max-h-[95vh] bg-white dark:bg-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end p-2 flex-none">
              <button
                onClick={() => setExpandedCourse(null)}
                className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-full transition-colors"
                aria-label="Close Poster"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            <div className="flex-1 min-h-0 flex items-center justify-center bg-slate-100 dark:bg-slate-900 rounded-xl overflow-hidden">
              <img
                src="SMUR_Poster.png"
                alt="SMUR Poster"
                className="max-w-full max-h-[85vh] object-contain"
              />
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
};

export default Teaching;
