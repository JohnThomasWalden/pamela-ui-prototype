"use client";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Plan } from "@/../types/plan";

// If you have Sonner, import it. Otherwise, fallback to alert.
// import { toast } from "sonner";

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
  const [selected, setSelected] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading plan.</div>;
  if (!data) return null;

  const handleCheckbox = (taskId: string, checked: boolean) => {
    setSelected((prev) =>
      checked ? [...prev, taskId] : prev.filter((id) => id !== taskId)
    );
  };

  const handleRun = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/execute", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ taskIds: selected }),
      });
      const result = await res.json();
      if (result.success) {
        // toast.success("Tasks executed!");
        alert("Tasks executed!");
      } else {
        // toast.error("Failed to execute tasks.");
        alert("Failed to execute tasks.");
      }
    } catch {
      // toast.error("Failed to execute tasks.");
      alert("Failed to execute tasks.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4 p-6 bg-neutral-900 font-roboto text-neutral-100">
      <h2 className="text-xl font-semibold mb-4 text-white">Task List</h2>
      <div className="space-y-2">
        {data.tasks.map((task) => (
          <div key={task.id} className="flex items-center gap-2">
            <Checkbox
              defaultChecked={task.suggested}
              id={task.id}
              onCheckedChange={(checked) => handleCheckbox(task.id, !!checked)}
            />
            <label htmlFor={task.id} className="text-sm text-neutral-100 font-roboto">{task.label}</label>
          </div>
        ))}
      </div>
      <button
        className="px-4 py-2 bg-[#FAC42B] text-neutral-900 rounded font-semibold disabled:opacity-50 font-roboto border border-neutral-700"
        onClick={handleRun}
        disabled={selected.length === 0 || loading}
      >
        {loading ? "Running..." : "Run selected tasks"}
      </button>
    </div>
  );
} 