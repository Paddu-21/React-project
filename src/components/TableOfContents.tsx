import React from 'react';

interface TableOfContentsProps {
  activeSection: string;
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ activeSection }) => {
  const tocItems = [
    { id: 'introduction', title: 'Introduction', level: 1 },
    { id: 'spacing', title: 'Spacing', level: 1 },
    { id: 'space-between', title: 'Space Between', level: 2 },
    { id: 'space-around', title: 'Space Around', level: 2 },
    { id: 'space-evenly', title: 'Space Evenly', level: 2 },
    { id: 'colors', title: 'Colors', level: 1 },
    { id: 'typography', title: 'Typography', level: 1 },
    { id: 'layout', title: 'Layout', level: 1 },
    { id: 'container', title: 'Container', level: 1 },
    { id: 'flexbox', title: 'Flexbox', level: 1 },
    { id: 'grid', title: 'Grid', level: 1 },
    { id: 'position', title: 'Position', level: 1 },
    { id: 'display', title: 'Display', level: 1 },
    { id: 'shadows', title: 'Shadows', level: 1 },
    { id: 'sizing', title: 'Sizing', level: 1 },
    { id: 'borders', title: 'Borders', level: 1 },
    { id: 'background', title: 'Background', level: 1 },
    { id: 'gradients', title: 'Gradients', level: 1 },
    { id: 'filters', title: 'Filters', level: 1 },
    { id: 'effects', title: 'Effects', level: 1 },
    { id: 'transitions', title: 'Transitions', level: 1 },
    { id: 'animations', title: 'Animations', level: 1 },
    { id: 'interactivity', title: 'Interactivity', level: 1 },
    { id: 'dark-mode', title: 'Dark Mode', level: 1 },
    { id: 'plugins', title: 'Plugins', level: 1 },
    { id: 'deploy', title: 'Deploy', level: 1 },
  ];

  return (
    <nav className="w-64 p-8 border-l border-gray-200 h-screen overflow-y-auto">
      <div className="sticky top-0">
        <h5 className="text-sm font-semibold text-gray-900 mb-4">On this page</h5>
        <ul className="space-y-2">
          {tocItems.map((item) => (
            <li key={item.id} className={item.level === 2 ? 'ml-4' : ''}>
              <a
                href={`#${item.id}`}
                className={`block py-1 text-sm ${
                  activeSection === item.id
                    ? 'text-blue-600 font-medium'
                    : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default TableOfContents;
