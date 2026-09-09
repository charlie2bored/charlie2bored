/**
 * Small mono uppercase label with a corner crop mark, used to tag sections.
 * `boxed` draws the full four-corner frame instead of a single tick.
 */
export default function CropLabel({
  children,
  color = 'var(--paper-faint)',
  boxed = false,
  className = '',
}: {
  children: React.ReactNode;
  color?: string;
  boxed?: boolean;
  className?: string;
}) {
  if (boxed) {
    return (
      <span
        className={`font-mono-label relative inline-block px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] ${className}`}
        style={{ color }}
      >
        <Corner className="left-0 top-0 border-l border-t" color={color} />
        <Corner className="right-0 top-0 border-r border-t" color={color} />
        <Corner className="bottom-0 left-0 border-b border-l" color={color} />
        <Corner className="bottom-0 right-0 border-b border-r" color={color} />
        {children}
      </span>
    );
  }

  return (
    <span
      className={`font-mono-label inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] ${className}`}
      style={{ color }}
    >
      <span
        aria-hidden="true"
        className="inline-block h-[7px] w-[7px] border-l border-t"
        style={{ borderColor: color }}
      />
      {children}
    </span>
  );
}

function Corner({ className, color }: { className: string; color: string }) {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute h-[6px] w-[6px] ${className}`}
      style={{ borderColor: color }}
    />
  );
}
