import React, { useState } from 'react';
import { Factory, ShieldCheck, CheckCircle2, ChevronRight, ArrowRight } from 'lucide-react';
import { DETAILED_PROJECTS } from '../../data/prddData';

interface CaseStudiesSectionProps {
  onScrollToForm: () => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({ onScrollToForm }) => {
  const [activeTab, setActiveTab] = useState(0);

  // Selected marquee case studies with rich context
  const marqueeCases = [
    {
      client: 'Intel',
      sector: 'Semiconductor & Industrial Manufacturing',
      badge: 'High-Tech Manufacturing',
      challenge: 'High-purity industrial manufacturing processes require stringent process engineering, strict air quality controls, and zero chemical disruption to sensitive cleanroom environments.',
      solution: 'Provided specialized chemical process engineering and environmental solutions tailored to microelectronics manufacturing constraints and strict environmental compliance.',
      outcome: 'Validated industrial process reliability and environmental compliance in one of the most demanding clean manufacturing environments in the world.',
      technologies: ['Process Engineering', 'Environmental Solutions', 'Air Quality Abatement'],
    },
    {
      client: 'Sea Launch / Boeing',
      sector: 'Aerospace & Marine Operations',
      badge: 'Marine & Aerospace Engineering',
      challenge: 'Operating a specialized commercial rocket launch platform at sea required extreme environmental and chemical process reliability under high-salinity marine conditions.',
      solution: 'Engineered specialized marine process support, chemical containment systems, and materials engineering to withstand aggressive marine atmospheres during launch operations.',
      outcome: 'Ensured full chemical and environmental integrity during rigorous offshore aerospace missions with zero environmental release incidents.',
      technologies: ['Marine Process Engineering', 'Materials & Chemical Systems', 'Corrosion Resistance'],
    },
    {
      client: 'Orange County Sanitation District',
      sector: 'Municipal Water & Public Sanitation',
      badge: 'Municipal Infrastructure',
      challenge: 'One of the largest wastewater authorities in North America required advanced process evaluation for high-volume wastewater streams, odor abatement, and chemical efficiency.',
      solution: 'Conducted rigorous chemical process evaluation, mineral separation assessments, and treatment optimization to enhance municipal reclamation efficiency.',
      outcome: 'Delivered actionable technical pathways to lower chemical consumption and enhance municipal water reclamation protocols.',
      technologies: ['Water Treatment', 'Process Optimization', 'Mineral Separation'],
    },
    {
      client: 'Metro Biosolids Facility — San Diego',
      sector: 'Municipal Environmental Facility',
      badge: 'Biosolids & Air Quality',
      challenge: 'Large-scale biosolids processing generates complex combustion emissions, volatile organic compounds, and stringent air quality compliance mandates.',
      solution: 'Implemented specialized emissions abatement engineering and air quality control systems tailored to municipal biosolids combustion operations.',
      outcome: 'Successfully mitigated challenging combustion emission streams while maintaining continuous municipal facility operation.',
      technologies: ['Emissions Abatement', 'Environmental Systems', 'Combustion Air Quality'],
    },
  ];

  const currentCase = marqueeCases[activeTab];

  return (
    <section id="case-studies" className="py-20 sm:py-28 bg-[#091F35] border-b border-[#2F6F9F]/30 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-[#2F6F9F]/25">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#89B3D3] mb-3">
              <span className="w-2 h-0.5 bg-[#6D9F45]" />
              <span>FIELD-TESTED INDUSTRIAL RIGOR</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white [text-wrap:balance]">
              Proven in the Most Demanding Operating Environments
            </h2>
          </div>
          <p className="text-sm text-slate-300 max-w-md font-normal leading-relaxed">
            From semiconductor fabrication to offshore aerospace launch platforms and major municipal utility districts, CST chemical engineering is verified in the field.
          </p>
        </div>

        {/* Case Selector Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {marqueeCases.map((c, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveTab(idx)}
              className={`px-5 py-3 rounded-2xl text-xs font-sans font-bold whitespace-nowrap transition-all cursor-pointer ${
                activeTab === idx
                  ? 'bg-[#0084CD] text-white shadow-lg shadow-[#0084CD]/25 border border-[#38BDF8]'
                  : 'bg-[#0c263f] text-slate-300 hover:text-white border border-[#2F6F9F]/30 hover:border-[#2F6F9F]'
              }`}
            >
              <span>{c.client}</span>
              <span className="text-[10px] font-mono opacity-75 ml-2 font-normal hidden sm:inline">({c.badge})</span>
            </button>
          ))}
        </div>

        {/* Active Case Study Spotlight Card */}
        <div className="bg-[#0c263f] border border-[#2F6F9F]/40 rounded-3xl p-6 sm:p-10 shadow-2xl shadow-black/25">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-[#2F6F9F]/25 mb-8">
            <div>
              <span className="text-xs font-mono font-semibold text-[#89B3D3] uppercase tracking-wider block mb-1">
                {currentCase.sector}
              </span>
              <h3 className="font-display text-3xl sm:text-4xl font-bold text-white">
                {currentCase.client}
              </h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {currentCase.technologies.map((t, i) => (
                <span key={i} className="text-xs font-mono px-3 py-1 rounded-full bg-[#071B2D] border border-[#2F6F9F]/40 text-[#DCE8EF]">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-8">
            <div className="p-5 rounded-2xl bg-[#071B2D] border border-[#2F6F9F]/30 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-red-400 font-bold block mb-2">
                  01. The Challenge
                </span>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  {currentCase.challenge}
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#071B2D] border border-[#2F6F9F]/30 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#38BDF8] font-bold block mb-2">
                  02. CST Engineering Approach
                </span>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  {currentCase.solution}
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-gradient-to-br from-[#123A63] to-[#071B2D] border border-[#0084CD]/40 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#8AD156] font-bold block mb-2">
                  03. Verified Field Outcome
                </span>
                <p className="text-xs sm:text-sm text-white leading-relaxed font-sans font-medium">
                  {currentCase.outcome}
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-4 border-t border-[#2F6F9F]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-400">
              Need technical documentation or reference verification for similar industrial facilities?
            </div>
            <button
              type="button"
              onClick={onScrollToForm}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-sans font-bold uppercase tracking-wider text-white bg-[#0084CD] hover:bg-[#009EE3] transition-all cursor-pointer shadow-md"
            >
              <span>Discuss Similar Application</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
