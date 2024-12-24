import React from 'react';
import TableOfContents from './TableOfContents';

interface ContentAreaProps {
  activeSection: string;
}

const ContentArea: React.FC<ContentAreaProps> = ({ activeSection }) => {
  return (
    <div className="flex flex-1">
      {/* Center Column with a scrollbar */}
      <main className="flex-1 p-8 h-screen overflow-y-auto">
        {/* 25+ sections - each with a matching id */}
        <section id="introduction" className="mb-16">
          <h1 className="text-3xl font-bold mb-4">Introduction</h1>
          <p className="mb-2 text-gray-700">
            Welcome to this expanded Tailwind CSS doc-like page. We have 25+ sections to 
            demonstrate vertical scrolling in all three columns, plus a global page scrollbar.
          </p>
        </section>

        <section id="spacing" className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Spacing</h2>
          <p className="text-gray-700 mb-2">
            Tailwind offers spacing utilities like <code className="bg-gray-100 px-1 py-0.5 rounded">p-4</code>, 
            <code className="bg-gray-100 px-1 py-0.5 rounded">m-4</code>, 
            <code className="bg-gray-100 px-1 py-0.5 rounded">space-x-*</code>, etc.
          </p>
        </section>

        <section id="space-between" className="mb-16">
          <h2 className="text-xl font-bold mb-4">Space Between</h2>
          <p className="text-gray-700 mb-2">
            The <code className="bg-gray-100 px-1 py-0.5 rounded">space-x</code> and 
            <code className="bg-gray-100 px-1 py-0.5 rounded">space-y</code> classes 
            let you control spacing between child elements.
          </p>
        </section>

        <section id="space-around" className="mb-16">
          <h2 className="text-xl font-bold mb-4">Space Around</h2>
          <p className="text-gray-700 mb-2">
            Combine <code className="bg-gray-100 px-1 py-0.5 rounded">justify-around</code> 
            with <code className="bg-gray-100 px-1 py-0.5 rounded">space-x</code> or 
            <code className="bg-gray-100 px-1 py-0.5 rounded">space-y</code> to distribute space around items.
          </p>
        </section>

        <section id="space-evenly" className="mb-16">
          <h2 className="text-xl font-bold mb-4">Space Evenly</h2>
          <p className="text-gray-700 mb-2">
            <code className="bg-gray-100 px-1 py-0.5 rounded">justify-evenly</code> 
            distributes space evenly among child elements in a flex container.
          </p>
        </section>

        <section id="colors" className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Colors</h2>
          <p className="text-gray-700 mb-2">
            Tailwind's default color palette includes many shades from 50 to 900.
          </p>
        </section>

        <section id="typography" className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Typography</h2>
          <p className="text-gray-700 mb-2">
            Control font size, weight, line-height, etc. using <code className="bg-gray-100 px-1 py-0.5 rounded">text-xl</code>, 
            <code className="bg-gray-100 px-1 py-0.5 rounded">font-bold</code>, etc.
          </p>
        </section>

        <section id="layout" className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Layout</h2>
          <p className="text-gray-700 mb-2">
            Layout utilities like <code className="bg-gray-100 px-1 py-0.5 rounded">display</code>, 
            <code className="bg-gray-100 px-1 py-0.5 rounded">float</code>, 
            <code className="bg-gray-100 px-1 py-0.5 rounded">clear</code> help structure pages.
          </p>
        </section>

        <section id="container" className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Container</h2>
          <p className="text-gray-700 mb-2">
            The <code className="bg-gray-100 px-1 py-0.5 rounded">container</code> class centers content 
            horizontally and applies max-width breakpoints.
          </p>
        </section>

        <section id="flexbox" className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Flexbox</h2>
          <p className="text-gray-700 mb-2">
            Classes like <code className="bg-gray-100 px-1 py-0.5 rounded">flex</code>, 
            <code className="bg-gray-100 px-1 py-0.5 rounded">items-center</code>, 
            <code className="bg-gray-100 px-1 py-0.5 rounded">justify-between</code> 
            help build flexible layouts quickly.
          </p>
        </section>

        <section id="grid" className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Grid</h2>
          <p className="text-gray-700 mb-2">
            <code className="bg-gray-100 px-1 py-0.5 rounded">grid</code> classes make it easy to create 
            two-dimensional layouts. For example, <code className="bg-gray-100 px-1 py-0.5 rounded">grid-cols-3</code>.
          </p>
        </section>

        <section id="position" className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Position</h2>
          <p className="text-gray-700 mb-2">
            Use <code className="bg-gray-100 px-1 py-0.5 rounded">relative</code>, 
            <code className="bg-gray-100 px-1 py-0.5 rounded">absolute</code>, or 
            <code className="bg-gray-100 px-1 py-0.5 rounded">fixed</code> to control positioning.
          </p>
        </section>

        <section id="display" className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Display</h2>
          <p className="text-gray-700 mb-2">
            Switching between <code className="bg-gray-100 px-1 py-0.5 rounded">block</code>, 
            <code className="bg-gray-100 px-1 py-0.5 rounded">inline-block</code>, 
            or <code className="bg-gray-100 px-1 py-0.5 rounded">hidden</code> is trivial in Tailwind.
          </p>
        </section>

        <section id="shadows" className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Shadows</h2>
          <p className="text-gray-700 mb-2">
            Add depth with <code className="bg-gray-100 px-1 py-0.5 rounded">shadow</code> classes 
            like <code className="bg-gray-100 px-1 py-0.5 rounded">shadow-lg</code>, etc.
          </p>
        </section>

        <section id="sizing" className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Sizing</h2>
          <p className="text-gray-700 mb-2">
            Control width and height with <code className="bg-gray-100 px-1 py-0.5 rounded">w-1/2</code>, 
            <code className="bg-gray-100 px-1 py-0.5 rounded">h-64</code>, etc.
          </p>
        </section>

        <section id="borders" className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Borders</h2>
          <p className="text-gray-700 mb-2">
            Customize border width, color, radius, e.g. 
            <code className="bg-gray-100 px-1 py-0.5 rounded">border-2</code>, 
            <code className="bg-gray-100 px-1 py-0.5 rounded">rounded-lg</code>.
          </p>
        </section>

        <section id="background" className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Background</h2>
          <p className="text-gray-700 mb-2">
            Classes like <code className="bg-gray-100 px-1 py-0.5 rounded">bg-blue-500</code>, 
            <code className="bg-gray-100 px-1 py-0.5 rounded">bg-red-100</code> set background colors easily.
          </p>
        </section>

        <section id="gradients" className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Gradients</h2>
          <p className="text-gray-700 mb-2">
            Combine <code className="bg-gray-100 px-1 py-0.5 rounded">bg-gradient-to-r</code>, 
            <code className="bg-gray-100 px-1 py-0.5 rounded">from-green-400</code>, 
            <code className="bg-gray-100 px-1 py-0.5 rounded">to-blue-500</code> for beautiful gradients.
          </p>
        </section>

        <section id="filters" className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Filters</h2>
          <p className="text-gray-700 mb-2">
            Tailwind includes utilities for <code className="bg-gray-100 px-1 py-0.5 rounded">blur</code>, 
            <code className="bg-gray-100 px-1 py-0.5 rounded">brightness</code>, 
            <code className="bg-gray-100 px-1 py-0.5 rounded">contrast</code>, etc.
          </p>
        </section>

        <section id="effects" className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Effects</h2>
          <p className="text-gray-700 mb-2">
            Utilities like <code className="bg-gray-100 px-1 py-0.5 rounded">opacity-75</code>, 
            <code className="bg-gray-100 px-1 py-0.5 rounded">mix-blend-multiply</code> add visual effects.
          </p>
        </section>

        <section id="transitions" className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Transitions</h2>
          <p className="text-gray-700 mb-2">
            <code className="bg-gray-100 px-1 py-0.5 rounded">transition</code>, 
            <code className="bg-gray-100 px-1 py-0.5 rounded">duration-300</code>, 
            <code className="bg-gray-100 px-1 py-0.5 rounded">ease-in-out</code> help animate state changes.
          </p>
        </section>

        <section id="animations" className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Animations</h2>
          <p className="text-gray-700 mb-2">
            Configure custom keyframes or use built-ins to animate elements in Tailwind.
          </p>
        </section>

        <section id="interactivity" className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Interactivity</h2>
          <p className="text-gray-700 mb-2">
            Classes like <code className="bg-gray-100 px-1 py-0.5 rounded">cursor-pointer</code>, 
            <code className="bg-gray-100 px-1 py-0.5 rounded">select-none</code> help control user interaction.
          </p>
        </section>

        <section id="dark-mode" className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Dark Mode</h2>
          <p className="text-gray-700 mb-2">
            Tailwind has first-class dark mode support with the <code className="bg-gray-100 px-1 py-0.5 rounded">dark:</code> prefix.
          </p>
        </section>

        <section id="plugins" className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Plugins</h2>
          <p className="text-gray-700 mb-2">
            Extend Tailwind with official or third-party plugins, or create your own.
          </p>
        </section>

        <section id="deploy" className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Deploy</h2>
          <p className="text-gray-700 mb-2">
            Deploy your Tailwind projects anywhere that serves static files (e.g. Vercel, Netlify).
          </p>
        </section>
      </main>

      {/* Right Column: Table of Contents */}
      <TableOfContents activeSection={activeSection} />
    </div>
  );
};

export default ContentArea;