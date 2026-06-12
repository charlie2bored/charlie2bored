'use client';

import { useEffect, useRef, useState } from 'react';
import { IconCheck, IconMoodSmile, IconX } from '@tabler/icons-react';
import { useEggs, type Density } from '@/components/drive/eggs/EggsProvider';
import { detailsFile, feedbackMailto, helpArticles, shortcuts, stageReveal } from '@/lib/eggs';

function Dialog({
  title,
  side,
  dark,
  children,
}: {
  title: string;
  side?: boolean;
  dark?: boolean;
  children: React.ReactNode;
}) {
  const { closePanel } = useEggs();
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    boxRef.current?.focus();
  }, []);

  return (
    <div
      className={`fixed inset-0 z-50 flex ${side ? 'justify-end' : 'items-center justify-center px-4'}`}
      style={{ backgroundColor: 'rgba(0,0,0,0.35)' }}
      onClick={(e) => {
        if (e.target === e.currentTarget) closePanel();
      }}
    >
      <div
        ref={boxRef}
        role="dialog"
        aria-modal="true"
        aria-label={title}
        tabIndex={-1}
        className={
          side
            ? 'flex h-full w-full max-w-[360px] flex-col overflow-y-auto p-5 outline-none'
            : 'flex max-h-[85dvh] w-full max-w-[560px] flex-col overflow-y-auto rounded-2xl p-5 outline-none'
        }
        style={{
          backgroundColor: dark ? '#1f1f1f' : 'var(--gd-surface)',
          color: dark ? '#e3e3e3' : 'var(--gd-text)',
        }}
      >
        <div className="mb-4 flex items-center">
          <h2 className="text-[16px] font-medium">{title}</h2>
          <button
            type="button"
            onClick={closePanel}
            aria-label={`Close ${title}`}
            className="ml-auto flex h-9 w-9 items-center justify-center rounded-full hover:bg-[var(--gd-pill)]"
          >
            <IconX size={18} stroke={1.75} aria-hidden="true" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

const row = 'flex items-center justify-between gap-4 py-2.5 text-[14px]';
const label2 = 'text-[12px]';

function Toggle({ on, onChange, label }: { on: boolean; onChange: (v: boolean) => void; label: string }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={on}
      aria-label={label}
      onClick={() => onChange(!on)}
      className="flex shrink-0 items-center justify-center"
    >
      <span
        className="flex h-6 w-6 items-center justify-center rounded-full border transition-colors"
        style={{
          borderColor: on ? 'var(--gd-link)' : 'var(--gd-chip-border)',
          borderWidth: '1.5px',
          backgroundColor: on ? 'var(--gd-link)' : 'transparent',
        }}
      >
        {on && <IconCheck size={14} color="var(--gd-surface)" stroke={3} aria-hidden="true" />}
      </span>
    </button>
  );
}

function SettingsPanel() {
  const { settings, setSetting, openPanel } = useEggs();
  return (
    <Dialog title="Settings" side>
      <div className={row}>
        <span>Dark theme</span>
        <Toggle on={settings.theme === 'dark'} onChange={(v) => setSetting('theme', v ? 'dark' : 'light')} label="Dark theme" />
      </div>
      <div className="py-2.5 text-[14px]">
        <p className="mb-2">Density</p>
        <div className="flex gap-2" role="radiogroup" aria-label="Density">
          {(['comfortable', 'compact'] as Density[]).map((d) => (
            <button
              key={d}
              type="button"
              role="radio"
              aria-checked={settings.density === d}
              onClick={() => setSetting('density', d)}
              className="rounded-lg border px-3 py-1 text-[13px] capitalize"
              style={{
                borderColor: 'var(--gd-chip-border)',
                borderWidth: '0.5px',
                backgroundColor: settings.density === d ? 'var(--gd-selection)' : 'transparent',
                color: settings.density === d ? 'var(--gd-on-selection)' : 'var(--gd-text-2)',
              }}
            >
              {d}
            </button>
          ))}
        </div>
      </div>
      <div className={row}>
        <span>
          Recruiter mode
          <span className={`block ${label2}`} style={{ color: 'var(--gd-text-2)' }}>
            Off the clock changes the tone, never the facts
          </span>
        </span>
        <Toggle on={settings.recruiterMode} onChange={(v) => setSetting('recruiterMode', v)} label="Recruiter mode" />
      </div>
      <div className={row}>
        <span>Enable confetti</span>
        <Toggle on={settings.confetti} onChange={(v) => setSetting('confetti', v)} label="Enable confetti" />
      </div>
      <button
        type="button"
        onClick={() => openPanel('shortcuts')}
        className="mt-3 w-fit rounded-lg border px-3 py-1.5 text-[13px]"
        style={{ borderColor: 'var(--gd-chip-border)', borderWidth: '0.5px', color: 'var(--gd-link)' }}
      >
        Keyboard shortcuts
      </button>
    </Dialog>
  );
}

