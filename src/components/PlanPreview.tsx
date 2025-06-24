"use client";
import { useQuery } from "@tanstack/react-query";
import { Checkbox } from "@/components/ui/checkbox";
import { Plan } from "@/../types/plan";

async function fetchPlan() {
  const res = await fetch("/api/runPlan", { method: "POST" });
  const data = await res.json();
  return Plan.parse(data);
}

export default function PlanPreview() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["plan"],
    queryFn: fetchPlan,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading plan.</div>;
  if (!data) return null;

  return (
    <div className="space-y-2">
      {data.tasks.map((task) => (
        <Checkbox key={task.id} defaultChecked={task.suggested}>
          {task.label}
        </Checkbox>
      ))}
    </div>
  );
} 