export default function StartLoading() {
  return (
    <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:py-20">
      <div className="space-y-4">
        <div className="h-3 w-28 animate-pulse rounded bg-muted" />
        <div className="h-12 w-4/5 animate-pulse rounded bg-muted" />
        <div className="h-24 w-full animate-pulse rounded bg-muted" />
      </div>
      <div className="h-[32rem] animate-pulse rounded-3xl bg-muted" />
    </div>
  );
}
