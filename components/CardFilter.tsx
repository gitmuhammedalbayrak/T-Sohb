
import React from 'react';

interface CardFilterProps {
  onFilterChange: (period: 'day' | 'month') => void;
  activeFilter: 'day' | 'month' | null;
}

const FilterButton: React.FC<{
  period: 'day' | 'month';
  label: string;
  onClick: (period: 'day' | 'month') => void;
  isActive: boolean;
}> = ({ period, label, onClick, isActive }) => {
  const baseClasses = "w-full text-center px-4 py-3 rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800";
  const activeClasses = "bg-cyan-500 text-white shadow-lg";
  const inactiveClasses = "bg-gray-700 text-gray-300 hover:bg-gray-600";
  
  return (
    <button
      onClick={() => onClick(period)}
      className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
    >
      {label}
    </button>
  );
};

const CardFilter: React.FC<CardFilterProps> = ({ onFilterChange, activeFilter }) => {
  return (
    <div>
      <p className="text-sm font-medium text-gray-400 mb-2">Filter completed cards from:</p>
      <div className="grid grid-cols-2 gap-4">
        <FilterButton 
          period="day"
          label="Last 24 Hours"
          onClick={onFilterChange}
          isActive={activeFilter === 'day'}
        />
        <FilterButton
          period="month"
          label="Last Month"
          onClick={onFilterChange}
          isActive={activeFilter === 'month'}
        />
      </div>
    </div>
  );
};

export default CardFilter;
