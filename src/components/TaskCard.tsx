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
    if (num >= 80) return 'bg-pam-accent2/20 text-pam-accent2 border-pam-accent2';
    if (num >= 60) return 'bg-yellow-900/50 text-yellow-300 border-yellow-600';
    return 'bg-red-900/50 text-red-300 border-red-600';
  };

  return (
    <div
      className={`p-4 border rounded-xl cursor-pointer transition-all hover:shadow-lg shadow-surface ${
        task.completed 
          ? 'bg-pam-surface/50 border-pam-subtle/30' 
          : 'bg-pam-surface border-pam-subtle/30 hover:bg-pam-surface/80'
      }`}
      onClick={() => toggleTaskCompletion(task.id)}
      onContextMenu={handleRightClick}
    >
      <div className="flex items-start justify-between mb-2">
        <h3 className={`font-medium ${task.completed ? 'line-through text-pam-subtle/60' : 'text-pam-text'}`}>
          {task.title}
        </h3>
        <span className={`px-2 py-1 text-xs rounded-full border ${getConfidenceColor(task.confidence)}`}>
          {task.confidence}
        </span>
      </div>
      
      <p className="text-sm text-pam-subtle mb-3">{task.description}</p>
      
      <div className="space-y-1 text-sm">
        <div className="flex justify-between">
          <span className="text-pam-subtle/70">Outcome:</span>
          <span className="font-medium text-pam-text">{task.outcome}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-pam-subtle/70">Cost:</span>
          <span className="font-medium text-pam-text">{task.cost}</span>
        </div>
      </div>
      
      {task.completed && (
        <div className="mt-3 pt-2 border-t border-pam-subtle/30">
          <span className="text-xs text-pam-accent2 font-medium">✓ Completed</span>
        </div>
      )}
    </div>
  );
} 