'use client';

import React from 'react';
import { TaskBoard } from './TaskBoard';

export function RightPane() {
  return (
    <div className="flex-1 h-full bg-neutral-900">
      <TaskBoard />
    </div>
  );
} 