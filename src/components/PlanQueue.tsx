'use client';

import React from 'react';
import { usePlan } from '@/contexts/PlanContext';

export function PlanQueue() {
  const { plans, activePlanId, setActivePlanId } = usePlan();

  return (
    <div className="p-4 bg-neutral-900">
      <h2 className="text-lg font-semibold mb-3 text-neutral-100">Plans</h2>
      <div className="space-y-2">
        {plans.map((plan) => (
          <button
            key={plan.id}
            onClick={() => setActivePlanId(plan.id)}
            className={`w-full text-left p-3 rounded-lg border transition-colors ${
              activePlanId === plan.id
                ? 'bg-blue-900/50 border-blue-600 text-blue-100'
                : 'bg-neutral-800 border-neutral-600 hover:bg-neutral-700 text-neutral-200'
            }`}
          >
            <div className="font-medium">{plan.title}</div>
          </button>
        ))}
      </div>
    </div>
  );
} 