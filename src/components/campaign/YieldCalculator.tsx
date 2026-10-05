import React, { useState } from 'react';
import { Calculator, ArrowRight, TrendingUp, Droplets, Leaf, DollarSign, Check } from 'lucide-react';
import { FormPrefillData } from './CampaignContactForm';

interface YieldCalculatorProps {
  onApplyCalculation: (data: FormPrefillData) => void;
}

interface FacilityPreset {
  id: string;
  name: string;
  defaultDailyTons: number;
  minTons: number;
  maxTons: number;
  techFocus: string;
  carbonRatio: number; // Tons of Carbonate per Ton of CO2
  marketPricePerTon: number; // Avg value of Na2CO3/NaHCO3
  waterGallonsPerTon: number; // Reclaimed water potential
  typicalPurity: string;
}

const PRESETS: FacilityPreset[] = [
  {
    id: 'power-gen',
    name: 'Power Generation & Gas Turbines',
    defaultDailyTons: 250,
    minTons: 50,
    maxTons: 2000,
    techFocus: 'co2-capture',
    carbonRatio: 1.85,
    marketPricePerTon: 240, // $240/ton sodium bicarbonate/carbonate average
    waterGallonsPerTon: 180,
    typicalPurity: '99.2% Pure NaHCO₃ / Na₂CO₃',
  },
  {
    id: 'cement-kiln',
    name: 'Cement & Lime Kilns',
    defaultDailyTons: 400,
    minTons: 100,
    maxTons: 3000,
    techFocus: 'co2-capture',
    carbonRatio: 1.95,
    marketPricePerTon: 220,
    waterGallonsPerTon: 140,
    typicalPurity: 'High Purity Carbonate & Geopolymers',
  },
  {
    id: 'chemical-mfg',
    name: 'Chemical & Fertilizer Plants',
    defaultDailyTons: 150,
    minTons: 30,
    maxTons: 1200,
    techFocus: 'nox-sox',
    carbonRatio: 1.70,
    marketPricePerTon: 280,
    waterGallonsPerTon: 320,
    typicalPurity: 'Industrial Chemical Reagents',
  },
  {
    id: 'industrial-water',
    name: 'Industrial Brine & Municipal Water',
    defaultDailyTons: 100,
    minTons: 20,
    maxTons: 1000,
    techFocus: 'water-treatment',
    carbonRatio: 1.20,
    marketPricePerTon: 210,
    waterGallonsPerTon: 1200, // Water primary
    typicalPurity: 'Potable / Technical Grade Permeate',
  },
];

