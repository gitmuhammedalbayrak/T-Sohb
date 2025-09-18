
import React from 'react';
import type { TrelloCardWithCompletion } from '../types';
import { DownloadIcon } from './Icons';

interface CardListProps {
  cards: TrelloCardWithCompletion[];
}

const CardList: React.FC<CardListProps> = ({ cards }) => {
  const handleExport = () => {
    if (cards.length === 0) return;
    const jsonString = JSON.stringify(cards, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `trello-filtered-cards-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex flex-col h-full bg-gray-900/50 rounded-lg p-1">
      <div className="flex justify-between items-center p-3 border-b border-gray-700">
        <h3 className="font-semibold text-white">
          Filtered Cards <span className="text-gray-400 font-normal text-sm">({cards.length})</span>
        </h3>
        <button
          onClick={handleExport}
          disabled={cards.length === 0}
          className="flex items-center gap-2 px-3 py-1.5 text-xs font-semibold bg-cyan-600 text-white rounded-md hover:bg-cyan-500 disabled:bg-gray-600 disabled:cursor-not-allowed transition-colors"
        >
          <DownloadIcon className="w-4 h-4" />
          Export
        </button>
      </div>

      <div className="flex-grow overflow-y-auto pr-2">
        {cards.length === 0 ? (
          <div className="flex items-center justify-center h-full text-center text-gray-500">
            <p>No cards found for the selected period.<br/>Upload a file and apply a filter.</p>
          </div>
        ) : (
          <ul className="divide-y divide-gray-800">
            {cards.map(card => (
              <li key={card.id} className="p-3">
                <p className="font-medium text-gray-200 truncate">{card.name}</p>
                <p className="text-xs text-gray-400">
                  Completed: {new Date(card.completionDate).toLocaleString()}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CardList;
