import { useState, type ReactNode } from 'react';

interface tabProps {
  tabId: string[];
  tabLabel: string[];
  tabContent: ReactNode[];
}

export default function Tab({ tabId, tabLabel, tabContent }: tabProps) {
  const [activeTab, setActiveTab] = useState(tabId[0]);
  return (
    <section className="tab-wrap">
      {/* tab button */}
      <ul className="tab-btn">
        {tabId.map((id, i) => (
          <li
            key={id}
            className={activeTab === id ? 'on' : ''}
            onClick={() => setActiveTab(id)}
          >
            {tabLabel[i]}
          </li>
        ))}
      </ul>

      {/* tab content */}
      {tabId.map((id, i) =>
        activeTab === id ? (
          <div key={id} id={id} className="tab-con">
            {tabContent[i]}
          </div>
        ) : null,
      )}
    </section>
  );
}
