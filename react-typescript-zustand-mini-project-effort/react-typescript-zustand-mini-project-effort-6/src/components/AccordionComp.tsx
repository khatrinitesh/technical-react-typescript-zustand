import React from 'react';
import { useAccordionStore } from '../store/useAccordionStore';

// AccordionComp component
const AccordionComp: React.FC = () => {
  return (
    <>
      <AccordionSection sectionId="section1" title="Section 1">
        <p>This is the content of Section 1</p>
      </AccordionSection>
      <AccordionSection sectionId="section2" title="Section 2">
        <p>This is the content of Section 2</p>
      </AccordionSection>
      <AccordionSection sectionId="section3" title="Section 3">
        <p>This is the content of Section 3</p>
      </AccordionSection>
    </>
  );
};

export default AccordionComp;

// AccordionSection component
interface AccordionSectionType {
  sectionId: string;
  title: string;
  children: React.ReactNode;
}

const AccordionSection: React.FC<AccordionSectionType> = ({ sectionId, title, children }) => {
  // Accessing state from store (assumes the state includes 'openSection' and 'toggleSection')
  const { openSection, toggleSection } = useAccordionStore();

  const isOpen = openSection === sectionId; // Check if this section is open

  return (
    <>
      <div
        onClick={() => toggleSection(sectionId)} // Toggle the section's open/close state
        style={{
          cursor: 'pointer',
          padding: '10px',
          backgroundColor: '#ddd',
          margin: '5px 0',
        }}
      >
        {title}
      </div>
      {isOpen && (
        <div style={{ padding: '10px', backgroundColor: '#f4f4f4' }}>
          {children}
        </div>
      )}
    </>
  );
};
