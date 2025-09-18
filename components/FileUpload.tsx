
import React, { useState, useCallback } from 'react';
import type { TrelloBoard } from '../types';
import { UploadIcon } from './Icons';

interface FileUploadProps {
  onFileUpload: (data: TrelloBoard) => void;
  onError: (message: string) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onFileUpload, onError }) => {
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  const processFile = (file: File) => {
    setFileName(file.name);
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const text = e.target?.result;
        if (typeof text !== 'string') {
          throw new Error('Failed to read file content.');
        }
        const data = JSON.parse(text);
        // Basic validation
        if (!data.name || !data.lists || !data.cards || !data.actions) {
          throw new Error('This does not seem to be a valid Trello board export file.');
        }
        onFileUpload(data);
      } catch (error) {
        onError(`Error parsing JSON file: ${error instanceof Error ? error.message : 'Unknown error'}`);
        setFileName(null);
      }
    };
    reader.onerror = () => {
      onError('Failed to read the file.');
      setFileName(null);
    };
    reader.readAsText(file);
  };
  
  const handleDragOver = useCallback((event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
  }, []);

  const handleDrop = useCallback((event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files?.[0];
    if (file && file.type === "application/json") {
      processFile(file);
    } else {
      onError("Please drop a valid JSON file.");
    }
  }, []);

  return (
    <div>
      <label
        htmlFor="file-upload"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        className="relative block w-full border-2 border-dashed border-gray-600 rounded-lg p-6 text-center cursor-pointer hover:border-cyan-400 transition-colors duration-200 bg-gray-800"
      >
        <div className="flex flex-col items-center">
          <UploadIcon className="mx-auto h-12 w-12 text-gray-500" />
          <span className="mt-2 block text-sm font-medium text-gray-300">
            <span className="text-cyan-400">Upload a file</span> or drag and drop
          </span>
          <p className="text-xs text-gray-500">Trello JSON export</p>
          {fileName && (
            <p className="mt-2 text-sm font-semibold text-green-400">
              Loaded: {fileName}
            </p>
          )}
        </div>
        <input
          id="file-upload"
          name="file-upload"
          type="file"
          className="sr-only"
          accept=".json,application/json"
          onChange={handleFileChange}
        />
      </label>
    </div>
  );
};

export default FileUpload;
