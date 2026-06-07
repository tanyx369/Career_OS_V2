import React, { useState, useRef, useEffect } from 'react';

export default function InteractiveDropdown({
  label,
  options,
  selectedOption,
  onSelect,
  className = '',
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const containerRef = useRef(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Reset highlighted index when dropdown closes
  useEffect(() => {
    if (!isOpen) {
      setHighlightedIndex(-1);
    } else {
      const idx = options.indexOf(selectedOption);
      setHighlightedIndex(idx >= 0 ? idx : 0);
    }
  }, [isOpen, options, selectedOption]);

  const handleKeyDown = (e) => {
    if (!isOpen) {
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp' || e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        setIsOpen(true);
      }
      return;
    }

    switch (e.key) {
      case 'Escape':
        e.preventDefault();
        setIsOpen(false);
        break;
      case 'ArrowDown':
        e.preventDefault();
        setHighlightedIndex((prev) => (prev + 1) % options.length);
        break;
      case 'ArrowUp':
        e.preventDefault();
        setHighlightedIndex((prev) => (prev - 1 + options.length) % options.length);
        break;
      case 'Enter':
      case ' ':
        e.preventDefault();
        if (highlightedIndex >= 0 && highlightedIndex < options.length) {
          onSelect(options[highlightedIndex]);
          setIsOpen(false);
        }
        break;
      case 'Tab':
        setIsOpen(false);
        break;
      default:
        break;
    }
  };

  return (
    <div ref={containerRef} className={`relative inline-block text-left ${className}`}>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        onKeyDown={handleKeyDown}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className="flex h-11 w-full items-center justify-between rounded-xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-700 shadow-sm transition-all duration-200 hover:border-blue-200 hover:bg-slate-50 focus:border-blue-300 focus:outline-none focus:ring-4 focus:ring-blue-50/50 sm:w-48"
      >
        <span>{selectedOption}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-4 w-4 text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <ul
          role="listbox"
          tabIndex={-1}
          onKeyDown={handleKeyDown}
          className="absolute right-0 z-50 mt-2 max-h-60 w-full min-w-[12rem] overflow-auto rounded-xl border border-slate-150 bg-white py-1.5 shadow-lg ring-1 ring-black/5 focus:outline-none scrollbar-thin origin-top-right animate-in fade-in slide-in-from-top-2 duration-150"
        >
          {options.map((option, idx) => {
            const isSelected = option === selectedOption;
            const isHighlighted = idx === highlightedIndex;

            return (
              <li
                key={option}
                role="option"
                aria-selected={isSelected}
                onClick={() => {
                  onSelect(option);
                  setIsOpen(false);
                }}
                onMouseEnter={() => setHighlightedIndex(idx)}
                className={`relative cursor-pointer select-none px-4 py-2 text-sm transition-colors duration-150 ${
                  isHighlighted
                    ? 'bg-blue-50 text-blue-700'
                    : isSelected
                    ? 'bg-slate-50 text-slate-900 font-semibold'
                    : 'text-slate-650 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={isSelected ? 'font-semibold' : 'font-normal'}>{option}</span>
                  {isSelected && (
                    <svg
                      className="h-4 w-4 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
