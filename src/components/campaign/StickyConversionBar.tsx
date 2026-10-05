import React, { useState, useEffect } from 'react';
import { ArrowUp, FileText, ArrowRight } from 'lucide-react';

interface StickyConversionBarProps {
  onScrollToForm: () => void;
}

export const StickyConversionBar: React.FC<StickyConversionBarProps> = ({ onScrollToForm }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled down past 600px
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <aside 
      aria-label="Quick Action Navigation"
      className="fixed bottom-0 inset-x-0 z-40 bg-[#071B2D]/95 backdrop-blur-md border-t border-[#2F6F9F]/40 shadow-2xl py-2.5 sm:py-3 transition-transform duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between gap-4">
        
        {/* Left: Quick Pitch */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex w-8 h-8 rounded-lg bg-[#123A63] border border-[#2F6F9F]/50 items-center justify-center text-[#38BDF8]">
            <FileText className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs sm:text-sm font-display font-bold text-white tracking-tight">
              CST Facility Feasibility Assessment
            </div>
            <div className="hidden md:block text-[11px] text-slate-300">
              Get an initial mass-balance model &amp; byproduct forecast within 24 hours.
            </div>
          </div>
        </div>

        {/* Right: Quick Action Button */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onScrollToForm}
            className="inline-flex items-center gap-2 px-5 py-2 sm:py-2.5 rounded-full text-xs font-sans font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#0084CD] to-[#123A63] border border-[#009EE3]/40 hover:from-[#009EE3] hover:to-[#0084CD] shadow-lg shadow-[#0084CD]/25 transition-all cursor-pointer whitespace-nowrap active:scale-98"
          >
            <span>Request Assessment</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </aside>
  );
};
