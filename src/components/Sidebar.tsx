import { MessageSquare, Shield } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface NavItemProps {
  label: string;
  href: string;
  disabled?: boolean;
  icon?: React.ReactNode;
}

function NavItem({ label, href, disabled = false, icon }: NavItemProps) {
  const baseClasses = "flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md transition-colors font-roboto";
  const inactiveClasses = "text-neutral-300 hover:text-white hover:bg-neutral-700";
  const disabledClasses = "text-neutral-600 cursor-not-allowed";

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
    <div className="flex items-center gap-2 px-3 py-4 border-b border-neutral-700 bg-neutral-800">
      <Image
        src="/logo.png"
        alt="Pamela Logo"
        width={32}
        height={32}
        className="rounded-lg"
        priority
      />
      <span className="font-semibold text-lg font-roboto text-white">Pamela</span>
    </div>
  );
}

export default function Sidebar() {
  return (
    <div className="flex flex-col h-full border-r border-neutral-700 bg-neutral-800 text-neutral-100 font-roboto">
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
          icon={<Shield className="w-4 h-4" />}
        />
      </nav>
    </div>
  );
} 