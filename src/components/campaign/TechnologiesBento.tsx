import React, { useState } from 'react';
import { ArrowRight, ChevronRight, Check, Layers, Flame, Droplets, Atom, X, ExternalLink } from 'lucide-react';
import { TECHNOLOGIES_DATA, TechnologyItem } from '../../data/prddData';
import { PrddImage } from '../PrddImage';

interface TechnologiesBentoProps {
  onSelectTechnologyForForm: (techId: string) => void;
  onNavigateToDetail?: (techId: string) => void;
}

export const TechnologiesBento: React.FC<TechnologiesBentoProps> = ({
  onSelectTechnologyForForm,
  onNavigateToDetail,
}) => {
  const [selectedTech, setSelectedTech] = useState<TechnologyItem | null>(null);

  const getTechIcon = (id: string) => {
    switch (id) {
      case 'co2-capture':
        return <Layers className="w-5 h-5 text-[#38BDF8]" />;
      case 'nox-sox':
        return <Flame className="w-5 h-5 text-[#38BDF8]" />;
      case 'water-treatment':
        return <Droplets className="w-5 h-5 text-[#38BDF8]" />;
      case 'advanced-materials':
      default:
        return <Atom className="w-5 h-5 text-[#38BDF8]" />;
    }
  };

  return (
    <section id="technologies" className="py-20 sm:py-28 bg-[#071B2D] border-b border-[#2F6F9F]/25 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 pb-6 border-b border-[#2F6F9F]/25">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#89B3D3] mb-3">
              <span className="w-2 h-0.5 bg-[#6D9F45]" />
              <span>CST PATENTED CHEMICAL PLATFORMS</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white [text-wrap:balance]">
              Four Engineered Processes.<br />
              <span className="text-[#89B3D3] font-light">Zero Unusable Waste Streams.</span>
            </h2>
          </div>
          <p className="text-sm text-slate-300 max-w-md font-normal leading-relaxed">
            Unlike conventional scrubbers that swap air pollution for toxic solid waste, CST technologies produce high-purity, saleable industrial chemicals and reusable water.
          </p>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8">
          {TECHNOLOGIES_DATA.map((tech, index) => {
            // Span 7 and 5 for row 1, 5 and 7 for row 2 to create an intentional asymmetric layout
            const colSpanClass = index === 0 
              ? 'lg:col-span-7' 
              : index === 1 
              ? 'lg:col-span-5' 
              : index === 2 
              ? 'lg:col-span-5' 
              : 'lg:col-span-7';

            return (
              <div
                key={tech.id}
                className={`${colSpanClass} bg-[#0c263f] border border-[#2F6F9F]/35 hover:border-[#0084CD] rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-xl shadow-black/20 hover:shadow-2xl hover:-translate-y-1 group relative overflow-hidden`}
              >
                {/* Tech Number Badge */}
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#123A63] border border-[#2F6F9F]/50 flex items-center justify-center shrink-0">
                      {getTechIcon(tech.id)}
                    </div>
                    <div>
                      <span className="text-[11px] font-mono font-bold tracking-wider text-[#89B3D3] block uppercase">
                        PLATFORM 0{index + 1}
                      </span>
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-white group-hover:text-[#38BDF8] transition-colors">
                        {tech.title}
                      </h3>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedTech(tech)}
                    className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-mono font-medium text-[#DCE8EF] bg-[#071B2D] border border-[#2F6F9F]/40 hover:border-[#38BDF8] hover:text-white transition-all cursor-pointer"
                  >
                    <span>Inspect Specs</span>
                    <ChevronRight className="w-3 h-3" />
                  </button>
                </div>

                {/* Image Showcase */}
                <div className="relative aspect-16/9 rounded-2xl overflow-hidden mb-6 bg-[#071B2D]">
                  <PrddImage
                    src={tech.image}
                    alt={tech.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c263f] via-transparent to-transparent opacity-60" />
                </div>

                {/* Summary & Outputs */}
                <div>
                  <p className="text-sm text-slate-300 leading-relaxed mb-5 font-normal">
                    {tech.summary}
                  </p>

                  <div className="pt-4 border-t border-[#2F6F9F]/20 mb-6">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#89B3D3] block mb-2.5">
                      Commercial End-Products
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {tech.commercialOutputs.map((output, idx) => (
                        <span
                          key={idx}
                          className="text-xs font-sans px-3 py-1 rounded-lg bg-[#071B2D] border border-[#2F6F9F]/40 text-[#DCE8EF] font-medium"
                        >
                          {output}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 border-t border-[#2F6F9F]/20 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => onSelectTechnologyForForm(tech.id)}
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs font-sans font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#0084CD] to-[#123A63] border border-[#009EE3]/40 hover:from-[#009EE3] hover:to-[#0084CD] transition-all cursor-pointer shadow-md"
                  >
                    <span>Request Assessment For This Tech</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedTech(tech)}
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-sans font-semibold text-slate-300 hover:text-white bg-[#071B2D]/80 border border-[#2F6F9F]/40 hover:border-[#38BDF8] transition-all cursor-pointer"
                  >
                    <span>View Chemical Pathway</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Tech Specifications Modal */}
      {selectedTech && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
          <div className="bg-[#0c263f] border border-[#2F6F9F]/60 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl text-white max-h-[90vh] overflow-y-auto">
            
            <div className="flex items-center justify-between border-b border-[#2F6F9F]/30 pb-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#123A63] border border-[#2F6F9F]/60 flex items-center justify-center">
                  {getTechIcon(selectedTech.id)}
                </div>
                <div>
                  <span className="text-[11px] font-mono text-[#89B3D3] uppercase tracking-wider block">
                    CST TECHNICAL SPECIFICATION
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                    {selectedTech.title}
                  </h3>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setSelectedTech(null)}
                className="w-9 h-9 rounded-full bg-[#071B2D] border border-[#2F6F9F]/40 hover:border-white text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-6 text-sm text-slate-200">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#38BDF8] mb-1.5">
                  Chemical Reaction Pathway
                </h4>
                <p className="bg-[#071B2D] p-4 rounded-xl border border-[#2F6F9F]/30 text-slate-300 leading-relaxed font-sans">
                  {selectedTech.chemicalPathway}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-[#071B2D] p-4 rounded-xl border border-[#2F6F9F]/30">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#38BDF8] mb-1.5">
                    Industrial Feedstocks
                  </h4>
                  <p className="text-xs text-slate-300">
                    {selectedTech.industrialFeedstock}
                  </p>
                </div>

                <div className="bg-[#071B2D] p-4 rounded-xl border border-[#2F6F9F]/30">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#38BDF8] mb-1.5">
                    Equipment Focus
                  </h4>
                  <p className="text-xs text-slate-300">
                    {selectedTech.equipmentFocus}
                  </p>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#38BDF8] mb-2">
                  Key Engineering Highlights
                </h4>
                <ul className="space-y-2">
                  {selectedTech.keyHighlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <Check className="w-4 h-4 text-[#6D9F45] shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-[#2F6F9F]/30 flex flex-col sm:flex-row items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => {
                    const techId = selectedTech.id;
                    setSelectedTech(null);
                    onSelectTechnologyForForm(techId);
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-sans font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#0084CD] to-[#123A63] border border-[#009EE3]/40 hover:from-[#009EE3] hover:to-[#0084CD] shadow-lg cursor-pointer"
                >
                  <span>Select For Feasibility Review</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                {onNavigateToDetail && (
                  <button
                    type="button"
                    onClick={() => {
                      const techId = selectedTech.id;
                      setSelectedTech(null);
                      onNavigateToDetail(techId);
                    }}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs font-sans font-medium text-slate-300 hover:text-white bg-[#071B2D] border border-[#2F6F9F]/40 cursor-pointer"
                  >
                    <span>Full Specification Page</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
