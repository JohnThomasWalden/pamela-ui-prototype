import { MessageSquare, Shield } from "lucide-react";
import Link from "next/link";

interface NavItemProps {
  label: string;
  href: string;
  disabled?: boolean;
  icon?: React.ReactNode;
}

function NavItem({ label, href, disabled = false, icon }: NavItemProps) {
  const baseClasses = "flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md transition-colors";
  const activeClasses = "bg-gray-100 text-gray-900";
  const inactiveClasses = "text-gray-600 hover:text-gray-900 hover:bg-gray-50";
  const disabledClasses = "text-gray-400 cursor-not-allowed";

  const classes = disabled 
    ? `${baseClasses} ${disabledClasses}`
    : `${baseClasses} ${inactiveClasses}`;

  const content = (
    <>
      {icon}
      {label}
    </>
  );

  if (disabled) {
    return (
      <div className={classes}>
        {content}
      </div>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}

function BrandLogo() {
  return (
    <div className="flex items-center gap-2 px-3 py-4 border-b">
      <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
        <span className="text-white font-bold text-sm">P</span>
      </div>
      <span className="font-semibold text-lg">Pamela</span>
    </div>
  );
}

export default function Sidebar() {
  return (
    <div className="flex flex-col h-full border-r">
      <BrandLogo />
      <nav className="flex-1 p-3 space-y-1">
        <NavItem 
          label="Chat" 
          href="/" 
          icon={<MessageSquare className="w-4 h-4" />}
        />
        <NavItem 
          label="Audit" 
          href="/audit" 
          disabled 
          icon={<Shield className="w-4 h-4" />}
        />
      </nav>
    </div>
  );
} 