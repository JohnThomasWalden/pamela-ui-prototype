const demoRuns = [
  { id: "r1", label: "Welcome email sent", status: "success" },
  { id: "r2", label: "Trello card created", status: "success" },
  { id: "r3", label: "Calendly call booking", status: "fail" },
  { id: "r4", label: "Slack notification", status: "running" },
];

function StatusChip({ status }: { status: string }) {
  const color =
    status === "success"
      ? "bg-pam-accent2/20 text-pam-accent2"
      : status === "fail"
      ? "bg-red-500/20 text-red-400"
      : "bg-pam-accent1/20 text-pam-accent1";
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
    <div className="p-8 bg-pam-canvas min-h-screen font-roboto text-pam-text">
      <h1 className="text-2xl font-bold mb-6 text-pam-text">Audit Feed</h1>
      <div className="space-y-4">
        {demoRuns.map((run) => (
          <div key={run.id} className="flex items-center gap-4 p-4 bg-pam-surface rounded-xl shadow-surface border border-pam-subtle/30">
            <div className="flex-1">
              <div className="font-medium text-pam-text font-roboto">{run.label}</div>
              <div className="text-xs text-pam-subtle font-roboto">ID: {run.id}</div>
            </div>
            <StatusChip status={run.status} />
          </div>
        ))}
      </div>
    </div>
  );
} 