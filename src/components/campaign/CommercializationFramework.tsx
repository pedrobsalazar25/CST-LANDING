import React from 'react';
import { ArrowRight, CheckCircle2, ChevronRight, Clock } from 'lucide-react';
import { APPROACH_STEPS, COMMERCIALIZATION_STEPS } from '../../data/prddData';

interface CommercializationFrameworkProps {
  onScrollToForm: () => void;
}

export const CommercializationFramework: React.FC<CommercializationFrameworkProps> = ({ onScrollToForm }) => {
  const steps = [
    {
      num: '01',
      title: 'Stream Characterization & Mass-Balance',
      timeframe: 'Weeks 1–2',
      summary: 'Analysis of your exact flue gas composition, temperature, particulate loading, or wastewater TDS to establish stoichiometric recovery potential.',
      deliverable: 'Customized Mass-Balance Model & Byproduct Revenue Forecast',
    },
    {
      num: '02',
      title: 'Laboratory Bench Kinetics Verification',
      timeframe: 'Weeks 3–6',
      summary: 'Bench-scale evaluation in Dr. Richardson’s dedicated research facility using your actual feedstock samples to confirm reaction rates and purity.',
      deliverable: 'Bench Validation Report & Product Assay (Purity % Certificate)',
    },
    {
      num: '03',
      title: 'Modular Skid-Mounted Pilot Deployment',
      timeframe: 'Months 2–4',
      summary: 'Fabrication and deployment of a self-contained slipstream pilot skid directly at your facility to prove continuous operation under plant fluctuations.',
      deliverable: 'On-Site Field Pilot Demonstration & Slipstream Operation Data',
    },
    {
      num: '04',
      title: 'Commercial Scale-Up, Build & Licensing',
      timeframe: 'Months 5+',
      summary: 'Turnkey fabrication oversight, EPC integration, and proprietary technology licensing with continuous engineering commissioning support.',
      deliverable: 'Full Commercial Plant Commissioning & Byproduct Offtake Support',
    },
  ];

  return (
    <section id="framework" className="py-20 sm:py-28 bg-[#071B2D] border-b border-[#2F6F9F]/25 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#89B3D3] mb-3">
            <span className="w-2 h-0.5 bg-[#6D9F45]" />
            <span>DE-RISKED INDUSTRIAL COMMERCIALIZATION</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 [text-wrap:balance]">
            From Initial Flue Gas Analysis to Commercial Scale Operation
          </h2>
          <p className="text-base text-slate-300 font-normal leading-relaxed">
            Our structured 4-phase framework eliminates technological and capital risk before any major capital deployment is committed.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-[#0c263f] border border-[#2F6F9F]/35 rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-xl shadow-black/20 hover:border-[#38BDF8]/60 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-display text-2xl font-bold text-[#38BDF8] tabular-nums">
                    {step.num}
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#071B2D] border border-[#2F6F9F]/40 text-[10px] font-mono text-[#DCE8EF]">
                    <Clock className="w-3 h-3 text-[#38BDF8]" />
                    <span>{step.timeframe}</span>
                  </span>
                </div>

                <h3 className="font-display text-lg font-bold text-white mb-2 group-hover:text-[#38BDF8] transition-colors">
                  {step.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed mb-6 font-normal">
                  {step.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-[#2F6F9F]/20">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#89B3D3] block mb-1">
                  Key Deliverable
                </span>
                <span className="text-xs font-medium text-slate-200 block">
                  {step.deliverable}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Callout Strip */}
        <div className="p-7 rounded-3xl bg-gradient-to-r from-[#103252] to-[#0c263f] border border-[#0084CD]/40 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="max-w-2xl">
            <h4 className="font-display text-xl font-bold text-white mb-1.5">
              Begin Phase 1 with Zero Upfront Capital Commitment
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Submit your stream parameters to initiate the confidential Phase 1 Mass-Balance &amp; Technical Feasibility Review.
            </p>
          </div>

          <button
            type="button"
            onClick={onScrollToForm}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs font-sans font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#0084CD] to-[#123A63] border border-[#009EE3]/40 hover:from-[#009EE3] hover:to-[#0084CD] shadow-lg shadow-[#0084CD]/30 transition-all cursor-pointer whitespace-nowrap"
          >
            <span>Start Phase 1 Feasibility</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
