import { LeftPane } from "@/components/LeftPane";
import { RightPane } from "@/components/RightPane";

export default function HomePage() {
  return (
    <div className="flex h-screen bg-pam-canvas">
      {/* Gradient brand bar */}
      <div className="w-1 bg-gradient-to-b from-pam-accent1 to-pam-accent2"></div>
      <div className="flex-1 border-r border-pam-subtle/20">
        <LeftPane />
      </div>
      <div className="flex-1">
        <RightPane />
      </div>
    </div>
  );
}
