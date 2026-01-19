
import React from 'react';

const About: React.FC = () => {
  const interests = ['Machine Learning', 'Environmental Analysis', 'Sustainable Design', 'CFD', 'Bioclimatic Design', 'Cultural Heritage'];

  return (
    <div>
      <h2 className="text-xs uppercase tracking-widest font-bold text-accent-light dark:text-accent-dark mb-6">
        01 / About
      </h2>
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6 text-lg text-slate-600 dark:text-slate-300 leading-relaxed text-justify">
          <p>
            Dr. Ilker Karadag is an Associate Professor of Architecture whose research lies at the intersection of machine learning, environmental analysis, and sustainable design. His work explores predictive models for airflow and microclimatic behavior, the integration of computational simulations with empirical data, and the application of these methods to bioclimatic design and cultural heritage contexts.
          </p>
          <p>
            He holds a 2023 patent for a novel wind-analysis apparatus that enables accessible physical visualization of airflow around architectural models. In 2025, he was recognized in Stanford University’s global citation-impact rankings for his contributions to environmental simulation and architectural research.
          </p>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-4">Core Interests</h3>
            <div className="flex flex-wrap gap-2">
              {interests.map(interest => (
                <span
                  key={interest}
                  className="px-4 py-1.5 rounded-full bg-slate-100 dark:bg-slate-900 text-sm font-medium border border-transparent dark:border-slate-800"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-100/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800">
            <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-2">Currently Focus</h3>
            <p className="text-slate-500 dark:text-slate-400 italic text-sm">
              Exploring predictive models for airflow and microclimatic behavior to enhance bioclimatic design and cultural heritage preservation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
