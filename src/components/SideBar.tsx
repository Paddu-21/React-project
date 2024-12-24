import React from 'react';
import { NavItem } from '../types/index';

interface SidebarProps {
  onSectionChange: (section: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onSectionChange }) => {
  const navItems: NavItem[] = [
    { id: 'introduction', title: 'Introduction', href: '#introduction' },
    { id: 'spacing', title: 'Spacing', href: '#spacing' },
    { id: 'space-between', title: 'Space Between', href: '#space-between' },
    { id: 'space-around', title: 'Space Around', href: '#space-around' },
    { id: 'space-evenly', title: 'Space Evenly', href: '#space-evenly' },
    { id: 'colors', title: 'Colors', href: '#colors' },
    { id: 'typography', title: 'Typography', href: '#typography' },
    { id: 'layout', title: 'Layout', href: '#layout' },
    { id: 'container', title: 'Container', href: '#container' },
    { id: 'flexbox', title: 'Flexbox', href: '#flexbox' },
    { id: 'grid', title: 'Grid', href: '#grid' },
    { id: 'position', title: 'Position', href: '#position' },
    { id: 'display', title: 'Display', href: '#display' },
    { id: 'shadows', title: 'Shadows', href: '#shadows' },
    { id: 'sizing', title: 'Sizing', href: '#sizing' },
    { id: 'borders', title: 'Borders', href: '#borders' },
    { id: 'background', title: 'Background', href: '#background' },
    { id: 'gradients', title: 'Gradients', href: '#gradients' },
    { id: 'filters', title: 'Filters', href: '#filters' },
    { id: 'effects', title: 'Effects', href: '#effects' },
    { id: 'transitions', title: 'Transitions', href: '#transitions' },
    { id: 'animations', title: 'Animations', href: '#animations' },
    { id: 'interactivity', title: 'Interactivity', href: '#interactivity' },
    { id: 'dark-mode', title: 'Dark Mode', href: '#dark-mode' },
    { id: 'plugins', title: 'Plugins', href: '#plugins' },
    { id: 'deploy', title: 'Deploy', href: '#deploy' },
  ];

  return (
    // Sidebar gets its own vertical scrollbar
    <nav className="w-64 border-r border-gray-200 h-screen overflow-y-auto">
      <div className="p-4">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => onSectionChange(item.id)}
                className="text-gray-600 hover:text-gray-900 block py-2 text-sm font-medium"
              >
                {item.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;