import React from 'react';
import { useAccordionStore } from '../../../store/useAccordion';
import { accordionItems } from '../../../constants/dataAccordion';
import { AccordionProps } from '../../../types';

const RepositoryApp = () => {
  return (
    <>
      <Accordion items={accordionItems}/>
    </>
  );
}

export default RepositoryApp;

const Accordion:React.FC<AccordionProps>  =({items}) => {
    const {openIndex,toggleItem} = useAccordionStore();
    return(
        <>
         {items.map((item,index) => (
            <div key={index}>
                <div className={`accordion-title ${openIndex === index ? 'active' : 'inactive'}`} onClick={() => toggleItem(index)} style={{cursor:'pointer'}}>
                    {item.title} 
                </div>
                {openIndex === index && (
                    <div className='accordion-content'>
                        {item.content}
                    </div>
                )}
            </div>
         ))}
        </>
    )
}
