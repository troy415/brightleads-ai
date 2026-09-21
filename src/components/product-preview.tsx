export function ProductPreview() {
  const inquiries = [
    { family: "Margaret Chen", need: "Memory care · Today", stage: "Urgent" },
    { family: "Patel / daughter", need: "Assisted living · Walnut Creek", stage: "New" },
    { family: "Robert Harris", need: "Board & care · SF", stage: "Touring" },
  ];

  return (
    <div className="overflow-hidden rounded-[10px] border border-border bg-[#0f1729] shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
      <div className="flex min-h-[420px]">
        <aside className="hidden w-[168px] shrink-0 border-r border-border bg-[#0f1729] p-3 sm:block">
          <div className="mb-5 flex items-center gap-2 px-1">
            <span className="size-6 rounded-md bg-gradient-to-br from-sky-400 to-indigo-500" />
            <div>
              <p className="font-heading text-[11px] font-bold leading-none">
                BrightLeads.AI
              </p>
              <p className="mt-0.5 text-[9px] tracking-wide text-muted-foreground uppercase">
                Placement
              </p>
            </div>
          </div>
          <p className="px-2 pb-1 text-[9px] font-semibold tracking-[0.12em] text-[#4a5a7a] uppercase">
            Workspace
          </p>
          <div className="space-y-0.5 text-[12px]">
            <div className="rounded-[7px] border border-sky-400/20 bg-gradient-to-r from-sky-400/15 to-indigo-500/15 px-2.5 py-2 font-medium text-sky-400">
              Dashboard
            </div>
            {["Pipeline", "Clients", "Communities"].map((item) => (
              <div
                key={item}
                className="rounded-[7px] px-2.5 py-2 text-[#8b9cc8]"
              >
                {item}
              </div>
            ))}
          </div>
        </aside>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-3 border-b border-border px-4 py-2.5">
            <p className="text-[13px] font-medium">Dashboard</p>
            <div className="ml-auto hidden items-center gap-2 sm:flex">
              <span className="rounded-full border border-sky-400/30 bg-sky-400/10 px-2 py-0.5 text-[10px] font-semibold text-sky-400">
                Advisor
              </span>
              <span className="rounded-lg bg-gradient-to-r from-sky-400 to-indigo-500 px-2.5 py-1 text-[11px] font-semibold text-white">
                + New lead
              </span>
            </div>
          </div>
          <div className="p-4">
            <p className="font-heading text-lg font-bold">Today’s pipeline</p>
            <p className="text-[11px] text-[#4a5a7a]">
              Your leads · Your communities
            </p>
            <div className="mt-3 grid grid-cols-3 gap-2">
              {[
                { n: "12", l: "Open inquiries", c: "text-sky-400" },
                { n: "5", l: "Tours this week", c: "text-amber-400" },
                { n: "17", l: "Communities", c: "text-emerald-400" },
              ].map((stat) => (
                <div
                  key={stat.l}
                  className="rounded-[10px] border border-border bg-[#0a0f1e] px-3 py-2.5"
                >
                  <p className={`font-heading text-xl font-bold ${stat.c}`}>
                    {stat.n}
                  </p>
                  <p className="text-[10px] text-[#8b9cc8]">{stat.l}</p>
                </div>
              ))}
            </div>
            <div className="mt-3 rounded-[10px] border border-border">
              <div className="flex items-center justify-between border-b border-border px-3 py-2">
                <p className="text-[12px] font-semibold">My priority queue</p>
                <span className="text-[10px] text-sky-400">All leads</span>
              </div>
              <div className="divide-y divide-border">
                {inquiries.map((row) => (
                  <div
                    key={row.family}
                    className="flex items-center justify-between gap-3 px-3 py-2.5"
                  >
                    <div>
                      <p className="text-[13px] font-medium">{row.family}</p>
                      <p className="text-[11px] text-[#8b9cc8]">{row.need}</p>
                    </div>
                    <span
                      className={`rounded-full border px-2 py-0.5 text-[9px] font-bold tracking-wide uppercase ${
                        row.stage === "Urgent"
                          ? "border-red-500/30 bg-red-500/15 text-red-400"
                          : row.stage === "New"
                            ? "border-amber-400/30 bg-amber-400/15 text-amber-400"
                            : "border-sky-400/30 bg-sky-400/15 text-sky-400"
                      }`}
                    >
                      {row.stage}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
