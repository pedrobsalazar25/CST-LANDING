import React from 'react';
import { ShieldCheck, Award, ArrowRight, Quote } from 'lucide-react';
import { FOUNDER_DATA } from '../../data/prddData';
import { PrddImage } from '../PrddImage';

interface FounderCredibilityProps {
  onScrollToForm: () => void;
  onViewFounderBio?: () => void;
}

export const FounderCredibility: React.FC<FounderCredibilityProps> = ({
  onScrollToForm,
  onViewFounderBio,
}) => {
  return (
    <section id="founder" className="py-20 sm:py-28 bg-[#091F35] border-b border-[#2F6F9F]/30 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Portrait Column */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative aspect-4/5 rounded-3xl overflow-hidden bg-[#071B2D] border border-[#2F6F9F]/50 shadow-2xl shadow-black/40">
                <PrddImage
                  src={FOUNDER_DATA.image}
                  alt={FOUNDER_DATA.name}
                  priority
                  className="w-full h-full object-cover object-top filter brightness-95 contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#091F35] via-transparent to-transparent opacity-80" />
                
                {/* Credentials Badge on Photo */}
                <div className="absolute bottom-6 inset-x-6 p-4 rounded-2xl bg-[#071B2D]/90 backdrop-blur-md border border-[#2F6F9F]/50 shadow-lg">
                  <h4 className="font-display text-lg font-bold text-white">
                    {FOUNDER_DATA.name}
                  </h4>
                  <p className="text-xs font-mono text-[#38BDF8] mt-0.5">
                    Ph.D. Chemist · Licensed General Contractor · Inventor
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bio & Practical Engineering Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#89B3D3]">
              <span className="w-2 h-0.5 bg-[#6D9F45]" />
              <span>TECHNICAL LEADERSHIP &amp; RIGOR</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white [text-wrap:balance]">
              Where Doctorate Chemistry Meets Heavy Plant Construction
            </h2>

            <div className="relative pl-6 border-l-2 border-[#0084CD] py-1 my-4">
              <p className="text-sm sm:text-base text-slate-200 italic leading-relaxed">
                "{FOUNDER_DATA.philosophy}"
              </p>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed font-normal">
              Most environmental clean-tech startups fail at the transition between laboratory bench testing and physical plant deployment. As both a <strong>Ph.D. chemist</strong> and a <strong>licensed general contractor</strong>, Dr. Robert Richardson bridges this critical divide.
            </p>

            <p className="text-sm text-slate-300 leading-relaxed font-normal">
              Dr. Richardson maintains a dedicated research and process development laboratory focused on practical technologies for emissions capture, water desalination, and geopolymer materials engineering—ensuring every reaction mechanism is constructable and profitable in actual field conditions.
            </p>

            {/* Credential Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {FOUNDER_DATA.credentials.map((cred, idx) => (
                <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-[#0c263f] border border-[#2F6F9F]/30 text-xs text-white">
                  <ShieldCheck className="w-4 h-4 text-[#8AD156] shrink-0" />
                  <span className="font-medium">{cred}</span>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                type="button"
                onClick={onScrollToForm}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-xs font-sans font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#0084CD] to-[#123A63] border border-[#009EE3]/40 hover:from-[#009EE3] hover:to-[#0084CD] shadow-lg shadow-[#0084CD]/25 transition-all cursor-pointer"
              >
                <span>Request Technical Review with Dr. Richardson</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {onViewFounderBio && (
                <button
                  type="button"
                  onClick={onViewFounderBio}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs font-sans font-semibold text-slate-300 hover:text-white bg-[#071B2D] border border-[#2F6F9F]/40 hover:border-[#38BDF8] transition-all cursor-pointer"
                >
                  <span>Read Full Background</span>
                </button>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
