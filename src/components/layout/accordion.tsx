import { useState, type ReactNode } from 'react';
import './accordion.scss';

interface AccordionProps {
  id: string[];
  title: string[];
  content: ReactNode[];
}

export default function Accordion({ id, title, content }: AccordionProps) {
  const [openAcc, setOpenAcc] = useState<string | null>(null);

  const toggleAccordion = (clickedId: string) => {
    setOpenAcc(prev => (prev === clickedId ? null : clickedId));
  };

  return (
    <ul className="accordion-wrap">
      {id.map((itemId, i) => (
        <li
          key={itemId}
          className={`accordion-item ${openAcc === itemId ? 'open' : ''}`}
        >
          <a
            href="#"
            className="accordion-btn"
            onClick={() => toggleAccordion(itemId)}
          >
            {title[i]}
          </a>

          {openAcc === itemId && (
            <div className="accordion-content">{content[i]}</div>
          )}
        </li>
      ))}
    </ul>
  );
}
