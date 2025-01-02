import React from 'react';
import { motion } from 'framer-motion';
import { FaPlus, FaMinus } from 'react-icons/fa'; // Importing plus/minus icons
import useAccordionStore from '../store/useAccordionStore';
import { AccordionProps } from '../interface';

const AccordionComp:React.FC<AccordionProps> = ({items}) => {
    const {openIndex,toggleAccordion} = useAccordionStore();
  return (
    <>
       <div className="accordion">
      {items.map((item, index) => (
        <div key={index} className="accordion-item">
          <div 
            className="accordion-title flex items-center cursor-pointer" 
            onClick={() => toggleAccordion(index)}
          >
            <h3 className="text-lg font-bold">{item.title}</h3>
            <div className="ml-2">
              {openIndex === index ? <FaMinus /> : <FaPlus />}
            </div>
          </div>

          {/* Content with Framer Motion */}
          <motion.div
            className="accordion-content mt-2"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: openIndex === index ? 1 : 0, height: openIndex === index ? "auto" : 0 }}
            transition={{ duration: 0.3 }}
          >
            {openIndex === index && <p>{item.content}</p>}
          </motion.div>
        </div>
      ))}
    </div>
    </>
  );
}

export default AccordionComp;
