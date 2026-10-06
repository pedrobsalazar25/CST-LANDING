import React, { useEffect } from 'react';
import { ShieldCheck, Clock, FileText } from 'lucide-react';

export interface FormPrefillData {
  industry?: string;
  streamFocus?: string;
  estimatedVolume?: string;
}

interface MockContactFormSectionProps {
  prefillData?: FormPrefillData;
  onClearPrefill?: () => void;
}

export const MockContactFormSection: React.FC<MockContactFormSectionProps> = ({
  prefillData,
}) => {
  // Dynamically load LeadConnector form embed script
  useEffect(() => {
    const scriptId = 'leadconnector-form-embed-js';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://link.msgsndr.com/js/form_embed.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section 
      id="contact-form" 
      className="relative py-16 sm:py-24 bg-white text-slate-900 border-y border-slate-200 scroll-mt-20 overflow-hidden shadow-inner"
    >
      {/* Anchor for backward-compatible links */}
      <div id="assessment-form" className="absolute -top-20" />

      {/* Subtle clean tech grid pattern in light slate */}
      <div className="absolute inset-0 tech-grid-pattern-light opacity-60 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-300 text-xs font-mono font-semibold uppercase tracking-wider text-[#123A63] mb-4">
            <span className="w-2 h-2 rounded-full bg-[#6D9F45] shadow-[0_0_6px_#6D9F45]" />
            <span>CONTACT FORM</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#071B2D] mb-4 [text-wrap:balance]">
            Contact CST &amp; Request a Stream Assessment
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Fill out the form below to receive a confidential mass-balance review, byproduct yield forecast, and pilot integration timeline from CST engineering.
          </p>
        </div>

        {/* Centered Contact Form Card with White Background */}
        <div className="max-w-2xl sm:max-w-3xl mx-auto bg-white rounded-3xl border border-slate-200 shadow-2xl shadow-slate-300/60 p-4 sm:p-8 relative min-h-[820px]">
          <iframe
            src="https://api.leadconnectorhq.com/widget/form/1W0lQoSzJaQikCvv6gwJ"
            style={{ width: '100%', height: '100%', minHeight: '800px', border: 'none', borderRadius: '8px' }}
            id="inline-1W0lQoSzJaQikCvv6gwJ" 
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="CST - Contact Form"
            data-height="800"
            data-layout-iframe-id="inline-1W0lQoSzJaQikCvv6gwJ"
            data-form-id="1W0lQoSzJaQikCvv6gwJ"
            data-cookie-consent="true"
            data-cookie-consent-provider="auto"
            title="CST - Contact Form"
          />

          {/* Trust & Guarantee Strip */}
          <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-center gap-4 text-[11px] text-slate-500 mt-4">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#6D9F45]" />
              <span>100% Confidential / Mutual NDA</span>
            </div>
            <span>·</span>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#0084CD]" />
              <span>Direct Technical Review Guarantee</span>
            </div>
            <span>·</span>
            <div className="flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5 text-slate-400" />
              <span>Dr. Robert Richardson Oversight</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

// Also export CampaignContactForm alias for compatibility
export const CampaignContactForm = MockContactFormSection;
