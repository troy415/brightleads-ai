export function ProductPreview() {
  const inquiries = [
    {
      family: "Chen family",
      need: "Memory care · San Mateo",
      stage: "Touring",
      owner: "A. Reyes",
    },
    {
      family: "Patel / daughter",
      need: "Assisted living · Walnut Creek",
      stage: "New",
      owner: "You",
    },
    {
      family: "Harris, Robert",
      need: "Board & care · SF",
      stage: "Placed",
      owner: "J. Cole",
    },
  ];

  const communities = [
    { name: "Harborview Terrace", status: "3 openings", rel: "Preferred" },
    { name: "Elm & Grove AL", status: "Waitlist", rel: "Active" },
    { name: "Pacific Memory Care", status: "Tours Wed/Fri", rel: "Partner" },
  ];

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#081324] shadow-[0_30px_80px_-20px_rgba(8,19,36,0.55)]">
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <span className="size-2.5 rounded-full bg-[#ff5f57]" />
        <span className="size-2.5 rounded-full bg-[#febc2e]" />
        <span className="size-2.5 rounded-full bg-[#28c840]" />
        <p className="ml-3 text-xs tracking-wide text-white/50">
          BrightLeads.AI · Agency workspace
        </p>
      </div>
      <div className="grid gap-px bg-white/10 lg:grid-cols-[1.2fr_0.9fr]">
        <section className="bg-[#0c1b33] p-5 sm:p-6">
          <div className="mb-4 flex items-end justify-between">
            <div>
              <p className="text-xs font-medium tracking-[0.14em] text-[#2bb5ad] uppercase">
                Inquiries
              </p>
              <h3 className="mt-1 font-heading text-xl text-[#f6f2ea]">
                Today’s pipeline
              </h3>
            </div>
            <span className="rounded-full bg-[#1b8a84]/20 px-2.5 py-1 text-[11px] text-[#d7eeec]">
              12 open
            </span>
          </div>
          <div className="space-y-2">
            {inquiries.map((row) => (
              <div
                key={row.family}
                className="flex items-center justify-between gap-3 rounded-xl border border-white/8 bg-white/5 px-3 py-3"
              >
                <div>
                  <p className="text-sm font-medium text-[#f6f2ea]">
                    {row.family}
                  </p>
                  <p className="text-xs text-white/50">{row.need}</p>
                </div>
                <div className="text-right">
                  <p className="text-[11px] font-medium text-[#c4a574]">
                    {row.stage}
                  </p>
                  <p className="text-[11px] text-white/40">{row.owner}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="bg-[#10203d] p-5 sm:p-6">
          <p className="text-xs font-medium tracking-[0.14em] text-[#2bb5ad] uppercase">
            Communities
          </p>
          <h3 className="mt-1 font-heading text-xl text-[#f6f2ea]">
            Relationships
          </h3>
          <ul className="mt-4 space-y-3">
            {communities.map((c) => (
              <li
                key={c.name}
                className="border-b border-white/10 pb-3 last:border-0"
              >
                <div className="flex items-center justify-between gap-2">
                  <p className="text-sm text-[#f6f2ea]">{c.name}</p>
                  <span className="text-[11px] text-[#d7eeec]">{c.rel}</span>
                </div>
                <p className="text-xs text-white/45">{c.status}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
