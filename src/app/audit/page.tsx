const demoRuns = [
  { id: "r1", label: "Welcome email sent", status: "success" },
  { id: "r2", label: "Trello card created", status: "success" },
  { id: "r3", label: "Calendly call booking", status: "fail" },
  { id: "r4", label: "Slack notification", status: "running" },
];

function StatusChip({ status }: { status: string }) {
  const color =
    status === "success"
      ? "bg-green-100 text-green-800"
      : status === "fail"
      ? "bg-red-100 text-red-800"
      : "bg-yellow-100 text-yellow-800";
  const label =
    status === "success"
      ? "Success"
      : status === "fail"
      ? "Fail"
      : "Running";
  return (
    <span className={`px-2 py-0.5 rounded text-xs font-medium ${color}`}>{label}</span>
  );
}

export default function AuditPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Audit Feed</h1>
      <div className="space-y-4">
        {demoRuns.map((run) => (
          <div key={run.id} className="flex items-center gap-4 p-4 bg-white rounded shadow-sm border">
            <div className="flex-1">
              <div className="font-medium">{run.label}</div>
              <div className="text-xs text-gray-400">ID: {run.id}</div>
            </div>
            <StatusChip status={run.status} />
          </div>
        ))}
      </div>
    </div>
  );
} 