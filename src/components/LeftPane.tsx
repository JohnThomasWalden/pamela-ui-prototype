'use client';

import React from 'react';
import { PlanQueue } from './PlanQueue';
import { PlanCanvas } from './PlanCanvas';
import { ChatDock } from './ChatDock';

export function LeftPane() {
  return (
    <div className="flex flex-col h-full w-full min-w-0 bg-neutral-900">
      {/* PlanQueue - Top section */}
      <div className="flex-shrink-0 border-b border-neutral-700">
        <PlanQueue />
      </div>
      
      {/* PlanCanvas - Middle section */}
      <div className="flex-1 overflow-auto min-w-0">
        <PlanCanvas />
      </div>
      
      {/* ChatDock - Bottom section */}
      <div className="flex-shrink-0 border-t border-neutral-700">
        <ChatDock />
      </div>
    </div>
  );
} 