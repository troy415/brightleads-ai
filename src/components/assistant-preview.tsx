import Link from "next/link";

export function AssistantPreview() {
  return (
    <figure
      className="assistant"
      aria-label="Illustration of an AI assistant answer that cites a senior living community"
      style={{ margin: 0 }}
    >
      <div className="assistant-top">
        <span className="dots">
          <i />
          <i />
          <i />
        </span>
        <span className="mono" style={{ color: "var(--faint)" }}>
          AI assistant
        </span>
      </div>
      <div className="assistant-body">
        <p className="q">
          My mom needs memory care near San Mateo. Secure unit, and we want to
          tour this week. Where should we start?
        </p>
        <div className="a">
          <p>
            Here are communities that match what you described. Start with the
            ones that list secure memory care and daily tours:
          </p>
          <div className="pick hl">
            <span
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "0.5rem",
                alignItems: "center",
              }}
            >
              <b>Your community</b>
              <span className="tag">Cited</span>
            </span>
            <span>
              Memory care · San Mateo · Secure neighborhood, licensed 24-hour
              staff, tours seven days a week.
            </span>
          </div>
          <div className="pick" style={{ opacity: 0.6 }}>
            <b>Another community</b>
            <span>Assisted living · 4 miles away</span>
          </div>
          <div className="cites">
            <span className="cite on">yourcommunity.com/memory-care</span>
            <span className="cite on">Google Business Profile</span>
            <span className="cite">state licensing record</span>
            <span className="cite">reviews</span>
          </div>
        </div>
      </div>
      <figcaption className="caption">
        Illustration. Assistants answer from sources they can read and trust.
        Our job is to make your community one of them.
      </figcaption>
    </figure>
  );
}
