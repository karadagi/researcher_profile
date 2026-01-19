
import React, { useState } from 'react';
import { PUBLICATIONS } from '../constants';

const Research: React.FC = () => {
  const [expandedItems, setExpandedItems] = useState<{ [key: string]: { abs: boolean; bib: boolean } }>({});

  const toggleSection = (id: string, section: 'abs' | 'bib') => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: {
        ...prev[id],
        [section]: !prev[id]?.[section]
      }
    }));
  };

  return (
    <div>
      <h2 className="text-xs uppercase tracking-widest font-bold text-accent-light dark:text-accent-dark mb-10">
        02 / Research
      </h2>

      <div className="space-y-12">
        {PUBLICATIONS.map((pub) => (
          <div key={pub.id} className="group flex flex-col md:flex-row gap-8 items-start">
            {/* Icon Graphic Label */}
            <div className="w-full md:w-32 flex-shrink-0 flex flex-col items-center justify-center">
              <div className="w-24 h-24 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 rounded-2xl flex items-center justify-center p-5 shadow-inner border border-slate-200 dark:border-slate-700 group-hover:scale-110 transition-transform duration-500">
                {/* Dynamic Icon based on ID or content */}
                {/* Dynamic Icon based on ID or content */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full text-blue-500 dark:text-blue-400 opacity-80 group-hover:opacity-100 transition-opacity">
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                  <polyline points="14 2 14 8 20 8" />
                  <path d="M16 13H8" />
                  <path d="M16 17H8" />
                  <path d="M10 9H8" />
                </svg>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 space-y-3">
              <h3 className="text-xl font-serif font-medium leading-tight group-hover:text-accent-light dark:group-hover:text-accent-dark transition-colors">
                {pub.title}
              </h3>

              {/* Authors */}
              <div className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {pub.authors.map((author, index) => (
                  <span key={index}>
                    <span className={`
                      ${author.isMe ? 'font-bold text-slate-900 dark:text-slate-100 underline decoration-dotted decoration-slate-400' : ''}
                      ${author.isCollaborator ? 'text-accent-light dark:text-accent-dark' : ''}
                    `}>
                      {author.name}
                    </span>
                    {index < pub.authors.length - 1 && ', '}
                  </span>
                ))}
              </div>

              {/* Venue & Date */}
              <div className="text-sm italic text-slate-500 dark:text-slate-500 font-serif">
                {pub.venue}, {pub.month} {pub.year}
              </div>

              {/* Actions & Stats */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <div className="flex gap-2">
                  <button
                    onClick={() => toggleSection(pub.id, 'abs')}
                    className={`px-3 py-1 text-[10px] font-bold tracking-wider uppercase border rounded transition-colors ${expandedItems[pub.id]?.abs
                      ? 'border-accent-light dark:border-accent-dark text-accent-light dark:text-accent-dark bg-slate-50 dark:bg-slate-900'
                      : 'border-slate-300 dark:border-slate-700 hover:border-accent-light dark:hover:border-accent-dark hover:text-accent-light dark:hover:text-accent-dark'
                      }`}
                  >
                    ABS
                  </button>
                  <button
                    onClick={() => toggleSection(pub.id, 'bib')}
                    className={`px-3 py-1 text-[10px] font-bold tracking-wider uppercase border rounded transition-colors ${expandedItems[pub.id]?.bib
                      ? 'border-accent-light dark:border-accent-dark text-accent-light dark:text-accent-dark bg-slate-50 dark:bg-slate-900'
                      : 'border-slate-300 dark:border-slate-700 hover:border-accent-light dark:hover:border-accent-dark hover:text-accent-light dark:hover:text-accent-dark'
                      }`}
                  >
                    BIB
                  </button>
                  {pub.links.pdf && (
                    <a
                      href={pub.links.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 text-[10px] font-bold tracking-wider uppercase border border-slate-300 dark:border-slate-700 rounded hover:border-accent-light dark:hover:border-accent-dark hover:text-accent-light dark:hover:text-accent-dark transition-colors"
                    >
                      PDF
                    </a>
                  )}
                </div>

                {/* Scholar Badge */}
                <div className="flex items-center gap-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 py-1 rounded text-xs font-medium">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 9a8 8 0 0 1 7.162 4.44L24 9.5z" />
                  </svg>
                  <span>scholar</span>
                  <span className="bg-white dark:bg-slate-900 px-1.5 rounded-sm ml-1 text-[10px] shadow-sm">
                    {pub.citations}
                  </span>
                </div>
              </div>

              {/* Expandable Sections */}
              {(expandedItems[pub.id]?.abs || expandedItems[pub.id]?.bib) && (
                <div className="mt-4 space-y-4">
                  {expandedItems[pub.id]?.abs && (
                    <div className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded text-sm leading-relaxed text-slate-600 dark:text-slate-300 border border-slate-100 dark:border-slate-800 animate-fadeIn">
                      <h4 className="text-xs font-bold uppercase text-slate-400 mb-2">Abstract</h4>
                      {pub.abstract}
                    </div>
                  )}
                  {expandedItems[pub.id]?.bib && (
                    <div className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded text-xs font-mono overflow-x-auto text-slate-600 dark:text-slate-300 border border-slate-100 dark:border-slate-800 animate-fadeIn">
                      <h4 className="text-xs font-bold uppercase text-slate-400 mb-2 font-sans">BibTeX</h4>
                      <pre className="whitespace-pre-wrap">{pub.bibtex}</pre>
                    </div>
                  )}
                </div>
              )}

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Research;
