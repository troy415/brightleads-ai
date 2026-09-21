import { cn } from "cn";

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <svg
        viewBox="0 0 32 32"
        className="size-8 shrink-0"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="bl-mark" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0EA5E9" />
            <stop offset="100%" stopColor="#6366F1" />
          </linearGradient>
        </defs>
        <path
          d="M16 2.2 28.5 9.2v13.6L16 29.8 3.5 22.8V9.2L16 2.2Z"
          fill="url(#bl-mark)"
        />
        <path
          d="M11 10.2h6.1c2.5 0 4.1 1.4 4.1 3.4 0 1.4-.8 2.4-2.1 2.9 1.6.4 2.6 1.6 2.6 3.2 0 2.3-1.8 3.7-4.5 3.7H11V10.2Zm2.4 5h3.4c1.2 0 1.8-.6 1.8-1.4s-.6-1.4-1.8-1.4h-3.4v2.8Zm0 6.1h3.8c1.3 0 2-.6 2-1.6s-.7-1.5-2-1.5h-3.8v3.1Z"
          fill="#0a0f1e"
        />
      </svg>
      <span className="font-heading text-[15px] font-bold tracking-tight text-foreground">
        BrightLeads.AI
      </span>
    </span>
  );
}
