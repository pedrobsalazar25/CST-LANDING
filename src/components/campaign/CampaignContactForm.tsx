import React, { useState, useEffect } from 'react';
import { 
  Send, 
  CheckCircle2, 
  Download, 
  ShieldCheck, 
  Clock, 
  AlertCircle, 
  RefreshCw,
  Sparkles,
  FileText
} from 'lucide-react';

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
  onClearPrefill
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    phone: '',
    inquiryType: prefillData?.streamFocus || 'Feasibility Assessment',
    facilityType: prefillData?.industry || 'Power Generation / Utilities',
    estimatedVolume: prefillData?.estimatedVolume || '',
    preferredContact: 'Email' as 'Email' | 'Phone',
    message: '',
    sendWhitepaper: true,
  });

  // Sync when prefillData arrives from the calculator or tech bento
  useEffect(() => {
    if (prefillData) {
      setFormData(prev => ({
        ...prev,
        inquiryType: prefillData.streamFocus || prev.inquiryType,
        facilityType: prefillData.industry || prev.facilityType,
        estimatedVolume: prefillData.estimatedVolume || prev.estimatedVolume,
        message: prefillData.estimatedVolume 
          ? `Estimated daily volume from calculator: ${prefillData.estimatedVolume}. Looking for chemical byproduct recovery model.`
          : prev.message
      }));
    }
  }, [prefillData]);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Business work email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid work email address';
    }
    if (!formData.company.trim()) newErrors.company = 'Company or facility name is required';
    if (!formData.message.trim()) newErrors.message = 'Please provide brief stream details or project challenge';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate server submission
    setTimeout(() => {
      const generatedId = `CST-REQ-${Math.floor(100000 + Math.random() * 900000)}`;
      setReferenceId(generatedId);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 750);
  };

  const handleDownloadBrief = () => {
    const content = `===============================================================
CLEAN SCRUB TECHNOLOGIES (CST) — MOCK INQUIRY CONFIRMATION
Reference Number: ${referenceId}
Date: ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
Submitted By: ${formData.fullName} (${formData.company})
===============================================================

INQUIRY DETAILS:
- Contact Email: ${formData.email}
- Contact Phone: ${formData.phone || 'Not provided'}
- Preferred Contact: ${formData.preferredContact}
- Primary Inquiry Type: ${formData.inquiryType}
- Facility Sector: ${formData.facilityType}
- Estimated Feedstock Volume: ${formData.estimatedVolume || 'Standard Commercial Train'}
- Project / Stream Details: ${formData.message}

COMMERCIAL PROCESS HIGHLIGHTS:
1. CO2 Capture & Carbonates:
   Converts flue-gas CO2 into sodium carbonate (Na2CO3) and sodium bicarbonate (NaHCO3).
2. NOx & SOx Multi-Pollutant Abatement:
   Simultaneous removal of acid gases without hazardous spent solvent or toxic sludges.
3. Advanced Water & Desalination:
   Low-enthalpy separation of difficult high-TDS effluents and industrial brine.

RESPONSE STATUS:
Your message has been assigned to Dr. Robert Richardson and our 
process engineering desk. Guaranteed review within 24 business hours.

CONTACT:
Clean Scrub Technologies
Engineering Desk: solutions@cleanscrubtech.com
Main Technical Desk: +1 (858) 555-0192
===============================================================`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `CST_Inquiry_Confirmation_${referenceId}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setReferenceId('');
    setFormData({
      fullName: '',
      email: '',
      company: '',
      phone: '',
      inquiryType: 'Feasibility Assessment',
      facilityType: 'Power Generation / Utilities',
      estimatedVolume: '',
      preferredContact: 'Email',
      message: '',
      sendWhitepaper: true,
    });
    setErrors({});
    if (onClearPrefill) onClearPrefill();
  };

  return (
    <section 
      id="contact-form" 
      className="relative py-16 sm:py-24 bg-white text-slate-900 border-y border-slate-200 scroll-mt-20 overflow-hidden shadow-inner"
    >
      {/* Anchor for backward-compatible links */}
      <div id="assessment-form" className="absolute -top-20" />

      {/* Subtle clean tech grid pattern in light slate */}
      <div className="absolute inset-0 tech-grid-pattern-light opacity-60 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8">
        
        {/* Centered Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-300 text-xs font-mono font-semibold uppercase tracking-wider text-[#123A63] mb-4">
            <span className="w-2 h-2 rounded-full bg-[#6D9F45] shadow-[0_0_6px_#6D9F45]" />
            <span>MOCK CONTACT FORM</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#071B2D] mb-4 [text-wrap:balance]">
            Contact Us &amp; Request a Stream Assessment
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Fill out the form below to receive a confidential mass-balance review, byproduct yield forecast, and pilot integration timeline from CST engineering.
          </p>

          {prefillData?.estimatedVolume && (
            <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-sky-50 border border-sky-200 text-xs font-mono text-[#0084CD]">
              <Sparkles className="w-3.5 h-3.5 text-[#0084CD]" />
              <span>Loaded parameters from Calculator: <strong>{prefillData.estimatedVolume}</strong></span>
            </div>
          )}
        </div>

        {/* Centered Contact Form Card with White Background */}
        <div className="max-w-2xl mx-auto bg-white rounded-3xl border border-slate-200 shadow-2xl shadow-slate-300/60 p-6 sm:p-10 relative">
          
          {isSubmitted ? (
            /* Success State */
            <div className="py-6 sm:py-8 text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center mx-auto text-[#6D9F45]">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-mono font-bold uppercase tracking-wider mb-2">
                  Inquiry Submitted Successfully
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#071B2D]">
                  Thank You, {formData.fullName.split(' ')[0]}
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto mt-2 leading-relaxed">
                  Your mock inquiry has been recorded under Reference ID{' '}
                  <strong className="text-[#071B2D] font-mono">#{referenceId}</strong>. Dr. Richardson's team has been notified.
                </p>
              </div>

              {/* Summary Card */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-left text-xs space-y-2.5 max-w-md mx-auto">
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Reference:</span>
                  <span className="text-[#071B2D] font-mono font-bold">#{referenceId}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Company:</span>
                  <span className="text-[#071B2D] font-medium">{formData.company}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Topic:</span>
                  <span className="text-[#071B2D] font-medium">{formData.inquiryType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Response Method:</span>
                  <span className="text-emerald-700 font-semibold">{formData.preferredContact} ({formData.email})</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleDownloadBrief}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full text-xs font-sans font-bold tracking-wider uppercase text-white bg-gradient-to-r from-[#0084CD] to-[#123A63] hover:from-[#009EE3] hover:to-[#0084CD] shadow-lg shadow-[#0084CD]/25 transition-all cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Summary (TXT)</span>
                </button>

                <button
                  type="button"
                  onClick={handleReset}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs font-sans font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 border border-slate-300 transition-all cursor-pointer"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Submit Another Inquiry</span>
                </button>
              </div>
            </div>
          ) : (
            /* Active Centered Form */
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              
              {/* Row 1: Full Name & Work Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5" htmlFor="centeredFullName">
                    Full Name *
                  </label>
                  <input
                    id="centeredFullName"
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Dr. Thomas Vance"
                    className={`w-full px-4 py-2.5 rounded-xl bg-white border text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0084CD]/20 transition-colors ${
                      errors.fullName ? 'border-red-400 focus:border-red-400' : 'border-slate-300 focus:border-[#0084CD]'
                    }`}
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-[11px] mt-1 flex items-center gap-1 font-medium">
                      <AlertCircle className="w-3 h-3" /> {errors.fullName}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5" htmlFor="centeredEmail">
                    Business Work Email *
                  </label>
                  <input
                    id="centeredEmail"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className={`w-full px-4 py-2.5 rounded-xl bg-white border text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0084CD]/20 transition-colors ${
                      errors.email ? 'border-red-400 focus:border-red-400' : 'border-slate-300 focus:border-[#0084CD]'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-[11px] mt-1 flex items-center gap-1 font-medium">
                      <AlertCircle className="w-3 h-3" /> {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Row 2: Company & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5" htmlFor="centeredCompany">
                    Company / Organization *
                  </label>
                  <input
                    id="centeredCompany"
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Apex Industrial Solutions"
                    className={`w-full px-4 py-2.5 rounded-xl bg-white border text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0084CD]/20 transition-colors ${
                      errors.company ? 'border-red-400 focus:border-red-400' : 'border-slate-300 focus:border-[#0084CD]'
                    }`}
                  />
                  {errors.company && (
                    <p className="text-red-500 text-[11px] mt-1 flex items-center gap-1 font-medium">
                      <AlertCircle className="w-3 h-3" /> {errors.company}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5" htmlFor="centeredPhone">
                    Phone Number (Optional)
                  </label>
                  <input
                    id="centeredPhone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0084CD] focus:ring-2 focus:ring-[#0084CD]/20 transition-colors"
                  />
                </div>
              </div>

              {/* Row 3: Primary Process Focus & Facility Sector */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5" htmlFor="centeredInquiryType">
                    Primary Area of Interest
                  </label>
                  <select
                    id="centeredInquiryType"
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-[#0084CD] focus:ring-2 focus:ring-[#0084CD]/20 transition-colors"
                  >
                    <option value="Feasibility Assessment">Comprehensive Feasibility Assessment</option>
                    <option value="co2-capture">CO₂ Flue Gas Capture &amp; Carbonates (Na₂CO₃ / NaHCO₃)</option>
                    <option value="nox-sox">NOx &amp; SOx Multi-Pollutant Abatement</option>
                    <option value="water-treatment">Advanced Water Reclamation &amp; Desalination</option>
                    <option value="advanced-materials">Concrete, Geopolymers &amp; Low-Carbon Materials</option>
                    <option value="licensing">Technology Licensing &amp; EPC Integration</option>
                    <option value="general">General Technical Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5" htmlFor="centeredFacilityType">
                    Facility Sector
                  </label>
                  <select
                    id="centeredFacilityType"
                    value={formData.facilityType}
                    onChange={(e) => setFormData({ ...formData, facilityType: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-[#0084CD] focus:ring-2 focus:ring-[#0084CD]/20 transition-colors"
                  >
                    <option value="Power Generation / Utilities">Power Generation &amp; Thermal Boilers</option>
                    <option value="Chemical Manufacturing">Chemical &amp; Petrochemical Plants</option>
                    <option value="Cement & Building Materials">Cement, Lime &amp; Construction</option>
                    <option value="Municipal Sanitation">Municipal Wastewater &amp; Sanitation</option>
                    <option value="Mining & Metallurgy">Mining &amp; Smelting Effluents</option>
                    <option value="Other Heavy Industry">Other Heavy Industrial Operations</option>
                  </select>
                </div>
              </div>

              {/* Row 4: Estimated Volume & Preferred Response */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5" htmlFor="centeredVolume">
                    Estimated Daily Volume / Flow (Optional)
                  </label>
                  <input
                    id="centeredVolume"
                    type="text"
                    value={formData.estimatedVolume}
                    onChange={(e) => setFormData({ ...formData, estimatedVolume: e.target.value })}
                    placeholder="e.g. 150 tons CO₂/day or 300 GPM"
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0084CD] focus:ring-2 focus:ring-[#0084CD]/20 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Preferred Response Method
                  </label>
                  <div className="flex items-center gap-6 pt-2">
                    <label className="inline-flex items-center gap-2 text-xs text-slate-700 cursor-pointer">
                      <input
                        type="radio"
                        name="centeredPreferredContact"
                        value="Email"
                        checked={formData.preferredContact === 'Email'}
                        onChange={() => setFormData({ ...formData, preferredContact: 'Email' })}
                        className="text-[#0084CD] focus:ring-[#0084CD]"
                      />
                      <span>Email</span>
                    </label>
                    <label className="inline-flex items-center gap-2 text-xs text-slate-700 cursor-pointer">
                      <input
                        type="radio"
                        name="centeredPreferredContact"
                        value="Phone"
                        checked={formData.preferredContact === 'Phone'}
                        onChange={() => setFormData({ ...formData, preferredContact: 'Phone' })}
                        className="text-[#0084CD] focus:ring-[#0084CD]"
                      />
                      <span>Phone Call</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Message Details */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5" htmlFor="centeredMessage">
                  Project Details or Challenge Description *
                </label>
                <textarea
                  id="centeredMessage"
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your plant's emission composition, flue gas temperature, wastewater characteristics, or project timeline..."
                  className={`w-full px-4 py-2.5 rounded-xl bg-white border text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0084CD]/20 transition-colors ${
                    errors.message ? 'border-red-400 focus:border-red-400' : 'border-slate-300 focus:border-[#0084CD]'
                  }`}
                />
                {errors.message && (
                  <p className="text-red-500 text-[11px] mt-1 flex items-center gap-1 font-medium">
                    <AlertCircle className="w-3 h-3" /> {errors.message}
                  </p>
                )}
              </div>

              {/* Whitepaper Checkbox */}
              <div className="flex items-center gap-3 pt-1">
                <input
                  id="centeredSendWhitepaper"
                  type="checkbox"
                  checked={formData.sendWhitepaper}
                  onChange={(e) => setFormData({ ...formData, sendWhitepaper: e.target.checked })}
                  className="w-4 h-4 rounded text-[#0084CD] focus:ring-[#0084CD] border-slate-300 cursor-pointer"
                />
                <label htmlFor="centeredSendWhitepaper" className="text-xs text-slate-600 cursor-pointer select-none">
                  Include CST's 2026 Process Chemistry Whitepaper &amp; Byproduct Market Guide.
                </label>
              </div>

              {/* Primary Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 text-xs sm:text-sm font-sans font-bold tracking-wider uppercase text-white bg-gradient-to-r from-[#0084CD] to-[#123A63] hover:from-[#009EE3] hover:to-[#0084CD] rounded-full shadow-xl shadow-[#0084CD]/25 hover:shadow-2xl hover:shadow-[#0084CD]/35 transition-all duration-300 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Submitting Mock Form...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Mock Contact Form</span>
                    </>
                  )}
                </button>
              </div>

              {/* Trust & Guarantee Strip inside white card */}
              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-center gap-4 text-[11px] text-slate-500">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#6D9F45]" />
                  <span>100% Confidential / Mutual NDA</span>
                </div>
                <span>·</span>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#0084CD]" />
                  <span>24-Hour Review Guarantee</span>
                </div>
                <span>·</span>
                <div className="flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-slate-400" />
                  <span>Dr. Robert Richardson Oversight</span>
                </div>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};

// Also export CampaignContactForm alias for compatibility
export const CampaignContactForm = MockContactFormSection;
