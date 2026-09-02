/**
 * Route-level skeleton shown during navigation while the page streams in.
 * Mirrors the hero + trust-bar layout so the swap-in feels instant, not jarring.
 */
export default function Loading() {
  return (
    <div className="animate-pulse pt-14 sm:pt-20" aria-hidden>
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-14 px-6 pb-20 lg:flex-row lg:items-center lg:gap-10 lg:px-8 lg:pb-28">
        <div className="flex flex-1 flex-col gap-6">
          <div className="h-7 w-56 rounded-full bg-surface-muted" />
          <div className="h-10 w-full max-w-md rounded-lg bg-surface-muted" />
          <div className="h-10 w-3/4 rounded-lg bg-surface-muted" />
          <div className="h-4 w-full max-w-lg rounded bg-surface-muted" />
          <div className="h-4 w-2/3 max-w-lg rounded bg-surface-muted" />
          <div className="flex gap-3">
            <div className="h-12 w-40 rounded-full bg-surface-muted" />
            <div className="h-12 w-40 rounded-full bg-surface-muted" />
          </div>
        </div>
        <div className="aspect-[4/5] w-full flex-1 rounded-2xl bg-surface-muted" />
      </div>

      <div className="border-y border-border bg-surface py-10">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-8 px-6 sm:grid-cols-4 lg:px-8">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="flex flex-col items-center gap-2">
              <div className="h-7 w-16 rounded bg-surface-muted" />
              <div className="h-3 w-20 rounded bg-surface-muted" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
