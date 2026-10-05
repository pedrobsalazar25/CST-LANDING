import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { ContactPage } from './components/ContactPage';
import { ContactModal } from './components/ContactModal';
import { FounderModal } from './components/FounderModal';
import { TechnologyItem } from './data/prddData';

// Campaign Landing Page Components
import { CampaignContactForm, FormPrefillData } from './components/campaign/CampaignContactForm';
import { TrustMetricsBar } from './components/campaign/TrustMetricsBar';
import { TechnologiesBento } from './components/campaign/TechnologiesBento';
import { YieldCalculator } from './components/campaign/YieldCalculator';
import { ComparisonSection } from './components/campaign/ComparisonSection';
import { CaseStudiesSection } from './components/campaign/CaseStudiesSection';
import { CommercializationFramework } from './components/campaign/CommercializationFramework';
import { FounderCredibility } from './components/campaign/FounderCredibility';
import { CampaignFAQ } from './components/campaign/CampaignFAQ';
import { CampaignFinalCTA } from './components/campaign/CampaignFinalCTA';
import { StickyConversionBar } from './components/campaign/StickyConversionBar';

// Deep-Dive Route Pages
import { TechnologiesPage } from './pages/TechnologiesPage';
import { CO2CapturePage } from './pages/CO2CapturePage';
import { NoxSoxPage } from './pages/NoxSoxPage';
import { WaterTreatmentPage } from './pages/WaterTreatmentPage';
import { AdvancedMaterialsPage } from './pages/AdvancedMaterialsPage';
import { ApplicationsPage } from './pages/ApplicationsPage';
import { IndustrialEmissionsPage } from './pages/IndustrialEmissionsPage';
import { WaterWastewaterPage } from './pages/WaterWastewaterPage';
import { ConcreteMaterialsPage } from './pages/ConcreteMaterialsPage';
import { ResourceRecoveryPage } from './pages/ResourceRecoveryPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { AboutPage } from './pages/AboutPage';
import { FounderDetailPage } from './pages/FounderDetailPage';
import { InsightsPage } from './pages/InsightsPage';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return window.location.pathname || '/';
    }
    return '/';
  });
  const [contactTopic, setContactTopic] = useState<string>('');
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isFounderModalOpen, setIsFounderModalOpen] = useState(false);
  const [formPrefill, setFormPrefill] = useState<FormPrefillData | undefined>(undefined);

  // Sync navigation on browser back/forward
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (path: string, topicOrHash?: string) => {
    if (path === '/contact' && topicOrHash) {
      setContactTopic(topicOrHash);
    }
    window.history.pushState({}, '', path + (topicOrHash && path !== '/contact' ? `#${topicOrHash}` : ''));
    setCurrentPath(path);
    if (topicOrHash && path !== '/contact') {
      setTimeout(() => {
        const el = document.getElementById(topicOrHash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
      return;
    }
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  };

  const handleNavigateHome = (hash?: string) => {
    handleNavigate('/', hash);
  };

  const handleOpenContact = (topic?: string) => {
    if (topic) setContactTopic(topic);
    setIsContactModalOpen(true);
  };

  const handleSelectTechnology = (tech: TechnologyItem) => {
    handleNavigate(`/technologies/${tech.id}`);
  };

  const scrollToAssessmentForm = (prefill?: FormPrefillData) => {
    if (prefill) {
      setFormPrefill(prefill);
    }
    if (currentPath !== '/') {
      handleNavigate('/', 'assessment-form');
      return;
    }
    const el = document.getElementById('assessment-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToCalculator = () => {
    if (currentPath !== '/') {
      handleNavigate('/', 'yield-calculator');
      return;
    }
    const el = document.getElementById('yield-calculator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const renderCurrentPage = () => {
    switch (currentPath) {
      // Technology Routes
      case '/technologies':
        return <TechnologiesPage onNavigate={handleNavigate} />;
      case '/technologies/co2-capture':
        return <CO2CapturePage onNavigate={handleNavigate} />;
      case '/technologies/nox-sox':
        return <NoxSoxPage onNavigate={handleNavigate} />;
      case '/technologies/water-treatment':
        return <WaterTreatmentPage onNavigate={handleNavigate} />;
      case '/technologies/advanced-materials':
        return <AdvancedMaterialsPage onNavigate={handleNavigate} />;

      // Application Routes
      case '/applications':
        return <ApplicationsPage onNavigate={handleNavigate} />;
      case '/applications/industrial-emissions':
        return <IndustrialEmissionsPage onNavigate={handleNavigate} />;
      case '/applications/water-wastewater':
        return <WaterWastewaterPage onNavigate={handleNavigate} />;
      case '/applications/concrete-materials':
        return <ConcreteMaterialsPage onNavigate={handleNavigate} />;
      case '/applications/resource-recovery':
        return <ResourceRecoveryPage onNavigate={handleNavigate} />;

      // Additional Routes
      case '/projects':
        return <ProjectsPage onNavigate={handleNavigate} />;
      case '/about':
        return <AboutPage onNavigate={handleNavigate} />;
      case '/about/robert-richardson':
        return <FounderDetailPage onNavigate={handleNavigate} />;
      case '/insights':
        return <InsightsPage onNavigate={handleNavigate} />;
      case '/contact':
        return <ContactPage initialTopic={contactTopic} onNavigateHome={handleNavigateHome} />;

      // Facebook Campaign Landing Page Route (Home and default)
      case '/':
      default:
        return (
          <>
            {/* 1. Campaign-Optimized Hero Section */}
            <Hero
              onRequestAssessment={() => scrollToAssessmentForm()}
              onExploreCalculator={() => scrollToCalculator()}
              onExploreTechnologies={() => handleNavigate('/technologies')}
              onAboutPrdd={() => handleNavigate('/about')}
            />

            {/* 2. DEDICATED MOCK CONTACT FORM (UNDER THE HERO SECTION - CLEAR GENEROUS SPACE) */}
            <CampaignContactForm
              prefillData={formPrefill}
              onClearPrefill={() => setFormPrefill(undefined)}
            />

            {/* 3. Verified Client Authority & Quantified Metrics Bar */}
            <TrustMetricsBar />

            {/* 4. The 4 Patented Core Technologies (Asymmetric Bento Grid with Modal Specs) */}
            <TechnologiesBento
              onSelectTechnologyForForm={(techId) => {
                setFormPrefill({ streamFocus: techId });
                scrollToAssessmentForm();
              }}
              onNavigateToDetail={(techId) => handleNavigate(`/technologies/${techId}`)}
            />

            {/* 5. Interactive Byproduct Yield & Revenue Calculator */}
            <YieldCalculator
              onApplyCalculation={(data) => {
                scrollToAssessmentForm(data);
              }}
            />

            {/* 6. Direct Technical Comparison: Traditional Scrubbing vs CST Closed-Loop */}
            <ComparisonSection
              onScrollToForm={() => scrollToAssessmentForm()}
            />

            {/* 7. Verified Industrial & Municipal Case Studies */}
            <CaseStudiesSection
              onScrollToForm={() => scrollToAssessmentForm()}
            />

            {/* 8. 4-Stage De-risked Commercialization Roadmap */}
            <CommercializationFramework
              onScrollToForm={() => scrollToAssessmentForm()}
            />

            {/* 9. Scientific Leadership & Dual Qualification (Dr. Robert Richardson) */}
            <FounderCredibility
              onScrollToForm={() => scrollToAssessmentForm()}
              onViewFounderBio={() => handleNavigate('/about/robert-richardson')}
            />

            {/* 10. Commonly Asked Technical & Procurement Questions (FAQ) */}
            <CampaignFAQ
              onScrollToForm={() => scrollToAssessmentForm()}
            />

            {/* 11. Final Conversion Push CTA */}
            <CampaignFinalCTA
              onScrollToForm={() => scrollToAssessmentForm()}
            />

            {/* 12. Sticky Floating Conversion Bar (Respects 15% mobile viewport rule) */}
            <StickyConversionBar
              onScrollToForm={() => scrollToAssessmentForm()}
            />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#071B2D] text-[#F7F7F3] selection:bg-[#2F6F9F]/35 selection:text-white">
      <Header
        onOpenContact={() => handleOpenContact()}
        onSelectTechnology={handleSelectTechnology}
        currentPath={currentPath}
        onNavigateHome={handleNavigateHome}
        onNavigate={handleNavigate}
        onScrollToAssessment={() => scrollToAssessmentForm()}
      />

      <main className="flex-1">
        {renderCurrentPage()}
      </main>

      <Footer
        onOpenContact={() => handleOpenContact()}
        onSelectTechnology={handleSelectTechnology}
        currentPath={currentPath}
        onNavigateHome={handleNavigateHome}
        onNavigate={handleNavigate}
      />

      {/* Global Modals */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        initialTopic={contactTopic}
      />

      <FounderModal
        isOpen={isFounderModalOpen}
        onClose={() => setIsFounderModalOpen(false)}
        onDiscussProject={() => {
          setIsFounderModalOpen(false);
          handleOpenContact('Founder Inquiry');
        }}
      />
    </div>
  );
}
