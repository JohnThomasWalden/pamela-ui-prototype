const demoRuns = [
  { id: "r1", label: "Welcome email sent", status: "success" },
  { id: "r2", label: "Trello card created", status: "success" },
  { id: "r3", label: "Calendly call booking", status: "fail" },
  { id: "r4", label: "Slack notification", status: "running" },
];

function StatusChip({ status }: { status: string }) {
  const color =
    status === "success"
      ? "bg-[#FAC42B] text-neutral-900"
      : status === "fail"
      ? "bg-red-500 text-white"
      : "bg-[#FAC42B] text-neutral-900 opacity-70";
  const label =
    status === "success"
      ? "Success"
      : status === "fail"
      ? "Fail"
      : "Running";
  return (
    <span className={`px-2 py-0.5 rounded text-xs font-medium font-roboto ${color}`}>{label}</span>
  );
}

export default function AuditPage() {
  return (
    <div className="p-8 bg-neutral-900 min-h-screen font-roboto text-neutral-100">
      <h1 className="text-2xl font-bold mb-6 text-white">Audit Feed</h1>
      <div className="space-y-4">
        {demoRuns.map((run) => (
          <div key={run.id} className="flex items-center gap-4 p-4 bg-neutral-800 rounded shadow-sm border border-neutral-700">
            <div className="flex-1">
              <div className="font-medium text-neutral-100 font-roboto">{run.label}</div>
              <div className="text-xs text-neutral-400 font-roboto">ID: {run.id}</div>
            </div>
            <StatusChip status={run.status} />
          </div>
        ))}
      </div>
    </div>
  );
} 