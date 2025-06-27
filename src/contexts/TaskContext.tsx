'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

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

interface TaskContextType {
  tasks: Task[];
  setTasks: (tasks: Task[]) => void;
  toggleTaskCompletion: (taskId: number) => void;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export function TaskProvider({ children }: { children: ReactNode }) {
  const [tasks, setTasks] = useState<Task[]>([]);

  const toggleTaskCompletion = (taskId: number) => {
    setTasks(prevTasks => 
      prevTasks.map(task => 
        task.id === taskId 
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  return (
    <TaskContext.Provider value={{ tasks, setTasks, toggleTaskCompletion }}>
      {children}
    </TaskContext.Provider>
  );
}

export function useTask() {
  const context = useContext(TaskContext);
  if (context === undefined) {
    throw new Error('useTask must be used within a TaskProvider');
  }
  return context;
} 