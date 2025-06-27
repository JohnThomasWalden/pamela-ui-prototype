'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Plan {
  id: string;
  title: string;
  mdPath: string;
}

interface PlanContextType {
  plans: Plan[];
  activePlanId: string | null;
  setActivePlanId: (id: string) => void;
}

const PlanContext = createContext<PlanContextType | undefined>(undefined);

export function PlanProvider({ children }: { children: ReactNode }) {
  const [activePlanId, setActivePlanId] = useState<string | null>('demo');
  
  const plans: Plan[] = [
    { 
      id: 'demo', 
      title: 'Demo Plan', 
      mdPath: '/plans/demo-plan.md'
    }
  ];

  return (
    <PlanContext.Provider value={{ plans, activePlanId, setActivePlanId }}>
      {children}
    </PlanContext.Provider>
  );
}

export function usePlan() {
  const context = useContext(PlanContext);
  if (context === undefined) {
    throw new Error('usePlan must be used within a PlanProvider');
  }
  return context;
} 