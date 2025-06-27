'use client';

import React from 'react';
import { useTask } from '@/contexts/TaskContext';

interface Task {
  id: number;
  section: string;
  title: string;
  description: string;
  outcome: string;
  cost: string;
  confidence: string;
  completed?: boolean;
}

interface TaskCardProps {
  task: Task;
}

export function TaskCard({ task }: TaskCardProps) {
  const { toggleTaskCompletion } = useTask();

  const handleRightClick = (e: React.MouseEvent) => {
    e.preventDefault();
    toggleTaskCompletion(task.id);
  };

  const getConfidenceColor = (confidence: string) => {
    const num = parseInt(confidence.replace('%', ''));
    if (num >= 80) return 'bg-green-900/50 text-green-300 border-green-600';
    if (num >= 60) return 'bg-yellow-900/50 text-yellow-300 border-yellow-600';
    return 'bg-red-900/50 text-red-300 border-red-600';
  };

  return (
    <div
      className={`p-4 border rounded-lg cursor-pointer transition-all hover:shadow-lg ${
        task.completed 
          ? 'bg-neutral-800/50 border-neutral-600' 
          : 'bg-neutral-800 border-neutral-600 hover:bg-neutral-700'
      }`}
      onClick={() => toggleTaskCompletion(task.id)}
      onContextMenu={handleRightClick}
    >
      <div className="flex items-start justify-between mb-2">
        <h3 className={`font-medium ${task.completed ? 'line-through text-neutral-500' : 'text-neutral-200'}`}>
          {task.title}
        </h3>
        <span className={`px-2 py-1 text-xs rounded-full border ${getConfidenceColor(task.confidence)}`}>
          {task.confidence}
        </span>
      </div>
      
      <p className="text-sm text-neutral-400 mb-3">{task.description}</p>
      
      <div className="space-y-1 text-sm">
        <div className="flex justify-between">
          <span className="text-neutral-500">Outcome:</span>
          <span className="font-medium text-neutral-300">{task.outcome}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-neutral-500">Cost:</span>
          <span className="font-medium text-neutral-300">{task.cost}</span>
        </div>
      </div>
      
      {task.completed && (
        <div className="mt-3 pt-2 border-t border-neutral-600">
          <span className="text-xs text-green-400 font-medium">✓ Completed</span>
        </div>
      )}
    </div>
  );
} 