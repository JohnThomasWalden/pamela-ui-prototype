import { LeftPane } from "@/components/LeftPane";
import { RightPane } from "@/components/RightPane";

export default function HomePage() {
  return (
    <div className="flex h-screen bg-neutral-900">
      <div className="w-1/2 border-r border-neutral-700">
        <LeftPane />
      </div>
      <div className="w-1/2">
        <RightPane />
      </div>
    </div>
  );
}
