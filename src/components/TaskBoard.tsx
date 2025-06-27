'use client';

import React, { useEffect } from 'react';
import { useTask } from '@/contexts/TaskContext';
import { loadTasks } from '@/lib/loaders';
import { TaskCard } from './TaskCard';

export function TaskBoard() {
  const { tasks, setTasks } = useTask();

  useEffect(() => {
    loadTasks('/mock/task-array.json')
      .then(setTasks)
      .catch(error => {
        console.error('Error loading tasks:', error);
      });
  }, [setTasks]);

  const groupedTasks = tasks.reduce((acc, task) => {
    if (!acc[task.section]) {
      acc[task.section] = [];
    }
    acc[task.section].push(task);
    return acc;
  }, {} as Record<string, typeof tasks>);

  return (
    <div className="h-full overflow-auto bg-pam-canvas">
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6 text-pam-text">Task Board</h1>
        
        <div className="space-y-6">
          {Object.entries(groupedTasks).map(([section, sectionTasks]) => (
            <div key={section}>
              <h2 className="text-lg font-semibold mb-3 text-pam-subtle">{section}</h2>
              <div className="grid gap-4">
                {sectionTasks.map((task) => (
                  <TaskCard key={task.id} task={task} />
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {tasks.length === 0 && (
          <div className="text-center py-12 text-pam-subtle">
            <div className="text-lg mb-2">No tasks loaded</div>
            <div className="text-sm">Tasks will appear here once loaded</div>
          </div>
        )}
      </div>
    </div>
  );
} 