'use client';

import React, { useState } from 'react';

export function ChatDock() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [messages, setMessages] = useState<Array<{ id: number; text: string; isUser: boolean }>>([
    { id: 1, text: "Hello! I'm here to help with your plan.", isUser: false }
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleSend = () => {
    if (inputValue.trim()) {
      const newMessage = { id: Date.now(), text: inputValue, isUser: true };
      setMessages(prev => [...prev, newMessage]);
      setInputValue('');
      
      // Mock response
      setTimeout(() => {
        const response = { id: Date.now() + 1, text: "I understand. Let me help you with that.", isUser: false };
        setMessages(prev => [...prev, response]);
      }, 1000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  if (isCollapsed) {
    return (
      <div className="p-2 border-t border-neutral-700 bg-neutral-900">
        <button
          onClick={() => setIsCollapsed(false)}
          className="w-full p-2 text-sm text-neutral-400 hover:bg-neutral-800 rounded"
        >
          💬 Chat (click to expand)
        </button>
      </div>
    );
  }

  return (
    <div className="border-t border-neutral-700 bg-neutral-900">
      <div className="p-3 border-b border-neutral-700 bg-neutral-800 flex justify-between items-center">
        <h3 className="font-medium text-neutral-100">Chat</h3>
        <button
          onClick={() => setIsCollapsed(true)}
          className="text-neutral-400 hover:text-neutral-200"
        >
          ✕
        </button>
      </div>
      
      <div className="h-32 overflow-y-auto p-3 space-y-2 bg-neutral-900">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`text-sm ${
              message.isUser ? 'text-right' : 'text-left'
            }`}
          >
            <div
              className={`inline-block p-2 rounded-lg max-w-xs ${
                message.isUser
                  ? 'bg-blue-600 text-white'
                  : 'bg-neutral-700 text-neutral-200'
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>
      
      <div className="p-3 border-t border-neutral-700 bg-neutral-900">
        <div className="flex gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type a message..."
            className="flex-1 px-3 py-2 border border-neutral-600 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-neutral-800 text-neutral-100 placeholder-neutral-400"
          />
          <button
            onClick={handleSend}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
} 