export const YieldCalculator: React.FC<YieldCalculatorProps> = ({ onApplyCalculation }) => {
  const [selectedPresetId, setSelectedPresetId] = useState('power-gen');
  const activePreset = PRESETS.find((p) => p.id === selectedPresetId) || PRESETS[0];

  const [dailyTons, setDailyTons] = useState(activePreset.defaultDailyTons);

  const handlePresetChange = (preset: FacilityPreset) => {
    setSelectedPresetId(preset.id);
    setDailyTons(preset.defaultDailyTons);
  };

  // Calculations
  const annualCO2Tons = dailyTons * 330; // assuming 330 operating days/year
  const annualCarbonateYieldTons = Math.round(annualCO2Tons * activePreset.carbonRatio);
  const annualGrossByproductValue = Math.round(annualCarbonateYieldTons * activePreset.marketPricePerTon);
  const annualWaterReclaimedGal = Math.round(annualCO2Tons * activePreset.waterGallonsPerTon);

  const handleApply = () => {
    onApplyCalculation({
      industry: activePreset.name,
      streamFocus: activePreset.techFocus,
      estimatedVolume: `${dailyTons} Metric Tons/Day (~${annualCarbonateYieldTons.toLocaleString()} tons byproduct/yr)`,
    });
  };

  return (
    <section id="yield-calculator" className="py-20 sm:py-28 bg-[#091F35] border-b border-[#2F6F9F]/30 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#89B3D3] mb-3">
            <span className="w-2 h-0.5 bg-[#6D9F45]" />
            <span>INTERACTIVE MASS-BALANCE &amp; REVENUE ESTIMATOR</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 [text-wrap:balance]">
            Calculate Your Facility's Byproduct Yield &amp; Potential Offsets
          </h2>
          <p className="text-base text-slate-300 font-normal leading-relaxed">
            See the stoichiometric outputs and commercial value of converting your facility's waste streams into saleable sodium carbonates, bicarbonates, and reclaimed water using CST chemistry.
          </p>
        </div>

        {/* Calculator Card */}
        <div className="bg-[#0c263f] border border-[#2F6F9F]/40 rounded-3xl p-6 sm:p-10 shadow-2xl shadow-black/30">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Controls */}
            <div className="lg:col-span-6 space-y-7">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#89B3D3] mb-3">
                  Step 1: Select Your Facility Profile
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {PRESETS.map((preset) => (
                    <button
                      key={preset.id}
                      type="button"
                      onClick={() => handlePresetChange(preset)}
                      className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                        selectedPresetId === preset.id
                          ? 'bg-[#123A63] border-[#38BDF8] text-white shadow-md'
                          : 'bg-[#071B2D] border-[#2F6F9F]/30 text-slate-300 hover:border-[#2F6F9F]'
                      }`}
                    >
                      <span className="font-display text-xs font-bold block">{preset.name}</span>
                      <span className="text-[10px] text-slate-400 font-mono mt-0.5 block">{preset.typicalPurity}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-mono uppercase tracking-wider text-[#89B3D3]" htmlFor="dailyTonsSlider">
                    Step 2: Estimated Daily Feedstock Stream
                  </label>
                  <span className="font-display text-lg font-bold text-[#38BDF8] tabular-nums">
                    {dailyTons} <span className="text-xs font-sans font-normal text-slate-300">Metric Tons/Day</span>
                  </span>
                </div>

                <input
                  id="dailyTonsSlider"
                  type="range"
                  min={activePreset.minTons}
                  max={activePreset.maxTons}
                  step={10}
                  value={dailyTons}
                  onChange={(e) => setDailyTons(Number(e.target.value))}
                  className="w-full h-2.5 bg-[#071B2D] rounded-lg appearance-none cursor-pointer accent-[#0084CD]"
                />

                <div className="flex justify-between text-[11px] font-mono text-slate-400 mt-2">
                  <span>{activePreset.minTons} tons/day</span>
                  <span>{activePreset.maxTons} tons/day</span>
                </div>
              </div>

              {/* Chemical Assumptions Pill */}
              <div className="p-4 rounded-xl bg-[#071B2D] border border-[#2F6F9F]/30 text-xs text-slate-300 space-y-1.5 font-sans">
                <div className="flex items-center gap-2 text-[#89B3D3] font-mono text-[11px] uppercase tracking-wider">
                  <Calculator className="w-3.5 h-3.5 text-[#38BDF8]" />
                  <span>Stoichiometric Conversion Basis:</span>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  Based on CST proprietary wet-absorption loop. 1.0 ton CO₂ reacts with alkali feedstocks to generate approximately {activePreset.carbonRatio} tons of commercial carbonate minerals (Technical/Food Grade).
                </p>
              </div>
            </div>

            {/* Right Calculated Results Banner */}
            <div className="lg:col-span-6 bg-gradient-to-br from-[#103252] to-[#071B2D] border border-[#2F6F9F]/50 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#89B3D3] block mb-1">
                  ANNUAL RESOURCE RECOVERY POTENTIAL
                </span>
                <h3 className="font-display text-2xl font-bold text-white mb-6">
                  Estimated Commercial Outputs
                </h3>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="p-4 rounded-xl bg-[#071B2D]/80 border border-[#2F6F9F]/30">
                    <div className="flex items-center gap-1.5 text-xs text-[#89B3D3] mb-1">
                      <TrendingUp className="w-3.5 h-3.5 text-[#38BDF8]" />
                      <span>Carbonate Yield</span>
                    </div>
                    <div className="font-display text-xl sm:text-2xl font-bold text-white tabular-nums">
                      {annualCarbonateYieldTons.toLocaleString()}
                    </div>
                    <div className="text-[10px] text-slate-400 font-mono">Tons Na₂CO₃/NaHCO₃ / year</div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#071B2D]/80 border border-[#2F6F9F]/30">
                    <div className="flex items-center gap-1.5 text-xs text-[#89B3D3] mb-1">
                      <DollarSign className="w-3.5 h-3.5 text-[#6D9F45]" />
                      <span>Gross Market Value</span>
                    </div>
                    <div className="font-display text-xl sm:text-2xl font-bold text-[#8AD156] tabular-nums">
                      ${(annualGrossByproductValue / 1000000).toFixed(2)}M
                    </div>
                    <div className="text-[10px] text-slate-400 font-mono">Annual Byproduct Revenue</div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#071B2D]/80 border border-[#2F6F9F]/30">
                    <div className="flex items-center gap-1.5 text-xs text-[#89B3D3] mb-1">
                      <Leaf className="w-3.5 h-3.5 text-[#38BDF8]" />
                      <span>Net CO₂e Abated</span>
                    </div>
                    <div className="font-display text-xl sm:text-2xl font-bold text-white tabular-nums">
                      {annualCO2Tons.toLocaleString()}
                    </div>
                    <div className="text-[10px] text-slate-400 font-mono">Metric Tons CO₂e / year</div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#071B2D]/80 border border-[#2F6F9F]/30">
                    <div className="flex items-center gap-1.5 text-xs text-[#89B3D3] mb-1">
                      <Droplets className="w-3.5 h-3.5 text-[#38BDF8]" />
                      <span>Water Reclaimed</span>
                    </div>
                    <div className="font-display text-xl sm:text-2xl font-bold text-white tabular-nums">
                      {(annualWaterReclaimedGal / 1000000).toFixed(1)}M
                    </div>
                    <div className="text-[10px] text-slate-400 font-mono">Gallons Clean Permeate / yr</div>
                  </div>
                </div>
              </div>

              {/* Action Button: Applies to form and scrolls */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleApply}
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-full text-xs font-sans font-bold tracking-wider uppercase text-white bg-gradient-to-r from-[#0084CD] to-[#123A63] border border-[#009EE3]/50 hover:from-[#009EE3] hover:to-[#0084CD] shadow-xl shadow-[#0084CD]/25 transition-all cursor-pointer"
                >
                  <span>Include This Estimate In My Feasibility Assessment</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-[10px] text-center text-slate-400 mt-2 font-mono">
                  *Auto-fills the assessment form above and jumps to technical intake.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
