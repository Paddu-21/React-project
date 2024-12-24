// Layout.tsx (no changes needed here)
import React from 'react';
import Sidebar from './SideBar';
import ContentArea from './ContentArea';

const Layout: React.FC = () => {
  const [activeSection, setActiveSection] = React.useState<string>('introduction');

  const handleSectionChange = (sectionId: string) => {
    setActiveSection(sectionId);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white overflow-y-auto">
      <div className="flex">
        <Sidebar onSectionChange={handleSectionChange} />
        <ContentArea activeSection={activeSection} />
      </div>
    </div>
  );
};

export default Layout;
