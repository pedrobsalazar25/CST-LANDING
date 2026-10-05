import React, { useState } from 'react';
import { ChevronDown, ArrowRight, HelpCircle } from 'lucide-react';

interface CampaignFAQProps {
  onScrollToForm: () => void;
}

export const CampaignFAQ: React.FC<CampaignFAQProps> = ({ onScrollToForm }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'What flue gas CO₂ concentrations can CST systems accommodate?',
      a: 'CST patented processes operate efficiently across both low-concentration streams (3% to 8% CO₂ typical of natural gas turbines and industrial boilers) and high-concentration flue gases (15% to 30%+ CO₂ typical of cement kilns, lime calcination, and fermentation). Unlike conventional membranes or high-heat amine strippers that require massive pre-concentration, our wet-absorption reaction kinetics drive mineral conversion even at low partial pressures.',
    },
    {
      q: 'How does CST economics compare to geological Carbon Capture & Sequestration (CCS)?',
      a: 'Geological CCS is a perpetual cost center requiring pipeline transit, high-pressure compression (2,000+ psi), and long-term subterranean liability. CST carbon capture is a resource conversion process: it transforms captured carbon directly into saleable industrial chemicals—primarily Sodium Carbonate (soda ash) and Sodium Bicarbonate—generating immediate commodity revenue to offset or fully exceed system OPEX.',
    },
    {
      q: 'Can CST equipment be retrofitted into existing operating plants without shutdowns?',
      a: 'Yes. CST systems are engineered with modular skid-based architecture. For emissions, our units tie into existing ductwork downstream of standard baghouses or particulate collectors via an automated slipstream diverter. For water streams, modular reaction skids integrate directly upstream of existing discharge or permeate headers, allowing parallel commissioning with zero baseline plant interruption.',
    },
    {
      q: 'Who buys the recovered sodium carbonates, bicarbonates, and chemical byproducts?',
      a: 'Sodium carbonate (soda ash) and sodium bicarbonate are foundational industrial commodities with massive global markets. Major off-takers include glass manufacturing, detergent producers, municipal water treatment utilities (for pH adjustment), animal feed, and flue gas neutralization. In many instances, the host facility uses the recovered carbonates directly on-site to neutralize their own acid streams, cutting chemical purchasing costs.',
    },
    {
      q: 'What data is needed for the initial confidential feasibility evaluation?',
      a: 'To initiate Phase 1, we require basic operational stream data: volumetric flow rate (CFM for gas, GPM for water), approximate gas/effluent composition (% CO₂, NOx/SOx ppm, TDS/salinity for water), stream temperature, and your current abatement or disposal method. CST provides a standard mutual non-disclosure agreement (NDA) before detailed engineering data exchange.',
    },
    {
      q: 'Does CST provide turnkey equipment fabrication, or process licensing?',
      a: 'We offer flexible commercial engagement models tailored to client needs: (1) Turnkey modular skid design and build oversight for pilot and commercial demonstration units; (2) Technology licensing with complete engineering package, mass-balance blueprints, and commissioning support for EPC partners; and (3) Long-term technical support and process optimization agreements.',
    },
  ];

  return (
    <section id="faq" className="py-20 sm:py-28 bg-[#071B2D] border-b border-[#2F6F9F]/25 relative scroll-mt-20">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#89B3D3] mb-3">
            <span className="w-2 h-0.5 bg-[#6D9F45]" />
            <span>COMMONLY ASKED QUESTIONS</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 [text-wrap:balance]">
            Engineering &amp; Commercial Clarifications
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
            Direct technical answers to common questions about CST chemistry, integration timelines, and byproduct economics.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4 mb-12">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#0c263f] border border-[#2F6F9F]/35 rounded-2xl overflow-hidden transition-all duration-200 shadow-md"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#123A63]/30 transition-colors"
                >
                  <span className="font-display text-base sm:text-lg font-bold text-white pr-2">
                    {faq.q}
                  </span>
                  <span
                    className={`w-8 h-8 rounded-full bg-[#071B2D] border border-[#2F6F9F]/40 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#0084CD] text-white border-[#0084CD]' : 'text-slate-300'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-slate-300 leading-relaxed border-t border-[#2F6F9F]/20 font-sans">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Have a different question banner */}
        <div className="p-6 rounded-2xl bg-[#0c263f]/60 border border-[#2F6F9F]/30 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs sm:text-sm text-slate-300 text-left">
            Have a specialized emission composition or unique effluent stream?
          </div>
          <button
            type="button"
            onClick={onScrollToForm}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-sans font-bold uppercase tracking-wider text-white bg-[#0084CD] hover:bg-[#009EE3] transition-all cursor-pointer whitespace-nowrap"
          >
            <span>Ask Engineering Directly</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
