import { cn } from "@/lib/utils";

interface PillProps {
  children: React.ReactNode;
  variant?: "default" | "success" | "warning" | "error";
  className?: string;
  dot?: boolean;
}

export function Pill({
  children,
  variant = "default",
  className,
  dot = false,
}: PillProps) {
  const variants = {
    default: "bg-gray-100 text-gray-700",
    success: "bg-green-50 text-green-700",
    warning: "bg-amber-50 text-amber-700",
    error: "bg-red-50 text-red-700",
  };

  const dotColors = {
    default: "bg-gray-400",
    success: "bg-green-500",
    warning: "bg-amber-500",
    error: "bg-red-500",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium",
        variants[variant],
        className
      )}
    >
      {dot && (
        <span className={cn("w-1.5 h-1.5 rounded-full", dotColors[variant])} />
      )}
      {children}
    </span>
  );
}