function ShortcutsPanel() {
  return (
    <Dialog title="Keyboard shortcuts">
      <table className="w-full text-[14px]">
        <tbody>
          {shortcuts.map((s) => (
            <tr key={s.keys}>
              <td className="py-2 pr-6">
                <kbd
                  className="rounded-md border px-2 py-0.5 text-[12px]"
                  style={{ borderColor: 'var(--gd-chip-border)', borderWidth: '0.5px' }}
                >
                  {s.keys}
                </kbd>
              </td>
              <td style={{ color: 'var(--gd-text-2)' }}>{s.does}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Dialog>
  );
}

function DetailsPanel() {
  return (
    <Dialog title="Details" side>
      <div className="mb-4 flex items-center gap-3">
        <span
          className="flex h-10 w-10 items-center justify-center rounded-full text-[13px] font-medium text-white"
          style={{ backgroundColor: '#0b57d0' }}
        >
          CV
        </span>
        <div>
          <p className="text-[14px] font-medium">Charlie Vargas</p>
          <p className={label2} style={{ color: 'var(--gd-text-2)' }}>
            Selected file
          </p>
        </div>
      </div>
      <dl className="text-[13px]">
        {detailsFile.fields.map((f) => (
          <div key={f.label} className="flex gap-3 py-1">
            <dt className="w-20 shrink-0" style={{ color: 'var(--gd-text-2)' }}>
              {f.label}
            </dt>
            <dd>{f.value}</dd>
          </div>
        ))}
      </dl>
      <h3 className="mb-2 mt-5 text-[13px] font-medium" style={{ color: 'var(--gd-text-2)' }}>
        Activity
      </h3>
      <ul className="space-y-2 text-[13px]">
        {detailsFile.activity.map((a) => (
          <li key={a.what} className="flex gap-3">
            <span className="w-20 shrink-0" style={{ color: 'var(--gd-text-2)' }}>
              {a.when}
            </span>
            <span>{a.what}</span>
          </li>
        ))}
      </ul>
    </Dialog>
  );
}

function HelpPanel() {
  return (
    <Dialog title="Help Center" side>
      <div className="space-y-4 text-[14px]">
        {helpArticles.map((article) => (
          <div key={article.q}>
            <p className="mb-1 font-medium">{article.q}</p>
            <p style={{ color: 'var(--gd-text-2)' }}>{article.a}</p>
          </div>
        ))}
        <a href={feedbackMailto} className="inline-block font-medium hover:underline" style={{ color: 'var(--gd-link)' }}>
          Send feedback →
        </a>
      </div>
    </Dialog>
  );
}

function AppsPanel() {
  return (
    <Dialog title="Charlie apps">
      <div className="grid grid-cols-3 gap-3" aria-hidden="true">
        {Array.from({ length: 6 }, (_, i) => (
          <div
            key={i}
            className="flex h-20 items-center justify-center rounded-xl border border-dashed"
            style={{ borderColor: 'var(--gd-chip-border)' }}
          />
        ))}
      </div>
      <p className="mt-4 text-[13px]" style={{ color: 'var(--gd-text-2)' }}>
        Coming soon. The grid is wired; the apps are not.
      </p>
    </Dialog>
  );
}

function StagePanel() {
  return (
    <Dialog title={stageReveal.fileName} dark>
      <div
        className="mb-4 flex aspect-video w-full items-center justify-center rounded-xl"
        style={{ backgroundColor: '#131314', color: '#9aa0a6' }}
      >
        {stageReveal.media ? (
          <span className="text-[13px]">Media loads here</span>
        ) : (
          <span className="px-6 text-center text-[13px]">
            Media pending — Charlie hasn&rsquo;t uploaded the clip yet. The story below is real.
          </span>
        )}
      </div>
      <p className="text-[14px] leading-relaxed" style={{ color: '#e3e3e3' }}>
        {stageReveal.caption}
      </p>
    </Dialog>
  );
}

function BoredPanel() {
  const ROWS = 7;
  const COLS = 10;
  const [popped, setPopped] = useState<Set<number>>(new Set());
  const total = ROWS * COLS;
  const done = popped.size === total;

  return (
    <Dialog title="Boredom cure (beta)">
      <p className="mb-3 text-[13px]" style={{ color: 'var(--gd-text-2)' }}>
        Bubble wrap. {done ? 'All popped. We both knew you had it in you.' : `Popped ${popped.size} of ${total}.`}
      </p>
      <div className="grid grid-cols-10 gap-1.5">
        {Array.from({ length: total }, (_, i) => {
          const isPopped = popped.has(i);
          return (
            <button
              key={i}
              type="button"
              aria-pressed={isPopped}
              aria-label={`Bubble ${i + 1}`}
              onClick={() => setPopped((prev) => new Set(prev).add(i))}
              className="aspect-square min-h-0 min-w-0 rounded-full border"
              style={{
                borderColor: 'var(--gd-chip-border)',
                borderWidth: '0.5px',
                backgroundColor: isPopped ? 'transparent' : 'var(--gd-selection)',
                opacity: isPopped ? 0.35 : 1,
              }}
            />
          );
        })}
      </div>
      {done && (
        <button
          type="button"
          onClick={() => setPopped(new Set())}
          className="mt-4 flex w-fit items-center gap-2 rounded-lg border px-3 py-1.5 text-[13px]"
          style={{ borderColor: 'var(--gd-chip-border)', borderWidth: '0.5px', color: 'var(--gd-link)' }}
        >
          <IconMoodSmile size={15} aria-hidden="true" /> Re-wrap
        </button>
      )}
    </Dialog>
  );
}

export default function EggPanels() {
  const { panel } = useEggs();
  if (panel === 'settings') return <SettingsPanel />;
  if (panel === 'shortcuts') return <ShortcutsPanel />;
  if (panel === 'details') return <DetailsPanel />;
  if (panel === 'help') return <HelpPanel />;
  if (panel === 'apps') return <AppsPanel />;
  if (panel === 'stage') return <StagePanel />;
  if (panel === 'bored') return <BoredPanel />;
  return null;
}
