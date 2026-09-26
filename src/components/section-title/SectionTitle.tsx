import React from 'react';

interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <div className="tz-section-title tz-display-2 text-uppercase">
      {title}
    </div>
  );
};

export default SectionTitle;