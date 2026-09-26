import React from 'react';

interface SectionSubtitleProps {
  subtitle: string;
}

const SectionSubtitle: React.FC<SectionSubtitleProps> = ({ subtitle }) => {
  return (
    <div className="tz-section-subtitle">
      <span className="tz-section-subtitle__line" />
      <h4 className="text-uppercase tz-text-primary">{subtitle}</h4>
    </div>
  );
};

export default SectionSubtitle;