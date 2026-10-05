import React from 'react';
import { Check, X, ShieldAlert, Sparkles, ArrowRight } from 'lucide-react';

interface ComparisonSectionProps {
  onScrollToForm: () => void;
}

export const ComparisonSection: React.FC<ComparisonSectionProps> = ({ onScrollToForm }) => {
  const comparisonItems = [
    {
      feature: 'Economic Model',
      traditional: 'Pure cost center; high recurring solvent replenishment & disposal fees',
      cst: 'Net-positive resource recovery; generates saleable carbonates & industrial acids',
    },
    {
      feature: 'Byproduct & Waste',
      traditional: 'Toxic spent amine sludges, contaminated gypsum, hazardous landfill burden',
      cst: '100% commercial-grade Sodium Carbonate, Bicarbonate, or geopolymer binder',
    },
    {
      feature: 'Thermal Energy Penalty',
      traditional: 'Severe parasitic heat penalty (2.5–3.5 GJ/ton CO₂ for solvent stripping)',
      cst: 'Low-enthalpy chemical absorption operating near ambient temperatures',
    },
    {
      feature: 'Equipment Footprint',
      traditional: 'Massive vertical stripper/absorber columns requiring major civil foundations',
      cst: 'Modular, skid-mountable reactor configurations that retrofit existing ductwork',
    },
    {
      feature: 'Water Management',
      traditional: 'Massive evaporative water consumption in cooling towers and wash stages',
      cst: 'Closed-loop water conservation with integrated desalination & reclamation',
    },
    {
      feature: 'Environmental Liability',
      traditional: 'Persistent amine aerosol emissions (nitrosamines) and landfill monitoring',
      cst: 'Benign mineral chemistry with zero hazardous liquid or solid discharge',
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#071B2D] border-b border-[#2F6F9F]/25 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#89B3D3] mb-3">
            <span className="w-2 h-0.5 bg-[#6D9F45]" />
            <span>DIRECT TECHNOLOGY COMPARISON</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 [text-wrap:balance]">
            Why Heavy Industry Is Replacing Traditional Scrubbers with CST
          </h2>
          <p className="text-base text-slate-300 font-normal leading-relaxed">
            Conventional pollution control treats emissions as a waste disposal burden. Clean Scrub Technologies re-engineers the entire equation into a chemical manufacturing asset.
          </p>
        </div>

        {/* Comparison Table / Cards */}
        <div className="bg-[#0c263f] border border-[#2F6F9F]/35 rounded-3xl overflow-hidden shadow-2xl shadow-black/25">
          <div className="grid grid-cols-1 md:grid-cols-12 border-b border-[#2F6F9F]/30 bg-[#103252]/60 p-4 sm:p-6 text-xs font-mono uppercase tracking-wider text-slate-300">
            <div className="md:col-span-4 font-semibold text-[#89B3D3]">Parameter / Engineering Metric</div>
            <div className="hidden md:block md:col-span-4 text-slate-400">Traditional Scrubbers &amp; Amine Systems</div>
            <div className="hidden md:block md:col-span-4 text-[#38BDF8] font-bold">CST Patented Chemical Conversion</div>
          </div>

          <div className="divide-y divide-[#2F6F9F]/20">
            {comparisonItems.map((item, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 md:grid-cols-12 p-5 sm:p-6 gap-3 md:gap-4 items-center hover:bg-[#091F35]/50 transition-colors"
              >
                {/* Metric Title */}
                <div className="md:col-span-4 font-display font-bold text-white text-sm">
                  {item.feature}
                </div>

                {/* Traditional Scrubbers */}
                <div className="md:col-span-4 flex items-start gap-2.5 text-xs text-slate-400 bg-[#071B2D]/50 md:bg-transparent p-3 md:p-0 rounded-xl">
                  <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="md:hidden font-mono uppercase text-[10px] text-red-400 block mb-1">
                      Traditional Approach:
                    </span>
                    <span>{item.traditional}</span>
                  </div>
                </div>

                {/* CST Closed Loop */}
                <div className="md:col-span-4 flex items-start gap-2.5 text-xs text-white font-medium bg-[#123A63]/40 md:bg-transparent p-3 md:p-0 rounded-xl border border-[#0084CD]/30 md:border-0">
                  <Check className="w-4 h-4 text-[#8AD156] shrink-0 mt-0.5" />
                  <div>
                    <span className="md:hidden font-mono uppercase text-[10px] text-[#38BDF8] block mb-1">
                      CST Patented Process:
                    </span>
                    <span className="text-slate-100">{item.cst}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Callout in Table */}
          <div className="p-6 bg-gradient-to-r from-[#123A63] to-[#071B2D] border-t border-[#2F6F9F]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-[#38BDF8] shrink-0" />
              <span className="text-xs sm:text-sm text-slate-200">
                Ready to evaluate CST retrofit economics for your exact flue gas or water stream?
              </span>
            </div>

            <button
              type="button"
              onClick={onScrollToForm}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-sans font-bold uppercase tracking-wider text-white bg-[#0084CD] hover:bg-[#009EE3] transition-all cursor-pointer whitespace-nowrap shadow-md"
            >
              <span>Get Stream Comparison</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
