
import React, { useState } from 'react';
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
              <a
                href="https://vip-smur.github.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-xs font-bold uppercase tracking-wider border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
              >
                Visit Course Site
              </a>
            </div>

            <p className="text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
              A Vertically Integrated Project (VIP) exploring the use of machine learning surrogates to accelerate urban design regeneration processes.
              Students learn to build predictive models that analyze environmental performance in real-time.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Teaching;
