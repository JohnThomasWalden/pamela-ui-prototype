'use client';

import React from 'react';
import { usePlan } from '@/contexts/PlanContext';

export function PlanQueue() {
  const { plans, activePlanId, setActivePlanId } = usePlan();

  return (
    <div className="p-4 bg-pam-canvas">
      <h2 className="text-lg font-semibold mb-3 text-pam-text">Plans</h2>
      <div className="space-y-2">
        {plans.map((plan) => (
          <button
            key={plan.id}
            onClick={() => setActivePlanId(plan.id)}
            className={`w-full text-left p-3 rounded-xl border transition-colors shadow-surface ${
              activePlanId === plan.id
                ? 'bg-pam-accent1/25 border-pam-accent1 text-pam-accent1'
                : 'bg-pam-surface border-pam-surface hover:bg-pam-surface/80 text-pam-text'
            }`}
          >
            <div className="font-medium">{plan.title}</div>
          </button>
        ))}
      </div>
    </div>
  );
} 