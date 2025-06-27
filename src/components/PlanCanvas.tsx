'use client';

import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { usePlan } from '@/contexts/PlanContext';
import { loadMarkdown } from '@/lib/loaders';

export function PlanCanvas() {
  const { plans, activePlanId } = usePlan();
  const [markdown, setMarkdown] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const activePlan = plans.find(plan => plan.id === activePlanId);

  useEffect(() => {
    if (activePlan) {
      setLoading(true);
      loadMarkdown(activePlan.mdPath)
        .then(setMarkdown)
        .catch(error => {
          console.error('Error loading plan:', error);
          setMarkdown('# Error\n\nUnable to load plan content.');
        })
        .finally(() => setLoading(false));
    }
  }, [activePlan]);

  if (loading) {
    return (
      <div className="p-6 bg-pam-canvas">
        <div className="animate-pulse">
          <div className="h-4 bg-pam-surface rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-pam-surface rounded w-1/2 mb-4"></div>
          <div className="h-4 bg-pam-surface rounded w-5/6"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 prose prose-sm max-w-none overflow-hidden prose-invert bg-pam-canvas">
      <ReactMarkdown 
        components={{
          h1: ({ children }) => <h1 className="text-2xl font-bold mb-4 break-words text-pam-text">{children}</h1>,
          h2: ({ children }) => <h2 className="text-xl font-semibold mb-3 mt-6 break-words text-pam-text">{children}</h2>,
          h3: ({ children }) => <h3 className="text-lg font-medium mb-2 mt-4 break-words text-pam-subtle">{children}</h3>,
          p: ({ children }) => <p className="mb-3 break-words text-pam-subtle">{children}</p>,
          strong: ({ children }) => <strong className="font-semibold break-words text-pam-text">{children}</strong>,
        }}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
} 