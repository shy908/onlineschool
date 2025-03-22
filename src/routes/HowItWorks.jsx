import React, { useState, useEffect, useRef } from "react";
import HowItWorksContent from "../components/About/HowItWorks";
import ParentRole from "../components/About/ParentRole";
import Support from "../components/About/Support";
import WhatToExpect from "../components/About/WhatToExpect";
import WhatYouNeed from "../components/About/WhatYouNeed";
import MakingChoice from "../components/About/MakingChoice";
import HowItWorks from "../components/About/HowItWorks";
import CodeOfConduct from "../components/About/CodeOfConduct";

function HowItWork() {
  const [activeTab, setActiveTab] = useState("howItWorks");

  // Refs for sections
  const sectionsRef = {
    howItWorks: useRef(null),
    support: useRef(null),
    parentRole: useRef(null),
    whatToExpect: useRef(null),
    whatYouNeed: useRef(null),
    makingChoice: useRef(null),
    codeOfConduct: useRef(null),
  };

  const tabLabels = {
    howItWorks: "HOW IT WORKS",
    support: "SUPPORT",
    parentRole: "PARENT ROLE",
    whatToExpect: "WHAT TO EXPECT",
    whatYouNeed: "WHAT YOU NEED",
    makingChoice: "MAKING A CHOICE",
    codeOfConduct: "CODE OF CONDUCT",
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveTab(entry.target.id);
        }
      });
    }, observerOptions);

    Object.values(sectionsRef).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  const renderTabContent = () => {
    switch (activeTab) {
      case "howItWorks":
        return <HowItWorksContent />;
      case "support":
        return <Support />;
      case "parentRole":
        return <ParentRole />;
      case "whatToExpect":
        return <WhatToExpect />;
      case "whatYouNeed":
        return <WhatYouNeed />;
      case "makingChoice":
        return <MakingChoice />;
      case "codeOfConduct":
        return <CodeOfConduct />;
      default:
        return <HowItWorks />;
    }
  };

  return (
    <div className="py-16 bg-bgLight">
      {/* Tab Navigation */}
      <div className="tabs-navigation sticky top-20 bg-white shadow-md z-[100] mb-8 flex overflow-x-auto whitespace-nowrap scrollbar-hide">
        {Object.keys(sectionsRef).map((tab) => (
          <button
            key={tab}
            onClick={() => {
              const section = sectionsRef[tab].current;
              section && section.scrollIntoView({ behavior: "smooth", block: "center" });
            }}
            aria-label={`Navigate to ${tabLabels[tab].toLowerCase()}`}
            className={`px-6 py-3 text-sm md:text-base lg:text-lg rounded-lg font-semibold transition-colors duration-300 ${
              activeTab === tab
                ? "text-primary border-b-2 border-primary"
                : "text-textColor hover:bg-secondary hover:text-white"
            }`}
          >
            {tabLabels[tab]}
          </button>
        ))}
      </div>

      {/* Tab Content Sections */}
      <div className="tab-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div id="howItWorks" ref={sectionsRef.howItWorks} className="scroll-section">
          <HowItWorksContent />
        </div>
        <div id="support" ref={sectionsRef.support} className="scroll-section">
          <Support />
        </div>
        <div id="parentRole" ref={sectionsRef.parentRole} className="scroll-section">
          <ParentRole />
        </div>
        <div id="whatToExpect" ref={sectionsRef.whatToExpect} className="scroll-section">
          <WhatToExpect />
        </div>
        <div id="whatYouNeed" ref={sectionsRef.whatYouNeed} className="scroll-section">
          <WhatYouNeed />
        </div>
        <div id="makingChoice" ref={sectionsRef.makingChoice} className="scroll-section">
          <MakingChoice />
        </div>
        <div id="codeOfConduct" ref={sectionsRef.codeOfConduct} className="scroll-section">
          <CodeOfConduct />
        </div>
      </div>
    </div>
  );
}

export default HowItWork;
