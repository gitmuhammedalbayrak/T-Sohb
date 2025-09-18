
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { GoogleGenAI, Chat } from '@google/genai';
import type { TrelloCardWithCompletion, ChatMessage } from '../types';
import { SendIcon, UserIcon, AiIcon } from './Icons';

interface ChatInterfaceProps {
  cards: TrelloCardWithCompletion[];
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ cards }) => {
  const [chat, setChat] = useState<Chat | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (cards.length > 0) {
      const initChat = async () => {
        setIsLoading(true);
        setIsReady(false);
        setMessages([]);
        try {
          const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
          const newChat = ai.chats.create({
            model: 'gemini-2.5-flash',
            config: {
              systemInstruction: `You are an expert assistant for analyzing Trello project data. The user has provided you with a JSON array of Trello cards that have been recently completed. Your task is to answer the user's questions based *only* on the provided data. Do not make up information. Be concise and helpful. The data is: ${JSON.stringify(cards)}`,
            },
          });
          setChat(newChat);
          setIsReady(true);
          setMessages([
              { id: 'init', sender: 'ai', text: `Ready! I've analyzed ${cards.length} completed card(s). Ask me anything about them.`}
          ]);
        } catch (error) {
          console.error('Failed to initialize AI chat:', error);
          setMessages([{ id: 'error', sender: 'ai', text: 'Sorry, I could not connect to the AI service. Please check your API key and network connection.' }]);
        } finally {
          setIsLoading(false);
        }
      };
      initChat();
    } else {
      setIsReady(false);
      setMessages([]);
      setChat(null);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cards]);

  const sendMessage = useCallback(async () => {
    if (!input.trim() || !chat || isLoading) return;

    const userMessage: ChatMessage = { id: Date.now().toString(), sender: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    const aiMessageId = (Date.now() + 1).toString();
    setMessages(prev => [...prev, { id: aiMessageId, sender: 'ai', text: '', isLoading: true }]);

    try {
      const stream = await chat.sendMessageStream({ message: input });
      let fullText = '';
      for await (const chunk of stream) {
        fullText += chunk.text;
        setMessages(prev => prev.map(msg => msg.id === aiMessageId ? { ...msg, text: fullText, isLoading: true } : msg));
      }
      setMessages(prev => prev.map(msg => msg.id === aiMessageId ? { ...msg, text: fullText, isLoading: false } : msg));
    } catch (error) {
      console.error('Error sending message:', error);
      const errorText = error instanceof Error ? error.message : "An unknown error occurred.";
      setMessages(prev => prev.map(msg => msg.id === aiMessageId ? { ...msg, text: `Sorry, something went wrong: ${errorText}`, isLoading: false } : msg));
    } finally {
      setIsLoading(false);
    }
  }, [input, chat, isLoading]);

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      sendMessage();
    }
  };

  const renderMessage = (msg: ChatMessage) => {
    const isUser = msg.sender === 'user';
    return (
      <div key={msg.id} className={`flex items-start gap-3 my-4 ${isUser ? 'justify-end' : ''}`}>
        {!isUser && <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center"><AiIcon className="w-5 h-5 text-white" /></div>}
        <div className={`max-w-md lg:max-w-lg p-3 rounded-xl ${isUser ? 'bg-cyan-600 text-white rounded-br-none' : 'bg-gray-700 text-gray-200 rounded-bl-none'}`}>
          <p className="text-sm leading-relaxed">{msg.text}</p>
          {msg.isLoading && <span className="animate-pulse">...</span>}
        </div>
        {isUser && <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center"><UserIcon className="w-5 h-5 text-gray-200"/></div>}
      </div>
    );
  };

  return (
    <div className="flex flex-col h-full bg-gray-900/50 rounded-lg">
      <div className="flex-grow p-4 overflow-y-auto">
        {messages.length === 0 ? (
          <div className="flex items-center justify-center h-full text-center text-gray-500">
            <p>Filter some cards on the left to start chatting.</p>
          </div>
        ) : (
          messages.map(renderMessage)
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 border-t border-gray-700">
        <div className="relative">
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={!isReady ? "Waiting for data..." : "Ask about your cards..."}
            disabled={!isReady || isLoading}
            className="w-full bg-gray-700 border border-gray-600 text-gray-200 rounded-full py-3 pl-4 pr-12 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-200 disabled:opacity-50"
          />
          <button
            onClick={sendMessage}
            disabled={!isReady || isLoading || !input.trim()}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center bg-cyan-500 text-white rounded-full hover:bg-cyan-400 disabled:bg-gray-600 disabled:cursor-not-allowed transition-colors"
          >
            <SendIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
