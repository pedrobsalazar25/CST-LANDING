import React from 'react';
import { ShieldCheck, Award, Factory, Droplets } from 'lucide-react';
import { SELECTED_PROJECTS } from '../../data/prddData';

export const TrustMetricsBar: React.FC = () => {
  return (
    <section className="py-14 sm:py-18 bg-[#071B2D] border-b border-[#2F6F9F]/25 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Metric Counter Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 pb-12 border-b border-[#2F6F9F]/20 text-center">
          <div className="p-4 rounded-2xl bg-[#0c263f]/50 border border-[#2F6F9F]/30 backdrop-blur-sm">
            <div className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tabular-nums mb-1 text-transparent bg-clip-text bg-gradient-to-r from-white via-[#DCE8EF] to-[#89B3D3]">
              4
            </div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#38BDF8] mb-1">
              Patented Chemical Platforms
            </div>
            <div className="text-[11px] text-slate-400">
              Proprietary conversion &amp; abatement chemistries
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#0c263f]/50 border border-[#2F6F9F]/30 backdrop-blur-sm">
            <div className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tabular-nums mb-1 text-transparent bg-clip-text bg-gradient-to-r from-white via-[#DCE8EF] to-[#89B3D3]">
              100%
            </div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#38BDF8] mb-1">
              Useful Commercial Byproducts
            </div>
            <div className="text-[11px] text-slate-400">
              Carbonates, acids &amp; reclaimed water (0 hazardous sludge)
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#0c263f]/50 border border-[#2F6F9F]/30 backdrop-blur-sm">
            <div className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tabular-nums mb-1 text-transparent bg-clip-text bg-gradient-to-r from-white via-[#DCE8EF] to-[#89B3D3]">
              8+
            </div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#38BDF8] mb-1">
              Verified Major Facilities
            </div>
            <div className="text-[11px] text-slate-400">
              Intel, Boeing / Sea Launch, Municipal Sanitation
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#0c263f]/50 border border-[#2F6F9F]/30 backdrop-blur-sm">
            <div className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tabular-nums mb-1 text-transparent bg-clip-text bg-gradient-to-r from-white via-[#DCE8EF] to-[#89B3D3]">
              20+
            </div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#38BDF8] mb-1">
              Years Process Engineering
            </div>
            <div className="text-[11px] text-slate-400">
              Ph.D. Chemist &amp; Licensed General Contractor led
            </div>
          </div>
        </div>

        {/* Industrial Client & Authority Trust Bar */}
        <div className="pt-10">
          <div className="text-center mb-7">
            <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-[#89B3D3]">
              PROVEN PROCESS ENGINEERING &amp; EVALUATION EXPERIENCE
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4 items-center">
            {SELECTED_PROJECTS.map((project, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-[#0c263f]/70 border border-[#2F6F9F]/30 text-center flex flex-col justify-center min-h-[72px] hover:border-[#38BDF8]/60 transition-colors"
              >
                <span className="font-display text-xs font-bold text-white tracking-wide block truncate">
                  {project.name}
                </span>
                <span className="text-[10px] text-slate-400 font-sans truncate mt-0.5">
                  {project.sector}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
