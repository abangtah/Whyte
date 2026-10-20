import React from 'react';
import { SERVICE_STRIP_ITEMS } from '../config/content';
import './ServiceStrip.css';

export const ServiceStrip: React.FC = () => {
  return (
    <div className="service-strip-wrapper" aria-label="Core Technical Capabilities">
      <div className="service-strip-track">
        {/* Double array for infinite seamless ticker loop */}
        {[...SERVICE_STRIP_ITEMS, ...SERVICE_STRIP_ITEMS].map((item, idx) => (
          <div key={idx} className="strip-item">
            <span className="strip-accent-dot">•</span>
            <span className="strip-text">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
