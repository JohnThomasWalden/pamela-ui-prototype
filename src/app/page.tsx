import ChatPanel from "@/components/ChatPanel";
import PlanPreview from "@/components/PlanPreview";

export default function HomePage() {
  return (
    <div className="flex h-full min-h-[80vh]">
      <div className="w-1/2 border-r">
        <ChatPanel />
      </div>
      <div className="w-1/2">
        <PlanPreview />
      </div>
    </div>
  );
}
