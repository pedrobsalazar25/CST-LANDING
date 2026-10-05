import React from 'react';
import { ArrowRight, ShieldCheck, FileCheck, Phone } from 'lucide-react';
import { PRDD_IMAGES } from '../../data/prddData';
import { PrddImage } from '../PrddImage';

interface CampaignFinalCTAProps {
  onScrollToForm: () => void;
}

export const CampaignFinalCTA: React.FC<CampaignFinalCTAProps> = ({ onScrollToForm }) => {
  return (
    <section className="relative py-20 sm:py-28 bg-[#071B2D] text-white overflow-hidden border-t border-[#2F6F9F]/30">
      {/* Background Graphic with Scrim */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <PrddImage
          src={PRDD_IMAGES.finalCta}
          alt="Clean Scrub Technologies Industrial Implementation Facility"
          className="w-full h-full object-cover object-center filter brightness-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071B2D] via-[#071B2D]/90 to-[#071B2D]/80" />
        <div className="absolute inset-0 tech-grid-pattern opacity-30" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center">
        
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#89B3D3] mb-4">
          <span className="w-2 h-0.5 bg-[#6D9F45]" />
          <span>START YOUR TECHNICAL STREAM EVALUATION</span>
        </div>

        <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 [text-wrap:balance]">
          Stop Treating Emissions as an Expense.<br />
          <span className="text-[#38BDF8]">Start Converting Them to Revenue.</span>
        </h2>

        <p className="text-base sm:text-xl text-slate-200 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          Get a complimentary mass-balance calculation, byproduct yield model, and commercial feasibility review from Dr. Robert Richardson and our chemical engineering team.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={onScrollToForm}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-xs sm:text-sm font-sans font-bold tracking-wider uppercase text-white bg-gradient-to-r from-[#0084CD] to-[#123A63] border border-[#009EE3]/40 hover:from-[#009EE3] hover:to-[#0084CD] rounded-full shadow-2xl shadow-[#0084CD]/35 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
          >
            <span>Request Facility Assessment</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="tel:8585550192"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 text-xs sm:text-sm font-sans font-semibold tracking-wider uppercase text-[#DCE8EF] hover:text-white bg-[#0c263f]/80 hover:bg-[#123A63] border border-white/20 rounded-full transition-all cursor-pointer backdrop-blur-md"
          >
            <Phone className="w-4 h-4 text-[#38BDF8]" />
            <span>Call Technical Desk: (858) 555-0192</span>
          </a>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300 font-mono">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#6D9F45]" />
            <span>100% Confidential / Mutual NDA</span>
          </div>
          <div className="flex items-center gap-2">
            <FileCheck className="w-4 h-4 text-[#38BDF8]" />
            <span>Detailed Mass-Balance Deliverable</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#38BDF8]" />
            <span>24-Hour Business Response</span>
          </div>
        </div>

      </div>
    </section>
  );
};
