import { cn } from "cn";

export function Logo({
  className,
  onDark = false,
}: {
  className?: string;
  onDark?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <svg
        viewBox="0 0 32 32"
        className="size-8 shrink-0"
        aria-hidden="true"
      >
        <rect width="32" height="32" rx="8" fill={onDark ? "#F6F2EA" : "#0C1B33"} />
        <path
          d="M9 8.5h8.2c3.4 0 5.6 1.9 5.6 4.7 0 1.9-1.1 3.3-2.9 4 2.2.6 3.5 2.2 3.5 4.4 0 3.1-2.4 5.1-6.1 5.1H9V8.5Zm3.3 6.9h4.7c1.6 0 2.5-.8 2.5-2s-.9-1.9-2.5-1.9h-4.7v3.9Zm0 8.3h5.2c1.8 0 2.8-.9 2.8-2.2s-1-2.1-2.8-2.1h-5.2v4.3Z"
          fill={onDark ? "#0C1B33" : "#F6F2EA"}
        />
        <circle cx="24.2" cy="8.2" r="2.1" fill="#1B8A84" />
      </svg>
      <span
        className={cn(
          "text-[15px] font-semibold tracking-tight",
          onDark ? "text-primary-foreground" : "text-foreground"
        )}
      >
        BrightLeads.AI
      </span>
    </span>
  );
}
