
import React, { useState, useCallback } from 'react';
import type { TrelloBoard, TrelloCardWithCompletion } from './types';
import { filterCompletedCards } from './services/trelloService';
import FileUpload from './components/FileUpload';
import CardFilter from './components/CardFilter';
import CardList from './components/CardList';
import ChatInterface from './components/ChatInterface';
import { AnalyticsIcon, ChatIcon, LogoIcon } from './components/Icons';

const App: React.FC = () => {
  const [trelloData, setTrelloData] = useState<TrelloBoard | null>(null);
  const [filteredCards, setFilteredCards] = useState<TrelloCardWithCompletion[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<'day' | 'month' | null>(null);

  const handleFileUpload = (data: TrelloBoard) => {
    setTrelloData(data);
    setFilteredCards([]);
    setActiveFilter(null);
    setError(null);
  };

  const handleFilterChange = useCallback((period: 'day' | 'month') => {
    if (!trelloData) {
      setError("Please upload a Trello JSON file first.");
      return;
    }
    try {
      const cards = filterCompletedCards(trelloData, period);
      setFilteredCards(cards);
      setActiveFilter(period);
      setError(null);
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message);
      } else {
        setError("An unknown error occurred during filtering.");
      }
      setFilteredCards([]);
    }
  }, [trelloData]);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col">
      <header className="bg-gray-800/50 backdrop-blur-sm border-b border-gray-700 sticky top-0 z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <LogoIcon className="h-8 w-8 text-cyan-400" />
            <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Trello AI Assistant
            </h1>
          </div>
        </div>
      </header>
      
      <main className="flex-grow container mx-auto p-4 sm:p-6 lg:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
          
          {/* Left Column: Data Management */}
          <div className="flex flex-col gap-6 bg-gray-800/60 p-6 rounded-2xl border border-gray-700 h-full">
            <div className="flex items-center gap-3">
              <AnalyticsIcon className="w-7 h-7 text-cyan-400"/>
              <h2 className="text-xl font-semibold text-white">1. Load & Filter Data</h2>
            </div>
            
            <FileUpload onFileUpload={handleFileUpload} onError={setError} />

            {trelloData && (
              <CardFilter onFilterChange={handleFilterChange} activeFilter={activeFilter} />
            )}
            
            {error && <p className="text-red-400 bg-red-900/50 p-3 rounded-lg text-sm">{error}</p>}
            
            <div className="flex-grow overflow-hidden">
                <CardList cards={filteredCards} />
            </div>
          </div>

          {/* Right Column: AI Chat */}
          <div className="flex flex-col gap-6 bg-gray-800/60 p-6 rounded-2xl border border-gray-700 h-full max-h-[85vh]">
             <div className="flex items-center gap-3">
              <ChatIcon className="w-7 h-7 text-cyan-400"/>
              <h2 className="text-xl font-semibold text-white">2. Chat with AI</h2>
            </div>
            <ChatInterface cards={filteredCards} />
          </div>

        </div>
      </main>
    </div>
  );
};

export default App;
